"use server";

export default async function sendMessageAction(message: string) {
  console.log("sendMessageAction", message);

  return Promise.resolve();
}
