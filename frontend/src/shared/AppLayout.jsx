import PropTypes  from 'prop-types';
import {motion} from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const AppLayout = ({children}) => {
  return (
    <motion.div
    
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
    >
    <Navigation/>
        <div className="min-h-[70vh] flex justify-center items-center">
        {children}
      </div>
      <Footer/>
    </motion.div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout