import React, { useState, useEffect } from "react";
import SearchBar from "../../components/inputs and buttons/SearchBar";
import SelectButton from "../../components/inputs and buttons/SelectButton";
import Layout from "../../components/Layout";
import SearchList from "../../components/lists/SearchList";
import axios from "axios";

const AdminSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userList, setUserList] = useState([]);
  const [adminDetails, setAdminDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          return;
        }

        const response = await axios.get(
          "https://test.3scorers.com/api/v1/admin/get-users",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.data.success) {
          const allUsers = response.data.data;
          const adminUsers = allUsers.filter((user) => user.role === "admin");

          const filteredUsers = adminUsers.filter((user) =>
            user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setUserList(allUsers);
          setAdminDetails(filteredUsers);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <Layout title="Admins">
      {isLoading ? (
        <div className="flex justify-center items-center h-64 font-roboto font-bold text-[30px]">
          Loading...
        </div>
      ) : (
        <div className=" p-8 h-full">
          <div className="flex justify-between items-center bg-bgGreen p-4">
            <SearchBar
              value={searchQuery}
              onChange={(value) => setSearchQuery(value)}
            />
            <SelectButton options={["All", "Active", "Inactive"]} />
          </div>
          <div className="flex justify-between items-center bg-white  p-4 border-b-[1px] py-6">
            <h1 className="font-roboto text-[16px] sm:text-[20px] font-semibold ">
              Admin's Name
            </h1>
          </div>
          <SearchList title="admins" users={adminDetails} />
        </div>
      )}
    </Layout>
  );
};

export default AdminSection;
