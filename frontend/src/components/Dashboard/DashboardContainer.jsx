
import { PropTypes } from 'prop-types';
import Topbar from './Topbar';
const DashboardContainer = ({children}) => {
  return (
    <div className="bg-white md:rounded-lg shadow-md pb-4 absolute z-0 md:static w-full">
    <Topbar />

    <div className="grid px-4 :gap-3 grid-cols-12">
        <div className="col-span-12">
          {children}
        </div>
    </div>
    </div>
  )
}

DashboardContainer.propTypes ={
    children : PropTypes.node
}
export default DashboardContainer