import { Link, useLocation } from "react-router-dom"
import { PropTypes } from 'prop-types';
import { Bus, Cog, LayoutDashboard, LocateFixed, User, Users } from "lucide-react";
import useAuth from "../../hooks/useAuth";


const RouteSelect = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-1">
            { user.role == 'admin'?
               ( adminLinks.map((link, index)=>{
                    return <div key={index} >
                    <RouteLink Icon={link.icon} title={link.title} link={link.link} />
                    </div>
                })) : (
                    customerLinks.map((link, index)=>{
                        return <div key={index} >
                        <RouteLink Icon={link.icon} title={link.title} link={link.link} />
                        </div>
                    })
                )
            }
        </div>
    )
}

const customerLinks = [
    {
        title: "Overview",
        icon: LayoutDashboard,
        link: "/"
    }
]
const adminLinks = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        link: "/dashboard"
    },
    {
        title: "Users Management",
        icon: Users,
        link: "/users"
    },
    {
        title: "Bus Management",
        icon: Bus,
        link: "/products"
    },
    {
        title: "Location Management",
        icon: LocateFixed,
        link: "/products"
    },
    {
        title: "Driver Management",
        icon: User,
        link: "/driver"
    },
    {
        title: "Ticket Orders",
        icon: LayoutDashboard,
        link: "/orders"
    },
    {
        title: "Settings",
        icon: Cog,
        link: "/settings"
    }
]

const RouteLink = ({ Icon, title, link }) => {
    const location = useLocation();
    const active = location.pathname == link ? true : false;

    return <Link to={link} className={`flex items-center gap-2 p-2  rounded ${active ? 'bg-white text-green-500 shadow-md font-medium' : 'hover:bg-green-300 text-gray-900'}`}>
        <Icon className="size-5" />
        <span className="text-sm">
            {title}
        </span>
    </Link>
}
RouteLink.propTypes = {
    active: PropTypes.bool,
    Icon: PropTypes.any,
    title: PropTypes.string,
    link: PropTypes.string
}

export default RouteSelect