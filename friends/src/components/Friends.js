import React from "react";
import axiosWithAuth from "./utlis/axiosWithAuth";

export default function Friends({ friends }) {
  const data = friends.name;

  return (
    <div>
      <h1>Your Friends</h1>
      <p>{data}</p>
    </div>
  );
}
