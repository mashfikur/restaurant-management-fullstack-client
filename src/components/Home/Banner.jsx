// react responsive carousel

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// imported images

import slider1 from "../../assets/home/01.jpg";
import slider2 from "../../assets/home/02.jpg";
import slider3 from "../../assets/home/03.png";
import slider4 from "../../assets/home/04.jpg";
import slider5 from "../../assets/home/05.png";
import slider6 from "../../assets/home/06.png";

const Banner = () => {
  //   const customRenderThumbs = (children) => {
  //     return <div> {children} </div>;
  // renderThumbs={(children) => <div> {children} </div>}
  //   };

  return (
    <div>
      <Carousel
        className="w-full text-center mx-auto"
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
      >
        <div>
          <img src={slider1} />
        </div>
        <div>
          <img src={slider2} />
        </div>
        <div>
          <img src={slider3} />
        </div>
        <div>
          <img src={slider4} />
        </div>
        <div>
          <img src={slider5} />
        </div>
        <div>
          <img src={slider6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
