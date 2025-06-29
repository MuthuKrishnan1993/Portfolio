import CircularText from "../AniComponents/CircularText";
import "./HomePage.css";
import { Button, Container } from "@radix-ui/themes";
import SplitText from "../AniComponents/DecryptedText";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function HomePage() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#intro-slider", {
        xPercent: "-100",
        duration: 0,
        ease: "power4.inOut",
        delay: 0.3,
      })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          ease: "power4.inOut",
          delay: 0.3,
        })
        .from(["avatar", "#about-me"], {
          opacity: 0,
          y: "-30",
          stagger: 0.3,
        })
        .to(["#avatar", "#about-me"], {
          opacity: 1,
          y: "0",
          stagger: 0.3,
        });
    });
    return () => {
      ctx.revert(); // cleanup function
    };
  }, []);
  return (
    <>
      <div className="relative mx-wid" ref={containerRef} id="home-page">
        <div
          id="intro-slider"
          className="absolute h-screen w-full z-10 top-0 left-0 bg-black flex justify-center items-center"
        >
          <h2 className=" text-secondary-500 text-3xl">Welcome</h2>
        </div>
        <Container id="home">
          <section className="header w-full flex flex-col items-center gap-8 p-15 overflow-x-hidden pt-0 sm:flex-row md:gap-16 md:py-lg md:pt-sm bg-black-500">
            <div id="avatar" className="relative w-full sm:w-1/2">
              <div className="h-full w-full overflow-hidden rounded-b-full">
                <img
                  src="https://devrajchatribin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3016a54d.webp&w=828&q=75"
                  className="aspect-[3/4] h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
                />
              </div>
              <CircularText
                text=" Lets Talk . Lets Talk . Lets Talk ."
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>
            <div className="w-full space-y-6" id="about-me">
              <p className="text-secondary-500 font-light lg:text-1xl mt-4 pl-2">
                Hi, I’m Muthu
              </p>
              <SplitText
                text="A creative developer & Digital Designer"
                className="lg:text-7xl text-secondary-500 text-5xl font-bold"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
              <p className="text-secondary-500 font-light lg:text-1xl mt-4">
                I collaborate with brands globally to design impactful,
                mission-focused websites that drive results and achieve business
                goals.
              </p>
              <button className="bg-secondary-500 hover:bg-tertiary-500 cursor-pointer text-primary-500 font-bold py-2 px-4 rounded-full">
                My Resume
              </button>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
export default HomePage;
