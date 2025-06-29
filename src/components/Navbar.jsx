import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { NavLink } from "react-router";
import { Form, useRouteLoaderData } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const Navbar = () => {
  const token = useRouteLoaderData("root");
  const [hidden, setHidden] = useState(false);
  const lenis = useRef(null);
  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });
    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    lenis.current.scrollTo(element);
  };

  return (
    <>
      <motion.div
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        whileHover={hidden ? "peeking" : "visible"}
        onFocusCapture={hidden ? () => setHidden(false) : undefined}
        variants={{
          visible: { y: "0%" },
          hidden: { y: "-100%" },
          peeking: { y: "0%", cursor: "pointer" },
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-10 flex w-full justify-center pt-3 left-0 right-0"
      >
        <nav className="navbar-morphism flex justify-between gap-3 rounded-3xl bg-secondary-500 p-5 hover:*:text-gray-200">
          <button
            className="text-black-500 pl-10 pr-10 cursor-pointer"
            onClick={() => scrollToSection("home-page")}
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
            </svg>
            <span className="sr-only">Home</span>
          </button>
          {token && (
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          )}
          <div>
            <button
              className="text-black-500 pl-10 pr-10 cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <a
              className="max-sm:hidden text-black-500 pl-10 pr-10 cursor-pointer"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </a>
            <a
              className="max-sm:hidden text-black-500 pl-10 pr-10 cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              Project
            </a>
            <button
              className="text-black-500 pl-10 pr-10 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
          {/* <div className="theme-toggle">
          <input type="checkbox" id="theme-toggle" className="peer hidden" />
          <label
            htmlFor="theme-toggle"
            className="flex h-5 w-9 cursor-pointer items-center justify-between rounded-full bg-gray-200 p-1 shadow-inner transition-all duration-300"
          >
            <span className="h-3 w-3 rounded-full bg-gray-500 transition-all duration-300 peer-checked:bg-gray-900"></span>
          </label>
        </div> */}
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
