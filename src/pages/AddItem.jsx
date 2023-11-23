import SectionHeading from "../components/SectionHeading";
import { ImSpoonKnife } from "react-icons/im";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const imageApiKey = import.meta.env.VITE_IMGAE_API_KEY;
const imageUrl = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

const AddItem = () => {
  const { control, register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosCustom = useAxios();

  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };

    // uplodaing to imgBB
    const res = await axiosPublic.post(imageUrl, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);

    if (res.data.success) {
      // adding data to database
      const itemInfo = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category.value,
        price: parseFloat(data.price),
      };
      axiosCustom
        .post("/api/v1/menu/add-item", itemInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Added Item Successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const options = [
    { value: "salad", label: "Salad" },
    { value: "pizza", label: "Pizza" },
    { value: "soup", label: "Soups" },
    { value: "dessert", label: "Desserts" },
    { value: "drinks", label: "Drinks" },
    { value: "popular", label: "Popular" },
    { value: "offered", label: "Offered" },
  ];

  return (
    <div className="mt-12">
      <SectionHeading
        priamary={"ADD AN ITEM"}
        secondary={"---What's new?---"}
      ></SectionHeading>

      <div className="mt-8 mx-auto w-[62rem]">
        <div className=" bg-base-200 p-10 mb-20 ">
          <div className="flex-col lg:flex-row">
            <div className="card w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* first row */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Recipe name*
                    </span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Recipe name"
                    className="input input-bordered focus:outline-none"
                    required
                  />
                </div>

                {/* second row */}

                <div className="flex items-center gap-5">
                  <div className="form-control flex-1">
                    <span className="label-text font-semibold text-lg">
                      Category*
                    </span>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="Category"
                          className="mt-3"
                          options={options}
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Price*
                      </span>
                    </label>
                    <input
                      {...register("price")}
                      type="text"
                      placeholder="Price"
                      className="input input-bordered focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* third row */}
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Recipe Details*
                    </span>
                  </label>
                  <textarea
                    {...register("recipe")}
                    className="resize-none pl-7 focus:outline-none pt-6 rounded-md shadow-md"
                    cols="30"
                    placeholder="Recipe Details"
                    rows="10"
                    required
                  ></textarea>
                </div>

                <input
                  {...register("image")}
                  type="file"
                  className="file-input   mt-3   w-full max-w-xs"
                  required
                />

                <div className=" mt-6">
                  <button className="btn bg-gradient-to-r  from-[#835D23]  to-[#B58130] text-white ">
                    Add Item <ImSpoonKnife className="text-lg"></ImSpoonKnife>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
