import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";
import data from "../../asset/data";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [data1, setData] = useState([]);
  const [search, setsearch] = useState("");

  const [select, setSelect] = useState("");

  const setDataSelect = () => {
    setData(
      data.filter((item) =>
        item?.loaiphong?.toLowerCase()?.includes(select.toLowerCase())
      )
    );
  };

  const handelall = () => {
    setData(data);
  };

  const handlePs = () => {
    let s = "#2ecc71";
    setData(
      data.filter((item) =>
        item?.mautinhtrang?.toLowerCase()?.includes(s.toLowerCase())
      )
    );
  };

  const handlePsua = () => {
    let s = "#e84118";
    setData(
      data.filter((item) =>
        item?.mautinhtrang?.toLowerCase()?.includes(s.toLowerCase())
      )
    );
  };

  const handlePban = () => {
    let s = "#fbc531";

    setData(
      data.filter((item) =>
        item?.mautinhtrang?.toLowerCase()?.includes(s.toLowerCase())
      )
    );
  };

  const handeDango = () => {
    let s = "Đang Ở";
    setData(
      data.filter((item) =>
        item?.trangthai?.toLowerCase()?.includes(s.toLowerCase())
      )
    );
  };

  const handeDangden = () => {
    let s = "Chuẩn bị đến";
    setData(
      data.filter((item) =>
        item?.trangthai?.toLowerCase()?.includes(s.toLowerCase())
      )
    );
  };

  const handecbjdi = () => {
    let s = "Chuẩn Bị rời đi";
    setData(
      data.filter((item) =>
        item?.trangthai?.toLowerCase()?.includes(s.toLowerCase())
      )
    );
  };

  const handetrong = () => {
    let s = "Phòng Trống";
    setData(
      data.filter((item) =>
        item?.trangthai?.toLowerCase()?.includes(s.toLowerCase())
      )
    );
  };

  const handleSetSearch = () => {
    setData(
      data.filter((item) =>
        item?.maphong?.toLowerCase()?.includes(search.toLowerCase())
      )
    );
    setsearch("");
  };

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="contaier_home">
        <div className="contaier_home_control">
          <div className="contaier_home_control_1">
            <p>
              <i class="fa-solid fa-hotel"></i>
              <span>Sơ đồ Phòng </span>
            </p>
          </div>
          <div className="contaier_home_control_2">
            <p>Loại Phòng :</p>
            <select
              name="loai"
              id=""
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              onClick={setDataSelect}
            >
              <option value="">Tất cả</option>
              <option value="vip">Phòng VIP</option>
              <option value="thuong">Phòng Thường</option>
            </select>
            <p className="findroom">Tìm Phòng :</p>
            <input
              type="text"
              placeholder="Mã phòng cần tìm"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <div onClick={handleSetSearch} className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="contaier_home_control_3">
            <p>Trạng Thái Phòng :</p>
            <div className="contaier_home_control_3_1">
              <button onClick={handelall}>Tất Cả</button>
              <button onClick={handeDangden}>
                <i class="fa-solid fa-person-walking-luggage"></i> Chuẩn bị đến
                (2)
              </button>
              <button onClick={handeDango}>
                <i class="fa-solid fa-person-walking-luggage"></i> đang ở (5)
              </button>
              <button onClick={handecbjdi}>
                <i class="fa-solid fa-person-walking-luggage"></i> chuẩn bị rời
                đi (5)
              </button>
              <button onClick={handetrong}>
                <i class="fa-solid fa-person-walking-luggage"></i> Phòng trống
                (12)
              </button>
              <button onClick={handlePs}>
                <i class="fa-solid fa-hand-sparkles"></i> Phòng sạch (10)
              </button>
              <button onClick={handlePban}>
                <i class="fa-solid fa-broom"></i> Phòng bẩn (2)
              </button>
              <button onClick={handlePsua}>
                <i class="fa-solid fa-screwdriver-wrench"></i> Phòng đang sửa
                (3)
              </button>
            </div>
          </div>
        </div>
        <div className="contaier_home_content">
          {data1.map((item) => (
            <Card datacart={item}></Card>
          ))}
        </div>
        <div className="contaier_home_navigation">
          <Stack spacing={2}>
            <Pagination count={10} size="large" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Home;
