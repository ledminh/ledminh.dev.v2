import { Message as MessageType } from "@/core/types";

import { PrismaClientLedminhDev } from "@prismany/client";

const ledminhDevPrisma = new PrismaClientLedminhDev({
  datasourceUrl: process.env.LEDMINH_DEV_DATABASE_URL,
});

export default function sendMessage(message: MessageType) {
  return ledminhDevPrisma.message.create({
    data: {
      name: message.name,
      email: message.email,
      message: message.message,
    },
  });
}
