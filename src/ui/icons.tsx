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
        d="M13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12z"
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
