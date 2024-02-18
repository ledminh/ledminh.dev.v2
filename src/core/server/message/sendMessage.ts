import { Message as MessageType } from "@/core/types";

import { PrismaClient as LedminhDevClient } from "@/core/data/prisma/ledminh-dev-client";

const ledminhDevPrisma = new LedminhDevClient({
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
