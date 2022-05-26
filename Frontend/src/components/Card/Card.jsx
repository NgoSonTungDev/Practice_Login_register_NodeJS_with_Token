import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  const navigation = useNavigate()
  const item = props.datacart;

  const handlemovebookroom = () =>{
    navigation(`/home/bookroom/${item.maphong}`)
  }

  const handlemovereturnroom = () =>{
    navigation(`/home/returnroom/${item.maphong}`)
  }

  return (
    <div>
      <div className="card-home">
        <div className="card_home_img">
          <img src={item.anh} alt="" />
        </div>
        <div className="card_home_content">
          <p>Mã Phòng : {item.maphong}</p>
          <p>Loại Phòng : {item.loaiphong}</p>
          <p>
            Người ở : {item.songuoithue}/{item.songuoio} (người)
          </p>
          <p>
            Trạng thái : {item.trangthai}{" "}
            <i
              style={{ color: `${item.mautrangthai}` }}
              class="fa-solid fa-person-walking-luggage"
            ></i>
          </p>
          <p>
            giá : <span>{item.gia}</span>$/Đêm
          </p>
          <div className="card_home_content_1">
            <p>Tình Trạng :</p>
            <div
              className="tinhtrnag"
              style={{ backgroundColor: `${item.mautinhtrang}` }}
            ></div>
          </div>
          <div className="card_home_content_buton">
            {item.songuoithue === 0 && <button onClick={handlemovebookroom}>Đặt Phòng</button>}
            {item.songuoithue >= 1 && <button onClick={handlemovereturnroom}>Trả Phòng</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
