import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (

    //Top navbar

    <div className="w-full py-4 bg-[blue] px-8 flex items-center justify-between">
      <h1 className="text-[white] font-bold text-xl ">
        AutoSave <span className="text-sm">Text Editor</span>
      </h1>
      <div className="text-[white] flex gap-4 items-center">
        <AccountCircleIcon style={{ fontSize: "35px" }} />
        <div>
          <h1 className="font-bold mb-[-5px]">UserName</h1>
          <span className="text-xs">Jaisonjoshi2001@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
