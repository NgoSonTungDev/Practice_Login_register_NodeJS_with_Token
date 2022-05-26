import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    console.log("1",userName);
    console.log("2",password);
    console.log("3",email);

    axios
      .post("http://localhost:8000/api/auth/register", {
        username: userName,
        email: password,
        password: email,
      })
      .then(function (response) {
        setOpen(true);
        setMessage("Đăng Ký thành công !!!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(function (error) {
        setOpen(true);
        setMessage("Đăng Ký thất bại !!!");
      });
  };

  return (
    <div>
      <div className="container_register">
        <div className="container_register_form">
          <div class="container_register_form_1">
            <div class="container_register_form_2">
              <div class="welcome">Hello There!</div>
              <div class="subtitle">
                We're almost done. Before using our services you need to create
                an account.
              </div>
              <div class="input-fields">
                <input
                  type="text"
                  placeholder="Username"
                  class="input-line full-width"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                ></input>
                <input
                  type="password"
                  placeholder="password"
                  class="input-line full-width"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  class="input-line full-width"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Number phone"
                  class="input-line full-width"
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Address"
                  class="input-line full-width"
                  required
                ></input>
                <input
                  type="number"
                  placeholder="Citizen ID or identity card"
                  class="input-line full-width"
                  required
                ></input>
              </div>

              <div>
                <button class="ghost-round full-width" onClick={handleClick}>
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default Register;
