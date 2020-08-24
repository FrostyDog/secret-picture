import React from "react";
import "../App.css";

interface KeyProps {
  value: string;
  changeInput: (params: string) => void;
}

function VirtualKey(props: KeyProps) {
  return (
    <div className="key" onClick={() => props.changeInput(props.value)}>
      {props.value}
    </div>
  );
}

export default VirtualKey;
