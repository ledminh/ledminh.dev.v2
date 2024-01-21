import { contactInfo } from "@/core/data/contact";
import Link from "next/link";

const ContactSection = () => {
  return (
    <ul className="flex gap-2">
      {contactInfo.map((contact) => (
        <li key={contact.id}>
          <Link
            href={contact.link}
            className="hover:shadow-sm hover:shadow-yellow-300 block rounded-full p-2 border-2 border-yellow-700 hover:bg-yellow-950 active:scale-95 transition-transform"
          >
            <contact.icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactSection;
