import { motion } from 'framer-motion'
import { Bus } from 'lucide-react'
import { PropTypes } from "prop-types"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const VerifyLayout = ({ children }) => {
    const { loading, user, isAuthenticated } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        console.log(user);
        
        if(!loading && user && user.isVerified == true){
            const back = '/dashboard'
            navigate(back, {replace:true})
        }
        if(!loading && !isAuthenticated){
            navigate('/login', {replace:true})
        }
    },[user, loading, navigate, location, isAuthenticated])
    return (
        <div className="">
            <div className="grid min-h-screen place-items-center bg-green-200">
                <div className="bg-white my-10 p-5 rounded-md shadow-sm mx-5">
                    <Link to={'/'} className="text-2xl bg-green-600 border-2 border-white rounded-t-lg flex gap-x-1 text-white items-center justify-center mb-4 py-3 font-semibold">
                        <span className=" bg-green-500 p-1 rounded-full shadow-md">
                            <Bus className="text-white size-8 " />
                        </span>
                        <span>BusNaija</span>
                    </Link>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0 }}

                        className="w-[95%] mx-auto md:w-[400px]">
                        {children}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
VerifyLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default VerifyLayout