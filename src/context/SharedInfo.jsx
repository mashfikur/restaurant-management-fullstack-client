import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SharedContext = createContext(null);

const SharedInfo = ({ children }) => {
  const [orderdCategory, setOrderedCategory] = useState(null);

  const value = { orderdCategory,setOrderedCategory}

  return <SharedContext.Provider value={value} > {children} </SharedContext.Provider>;
};

SharedInfo.propTypes = {
  children: PropTypes.node,
};

export default SharedInfo;
