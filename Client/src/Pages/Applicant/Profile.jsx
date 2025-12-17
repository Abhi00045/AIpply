import { IoMdNotifications } from "react-icons/io";
import { HeaderCard } from "../../Components/Header-card";
import { ResumeSocialCard } from "../../Components/Resume+Social-card";
import { ProfileInfo } from "./Profile-info";
import { useState, useEffect } from "react";

export const Profile = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    if (userEmail) {
      const user = JSON.parse(userEmail);
      setEmail(user.email);
    }
  }, []);

  return (
    <>
    <ProfileInfo />
    </>
  );
};
