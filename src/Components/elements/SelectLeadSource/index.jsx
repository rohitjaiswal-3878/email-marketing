import React from "react";
import Modal from "../Modal";

const SelectLeadSource = () => {
  return (
    <Modal>
      <div className="w-[500px] h-[400px] rounded-md bg-gray-100">
        <div className="flex justify-end border-b-[1.5px] pb-2">
          <span className="h-5 w-5 border border-[1.5px] border-red-500 mr-2 mt-2 flex justify-center items-center text-red-500 rounded-sm cursor-pointer">
            x
          </span>
        </div>
        <div className="px-4 py-2">
          <span className="text-[14px] font-bold text-gray-600">Outreach</span>
          <div className="">
            <div className="h-16 w-[45%] border border-[1.5px] rounded-md bg-white p-3 flex gap-2">
              <div className="w-[22%] h-[100%] flex justify-center items-center rounded-md border-[1.5px] bg-[#DDC4F5] border-[#ceb4ed]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#8E57CF]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="w-70% flex-col flex">
                <span className="text-[13px] font-semibold text-gray-600 cursor-pointer">
                  Cold Email
                </span>
                <span className="text-[10px] text-gray-600">
                  Send an email to lead.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SelectLeadSource;
