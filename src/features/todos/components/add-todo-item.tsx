"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { createTodo } from "@/features/todos/actions";
import { Spinner } from "@/components/ui/spinner";

function AddTodoInput() {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-t border-border">
      {pending ? (
        <Spinner className="size-4 shrink-0 text-muted-foreground" />
      ) : (
        <span className="size-4 shrink-0 rounded-[4px] border border-dashed border-muted-foreground/40" />
      )}
      <input
        name="content"
        placeholder="Add a task…"
        disabled={pending}
        autoComplete="off"
        className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none disabled:opacity-50"
      />
    </div>
  );
}

export function AddTodoForm() {
  const ref = useRef<HTMLFormElement>(null);

  async function action(formData: FormData) {
    await createTodo(formData);
    ref.current?.reset();
  }

  return (
    <form ref={ref} action={action}>
      <AddTodoInput />
    </form>
  );
}