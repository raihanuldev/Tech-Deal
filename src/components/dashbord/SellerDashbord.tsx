import React from "react";

const SellerDashbord = () => {
  return (
    <div>
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            Dashbord| Buyer
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
    </div>
  );
};

export default SellerDashbord;
