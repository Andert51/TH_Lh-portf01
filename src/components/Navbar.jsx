import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isLoggedIn, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    if (nav.id === "characters") {
      navigate("/characters");
      setActive(nav.title);
    } else if (nav.id === "login") {
      if (isLoggedIn) {
        logout();
        navigate("/");
        setActive("");
      } else {
        navigate("/login");
        setActive(nav.title);
      }
    } else {
      // Navigate to home page and scroll to section
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(nav.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(nav.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setActive(nav.title);
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Lhyann &nbsp;
            <span className='sm:block hidden'> | Digital Character Artist</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => {
            // Skip admin-specific links for non-admin users
            if (nav.id === "admin" && !isAdmin) return null;
            
            // Dynamically change login text
            const displayTitle = nav.id === "login" 
              ? (isLoggedIn ? "Log Out" : "Log In")
              : nav.title;
            
            return (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => handleNavClick(nav)}
              >
                <span>{displayTitle}</span>
              </li>
            );
          })}
          
          {/* Show admin link if logged in as admin */}
          {isAdmin && (
            <li
              className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
              onClick={() => {
                navigate("/admin");
                setActive("Admin");
              }}
            >
              <span>Admin</span>
            </li>
          )}
          
          {/* Show user welcome message */}
          {isLoggedIn && (
            <li className='text-purple-400 text-[16px] font-medium pointer-events-none'>
              Welcome, {user?.name || user?.email?.split('@')[0]}
            </li>
          )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => {
                // Skip admin-specific links for non-admin users
                if (nav.id === "admin" && !isAdmin) return null;
                
                // Dynamically change login text
                const displayTitle = nav.id === "login" 
                  ? (isLoggedIn ? "Log Out" : "Log In")
                  : nav.title;
                
                return (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      handleNavClick(nav);
                    }}
                  >
                    <span>{displayTitle}</span>
                  </li>
                );
              })}
              
              {/* Show admin link if logged in as admin */}
              {isAdmin && (
                <li
                  className='font-poppins font-medium cursor-pointer text-[16px] text-secondary'
                  onClick={() => {
                    setToggle(!toggle);
                    navigate("/admin");
                    setActive("Admin");
                  }}
                >
                  <span>Admin</span>
                </li>
              )}
              
              {/* Show user welcome message */}
              {isLoggedIn && (
                <li className='font-poppins font-medium text-[14px] text-purple-400 pointer-events-none mt-2 border-t border-secondary pt-2'>
                  Welcome, {user?.name || user?.email?.split('@')[0]}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
