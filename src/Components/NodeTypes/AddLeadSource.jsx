import React, { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };

const AddLeadSource = ({ data }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  return (
    <>
      <div className="w-[200px] h-20 border border-[1.5px] border-black-100 bg-white flex flex-col items-center cursor-pointer hover:scale-105">
        <span className="text-2xl text-gray-500">+</span>
        <span className="text-sm font-semibold text-gray-500">
          Add Lead Source
        </span>
        <span className="text-[11px] font-medium text-gray-500">
          Click to add leads from list or CRM
        </span>
      </div>
    </>
  );
};

export default AddLeadSource;
