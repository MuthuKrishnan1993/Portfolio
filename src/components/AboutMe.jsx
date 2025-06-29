import { Container } from "@radix-ui/themes";
import ScrollReveal from "../AniComponents/ScrollReveal";

function AboutMe() {
  return (
    <>
      <Container id="about" className="mx-wid">
        <div className="mt-15 mb-15 flex flex-col justify-center items-center">
          <h2 className="font-bold text-secondary-500 text-tertiary-500 text-un lg:text-1.5xl mt-4 pl-2 flex flex-row gap-2 align-middle align-center uppercase font-weight-900 font:oswald underline">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
            </span>
            About Me
          </h2>

          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={false}
            baseRotation={5}
            blurStrength={10}
            className="text-secondary-500 font-light lg:text-2 mt-4 pl-2"
          >
            I'm MuthuKrishnan, with over 6 years of experience in web
            development and a strong focus on creating scalable, user-friendly,
            and efficient web applications. My expertise spans across modern
            JavaScript frameworks, responsive design, and performance
            optimization.
          </ScrollReveal>
        </div>
      </Container>
    </>
  );
}
export default AboutMe;
