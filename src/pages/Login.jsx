import { useEffect, useState } from "react";
import bg from "../assets/others/authentication.png";
import illustration from "../assets/others/authentication2.png";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa6";

// importing hook form
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const { userSignIn, setLoading } = useAuth();
  const navigate = useNavigate();

  // form controls
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //
    userSignIn(data.email, data.password)
      .then(() => {
        reset();
        toast.success("Logged In Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  // loading captcha amounts
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // verifying captcha submit
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
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                  >
                    {/* email */}
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
                        {...register("email")}
                      />
                    </div>

                    {/* password */}

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
                        {...register("password", { minLength: 6 })}
                      />
                      {errors.password && (
                        <p className="text-red-600 font-semibold">
                          {" "}
                          Password should be more than 6 charectars{" "}
                        </p>
                      )}
                      <label className="label">
                        <LoadCanvasTemplate />
                      </label>
                    </div>

                    {/* captcha */}
                    <div className="form-control">
                      <input
                        onBlur={captchaSubmit}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered focus:outline-none"
                        required
                      />

                      <button
                        disabled
                        className="btn disabled:btn-neutral mt-3 w-24 mx-auto btn-sm"
                      >
                        validate
                      </button>
                    </div>

                    {/* submit button */}

                    <div className="form-control mt-6">
                      <button
                        disabled={disabled}
                        className="btn text-white hover:bg-[#dbb985] bg-[#dbb985]"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-8">
                    <p className="font-medium text-[#dbb985]">
                      New here?{" "}
                      <Link to="/sign-up">
                        <span className="font-bold">Create a New Account</span>{" "}
                      </Link>
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center">
                      <p className="font-semibold">Or Sign in with</p>
                      <div className="flex mt-5 items-center gap-8 text-3xl">
                        <FaFacebook></FaFacebook>
                        <FaGoogle></FaGoogle>
                        <FaGithub></FaGithub>
                      </div>
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

export default SignUp;
