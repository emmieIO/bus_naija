
import Account from './Dashboard/Account';
// import Search from './Dashboard/Search';
import RouteSelect from './Dashboard/RouteSelect';

import {  useSelector } from 'react-redux';



export default function SideBar() {
    const {sideMenu} = useSelector(state=>state.dashboard)

    return (
     <div className={`overflow-y-scroll no-scrollbar md:sticky fixed z-[9999]
        md:top-4 top-0 h-[100vh] px-2 md:px-0 w-full transition-all bg-green-500 flex flex-col justify-between 
        ${sideMenu ? 'left-[0]':"left-[-100%]"}
        `}>
        <div className="">
          <Account />
          {/* <Search /> */}
          <RouteSelect />
        </div>
        {/* TODO: plan Toggle */}
     </div>
    );
}