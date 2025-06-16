export const AmountCard = ({ amount}) => {
    return(
        <>
            <div className="flex bg-gray-50 my-2 text-gray-900 p-2 justify-center items-center rounded-lg shadow-md cursor-pointer w-[40px] h-[40px] hover:border-3 hover:border-green-600 transition duration-200">
                <h2 className="text-lg font-bold">{amount}</h2>
            </div>
        </>
    )
}