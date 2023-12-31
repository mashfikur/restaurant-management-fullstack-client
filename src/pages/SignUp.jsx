import bg from "../assets/others/authentication.png";
import illustration from "../assets/others/authentication2.png";

import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa6";

// importing hook form
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxios from "../hooks/useAxios";

const Login = () => {
  const { createUser, setLoading, user, setUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosCustom = useAxios();

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

    //creating a user
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("Created Account Successfully");
        reset();

        // updating user
        updateProfile(result.user, {
          displayName: data.name,
          photoURL: data.photo,
        })
          .then(() => {
            setUser({ ...user, displayName: data.name, photoURL: data.photo });

            // adding user to database
            const userData = {
              name: result.userData.displayName,
              email: result.user.email,
              uid: result.user.uid,
            };

            axiosPublic
              .post("/api/v1/add-user", userData)
              .then((res) => {
                console.log(res.data);
              })
              .catch((error) => {
                console.error(error);
              });

            //creating a token
            const userInfo = { uid: result.user.uid };
            axiosCustom
              .post("/api/v1/auth/create-token", userInfo)
              .then((res) => {
                const token = res.data?.token;
                localStorage.setItem("token", token);
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            toast.error(error.code);

            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);

        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Created Account  Successfully");

        // adding user to databse
        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
        };

        axiosPublic
          .post("/api/v1/add-user", userData)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });

        //creating a token
        const userInfo = { uid: result.user.uid };
        axiosCustom
          .post("/api/v1/auth/create-token", userInfo)
          .then((res) => {
            const token = res.data?.token;
            localStorage.setItem("token", token);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
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
        <div className="flex flex-row-reverse py-14 items-center shadow-2xl container mx-auto">
          <div className="flex-1">
            <img src={illustration} alt="" />
          </div>

          <div className="flex-1">
            <div className=" lg:px-28  ">
              <div className=" flex items-center flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold">Sign Up </h1>
                </div>
                <div className="  w-full">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                  >
                    {/* name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-lg">
                          Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered focus:outline-none"
                        required
                        {...register("name")}
                      />
                    </div>

                    {/* photo */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-lg">
                          Photo
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="photo URL"
                        className="input input-bordered focus:outline-none"
                        {...register("photo")}
                      />
                    </div>

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
                    </div>

                    {/* submit button */}

                    <div className="form-control mt-6">
                      <button className="btn text-white hover:bg-[#dbb985] bg-[#dbb985]">
                        Sign Up
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-8">
                    <p className="font-medium text-[#dbb985]">
                      Already have an account?{" "}
                      <Link to="/login">
                        <span className="font-bold">Sign in</span>{" "}
                      </Link>
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center">
                      <p className="font-semibold">Or Sign Up with</p>
                      <div className="flex mt-5 items-center gap-8 text-3xl">
                        <FaFacebook className="cursor-pointer"></FaFacebook>
                        <FaGoogle
                          className="cursor-pointer"
                          onClick={handleGoogleSignUp}
                        ></FaGoogle>
                        <FaGithub className="cursor-pointer"></FaGithub>
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

export default Login;
