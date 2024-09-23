import React from "react";
import { Home, Info, Contact, Bus, Menu as MenuIcon, CircleX, Ticket, PackageCheck, CircleUser, ArrowRightLeft, MapPinCheck, LogOut, Loader } from 'lucide-react';

import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Avatar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navigation() {
    const [openNav, setOpenNav] = React.useState(false);
    const { isAuthenticated, user, loading } = useSelector(state => state.auth);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="gray"
                className="flex items-center gap-1 p-1 font-medium hover:text-green-700 hover:bg-green-50 hover:rounded-lg"
            >

                <Home size={18} />
                <Link to={"/"} className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-1 p-1 font-medium  hover:text-green-700 hover:bg-green-50 hover:rounded-lg"
            >
                <Info size={18} />
                <Link to="/about-us" className="flex items-center">
                    About Us
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-1 p-1 font-medium  hover:text-green-700 hover:bg-green-50 hover:rounded-lg"
            >
                <PackageCheck size={18} />
                <Link to="/courier" className="flex items-center">
                    Delivery
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-1 p-1 font-medium  hover:text-green-700 hover:bg-green-50 hover:rounded-lg"
            >
                <Ticket size={18} />
                <Link to="/bus-tickets" className="flex items-center">
                    Bus Tickets
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium  hover:text-green-700 hover:bg-green-50 hover:rounded-lg"
            >
                <Contact size={18} />
                <Link to="/contact-us" className="flex items-center">
                    Contact Us
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="max-w-full sticky top-0 mx-auto shadow-none rounded-none px-5 py-2 lg:px-8 lg:py-4">
            <div className=" flex items-center justify-between text-blue-gray-900">
                <Link
                    to="/"
                    className="mr-4 text-1xl cursor-pointer py-1.5 font-medium flex gap-1 items-center"
                >
                    <Bus size={30} className="text-green-600 font-semibold" />
                    <span className="font-medium text-2xl font-logo text-green-700">BusNaija</span>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                {loading ? <><Loader className="animate-spin" /></> :
                    <div className="flex items-center gap-x-2">
                        {
                            isAuthenticated ? (

                                <Menu>
                                    <MenuHandler>
                                        <Button
                                            variant="text"
                                            color="blue-gray"
                                            className="flex items-center rounded-full p-0"
                                        >
                                            <Avatar
                                                variant="circular"
                                                size="sm"
                                                alt="tania andrew"
                                                withBorder={true}
                                                color="blue-gray"
                                                className=" p-0.5"
                                                src="https://docs.material-tailwind.com/img/face-2.jpg"
                                            />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <div className="py-3">{user.email}</div>
                                        <MenuItem color="blue-gray" className="flex items-center gap-1">
                                            <CircleUser size={15} />
                                            <Link>
                                                My Profile
                                            </Link>
                                        </MenuItem>
                                        <MenuItem color="blue-gray" className="flex items-center gap-1">
                                            <Ticket size={15} />
                                            <Link>
                                                My Booking
                                            </Link>
                                        </MenuItem>
                                        <MenuItem color="blue-gray" className="flex items-center gap-1">
                                            <PackageCheck size={15} />
                                            <Link>
                                                My Packages
                                            </Link>
                                        </MenuItem>
                                        <MenuItem color="blue-gray" className="flex items-center gap-1">
                                            <ArrowRightLeft size={15} />
                                            <Link>
                                                My Transactions
                                            </Link>
                                        </MenuItem>
                                        <MenuItem color="blue-gray" className="flex items-center gap-1">
                                            <MapPinCheck size={15} />
                                            <Link>
                                                Favorite Locations
                                            </Link>
                                        </MenuItem>
                                        <MenuItem color="blue-gray" className="flex items-center gap-1">
                                            <LogOut size={15} />
                                            <Link>
                                                Logout
                                            </Link>
                                        </MenuItem>

                                    </MenuList>
                                </Menu>
                            ) :
                                (<>

                                    <Button color="green" variant="text" size="sm" className="hidden lg:inline-block">
                                        <Link className="h-full w-full" to={"/login"}>Log In</Link>
                                    </Button>
                                    <Button
                                        color="green"
                                        variant="gradient"
                                        size="sm"
                                        className="hidden lg:inline-block"
                                    >
                                        <Link className="h-full w-full" to={"/register"}>Sign in</Link>
                                    </Button>
                                </>)
                        }
                    </div>}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <CircleX size={40} />
                    ) : (
                        <MenuIcon size={40} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto sticky top-0">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button color="green" fullWidth variant="text" size="sm" className="">
                            <Link className="h-full w-full" to={'/login'}>Log In</Link>
                        </Button>
                        <Button color="green" fullWidth variant="gradient" size="sm" className="">
                            <Link className="h-full w-full" to={'/register'}>Sign In</Link>
                        </Button>
                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
}