// src/components/UserList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersRequest } from "../redux/actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    // Dispatch the action to fetch users on component mount
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
