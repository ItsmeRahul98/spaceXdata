import React from "react";
import "./Card.scss";

const Card = (props) => {
  let { item } = props;
  return (
    <div className="cardMain">
      <div className="imgSec">
        <img src={item.links.mission_patch} alt="Mission Picture" />
      </div>
      <div className="detailSec">
        <h3 className="missionName"> {item.mission_name} </h3>
        <h4 className="missionName number"> {item.flight_number} </h4>
        <div>
          <b>Mission Ids</b>
          <ul>
            <li className="boldTxt">{item.mission_id != "" ? item.mission_id : '-'} </li>
          </ul>
        </div>
        <b>
          launch year: <span className="lightTxt">{item.launch_year}</span>
        </b>
        <b>
          Successful launch: <span className="lightTxt">{typeof item.launch_success === "boolean" ? item.launch_success.toString() : '-'}</span>
        </b>
        <b>
          Successful landing: <span className="lightTxt">{typeof item.land_success === "boolean" ? item.launch_landing.toString() : '-'}</span>
        </b>
      </div>
    </div>
  )
};

export default Card;
