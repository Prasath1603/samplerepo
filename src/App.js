import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login />}></Route>
        <Route path = "/dashboard" element = {<Dashboard />}></Route>
        <Route path = "/signup" element = {<Signup />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
