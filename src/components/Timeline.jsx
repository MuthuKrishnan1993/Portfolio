import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@radix-ui/themes";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const parentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const parent_container = parentRef.current;
    const timeline_container = containerRef.current;
    const sections = timeline_container.querySelectorAll(".year");

    const vh = (coef) => window.innerHeight * (coef / 100);

    let parentST = ScrollTrigger.create({
      id: "parent-timeline",
      trigger: parent_container,
      start: "top top",
      toggleClass: "started",
      pin: true,
      markers: false,
      end: () => "+=" + (sections.length - 1) * vh(80),
    });

    let currentSection = null;

    function goto(section, i) {
      if (currentSection !== section) {
        gsap.to(timeline_container, {
          y: -48 * i,
          duration: 0.6,
          overwrite: true,
        });

        let tl = gsap.timeline({ defaults: { overwrite: true } });

        if (currentSection) {
          tl.to(currentSection.querySelector("h2"), {
            fontSize: "2rem",
          });
          tl.to(
            currentSection,
            {
              maxHeight: "3rem",
            },
            0
          );
          tl.to(
            currentSection.querySelectorAll("p"),
            {
              opacity: 0,
              duration: 0.25,
              maxHeight: "0%",
            },
            0
          );
        }

        currentSection = section;

        if (section) {
          tl.to(
            section.querySelector("h2"),
            {
              fontSize: "10rem",
            },
            0
          );
          tl.to(
            section,
            {
              maxHeight: "80vh",
            },
            0
          );
          tl.fromTo(
            section.querySelectorAll("p"),
            { maxHeight: "0%" },
            {
              opacity: 1,
              maxHeight: "100%",
            }
          );
        }
      }
    }

    sections.forEach((sct, i) => {
      let sct_index = sct.getAttribute("data-count");

      ScrollTrigger.create({
        start: () => parentST.start + i * window.innerHeight * 0.4,
        end: () => "+=" + window.innerHeight * 0.4,
        markers: false,
        onLeaveBack: () => i || goto(null, 0),
        onToggle: (self) => self.isActive && goto(sct, sct_index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container>
      <section id="section-timeline" ref={parentRef}>
        <div
          className="timeline-container flex flex-col items-center justify-center"
          ref={containerRef}
        >
          <div className="title">
            <h2 className="text-secondary-500">Timeline</h2>
          </div>
          <div className="year" data-count="0">
            <h2 className="text-secondary-500">2021</h2>
            <p className="text-secondary-500 opacity-0">
              Some details about 2021
            </p>
          </div>
          <div className="year" data-count="1">
            <h2 className="text-secondary-500">2022</h2>
            <p className="text-secondary-500 opacity-0">
              Some details about 2022
            </p>
          </div>
          <div className="year" data-count="2">
            <h2 className="text-secondary-500">2023</h2>
            <p className="text-secondary-500 opacity-0">
              Some details about 2023
            </p>
          </div>
          <div className="year" data-count="2">
            <h2 className="text-secondary-500">2023</h2>
            <p className="text-secondary-500 opacity-0">
              Some details about 2023
            </p>
          </div>
          <div className="year" data-count="2">
            <h2 className="text-secondary-500">2023</h2>
            <p className="text-secondary-500 opacity-0">
              Some details about 2023
            </p>
          </div>
          <div className="year" data-count="2">
            <h2 className="text-secondary-500">2023</h2>
            <p className="text-secondary-500 opacity-0">
              Some details about 2023
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Timeline;
