import { FaHome, FaShoppingCart, FaTree, FaWallet } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-green-100">
        <ul className="menu p-4">
          <>
            <li>
              <NavLink to="/products/allProducts">
                <FaHome />
                All Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/products/addProduct">
                <FaTree />
                Add Product
              </NavLink>
            </li>

            <li>
              <NavLink to="/products/cart">
                <FaShoppingCart />
                My Cart
              </NavLink>
            </li>

            <li>
              <NavLink to="/products/paymentHistory">
                <FaWallet />
                Payment History
              </NavLink>
            </li>
          </>
          {/* shared nav links */}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/categoryList/categories">
              <GiHamburgerMenu />
              Categories
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
