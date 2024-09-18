import PropTypes from "prop-types"
import { Bus } from "lucide-react"
import GuestRoute from "../components/GuestRoute"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"


const AuthLayout = ({ children }) => {
    return (
        <GuestRoute>
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
        </GuestRoute>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthLayout