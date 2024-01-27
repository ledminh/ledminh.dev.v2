import { RiGithubFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";

/*****************
 * Contact Icons *
 */

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => {
  return <RiGithubFill className={className} size="2rem" color="#fff" />;
};

export const LinkedInIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return <FaLinkedinIn className={className} size="2rem" color="#fff" />;
};

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => {
  return <IoIosMail className={className} size="2rem" color="#fff" />;
};

export const MessageIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return <MdOutlineMessage className={className} size="2rem" color="#fff" />;
};

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M14.59 12l4.7-4.7a1 1 0 10-1.42-1.42L13.17 11l-4.7-4.7a1 1 0 10-1.42 1.42L11.36 12l-4.7 4.7a1 1 0 101.42 1.42L13.17 13l4.7 4.7a1 1 0 001.42-1.42z"
      />
    </svg>
  );
};

export const HomeIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-8 h-8 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};
