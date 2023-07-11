import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/joy/Button";

function SignUp() {
  return (

    //SignUp page UI
    
    <div className="flex w-full">
      <div className="bg-[blue] relative w-[50%] h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl text-[white]">
          <span className="font-bold text-4xl">AutoSave</span>
          <br></br> Document Editor
        </h1>
        <p className="absolute bottom-[10rem] w-[60%] text-center text-[white]">
          Autosae is available to assist you in creating and editing documents
          online, providing convenient access from anywhere.
        </p>
      </div>
      <div className="bg-[white] relative w-[50%] flex justify-center items-center">
        <div className="w-[50%]">
          <h1 className="font-bold text-3xl mb-10 ">Hello Again!</h1>
          <form action="" className="flex flex-col gap-3">
            <TextField id="outlined-basic" label="Name" variant="outlined" />

            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
            />
            <Button>SignUp</Button>
          </form>
          <p className="mt-12">
            Already have an account?{" "}
            <span className="text-[blue] cursor-pointer">Login</span> now
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
