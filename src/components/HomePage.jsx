import CircularText from "../AniComponents/CircularText";
import { Button, Container } from "@radix-ui/themes";
import SplitText from "../AniComponents/DecryptedText";
import { useLayoutEffect, useRef } from "react";
import Muthukrishnan from "../assets/MuthuKrishnan.pdf";
import mypic from "../assets/profile-new-min.jpeg";
import gsap from "gsap";
import "./HomePage.css";

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
  const handleDownload = () => {
    const pdfUrl = Muthukrishnan; // Path to your PDF file
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MuthuKrishnanResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
                  src={mypic}
                  alt="MuthuKrishnan"
                  id="avatar-img"
                  loading="lazy"
                  draggable="false"
                  className="aspect-[3/4] h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
                />
              </div>
              <CircularText
                text=" Lets Talk . Lets Talk . Lets Talk ."
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
              <div className="svg-icon-arr">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-full space-y-6" id="about-me">
              <p className="text-secondary-500 font-light lg:text-1xl mt-4 pl-2">
                Hi, I’m Muthu
              </p>
              <SplitText
                text={`A creative developer & Digital Designer`}
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
              <button
                className="bg-secondary-500 hover:bg-tertiary-500 cursor-pointer text-primary-500 font-bold py-2 px-4 rounded-full"
                onClick={handleDownload}
              >
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
