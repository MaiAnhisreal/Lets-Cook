"use client";
import { FC } from "react";
import InputLoginForm from "./input";
import { useAuthen } from "@/hook/use-authen";

interface ILoginFormProps {
  className?: string;
}

const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const { gmailValue, setGmailValue, passValue, setPassValue } = useAuthen();

  return (
    <div>
      <InputLoginForm
        label="Email"
        value={gmailValue}
        placeholder="***@gmail.com"
        type="email"
        onChange={(value) => setGmailValue(value)}
      />
      <InputLoginForm
        label="Password"
        value={passValue}
        placeholder="**********"
        type="password"
        onChange={(value) => setPassValue(value)}
        icon="hide-eyes"
      />
    </div>
  );
};
export default LoginForm;
