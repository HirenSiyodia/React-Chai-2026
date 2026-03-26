import { React } from 'react'
import UserContextProvide from './context/UserContextProvide'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvide>
      <Login/>
      <Profile/>
    </UserContextProvide>
  )
}

export default App
