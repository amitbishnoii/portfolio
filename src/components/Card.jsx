import { FaGithub } from "react-icons/fa6";

const Card = ({ url, title, description, icon, gitRepo }) => {
    return (
        <div className="relative max-w-lg p-8 border border-gray-100 bg-black shadow-xl rounded-xl">
            <div className="absolute right-4 top-4 flex gap-1.5 items-center justify-center">
                <a href={url}>
                    <button className="rounded-full px-3 py-2 bg-green-100 text-green-600 font-medium text-xs cursor-pointer">
                        Live Demo
                    </button>
                </a>
                <a href={gitRepo}>
                    <button className="rounded-full px-3 py-2 bg-gray-900 text-white font-medium text-xs cursor-pointer hover:bg-gray-800 transition-colors gap-1.5 flex items-center">
                        <FaGithub size={20} /> Github
                    </button>
                </a>
            </div>

            <div className="mt-4 text-gray-200 sm:pr-8">
                <img src={icon} />

                <h5 className="mt-4 text-xl font-bold text-gray-300">
                    {title}
                </h5>

                <p className="mt-2 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Card;
