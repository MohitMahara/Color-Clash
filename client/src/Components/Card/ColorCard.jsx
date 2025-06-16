export const ColorCard = ({ color}) => {
  return(
    <>
    <div className={`flex justify-center items-center bg-${color.toLowerCase()}-500 h-full w-[30%] rounded-lg text-gray-100 hover:border-3 hover:border-gray-100 cursor-pointer transition duration-300`}>
       <h1 className="text-lg font-semibold">{color}</h1>
    </div>
    </>
  )
}