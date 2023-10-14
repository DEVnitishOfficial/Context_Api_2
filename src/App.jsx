import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContexProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContexProvider>
    <h1>Understanding context Api </h1>
    <Login />
    <Profile />
    </UserContexProvider>
  )
}

export default App
