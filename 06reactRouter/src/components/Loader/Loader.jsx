import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Loader() {
  const data = useLoaderData();

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
export default Loader;

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/hirensiyodia');
  return response.json();
};

