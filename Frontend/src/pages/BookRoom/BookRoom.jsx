import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookRoom.scss";
import data from "../../asset/data";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../../components/Navbar/Navbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BookRoom = () => {
  const location = useLocation();
  const maphong = location.pathname.split("/home/bookroom/")[1];
  const dataRoom = data.find((e) => e.maphong === maphong);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/home");
    }, 1500);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Navbar/>
      <div className="container_bookroom">
        <div className="form_book_room">
          <div className="tieude">
            <div className="tieude_1"></div>
            <div className="tieude_2">
              <div className="tieude_2_1"></div>
              <div className="tieude_2_2">
                <p>ĐẶT PHÒNG</p>
              </div>
              <div className="tieude_2_3"></div>
            </div>
          </div>
          <div className="form_book_room_2">
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Name :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <input type="text" required placeholder="First Name" />
                <input type="text" required placeholder="Last Name" />
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Citizen ID or identity card :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <input type="number" required placeholder="ex: 2093789874" />
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>E-mail :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <input className="emailinput"  type="Email" required placeholder="ex: myname@example.com" />
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Number Phone :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <input type="number" required placeholder="ex: 2093789874" />
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Room Code & Customer Type :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <h3>{dataRoom.maphong}</h3>
                <select name="" id="">
                  <option value="" >Regular customers</option>
                  <option value="" >VIP customers</option>
                </select>
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Room Type :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <h3>{dataRoom.loaiphong}</h3>
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Number of Guests :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <input type="number" min={1} />
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Arrival Date :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <input type="date" />
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Date of leaving :</p>
              </div>
              <div className="form_book_room_2_1_2">
                <input type="date" />
              </div>
            </div>
            <div className="form_book_room_2_1">
              <div className="form_book_room_2_1_1">
                <p>Service :</p>
              </div>
              <div className="form_book_room_2_1_2_checkbox">
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label for="vehicle1"> Dịch vụ giặt ủi quần áo</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label for="vehicle1"> Dịch vụ xe đưa đón sân bay</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label for="vehicle1"> Nhà hàng</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label for="vehicle1"> Dịch vụ hội họp, văn phòng.</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" /> 
                <label for="vehicle1"> Quầy bar</label><br />
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label for="vehicle1"> Dịch vụ Spa.</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label for="vehicle1"> Fitness center.</label>
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label for="vehicle1"> Sân golf và sân tennis.</label>
              </div>
            </div>
          </div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Đặt phòng thành công !!!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default BookRoom;
