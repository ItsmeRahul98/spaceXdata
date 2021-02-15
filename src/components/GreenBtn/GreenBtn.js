import React from "react";
import "./GreenBtn.scss";

const GreenBtn = (props) => {
    let { title } = props;
    return (<div className="btnMain">
        <button className="greenBtn" onClick={() => props.onClick()}>
            {title}
        </button>
    </div>)
};

export default GreenBtn;
