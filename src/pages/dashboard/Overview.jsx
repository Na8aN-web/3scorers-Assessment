import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import TotalNumberCard from "../../components/cards/TotalNumberCard";
import { FaUserFriends, FaUserCog } from "react-icons/fa";
import TotalList from "../../components/lists/TotalList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [adminDetails, setAdminDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          return;
        }

        const response = await axios.get(process.env.REACT_APP_GET_USERS_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data.success) {
          const allUsers = response.data.data;
          const userUsers = allUsers.filter((user) => user.role === "user");
          const adminUsers = allUsers.filter((user) => user.role === "admin");

          setUserList(allUsers);
          setUserDetails(userUsers);
          setAdminDetails(adminUsers);
          setIsLoading(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert("Session has expired. Please login again.");
          localStorage.removeItem("accessToken");
          navigate("/login");
        } else {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <Layout title="Overview">
      {isLoading ? (
        <div className="flex justify-center items-center h-64 font-roboto font-bold text-[30px]">
          Loading...
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start justify-left gap-2 p-6 ">
            <TotalNumberCard
              title="users"
              number={userDetails.length}
              icon={FaUserFriends}
            />
            <TotalNumberCard
              title="admins"
              number={adminDetails.length}
              icon={FaUserCog}
            />
          </div>

          <div className="flex flex-col xl:flex-row items-start justify-left gap-8 p-6">
            <TotalList title="List of Users" users={userDetails} />
            <TotalList title="List of Admins" users={adminDetails} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Overview;
