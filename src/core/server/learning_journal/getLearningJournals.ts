import type { LearningJournal } from "@/core/types";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getLearningJournals(): Promise<
  LearningJournal[]
> {
  const journalEntries = await prisma.journalEntry.findMany({
    take: 6,

    orderBy: { createdAt: "desc" },
  });

  return journalEntries.map((journalEntry) => {
    return {
      id: journalEntry.id,
      title: journalEntry.title,
      date: journalEntry.createdAt.toLocaleDateString(),
      link: `https://learning-journal.ledminh.dev/entry/${journalEntry.slug}`,
      description: journalEntry.description,
    };
  });
}
