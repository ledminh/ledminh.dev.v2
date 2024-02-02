"use server";

import { Message as MessageType } from "@/core/types";

export default async function sendMessageAction(data: MessageType) {
  console.log("sendMessageAction", data);

  return Promise.resolve();
}
