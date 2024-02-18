"use server";

import { Message as MessageType } from "@/core/types";
import sendMessage from "./sendMessage";

export default async function sendMessageAction(message: MessageType) {
  return await sendMessage(message);
}
