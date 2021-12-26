import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="flex items-center justify-center">
                <div>
                    <span className="animate-ping absolute inline-flex items-center justify-center h-3 w-3 rounded-full bg-purple-900 -ml-5"></span>
                    <span className="animate-ping absolute inline-flex items-center justify-center h-3 w-3 rounded-full bg-purple-900 -ml-10"></span>
                    <span className="animate-ping absolute inline-flex items-center justify-center h-3 w-3 rounded-full bg-purple-900 -ml-15"></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
