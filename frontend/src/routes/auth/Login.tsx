import { supabase } from "@/api/supabase";
import { Input } from "@/components/form/Input";
import { FormEvent, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data, error);
  };

  const getUser = async () => {
    const user = await supabase.auth.getUser();

    console.log(user);
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <Input label="Email" id="email" value={email} onChange={setEmail} />
        <Input
          label="Password"
          id="password"
          value={password}
          onChange={setPassword}
        />

        <button type="submit">Login</button>
      </form>

      <button onClick={getUser}>Get User</button>
    </div>
  );
};
