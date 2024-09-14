import PropTypes from "prop-types"
import authImg from '../assets/auth-images/auth-hero.jpg'
import { BusFront } from "lucide-react"
import GuestRoute from "../components/GuestRoute"



const AuthLayout = ({ children }) => {
    return (
        <GuestRoute>
        <div className="">
            <div className="flex items-center md:h-screen h-full md:gap-8">
                <div className="bg-black hidden lg:block relative self-start my-4 mx-4 rounded-xl w-[500px] h-[600px]">
                    <img src={authImg} className="object-cover h-full w-full rounded-[inherit]" alt={"auth-hero"} />
                    <div className="absolute bg-black inset-0 rounded-[inherit] bg-opacity-90 ">
                        <nav className="p-8">
                            <h2 className="text-2xl flex items-center gap-1 text-white font-medium">
                                <BusFront className="text-orange-900" />
                                BusNaija
                            </h2>
                            <div className="mt-[5rem]">
                                <p className="text-white text-3xl  font-medium">Seamless Online Bus Ticketing at Your Fingertips.</p>
                                <p className="text-gray-100 text-xs mt-10">At BusNaija, we&apos;ve served millions with seamless bus ticketing. Our customers keep coming back, trusting us to make their journeys smooth and hassle-free</p>
                            </div>
                        </nav>
                    </div>
                </div>


                <div className="w-[95%] h-screen place-items-center mx-auto lg:mx-0 lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl md:hidden flex items-center gap-1 text-gray-900 my-5 font-semibold">
                                <BusFront className="text-orange-900" />
                                BusNaija
                </h2>
                    {children}
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