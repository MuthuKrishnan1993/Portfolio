import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Stutzen from "../assets/Stutzen.png";
import Seasons5 from "../assets/Seasons5.png";
import Reebok from "../assets/Reebok.png";
import Converse from "../assets/converse.png";
import Footlocker from "../assets/Footlocker.png";
import Newbalance from "../assets/newbalance.png";

import "./Timelinescroll.css"; // Assuming styles are extracted
import { Section } from "@radix-ui/themes";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const steps = [
  {
    id: "our-work-1",
    step: 1,
    title: "https://www.stutzen.co/",
    img: Stutzen,
    texts: [
      "Stutzen is a business-focused website built for a technology solutions provider, aimed at showcasing their services, products, and digital capabilities. The site was developed on WordPress, offering a content-driven and visually engaging experience, optimized for both performance and user interaction. My primary responsibility was to create a custom, responsive frontend that reflects the brand’s innovation and professionalism.",
    ],
  },
  {
    id: "our-work-2",
    step: 2,
    img: Seasons5,
    title: "https://seasons5.com.au/",
    texts: [
      "Seasons5 is a luxury resort and spa located in Victoria, Australia. The website was designed to reflect the premium experience offered by the venue—covering accommodation, weddings, conferences, dining, and wellness services. Developed using WordPress, the site delivers a rich, responsive, and visually immersive experience to potential guests, while being fully manageable from the backend",
    ],
  },
  {
    id: "our-work-3",
    step: 3,
    title: "www.reebok.id",
    img: Reebok,
    texts: [
      "The Reebok Indonesia website is a premium e-commerce platform developed on Magento 2, designed to deliver a seamless and high-performance shopping experience for a leading global sportswear brand. As the Frontend Developer, my role was to translate the brand's visual identity into a responsive, optimized, and engaging user interfac",
    ],
  },
  {
    id: "our-work-4",
    step: 4,
    title: "www.newbalance.co.id",
    img: Newbalance,
    texts: [
      "New Balance Indonesia's digital commerce presence (newbalance.co.id) by architecting and implementing a Magento 2-based solution tailored for performance-driven athletic footwear retail. Led the modernization of the platform to serve Indonesia's growing sneaker market, focusing on mobile-first experiences, localized payment ecosystems, and seamless omnichannel integration while maintaining brand premium positioning..",
    ],
  },
  {
    id: "our-work-5",
    step: 5,
    title: "www.converse.id",
    img: Converse,
    texts: [
      "Converse Indonesia's digital commerce experience (converse.id) on Magento 2, delivering a brand-centric platform for sneakers and apparel tailored to Indonesian consumers. Led the migration from a legacy system to a high-performance Magento architecture, optimizing for localized user journeys, omnichannel integration, and mobile-first engagement while preserving Converse's iconic branding.",
    ],
  },
  {
    id: "our-work-6",
    step: 6,
    title: "www.footlocker.id",
    img: Footlocker,
    texts: [
      "Foot Locker Indonesia's digital presence (footlocker.id) by developing a robust Magento-based e-commerce platform tailored for the Indonesian market. Led end-to-end implementation of a high-performance solution for athletic footwear/apparel sales, focusing on localization, scalability, and conversion optimization while integrating with regional business systems.",
    ],
  },
];

const TimelineScroll = () => {
  const containerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const listItems = gsap.utils.toArray(
      ".carousel__nav__item",
      navRef.current
    );
    const slides = gsap.utils.toArray(".carousel__item");

    const tl = gsap.timeline();

    const myST = ScrollTrigger.create({
      animation: tl,
      id: "st",
      trigger: container,
      start: "top top",
      end: "+=" + container.clientHeight * (slides.length - 1),
      pin: container,
      scrub: true,
      snap: {
        snapTo: 1 / (slides.length - 1),
      },
      markers: false,
    });

    gsap.set(slides, {
      xPercent: () => (window.innerWidth < 768 ? 125 : 0),
      yPercent: () => (window.innerWidth > 768 ? 125 : 0),
      scale: 0.5,
      opacity: 0,
    });

    listItems.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const percent =
          tl.labels[item.getAttribute("data-target")] / tl.totalDuration();
        const scrollPos = myST.start + (myST.end - myST.start) * percent;
        gsap.to(window, { duration: 2, scrollTo: scrollPos });
      });

      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl.to(
          item,
          { background: "#fff", boxShadow: "0 0 16px #FFF" },
          0.5 * (i - 1)
        )
          .to(
            slides[i],
            {
              opacity: 1,
              yPercent: 0,
              xPercent: 0,
              scale: 1,
            },
            "<"
          )
          .to(
            previousItem,
            {
              backgroundColor: "#424b58",
              boxShadow: "0 0 16px transparent",
            },
            "<"
          )
          .to(
            slides[i - 1],
            {
              opacity: 0,
              yPercent: () => (window.innerWidth > 768 ? -125 : 0),
              xPercent: () => (window.innerWidth < 768 ? -125 : 0),
              scale: 0.5,
            },
            "<"
          )
          .add(`our-work-${i + 1}`);
      } else {
        gsap.set(item, {
          background: "#fff",
          boxShadow: "0 0 16px #FFF",
        });
        gsap.to(slides[i], {
          yPercent: 0,
          xPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 0,
        });
        tl.add(`our-work-${i + 1}`, "+=0");
      }
    });
  }, []);

  return (
    <>
      <Section className="" id="projects">
        <section className="our-work h-dvh" ref={containerRef}>
          <h1 className="font-bold text-center md:mb-20 text-tertiary-500 text-un lg:text-1.5xl mt-4 pl-2  gap-2 align-middle align-center uppercase font-weight-900 font:oswald">
            Projects
          </h1>
          <div className="container sticky">
            <div className="row align-items-center">
              <div className="col-12 col-md-8 slider">
                <div className="carousel__slider">
                  {steps.map(({ id, title, texts, img }) => (
                    <div className="carousel__item" id={id} key={id}>
                      {/* <div className="blurred-box__step">{step}</div>
                      <h2 className="blurred-box__title">{title}</h2>
                      <div className="blurred-box__footer">
                        <span className="blurred-box__footer-line"></span>
                        {texts.map((text, idx) => (
                          <p className="blurred-box__text" key={idx}>
                            {text}
                          </p>
                        ))}
                      </div> */}
                      <div className="flex md:flex-row gap-5 project-card">
                        <div className="w-2/4 project-card">
                          <img src={img} />
                        </div>
                        <div className="md:w-2/4 project-card flex items-center">
                          {texts.map((text, idx) => (
                            <div className="blurred-box__text" key={idx}>
                              <h2 className="mb-4 text-tertiary-500">
                                {title}
                              </h2>
                              <p>{text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="carousel__nav" ref={navRef}>
                  {steps.map(({ id }) => (
                    <li
                      className="carousel__nav__item bg-tertiary-500"
                      data-target={id}
                      key={id}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Section>
    </>
  );
};

export default TimelineScroll;
