import React, { useContext } from 'react';
import { Data, Data1 } from './ChildA';

const ChildC = () => {
  const firstName = useContext(Data);
  const surName = useContext(Data1);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-80 space-y-4">
        
        <h1 className="text-2xl font-bold text-gray-700">
          User Info 👤
        </h1>

        <p className="text-lg text-gray-500">
          First Name
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">
          {firstName}
        </h2>

        <p className="text-lg text-gray-500">
          Surname
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">
          {surName}
        </h2>

        <div className="mt-4 p-3 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600">
            Full Name:
          </p>
          <p className="text-lg font-bold text-gray-800">
            {firstName} {surName}
          </p>
        </div>

      </div>

    </div>
  );
};

export default ChildC;