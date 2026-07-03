const Card = ({ url, title, description, icon }) => {
    return (
        <div className="relative max-w-lg p-8 border border-gray-100 bg-black shadow-xl rounded-xl">
            <div className="absolute right-4 top-4 ">
                <span className="text-sm font-medium text-gray-300 mr-2">
                    Visit Here:
                </span>
                <button className="rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs cursor-pointer">
                    {url}
                </button>
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
