import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  MessageIcon,
} from "@/core/assets/icons";

type ContactInfoItem = {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  link: string;
};

export type ContactInfo = Array<ContactInfoItem>;

export const contactInfo: ContactInfo = [
  {
    id: "github",
    name: "Github",
    icon: GithubIcon,
    link: "https://github.com/ledminh",
  },
  {
    id: "linkedin",
    name: "Linkedin",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/ledminh/",
  },
  {
    id: "email",
    name: "Email",
    icon: EmailIcon,
    link: "mailto:minh.le@ledminh.dev",
  },
  {
    id: "message",
    name: "Message",
    icon: MessageIcon,
    link: "/message",
  },
];
