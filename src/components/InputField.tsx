import React from "react";
import "../App.css";
import VirtualKey from "./VirtualKey";
import Picture from "./Picture";

interface InputProps {
  pin: string;
}

export default function InputField(props: InputProps) {
  let [value, changeValue] = React.useState("");
  let [pic, changeStatePic] = React.useState(false);
  let [alert, changeStateAlert] = React.useState(false);

  React.useEffect(() => {
    ShowPicture();
    InputRef.focus();
  });

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function changeInput(keyValue: string) {
    if (value.length <= props.pin.length) {
      if (alert === true) {
        changeStateAlert((alert) => !alert);
      }
      changeValue(value + keyValue);
    }
  }

  let InputRef: any = null;

  function ShowPicture() {
    console.log(value);
    if (value === props.pin && pic === false) {
      changeStatePic((pic) => !pic);
    } else if (value.length > props.pin.length) {
      changeValue("");
      hidepicture();
    } else if (value.length === 4 && value !== props.pin) {
      changeValue("");
      changeStateAlert((alert) => !alert);
    }
  }

  function hidepicture() {
    if (pic === true) {
      changeStatePic(!pic);
      changeValue("");
    }
  }
  let renderMessage;
  if (alert) {
    renderMessage = <p className="message"> Invalid PIN :(</p>;
  } else {
    renderMessage = <p></p>;
  }
  return (
    <div className="main-container">
      <div className="input-container">
        <div className="input-wrapper">
          {renderMessage}
          <input
            ref={(input) => {
              InputRef = input;
            }}
            type="text"
            id="input-field"
            value={value}
            autoFocus
            readOnly
            onKeyDown={(e) => {
              e.preventDefault();
              if (numbers.includes(+e.key)) {
                changeInput(`${e.key}`);
              } else if ((e.key = "Backspace")) {
                changeValue(value.slice(0, -1));
              }
            }}
          ></input>
          <div className="keyboard">
            <div className="row">
              <VirtualKey value="1" changeInput={changeInput} />
              <VirtualKey value="2" changeInput={changeInput} />
              <VirtualKey value="3" changeInput={changeInput} />{" "}
            </div>
            <div className="row">
              <VirtualKey value="4" changeInput={changeInput} />
              <VirtualKey value="5" changeInput={changeInput} />
              <VirtualKey value="6" changeInput={changeInput} />{" "}
            </div>
            <div className="row">
              <VirtualKey value="7" changeInput={changeInput} />
              <VirtualKey value="8" changeInput={changeInput} />
              <VirtualKey value="9" changeInput={changeInput} />
            </div>
            <div className="row">
              <VirtualKey value="0" changeInput={changeInput} />
            </div>
          </div>
        </div>
      </div>
      <Picture show={pic} hide={hidepicture} />
    </div>
  );
}
