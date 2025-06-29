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
      "The Stutzen website is a clean and professional showcase of their IT services",
    ],
  },
  {
    id: "our-work-2",
    step: 2,
    img: Seasons5,
    title: "Identify your clients",
    texts: ["It could be anyone who needs their business to become famous."],
  },
  {
    id: "our-work-3",
    step: 3,
    title: "Select the billboards that best match the clients’ needs",
    img: Reebok,
    texts: [
      "it may be a key location close to their business, or a location that will expose them to new audiences. The possibilities are endless.",
    ],
  },
  {
    id: "our-work-4",
    step: 4,
    title: "Confirm the sale",
    img: Newbalance,
    texts: ["Sign the contract and send the payment."],
  },
  {
    id: "our-work-5",
    step: 5,
    title: "Send the artwork to the platform",
    img: Converse,
    texts: [],
  },
  {
    id: "our-work-6",
    step: 6,
    title: "Receive your commissions and enjoy life!",
    img: Footlocker,
    texts: [],
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
                              <h2>{title}</h2>
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
                      className="carousel__nav__item"
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
