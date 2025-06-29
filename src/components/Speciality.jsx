import { Container } from "@radix-ui/themes";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SpotLight from "../AniComponents/SpotLight";
import Html from "../assets/html.png";
import Css from "../assets/css-3.png";
import Javascript from "../assets/js.png";
import Wordpress from "../assets/wordpress-logo.png";
import Physics from "../assets/physics.png";
import git from "../assets/social.png";
import magento from "../assets/magento.png";
import redux from "../assets/redux.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwind.png";

gsap.registerPlugin(ScrollTrigger);
const data = [
  {
    title: "Html",
    icon: Html,
  },
  {
    title: "Css",
    icon: Css,
  },
  {
    title: "Javascript",
    icon: Javascript,
  },
  {
    title: "React",
    icon: Physics,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "Wordpress",
    icon: Wordpress,
  },
  {
    title: "Redux",
    icon: redux,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "Magento",
    icon: magento,
  },
  {
    title: "Git",
    icon: git,
  },
];
function Speciality() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "bottom bottom",
        toggleActions: "play none none reverse",
        scrub: true,
        pin: false,
        pinSpacing: true,
        duration: 1.5,
        ease: "power4.inOut",
      },
    });
    clipAnimation.from(
      ".custom-box",
      {
        duration: 1.5,
        scale: 0.5,
        opacity: 0.3,
        stagger: {
          amount: 0.5,
        },
      },
      0
    );
    clipAnimation.to(
      ".custom-box",
      {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        stagger: {
          amount: 0.5,
        },
      },
      0
    );
  });
  return (
    <>
      {/* <div className="bg-black min-h-screen">
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path area-of-expertise">
            <div className="absolute left-0 top-0 size-full"></div>
          </div>
        </div>
      </div> */}
      <Container className="lg:h-dvh" id="skills">
        <div className="speciality flex flex-col justify-center">
          <h2 className="justify-center font-bold text-tertiary-500 text-un lg:text-1.5xl mt-4 pl-2 flex flex-row gap-2 align-middle align-center uppercase font-weight-900 font:oswald">
            Speciality
          </h2>
          <h2 className="font-bold text-secondary-500 lg:text-3xl mt-4 text-align-center text-center pl-2">
            Area of Expertise
          </h2>
        </div>
        <section className="flex flex-wrap justify-center gap-2 mt-20 mb-20">
          {data.map((item, index) => (
            <SpotLight
              key={index}
              className="custom-spotlight-card w-1/6 text-center p-10"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="skill-images custom-box"
                  id="clip"
                />
              </div>
              <h2 className="1xl text-secondary-500 pt-4 font-bold">
                {item.title}
              </h2>
            </SpotLight>
          ))}
        </section>
      </Container>
    </>
  );
}
export default Speciality;
