import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) 
      return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Please Login 🔐
            </h2>
          </div>
        </div>
      );

    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
        
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-80 space-y-3">
          
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome 👋
          </h1>

          <p className="text-xl font-semibold text-indigo-600">
            {user.username}
          </p>

        </div>

      </div>
    );
}

export default Profile