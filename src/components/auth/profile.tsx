"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Check } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function getInitials(name?: string | null, email?: string | null): string {
  if (name) {
    const parts = name.trim().split(" ");
    return parts.length >= 2
      ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();
  }
  if (email) return email.slice(0, 2).toUpperCase();
  return "U";
}

export default function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <p className="text-xs text-muted-foreground">Loading...</p>;
  }
  if (!user) return null;

  return (
    <>
      <Badge variant="secondary" className="gap-1.5 text-[13px] font-medium">
        <Check className="h-3 w-3" strokeWidth={2.5} />
        Successfully authenticated
      </Badge>

      <div className="flex max-w-full items-center gap-2 rounded-full border border-border bg-muted py-1.5 pl-1.5 pr-4 text-[12px] text-muted-foreground">
        <Avatar className="h-7 w-7 shrink-0">
          <AvatarFallback className="bg-primary text-[10px] font-semibold text-primary-foreground">
            {getInitials(user.name, user.email)}
          </AvatarFallback>
        </Avatar>
        <span className="truncate">{user.email}</span>
      </div>
    </>
  );
}