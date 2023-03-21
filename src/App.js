import React, { useContext } from "react";
import { UserContext } from "./components/UserContext";

export default function UserProfile() {
  const users = useContext(UserContext);
  
  return (
    <div>
      {users.map((user) => (
        <li key={user.name}>
          I am {user.name} and I am a {user.occupation}!
        </li>
      ))}
    </div>
  );
}
