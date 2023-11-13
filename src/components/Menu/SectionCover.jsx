import bg1 from "../../assets/menu/banner3.jpg";

const SectionCover = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg1})` }}
        className={`section-cover h-[50rem] bg-center bg-cover flex flex-col items-center justify-center `}
      >
        <div className="text-center bg-black py-36 px-[24rem] text-white bg-opacity-40">
          <h3 className=" text-[5rem] font-cinzel  font-bold"> Our Menu </h3>
          <p className="font-cinzel text-xl">Would you like to try a dish?</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
