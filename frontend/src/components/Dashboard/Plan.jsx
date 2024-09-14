import { useSelector } from "react-redux"

const Plan = () => {
    const {sideMenu} = useSelector(state=>state.dashboard)
  return (
    <div className={`flex bg-green-500 border-t border-gray-800
    flex-col px-2 text-xs justify-end top-[calc(100-18px-48px)] transition-all h-12 ${sideMenu ? "sticky left-0 right-0" : "absolute left-[-100%]"}`}>
        <div className="flex items-center justify-between">
            <div>
                <p className="font-bold">Basic</p>
                <p className="text-white">Change Plan</p>
            </div>
        <button className="px-2 bg-green-300 py-1.5 justify-between rounded hover:shadow-md hover:bg-white hover:text-green-600 transition-all">
            Support
        </button>
        </div>
    </div>
  )
}

export default Plan