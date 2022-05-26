import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./QlLuong.scss";
import { dataQLluong } from "./data";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Qlluong = () => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [data, setData] = useState(dataQLluong);
  const [open, setOpen] = useState(false);
  const [story, setStory] = useState("");
  const [mesege, setMesege] = useState("");

  var box = document.querySelector(".qlluong-modal");
  var update = document.querySelector(".btn-update");

  const clickbox = () => {
    box.style.display = "block";
  };

  React.useEffect(() => {
    setData(dataQLluong);
  }, []);

  const handleClose = () => {
    box.style.display = "none";
  };

  const handleSearch = () => {
    setSearch("");
    if (dataQLluong.find((item) => item.mnv === search)) {
      box.style.display = "block";
      setData(dataQLluong.find((item) => item.mnv === search));
    } else {
      setMesege("Không tìm thấy nhân viên!!!");
      setStory("error");
      handleClick();
    }
  };

  //
  const handleSearchEmployees = () => {
    const newArr = dataQLluong.filter((item) =>
      item?.name?.toLowerCase()?.includes(search.toLowerCase())
    );
    setData(newArr);
  };

  const handleFillSearchEmployees = (val) => {
    setSearch(val)
    if(val === '') {
      setData(dataQLluong)
    }
  }
  //

  const handleClick = () => {
    setOpen(true);
  };

  const handleCloseDelete = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClickDelete = () => {
    handleClick();
    setMesege("Delete successfully!!!");
    setStory("success");
  };

  const handleClickUpdateClose = () => {
    update.style.display = "none";
  };

  const handleClickUpdate = () => {
    update.style.display = "block";
  };

  const hamdleCloseUpdate = () => {
    handleClick();
    setMesege("Update successfully!!!");
    setStory("success");
    handleClose();
  };
  
  // const handleDeleteEmployee = () => {
    
  // }

  return (
    <div>
      <Navbar />

      <div className="qlluong-container">
        <div className="qlluong-header">
          <h3 className="qlluong-title">Quản Lý Lương</h3>
          <div className="qlluong-search">
            <input
              value={search}
              // onChange={(e) => {
              //   setSearch(e.target.value);
              // }}
              onChange={(e) => {
                handleFillSearchEmployees(e.target.value)
              }}
              type="text"
              className="qlluong-input"
              placeholder="Nhập tên nhân viên cần tìm kiếm ......"
            />
            <i
              class="fa-solid fa-magnifying-glass qlluong-icon"
              onClick={handleSearchEmployees}
            ></i>
          </div>
        </div>

        <div className="qlluong-table">
          <table>
            <tr>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Số ngày</th>
              <th>Ngày nghỉ</th>
              <th>Ngày công</th>
              <th>Thành tiền</th>
              <th className="chucnang">Chức năng</th>
            </tr>
            {data.map((item) => (
              <tr>
                <td>{item.mnv}</td>
                <td>{item.name}</td>
                <td>{item.daywork}</td>
                <td>{item.dayoff}</td>
                <td>{item.day}</td>
                <td>{item.price}</td>
                <td className="function-table-qlluong">
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      clickbox();
                      handleClickUpdateClose();
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      clickbox();
                      handleClickUpdate();
                    }}
                  >
                    Update
                  </button>
                  <button onClick={handleClickDelete}>Delete</button>
                </td>
              </tr>
              // <QlluongTable dataTable={item} />
            ))}
          </table>
        </div>

        <div className="qlluong-modal">
          <div className="qlluong-modal-child">
            <div className="qlluong-child-close" onClick={handleClose}>
              <i class="fa-solid fa-xmark "></i>
            </div>
            <div className="qlluong-content-title">
              <h2>Thông tin nhân viên</h2>
            </div>

            <div className="qlluong-content">
              <div className="qlluong-content-img">
                <img src={selectedItem.image} alt="" />
              </div>

              <div className="qlluong-content-information">
                <div className="qlluong-content-detail">
                  <p>Mã nhân viên: {selectedItem.mnv}</p>
                  <p>Tên nhân viên: {selectedItem.name}</p>
                  <p>Số ngày: {selectedItem.daywork}</p>
                  <p>Ngày nghỉ: {selectedItem.dayoff}</p>
                  <p>Ngày công: {selectedItem.day}</p>
                  <p>Thành tiền: {selectedItem.price}</p>
                </div>

                <button className="btn-update" onClick={hamdleCloseUpdate}>
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>

        <Stack spacing={10} sx={{ width: "100%" }}>
          <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleCloseDelete}
          >
            <Alert
              onClose={handleCloseDelete}
              severity={story}
              sx={{ width: "100%" }}
            >
              {mesege}
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
};

export default Qlluong;
