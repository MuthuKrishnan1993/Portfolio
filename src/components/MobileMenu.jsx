import { useState } from "react";
import { useEffect, useRef } from "react";
import { Form, useRouteLoaderData } from "react-router-dom";
import "./MobileMenu.css";
import Lenis from "@studio-freight/lenis";
function MobileMenu() {
  const token = useRouteLoaderData("root");
  const [isOpen, setOpen] = useState(false);
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
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
      ></button>
      <div className={`panel mobile-panel ${isOpen ? "open" : "close"}`}>
        <ul className="mob-menu">
          <li>
            <button
              className="text-secondary-500"
              onClick={() => scrollToSection("home-page")}
            >
              Home
            </button>
          </li>
          <li>
            {token && (
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            )}
          </li>
          <li>
            <button
              className="text-secondary-500"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-secondary-500"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="text-secondary-500"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="text-secondary-500"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
export default MobileMenu;
