import SectionHeading from "../SectionHeading";
import featuredImg from "../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      style={{
        background: `url(${featuredImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="mt-40"
    >
      <div className="overlay px-[18rem] py-32 ">
        <div className="text-white">
          <SectionHeading
            priamary={"FROM OUR MENU"}
            secondary={"---Check it out---"}
          ></SectionHeading>

          <div className="flex items-center gap-16">
            <div>
              <img src={featuredImg} alt="" />
            </div>
            <div>
              <h3 className="text-xl"> {new Date().toDateString().slice(3)} </h3>
              <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <div className="flex flex-col items-start mt-12 ">
                <button className="btn btn-outline border-x-0 border-t-0 border-b-white text-white hover:bg-white hover:border-b-white hover:text-black border-b-4">
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
