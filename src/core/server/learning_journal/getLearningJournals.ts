import type { LearningJournal } from "@/core/types";

import { PrismaClient as LearningJournalClient } from "@/core/data/prisma/learning-journal-client";

const learningJournalPrisma = new LearningJournalClient({
  datasourceUrl: process.env.LEARNING_JOURNAL_DATABASE_URL,
});

export default async function getLearningJournals(): Promise<
  LearningJournal[]
> {
  const journalEntries = await learningJournalPrisma.journalEntry.findMany({
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
