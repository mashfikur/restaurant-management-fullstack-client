import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { FaTrashAlt } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";

const AllUsers = () => {
  const axiosCustom = useAxios();

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return axiosCustom
        .get("/api/v1/get-users")
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className=" h-screen overflow-y-auto bg-[#F6F6F6] py-12">
      <SectionHeading
        priamary={"MANAGE ALL USERS"}
        secondary={"---How many??---"}
      ></SectionHeading>

      <div className="w-[62rem] mx-auto  rounded-md bg-white p-14">
        <div className="capitalize font-cinzel  font-bold">
          <p className=" flex-1 text-3xl">Total Users: {data?.length} </p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table mt-5">
              {/* head */}
              <thead className="bg-[#D1A054] rounded-t-md font-semibold  text-white custom-table ">
                <tr>
                  <th></th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="mt-5">
                {data?.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="">{item.name}</div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <p> {item.email} </p>
                    </td>

                    <td> User </td>

                    <th>
                      <button className="btn bg-red-600 hover:bg-red-500 text-white text-lg">
                        {" "}
                        <FaTrashAlt></FaTrashAlt>{" "}
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
