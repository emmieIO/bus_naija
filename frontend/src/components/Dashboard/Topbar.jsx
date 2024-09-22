import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { toggleSideMenu } from "../../features/dashboard/dashboardSlice";
import { ChevronLeft, ChevronRight, Power } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Topbar = () => {
    const dispatch = useDispatch();
    const {sideMenu} = useSelector(state=>state.dashboard)
    const { user} = useAuth();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/login')


    }

    return (
        <div>
            <div className="border-b mb-4 mt-2 border-blue-gray-300 px-4 pb-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                        <button className={`transition-colors text-white rounded size-8 flex items-center justify-center ${sideMenu ? "bg-red-500":'bg-green-500'}`} onClick={()=>dispatch(toggleSideMenu())}>
                            { sideMenu ? <ChevronLeft/> : <ChevronRight/> }
                        </button>
                        <div className="">
                        <span className="text-sm block font-bold">Welcome🖐🏾!, {user.firstname}</span>

                        <span className="text-xs block  text-green-500 font-medium">{new Date().toDateString()}</span>
                        </div>
                    </div>
                        <button onClick={handleLogout} className="bg-red-500 inline-block p-1 rounded-md text-white">
                        <Power />
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Topbar