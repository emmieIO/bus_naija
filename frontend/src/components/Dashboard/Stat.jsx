

const Stat = () => {
  return (
    <div className='grid md:grid-cols-4 gap-3 px-4'>
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  )
}

const StatCard = ()=>{
    return(
        <>
        <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-lg font-semibold">345</p>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
          </div>
        </>
    )
}

export default Stat