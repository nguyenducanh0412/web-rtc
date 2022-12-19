import React, { useState, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserName } from "../../features/dashboardSlice";
import { registerNewUser } from "../../utils/wssConnection";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    startTransition(() => {
      setUserName(e.target.value);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserName(userName));
    registerNewUser(userName);
    navigate("/dashboard");
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundColor: "rgb(103, 232, 249)",
        backgroundImage:
          "radial-gradient(at 80% 38%, rgb(225, 29, 72) 0, transparent 48%), radial-gradient(at 91% 83%, rgb(22, 163, 74) 0, transparent 37%), radial-gradient(at 15% 57%, rgb(139, 92, 246) 0, transparent 49%), radial-gradient(at 85% 32%, rgb(253, 164, 175) 0, transparent 56%), radial-gradient(at 77% 57%, rgb(245, 208, 254) 0, transparent 2%), radial-gradient(at 46% 9%, rgb(185, 28, 28) 0, transparent 45%)",
      }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">VIDEO TALKER</h1>
        </div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white w-full font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Start using Video Talker
            </button>
          </div>
        </form>
        <p className="text-center text-white text-xs">
          &copy;2022 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
