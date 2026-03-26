import React, { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hirensiyodia")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-orange-800 text-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Github Following: {data.following}
        </h1>
        <img
          src={data.avatar_url}
          alt="Git image"
          className="w-40 h-40 rounded-full mx-auto"
        />
      </div>
    </div>
  );
}

export default Github;
