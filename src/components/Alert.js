import React from "react";

export default function Alert(props) {
  const capitalise = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px", textAlign: "right" }}>
      {props.alert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          style={{ display: "inline-block", marginRight: "0" }}
        >
          <strong>{capitalise(props.alert.type)}</strong> :{" "}
          {capitalise(props.alert.msg)}
        </div>
      )}
    </div>
  );
}
