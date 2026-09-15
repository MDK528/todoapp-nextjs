"use server";

import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/features/auth/actions";
import { revalidatePath } from "next/cache";

export async function getTodos() {
  const session = await requireAuth();

  return prisma.todo.findMany({
    where: { userId: session.user.id },
    orderBy: [{ done: "asc" }, { createdAt: "asc" }],
  });
}

export async function createTodo(formData: FormData) {
  const session = await requireAuth();
  const content = formData.get("content");

  if (typeof content !== "string" || !content.trim()) return;

  await prisma.todo.create({
    data: {
      content: content.trim(),
      userId: session.user.id,
    },
  });

  revalidatePath("/dashboard");
}

export async function toggleTodo(id: string) {
  const session = await requireAuth();

  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo || todo.userId !== session.user.id) return;

  await prisma.todo.update({
    where: { id },
    data: { done: !todo.done },
  });

  revalidatePath("/dashboard");
}

export async function deleteTodo(id: string) {
  const session = await requireAuth();

  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo || todo.userId !== session.user.id) return;

  await prisma.todo.delete({ where: { id } });

  revalidatePath("/dashboard");
}