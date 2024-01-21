"use server";

export default async function getLearningJournals() {
  const learningJournals = [
    {
      id: "j-1",
      title: "Learning Journal 1",
      date: "2020-01-01",
      link: "https://www.google.com",
      description: "This is a description of the learning journal.",
    },
    {
      id: "j-2",
      title: "Learning Journal 2",
      date: "2020-01-02",
      link: "https://www.google.com",
      description:
        "This is a very long description of the learning journal. Perhaps it will span multiple lines. Thus, we need to make sure to shorten it.",
    },
    {
      id: "j-3",
      title: "Learning Journal 3",
      date: "2020-01-03",
      link: "https://www.google.com",
      description: "This is a description of the learning journal.",
    },
  ];

  return learningJournals;
}
