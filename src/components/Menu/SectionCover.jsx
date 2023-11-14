import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const SectionCover = ({ main, title, desc, img }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="menu cover"
      strength={-200}
    >
      <div>
        <div
          className={`section-cover ${
            main ? "h-[50rem]" : "h-[43rem]"
          } bg-center bg-cover flex flex-col items-center justify-center ${
            main || "px-[24rem]"
          } `}
        >
          <div
            className={`text-center bg-black py-36 ${
              main && "px-[24rem]"
            }  text-white bg-opacity-40 capitalize`}
          >
            <h3
              className={`  ${
                main ? "text-[5rem]" : "text-4xl"
              } font-cinzel  font-bold`}
            >
              {" "}
              {title}{" "}
            </h3>
            <p className={`font-cinzel ${main ? "text-xl" : "text-base"}`}>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

SectionCover.propTypes = {
  main: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default SectionCover;
