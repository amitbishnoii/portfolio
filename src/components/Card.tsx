import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Card = ({ url, title, description, icon, gitRepo }) => {
    return (
        <div className="project-card group relative max-w-lg p-7 border border-[#D8D6CE] dark:border-[#2A2C30] bg-[#F2F1EC] dark:bg-[#14161A] transition-colors duration-150 hover:border-[#D98F2B]">
            <img src={icon} className="w-9 h-9 object-contain" />

            <h5 className="pf-mono mt-5 text-lg font-bold text-[#1B1D1F] dark:text-[#ECEAE2]">
                {title}
            </h5>

            <p className="pf-sans mt-2 text-sm text-[#4A4D52] dark:text-[#B7B8B6] leading-relaxed">
                {description}
            </p>

            <div className="flex items-center gap-6 mt-6">
                <a
                    href={url}
                    className="group/link pf-sans inline-flex items-center gap-1.5 text-sm font-medium text-[#1B1D1F] dark:text-[#ECEAE2]"
                >
                    <span className="border-b border-[#1B1D1F] dark:border-[#ECEAE2] group-hover/link:border-[#D98F2B] group-hover/link:text-[#D98F2B] transition-colors duration-150">
                        Live demo
                    </span>
                    <BsArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="group-hover/link:text-[#D98F2B] transition-colors duration-150"
                    />
                </a>

                <a
                    href={gitRepo}
                    className="pf-sans inline-flex items-center gap-1.5 text-sm font-medium text-[#6B6F76] hover:text-[#1B1D1F] dark:hover:text-[#ECEAE2] transition-colors duration-150"
                >
                    <FaGithub size={16} strokeWidth={2} />
                    Repo
                </a>
            </div>
        </div>
    );
};

export default Card;
