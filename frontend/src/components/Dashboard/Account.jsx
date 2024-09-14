useAuth
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import useAuth from './../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideMenu } from '../../features/dashboard/dashboardSlice';
import { ChevronLeft } from 'lucide-react';

const Account = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const {sideMenu} = useSelector(state=>state.dashboard)
    return (
        <div className=''>
            <div className="border-b mb-4 mt-2 border-blue-gray-300 pb-4 flex justify-between items-center">
                <button className=" p-0.5 flex rounded
            transition-colors relative gap-2 w-full items-center">
                    <img className="size-7 rounded shrink-0 bg-green-500 shadow" src="https://api.dicebear.com/9.x/fun-emoji/svg" alt="avatar" />
                    <div className="text-start">
                        <span className="text-xs font-medium block">{user.firstname} {user.lastname}</span>
                        <span className="text-xs font-normal block">{user.email}</span>
                    </div>
                    <ChevronUpDownIcon className="w-4 h-4 text-gray-900" />
                </button>

                <button onClick={()=>dispatch(toggleSideMenu())}className='md:hidden text-white rounded size-8 flex items-center justify-center bg-red-500 hover:bg-red-600 transition-colors'>

                    {sideMenu == true ? <ChevronLeft/>: ""}
                </button>
            </div>
        </div>
    )
}

export default Account