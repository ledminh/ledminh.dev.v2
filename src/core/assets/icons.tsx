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
