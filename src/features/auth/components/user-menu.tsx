"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";


export type UserMenuUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};


export type UserMenuTriggerVariant = "compact" | "profile"

type UserMenuProps = {
  user: UserMenuUser;
  variant?: UserMenuTriggerVariant;
  className?: string;
};

export function getDisplayName(user: UserMenuUser) {
  return user.name?.trim() || user.email?.split("@")[0] || "User";
}

export function getInitials(user: UserMenuUser) {
  const source = user.name?.trim() || user.email || "U";
  const parts = source.split(/\s+/).filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }

  return source.slice(0, 2).toUpperCase();
}

function UserAvatar({
  user,
  size = "default",
}: {
  user: UserMenuUser;
  size?: "default" | "sm" | "lg";
}) {
  return (
    <Avatar size={size}>
      {user.image ? (
        <AvatarImage src={user.image} alt={getDisplayName(user)} />
      ) : null}
      <AvatarFallback>{getInitials(user)}</AvatarFallback>
    </Avatar>
  );
}


export function UserMenu({
  user,
  variant = "profile",
  className,
}: UserMenuProps) {
  const router = useRouter();
  const displayName = getDisplayName(user);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn(className)}>
        {variant === "compact" ? (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Open account menu"
          >
            <UserAvatar user={user} size="default" />
          </Button>
        ) : (
          <Button
            variant="outline"
            className="h-14 gap-2 px-2 py-2  hover:bg-primary flex justify-baseline"
            aria-label="Open account menu"
          >
            <UserAvatar user={user} size="lg" />
            <div className="flex flex-col">
              <span className="max-w-32 truncate text-left text-md font-medium">
                {displayName}
              </span>
              <span className="max-w-32 truncate text-left text-[10px] font-medium">
                {user?.email}
              </span>
            </div>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-start gap-2 px-2 py-2">
              <UserAvatar user={user} />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="truncate text-xs font-medium">{displayName}</p>
                {user.email ? (
                  <p className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </p>
                ) : null}
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
            <LogOut  />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type UserMenuWithSessionProps = Omit<UserMenuProps, "user">;


export function UserMenuWithSession(props: UserMenuWithSessionProps) {
  const { data: session, isPending } = authClient.useSession();

  if (isPending || !session?.user) {
    return null;
  }

  return <UserMenu user={session.user} {...props} />;
}