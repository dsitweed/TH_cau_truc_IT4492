import { Route, Routes } from "react-router-dom";

import "./App.css";

import { AdminHome } from "./adminPages/adminHome/AdminHome";
import { AdminLayout } from "./layouts/adminLayout/AdminLayout";
import { UserList } from "./adminPages/userList/UserList";
import { User } from "./adminPages/user/User";
import { NewUser } from "./adminPages/newUser/NewUser";
import { ProductList } from "./adminPages/productList/ProductList";
import { Product } from "./adminPages/product/Product";
import { NewProduct } from "./adminPages/newProduct/NewProduct";

import { useSelector } from "react-redux";
import { NotFound } from "./components/notFound/NotFound";
 
function App() {
  const admin = true; 
  const user = useSelector((state) => state.user);

  const appAdmin = (
    <div className="App">
          <Routes>
            {/* Wapper by Amind Layout includes: Topbar, Sidebar */}
            <Route path="/" element={<AdminLayout />}>

              <Route index element={<AdminHome />}/>
              <Route path="/users" element={<UserList />}/>
              <Route path="/users/:userId" element={<User />}/>
              <Route path="/newUser" element={<NewUser />}/>
              <Route path="/products" element={<ProductList />}/>
              <Route path="/products/:productId" element={<Product />}/>
              <Route path="/newProduct" element={<NewProduct />}/>

            </Route>
          </Routes>
    </div>
  );

  return (appAdmin);  
}

export default App;
