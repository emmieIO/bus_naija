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
                        <Link to={'/'} className="text-2xl flex gap-x-2 items-center justify-center py-5 font-semibold">
                            <span className=" bg-green-500 p-1 rounded-full">
                            <Bus className="text-white size-8 " />
                            </span>
                            <span>BusNaija</span>
                        </Link>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-[95%] mx-auto md:min-w-[400px]">
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