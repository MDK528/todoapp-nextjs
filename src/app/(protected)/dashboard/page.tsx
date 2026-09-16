import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getTodos } from "@/features/todos/actions";
import { TodoItem } from "@/features/todos/components/todo-item";
import { AddTodoForm } from "@/features/todos/components/add-todo-item";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty";
import { CheckSquareIcon } from "lucide-react";

export default async function DashboardPage() {
  const todos = await getTodos();

  const done = todos.filter((t) => t.done).length;
  const total = todos.length;


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 z-10">
          <SidebarTrigger className="-ml-1 text-primary" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto bg-primary"
          />
          <div className="flex items-center justify-between w-full">
            <h1 className="font-mono text-md font-medium text-foreground">
              Today
            </h1>
            {total > 0 && (
              <span className="font-mono text-xs text-muted-foreground">
                {done} / {total}
              </span>
            )}
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center px-4 py-10">
          <div className="w-full max-w-xl">
            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              {todos.length > 0 ? (
                <ul>
                  {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-10">
                  <Empty className="border-none">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <CheckSquareIcon className="size-4 text-muted-foreground" />
                      </EmptyMedia>
                      <EmptyTitle>Nothing here yet</EmptyTitle>
                      <EmptyDescription>
                        Add your first task below and get started.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </div>
              )}

              <AddTodoForm />
            </div>
            
            {total > 0 && done === total && (
              <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
                All done. Loop resets at midnight.
              </p>
            )}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}