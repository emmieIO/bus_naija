import SideBar from './../components/SideBar';
import PropTypes from 'prop-types';
import DashboardContainer from './../components/Dashboard/DashboardContainer';
import { useSelector } from 'react-redux';

const DashboardLayout = ({ children }) => {
    const {sideMenu} = useSelector((state)=>state.dashboard);
    return (
        <div className='bg-green-300 min-h-screen relative'>
            <div className={`grid md:gap-4 p-4 transition-all duration-300 relative ${sideMenu? "grid-cols-[240px,_1fr]": "grid-cols-[0px,_1fr]"}`}>
                <SideBar />
                <DashboardContainer>
                    {children}
                </DashboardContainer>
            </div>
        </div>
    )
}

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DashboardLayout