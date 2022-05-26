import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(true);
  const navigation = useNavigate();

  const handleuser = () => {
    var box = document.querySelector(".container_narbar_content_2");
    if (check === true) {
      box.style.display = "block";
      setCheck(false);
    } else {
      box.style.display = "none";
      setCheck(true);
    }
  };

  const handlequanly = () => {
    var quanly = document.querySelector(".quanly");
    if (check2 === true) {
      quanly.style.height = "360px";
      quanly.style.transition = "0.2s linear";
      setCheck2(false);
    } else {
      quanly.style.height = "0";
      quanly.style.transition = "0.2s linear";
      setCheck2(true);
    }
  };

  const moveHome = () => {
    navigation("/home");
  };

  const moveQLNV = () => {
    navigation("/staff-management");
  };

  const moveQLTK = () => {
    navigation("/AccountManagement");
  };

  return (
    <div>
      <div className="container_narbar">
        <div className="container_narbar_logo">
          <img
            src="https://st2.depositphotos.com/5486388/8161/v/950/depositphotos_81616810-stock-illustration-hotel-logo-template.jpg"
            alt=""
          />
          <p>khách sạn tiger</p>
        </div>
        <div className="container_narbar_content">
          <div className="container_narbar_content_1">
            <ul>
              <li onClick={moveHome}>Trang Chủ</li>
              <li onClick={handlequanly}>
                Quản lý{" "}
                <div className="quanly">
                  <ul>
                    <li onClick={moveQLNV}>Quản lý nhân viên</li>
                    <li onClick={moveQLTK}>Quản lý khách hàng</li>
                    <li onClick={moveQLTK}>Quản lý phòng</li>
                    <li onClick={moveQLTK}>Quản lý dịch vụ</li>
                    <li onClick={moveQLTK}>Quản lý tiện nghi</li>
                    <li onClick={moveQLTK}>Quản lý hệ thống</li>
                    <li onClick={moveQLTK}>Quản lý tài khoản</li>
                  </ul>
                </div>
              </li>
              <li
                onClick={() => {
                  navigation("/salary-management");
                }}
              >
                Quản lý lương
              </li>
              <li
                onClick={() => {
                  navigation("/statistical");
                }}
              >
                Báo cáo/thống kê
              </li>
            </ul>
          </div>
          <div className="container_narbar_content_name">
            <p>Nguyen van A</p>
          </div>
          <div className="container_narbar_content_user" onClick={handleuser}>
            <div className="container_narbar_content_2">
              <div className="arrow-up"></div>
              <div className="container_narbar_content_2_1">
                <i class="bx bx-message-dots"></i>
                <p> đóng góp & ý kiến</p>
              </div>
              <div className="container_narbar_content_2_1">
                <i class="fa-solid fa-user-lock"></i>
                <p> quyền riêng tư</p>
              </div>
              <div className="container_narbar_content_2_1">
                <i class="bx bx-question-mark"></i>
                <p> trợ giúp</p>
              </div>
              <div className="container_narbar_content_2_1">
                <i class="fa-solid fa-gear"></i>
                <p> cài đặt</p>
              </div>
              <Link to="/">
                <div className="container_narbar_content_2_1">
                  <i class="bx bx-log-out"></i>
                  <p> đăng xuất</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
