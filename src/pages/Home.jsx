import Banner from "../components/Home/Banner";
import BossContent from "../components/Home/BossContent";
import Featured from "../components/Home/Featured";
import FoodSlider from "../components/Home/FoodSlider";
import OurMenu from "../components/Home/OurMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodSlider></FoodSlider>
      <BossContent></BossContent>
      <OurMenu category={"popular"}></OurMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
