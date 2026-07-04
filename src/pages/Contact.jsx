const Contact = () => {
    return (
        <>
            <div
                id="contact"
                className="min-h-screen bg-white dark:bg-black py-24 px-6 flex flex-col items-center"
            >
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Me
                    </h2>

                    <p className="max-w-xl text-gray-600 dark:text-gray-400">
                        Have an internship opportunity, project idea, or just
                        want to connect? Feel free to send me a message.
                    </p>
                </div>

                <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-xl p-8 md:p-10">
                    <form className="flex flex-col gap-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="w-full rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 transition-colors duration-200"
                        >
                            Send Message →
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
