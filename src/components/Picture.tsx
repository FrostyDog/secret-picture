import React from "react";
import "../App.css";

interface picProps {
  show: boolean;
  hide: () => void;
}

function Picture(props: picProps) {
  let renderPic;
  if (props.show) {
    renderPic = (
      <div className="secret-wrapper">
        <div className="image-wrapper">
          <img src="./images/secret.jpg" alt="secret" />
        </div>
        <div className="hide-button" onClick={props.hide}>
          {" "}
          Hide Picture
        </div>
      </div>
    );
  } else {
    renderPic = <div></div>;
  }

  return <div className="secret-container">{renderPic}</div>;
}

export default Picture;
