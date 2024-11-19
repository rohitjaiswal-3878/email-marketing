import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md">
        {children}
      </div>
    </>
  );
};

export default Modal;
