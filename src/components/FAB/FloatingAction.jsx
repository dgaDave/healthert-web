const FloatingAction = ({svg}) => {
    return (
        <>

            <div className="bg-verde text-white rounded-full p-4 cursor-pointer items-center justify-center flex hover:bg-green-700 hover:transition-all duration-300 hover:drop-shadow-xl hover:scale-105">
                {svg}
            </div>
        </>
    )
}

export default FloatingAction
