import { Route, Routes } from "react-router-dom";
import Layout from "./Website/Layout/Layout";
import Home from "./Website/Home/Home";
import Register from "./Website/Auth/Register/Register";
import Login from "./Website/Auth/Login/Login";
import About from "./Website/About/About";
import NotFound from "./Website/NotFound/NotFound";
import Dashboard from "./Dashboard/Dashboard";
import Users from "./Dashboard/User/users/Users";
import UpdateUsers from "./Dashboard/updateUsers/UpdateUsers";
import NewUser from "./Dashboard/User/newUser/NewUser";
import Products from "./Dashboard/Products/Products";
import NewProduct from "./Dashboard/newProduct/NewProduct";
import RequireAuth from "./Website/Auth/requireAuth";


export default function App() {
  return (
    <div className="App ">
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route element={<RequireAuth/>}>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="/dashboard/users" element={<Users/>}/>
          <Route path="/dashboard/users/:id" element={<UpdateUsers/>} />
          <Route path="/dashboard/newUser" element={<NewUser/>}/>
          <Route path="/dashboard/Products" element={<Products/>}/>
          <Route path="/dashboard/newProduct" element={<NewProduct/>}/>
        </Route>
      </Route>
      </Routes>
    </div>
  );
}

