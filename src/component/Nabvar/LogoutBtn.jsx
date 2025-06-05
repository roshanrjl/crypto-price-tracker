import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authslice";
import { Navigate } from "react-router-dom"; // ✅ Correct


function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());

    return <Navigate to="/" replace />;
  };
  return (
    <button
      type="button"
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-700 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
