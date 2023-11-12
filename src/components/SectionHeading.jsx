import PropTypes from "prop-types";

const SectionHeading = ({ priamary, secondary }) => {
  return (
    <div className="text-center mb-10">
      <h3 className="text-[#D99904] mb-2 italic"> {secondary} </h3>
      <h1 className="uppercase w-[20rem] mx-auto text-4xl border-y-2 py-5">
        {" "}
        {priamary}{" "}
      </h1>
    </div>
  );
};

SectionHeading.propTypes = {
  priamary: PropTypes.string,
  secondary: PropTypes.string,
};

export default SectionHeading;
