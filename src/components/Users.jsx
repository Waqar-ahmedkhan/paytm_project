import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/user/bulk?filter=${filter}`
        );
        console.log("Response:", response.data); // Log the response data
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [filter]);

  console.log("Users:", users);
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        <div>
          {users ? (
            users.map((user) => <User key={user._id} user={user} />)
          ) : (
            <p>No users available.</p>
          )}
        </div>
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
