import React from "react";

const SubmitButton = (props) => {
  return (
    <div className="container text-center">
      <button
        className="btn btn-primary mt-5 mb-5"
        style={{ background: "#98da1f" }}
        onClick={props.handleSubmit}
      >
        Sort By First Name
      </button>
    </div>
  );
};

export default SubmitButton;