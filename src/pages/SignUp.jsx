import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import { Button } from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export const SignUp = () => {
  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [username, setuserName] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="Johndoe_12322@gmail.com"
            label={"username"}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <InputBox
            placeholder="John"
            label={"First Name"}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />
          <InputBox
            placeholder="Doe"
            label={"Last Name"}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
          <InputBox
            placeholder="johnDoe@gmail.com"
            label={"Email"}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <InputBox
            placeholder="1236"
            label={"Password"}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              label={"Sign up"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:4000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    email,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                localStorage.removeItem("token");
                navigate("/dashboard");
              }}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
