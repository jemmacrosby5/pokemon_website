function CardPageSkeleton() {
    return (
        <>
            <div className="hidden lg:block my-4">
                <div className="flex flex-row gap-4 mx-8  justify-center">
                    <div className="bg-gray-300 animate-pulse h-80 w-56 rounded">
                    </div>
                    <div className="bg-gray-300 animate-pulse h-80 w-56 rounded">
                    </div>
                    <div className="bg-gray-300 animate-pulse h-80 w-56 rounded">
                    </div>
                    <div className="bg-gray-300 animate-pulse h-80 w-56 rounded">
                    </div>
                    <div className="bg-gray-300 animate-pulse h-80 w-56 rounded">
                    </div>
                </div>
            </div>
            <div className="lg:hidden mx-auto">
                <div className="flex flex-row gap-2 mx-8">
                    <div className="bg-gray-300 animate-pulse h-80 w-72 rounded">
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPageSkeleton