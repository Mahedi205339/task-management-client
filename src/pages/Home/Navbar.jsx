import { useState } from "react";
import menu from '../../assets/menu.png';
import Container from "../../components/Container";
import { FaUserClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navLink = <>
    <li> <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-cyan-600 px-2 py-1 text-white rounded-lg" : ""
        }
    >
        Home
    </NavLink> </li>
    <li> <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-cyan-600 px-2 py-1 text-white rounded-lg" : ""
        }
    >
        Dashboard
    </NavLink> </li>
    <li> <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-cyan-600 px-2 py-1 text-white rounded-lg" : ""
        }
    >
        Login
    </NavLink> </li>
    {/* <li> <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-600" : ""
        }
    >
        Registration
    </NavLink> </li> */}
</>
      
    return (
        <Container>
            <div className='bg-transparent h-[100px] flex z-10 sm:px-1 px-2 md:px-4  top-0 justify-between items-center'>
                <h1 className="text-cyan-600 font-bold text-xl md:text-2xl lg:text-3xl flex flex-row items-center gap-2">
                    <FaUserClock />
                    Task management
                </h1>
                <div className='hidden md:block'>
                    <div className='flex gap-5 text-xs md:text-base cursor-pointer pb-1'>
                        <ul className="flex flex-row gap-4 items-center font-bold">
                            {navLink}
                        </ul>
                    </div>

                </div>

                <img onClick={() => setShowMenu(!showMenu)} className=' w-10 block md:hidden' src={menu} alt="menu" />
                <div style={{ display: showMenu ? 'flex' : 'none' }} className='absolute top-16 right-4 z-20 flex flex-col p-1 min-h-fit min-w-40'>
                    <ul className="bg-sky-500 font-bold">
                        {navLink}
                    </ul>

                </div>
            </div>
        </Container>
    );
};

export default Navbar;