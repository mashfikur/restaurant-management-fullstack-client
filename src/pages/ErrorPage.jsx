import { Link } from "react-router-dom";
import errorGIf from "../assets/404.gif";

const ErrorPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div>
        <img className="mx-auto" src={errorGIf} alt="" />
      </div>
      <Link to="/">
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-success ">Go Home</button>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
