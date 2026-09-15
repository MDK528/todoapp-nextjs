"use client";

import { useTransition } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { XIcon } from "lucide-react";
import { toggleTodo, deleteTodo } from "@/features/todos/actions";
import { cn } from "@/lib/utils";

type Todo = {
  id: string;
  content: string;
  done: boolean;
};

export function TodoItem({ todo }: { todo: Todo }) {
  const [toggling, startToggle] = useTransition();
  const [deleting, startDelete] = useTransition();

  return (
    <li className="group flex items-center gap-3 px-4 py-3 border-b border-border last:border-0">
      <button
        onClick={() => startToggle(() => toggleTodo(todo.id))}
        disabled={toggling || deleting}
        className="shrink-0 flex items-center justify-center"
        aria-label={todo.done ? "Mark incomplete" : "Mark complete"}
      >
        {toggling ? (
          <Spinner className="size-4 text-muted-foreground" />
        ) : (
          <Checkbox
            checked={todo.done}
            className="pointer-events-none"
            tabIndex={-1}
          />
        )}
      </button>

      <span
        className={cn(
          "flex-1 font-mono text-sm transition-colors",
          todo.done
            ? "text-muted-foreground line-through"
            : "text-foreground"
        )}
      >
        {todo.content}
      </span>

      <Button
        variant="ghost"
        size="icon-xs"
        onClick={() => startDelete(() => deleteTodo(todo.id))}
        disabled={deleting || toggling}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
        aria-label="Delete task"
      >
        {deleting ? (
          <Spinner className="size-3" />
        ) : (
          <XIcon className="size-3" />
        )}
      </Button>
    </li>
  );
}