import CardSkeleton from "./Card"
function CardArraySkeleton() {
    return (
        <>
            <div className="hidden lg:block my-4">
                <div className="flex flex-row gap-4 mx-8  justify-center">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            </div>
            <div className="lg:hidden mx-auto">
                <div className="flex flex-row gap-2 mx-8">
                    <CardSkeleton />
                </div>
            </div>
        </>
    )
}

export default CardArraySkeleton