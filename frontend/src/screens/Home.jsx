import AppLayout from '../shared/AppLayout';
import heroImg from "/assets/home-images/hero.png";
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion'
import { BusFront, MapPin, MapPinCheck, User } from 'lucide-react';
import { useEffect, useRef } from 'react';


const Home = () => {
  const howToUseContainer = useRef(null)
  const inView = useInView(howToUseContainer, {
    margin: "0px 100px -50px 0px",
    triggerOnce: true,
    threshold: 0.5
  })
  useEffect(() => {
    if (inView) {
      console.log("in view");
    }
  }, [inView])
  return (
    <AppLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="min-h-[50vh]  bg-hero-pattern md:grid grid-cols-2 items-center  px-5 py-2 lg:px-8 lg:py-4">
        <div className="x-auto h-full py-10 flex flex-col justify-center gap-3">
          <p className="text-xs text-green-500">Book with us today</p>
          <h1 className="text-3xl font-medium">Book Your Next Bus Ride with Ease – Fast, Safe, Reliable!</h1>
          <p className="text-sm">
            We offer the best bus booking services in the country. Our buses are
            comfortable, reliable, and safe. We have a wide range of buses to
            choose from. Book your bus ticket today and enjoy a hassle-free
            journey.
          </p>
          <Link className="bg-green-600 self-start py-2 text-white px-4 rounded" to={""}>Book Now</Link>
        </div>
        <div>
          <motion.img
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full hidden md:block" src={heroImg} alt="menu-hero" />
        </div>
      </motion.div>

      <motion.section className="lg:px-8 px-5 mt-[6rem]">
        <h1 className="text-3xl font-medium text-center my-8">How Bus Naija Works</h1>
        <motion.div ref={howToUseContainer} className="grid md:grid-cols-4 gap-5">
          <div className="flex flex-col items-start gap-3 border-2 p-3">
            <User size={50} />
            <h2 className="text-lg font-medium">Create an Account/Sign In</h2>
            <p className="text-sm text-left">
              Register a new account or sign in with your existing credentials to access your dashboard, manage bookings, and update your profile with ease.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 border-2 p-3">
            <BusFront size={50} />
            <h2 className="text-lg font-medium">Book a Ticket</h2>
            <p className="text-sm text-left">
              Browse through our selection of available buses, choose your preferred destination, seat selection and book a ticket based on your travel schedule.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 border-2 p-3">
            <MapPin size={50} />
            <h2 className="text-lg font-medium">Boarding & Ticket Verification</h2>
            <p className="text-sm text-left">
              Present your ticket at the designated boarding point for verification. Once validated, you are ready to board and begin your journey.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 border-2 p-3">
            <MapPinCheck size={50} />
            <h2 className="text-lg font-medium">Enjoy Your Trip</h2>
            <p className="text-sm text-left">
              Upon arrival, our courteous team will assist you. We hope you had a pleasant journey, and we encourage you to share feedback about your experience.
            </p>
          </div>
        </motion.div>
      </motion.section>



    </AppLayout>
  )
}

export default Home