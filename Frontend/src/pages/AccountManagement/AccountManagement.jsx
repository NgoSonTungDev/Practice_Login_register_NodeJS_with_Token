import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AccountManagement.scss";

const dataAccound = [
  {
    id: "627e71bf3a57bbfa3337d4fb",
    staffCode: "3453453467",
    passWord: "(Pass đã mã hóa)",
    userName: "Ngô Sơn Tùng",
    decentralization: "Quản lý",
  },
  {
    id: "627faa1d736e97230f441a22",
    staffCode: "208443094",
    passWord: "(Pass đã mã hóa)",
    userName: "Trần Phước Trung Tuấn",
    decentralization: "Quản lý",
  },
  {
    id: "627faa22736e97230f441a24",
    staffCode: "435435563",
    passWord: "(Pass đã mã hóa)",
    userName: "Phan Tấn Phú",
    decentralization: "Quản lý",
  },
  {
    id: "627faa27736e97230f441a26",
    staffCode: "344234643",
    passWord: "(Pass đã mã hóa)",
    userName: "Ngô Văn Hiếu",
    decentralization: "Quản lý",
  },
  {
    id: "6280d57c5924398eb4ade71d",
    staffCode: "982374323",
    passWord: "(Pass đã mã hóa)",
    userName: "Võ Thị Mai Thi",
    decentralization: "Nhân viên",
  },
  {
    id: "6280edb9202493ec3e258e45",
    staffCode: "90284343903",
    passWord: "(Pass đã mã hóa)",
    userName: "Nguyễn Quỳnh MY",
    decentralization: "Nhân viên",
  },
  {
    id: "6280edb9202493ec3e258e45",
    staffCode: "90283443903",
    passWord: "(Pass đã mã hóa)",
    userName: "Nguyễn Thị Thu thảo",
    decentralization: "Nhân viên",
  },
  {
    id: "6280edb9202493ec3e258e45",
    staffCode: "902843903",
    passWord: "(Pass đã mã hóa)",
    userName: "nguyễn thi bích phương",
    decentralization: "Nhân viên",
  },
  {
    id: "6280edb9202493ec3e258e45",
    staffCode: "2398509239",
    passWord: "(Pass đã mã hóa)",
    userName: "Nguyễn Quỳnh MY",
    decentralization: "Nhân viên",
  },
  {
    id: "6280edb9202493ec3e258e45",
    staffCode: "3453336564",
    passWord: "(Pass đã mã hóa)",
    userName: "Lê tiến tài",
    decentralization: "Nhân viên",
  },
  {
    id: "6280edb9202493ec3e258e45",
    staffCode: "325235232",
    passWord: "(Pass đã mã hóa)",
    userName: "Phạm quốc tài",
    decentralization: "Nhân viên",
  },
  {
    id: "6280edb9202493ec3e258e45",
    staffCode: "325345325",
    passWord: "(Pass đã mã hóa)",
    userName: "Phạm Thị Thu Sương",
    decentralization: "Nhân viên",
  },
];

const AccountManagement = () => {

  return (
    <div>
      <Navbar />
      <div className="container_AccountManagement">
        <div className="container_AccountManagement_text">
          <h2>Quản Lý Tài Khoản</h2>
          <div class="search_quanlytk">
            <input
              type="search"
              placeholder="Mã nhân viên cần tìm ..."
            />
          </div>
        </div>
        <div className="container_AccountManagement_table">
          <table>
            <tr>
              <th>ID</th>
              <th>tên đăng nhập</th>
              <th>Mật Khẩu</th>
              <th>Tên Người Dùng</th>
              <th>Phân Quyền</th>
              <th>Chức năng</th>
            </tr>
            {dataAccound.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.staffCode}</td>
                <td>{item.passWord}</td>
                <td>{item.userName}</td>
                <td>{item.decentralization}</td>
                <td>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i>{" "}
                    <span>Chính Sửa</span>
                  </button>
                  <button>
                    <i class="bx bxs-trash"></i> <span>Xóa</span>
                  </button>
                  <button>
                    <i class="bx bxs-user-x"></i> <span>Đình Chỉ</span>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
