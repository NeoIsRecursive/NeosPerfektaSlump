import { supabase } from "@/api/supabase";
import { Input } from "@/components/form/Input";
import { FormEvent, useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:5173",
      },
    });

    if (error) {
      alert(error.message);
    }

    console.log(data, error);
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <Input label="Email" id="email" value={email} onChange={setEmail} />
        <Input
          label="Password"
          id="password"
          value={password}
          onChange={setPassword}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
