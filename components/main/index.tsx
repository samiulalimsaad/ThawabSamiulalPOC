const Main = () => {
    return (
        <div className="h-[50vh] bg-pink-500 grid place-items-center">
            <div className="space-y-7 text-center">
                <h1 className="text-5xl text-white">Lorem ipsum dolor sit</h1>
                <h3 className="text-xl text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h3>
                <div>
                    <form className="space-x-4 flex">
                        <input
                            type="text"
                            placeholder="search for articles"
                            className="appearance-none rounded-md relative block w-full p-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                        <button className="bg-pink-900 text-white px-4 rounded-md hover:text-pink-900 hover:bg-white">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;
