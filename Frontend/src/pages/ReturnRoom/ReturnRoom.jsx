import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../../asset/data";
import Navbar from "../../components/Navbar/Navbar";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./ReturnRoom.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ReturnRoom = () => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(true);

  const location = useLocation();
  const maphong = location.pathname.split("/home/returnroom/")[1];
  const dataRoom = data.find((e) => e.maphong === maphong);

  const SumDate = dataRoom.gia * 5;

  const total = (SumDate + 80 + 24 + 10 + 90 + 222 + 122 + 290 + 1200) * 0.6;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmitReturn = () => {
    handleClick();
    var tableReturnRoom = document.querySelector(".form_return_room_content_hd");
    if (check === true) {
      tableReturnRoom.style.height = "530px";
      tableReturnRoom.style.transition = "1s linear"
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="container_returnroom">
        <div className="form_return_room">
          <div className="tieude">
            <div className="tieude_1"></div>
            <div className="tieude_2">
              <div className="tieude_2_1"></div>
              <div className="tieude_2_2">
                <p>TRẢ PHÒNG</p>
              </div>
              <div className="tieude_2_3"></div>
            </div>
          </div>
          <div className="form_return_room_content">
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Name :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <p>Nguyễn Văn A</p>
              </div>
            </div>

            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Number Phone :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <p>09876823329</p>
              </div>
            </div>
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Identity card :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <p>20698302984</p>
              </div>
            </div>
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Room Code :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <h3>{dataRoom.maphong}</h3>
              </div>
            </div>
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Room Type :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <h3>{dataRoom.loaiphong}</h3>
              </div>
            </div>
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Number of Guests :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <p>8</p>
              </div>
            </div>
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Arrival Date :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <p>20-5-2022</p>
              </div>
            </div>
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Date of leaving :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <p>25-5-2022</p>
              </div>
            </div>
            <div className="form_return_room_content_main">
              <div className="form_return_room_content_1">
                <p>Service used :</p>
              </div>
              <div className="form_return_room_content_1_1">
                <p>Dịch vụ giặt ủi quần áo</p>
                <p>Dịch vụ xe đưa đón sân bay</p>
                <p>Dịch vụ Spa</p>
                <p>Nhà hàng</p>
              </div>
            </div>
          </div>
          <button onClick={handleSubmitReturn}>Submit</button>
        </div>

        <div className="form_return_room2">
          <div className="tieude">
            <div className="tieude_1"></div>
            <div className="tieude_2">
              <div className="tieude_2_1"></div>
              <div className="tieude_2_2">
                <p>HÓA ĐƠN</p>
              </div>
              <div className="tieude_2_3"></div>
            </div>
          </div>
          <div className="form_return_room_content_hd">
            <p className="namecustomer">
              Nguyen Van A <span>20698302984</span>
            </p>

            <table className="tableReturnRoom">
              <tr>
                <th>Contents</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>Mã Phòng ({dataRoom.maphong})</td>
                <td>{dataRoom.gia}/đêm</td>
              </tr>
              <tr>
                <td>Số ngày ở (5) </td>
                <td>{SumDate}</td>
              </tr>
              <tr>
                <td>Rượi Vang</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Thùng bia Tiger</td>
                <td>24</td>
              </tr>
              <tr>
                <td>Pessi (5 lon)</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Dịch vụ giặt ủi quần áo</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Dịch vụ xe đưa đón sân bay</td>
                <td>222</td>
              </tr>
              <tr>
                <td>Dịch vụ Spa</td>
                <td>122</td>
              </tr>
              <tr>
                <td>Nhà hàng</td>
                <td>290</td>
              </tr>
              <tr>
                <td>Thuê du Thuyền</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>Thuế GTGT</td>
                <td>6%</td>
              </tr>
              <tr>
                <td>
                  <hr />
                </td>
                <td>
                  <hr />
                </td>
              </tr>
              <tr>
                <td className="total1">Total</td>
                <td className="total2">{total}</td>
              </tr>
            </table>
            <button>IN HÓA ĐƠN</button>
          </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Trả phòng thành công !!!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default ReturnRoom;
