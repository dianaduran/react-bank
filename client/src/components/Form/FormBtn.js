import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10, backgroundColor:"#183319", borderColor:"#183319", fontSize:19, width:"50%",
  fontFamily:"unset" }} className="btn btn-success">
    {props.children}
  </button>
);
