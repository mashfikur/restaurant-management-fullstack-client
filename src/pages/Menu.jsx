import SectionCover from "../components/Menu/SectionCover";
import SingleMenu from "../components/Menu/SingleMenu";
import SectionHeading from "../components/SectionHeading";
import bg1 from "../assets/menu/banner3.jpg";
import dessertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  return (
    <div>
      {/* page cover */}
      <SectionCover
        title={"OUR MENU"}
        desc={"Would you like to try a dish?"}
        img={bg1}
        main={true}
      ></SectionCover>

      {/* offered section */}
      <div className="mt-32 mb-8">
        <SectionHeading
          priamary={"TODAY'S OFFER"}
          secondary={"---Don't miss---"}
        ></SectionHeading>
      </div>
      <SingleMenu category={"offered"}></SingleMenu>

      {/* dessert section */}
      <SectionCover
        title={"desserts"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={dessertBg}
      ></SectionCover>
      <SingleMenu category={"desserts"}></SingleMenu>

      {/* pizza section */}
      <SectionCover
        title={"pizza"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaBg}
      ></SectionCover>
      <SingleMenu category={"pizza"}></SingleMenu>

      {/* salad section */}
      <SectionCover
        title={"salad"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladBg}
      ></SectionCover>
      <SingleMenu category={"salad"}></SingleMenu>

      {/* soup section */}
      <SectionCover
        title={"soups"}
        desc={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupBg}
      ></SectionCover>
      <SingleMenu category={"soup"}></SingleMenu>
    </div>
  );
};

export default Menu;
