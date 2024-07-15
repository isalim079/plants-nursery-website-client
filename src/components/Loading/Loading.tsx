const Loading = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mb-24">
            <div className="flex justify-center flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    );
};

export default Loading;
