import { Container } from "@radix-ui/themes";
import ScrollVelocity from "../AniComponents/ScrollVelocity";

function AdvertiseMe() {
  return (
    <>
      <div
        id="advertise"
        className="border-t-1 border-b-1 border-r-0 w-full mt-20 pt-12 pb-12"
      >
        <ScrollVelocity
          texts={[
            "Front End Developer . Product Designer . Magento . Lead Activities . Performance Optimization . Web Development . Hybrid",
          ]}
          velocity={50}
          className="custom-scroll-text"
        />
      </div>
    </>
  );
}
export default AdvertiseMe;
