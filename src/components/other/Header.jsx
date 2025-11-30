import React from "react";
import { useState } from "react";

const Header = (props) => {
  // determine username based on user role and data
  const getUsername = () => {
    if (props.data && props.data.firstName) {
      return props.data.firstName; // employee
    }
    return "Admin"; // default for admin
  };

  const username = getUsername();

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    if (typeof props.changeUser === "function") {
      props.changeUser("");
    }
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">{username} 👋</span>{" "}
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
