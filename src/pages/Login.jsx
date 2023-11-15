import { useEffect, useState } from "react";
import bg from "../assets/others/authentication.png";
import illustration from "../assets/others/authentication2.png";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaSubmit = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
        }}
        className="min-h-screen flex items-center justify-center"
      >
        {/* main content */}
        <div className="flex py-14 items-center shadow-2xl container mx-auto">
          <div className="flex-1">
            <img src={illustration} alt="" />
          </div>
          <div className="flex-1">
            <div className=" lg:px-28  ">
              <div className=" flex items-center flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold">Login </h1>
                </div>
                <div className="  w-full">
                  <form className="flex flex-col gap-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-lg">
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered focus:outline-none"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-lg">
                          Password
                        </span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered focus:outline-none"
                        required
                      />
                      <label className="label">
                        <LoadCanvasTemplate />
                      </label>
                    </div>
                    <div className="form-control">
                      <input
                        onBlur={captchaSubmit}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered focus:outline-none"
                        required
                      />
                      {/* <div className="form-control mt-6">
                        <button
                          onClick={captchaSubmit}
                          className="btn btn-xs w-24 mx-auto text-white bg-[#dbb985]"
                        >
                          submit
                        </button>
                      </div> */}
                    </div>

                    <div className="form-control mt-6">
                      <button
                        disabled={disabled}
                        className="btn text-white hvoer:bg-[#dbb985] bg-[#dbb985]"
                      >
                        Login
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-8">
                    <p className="font-medium text-[#dbb985]">
                      New here?{" "}
                      <span className="font-bold">Create a New Account</span>{" "}
                    </p>

                    <div className="mt-6">
                      <p>Or Sign in with</p>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
