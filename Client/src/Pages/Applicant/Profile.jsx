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
      <div className="m-5 bg-white p-3 rounded-3xl w-[85%]">
        <div className="sticky top-0 bg-white z-10 shadow-md flex justify-between items-center px-6 py-5 w-full">
          <div className="flex gap-3">
            <h3 className="text-black text-xl font-semibold">Profile</h3>
          </div>

          <div className="flex gap-3 items-center">
            {/* <IoMdNotifications color="white" /> */}
            <pre className="text-black">{email}</pre>
          </div>
        </div>

        <hr />

        {/* Profile Content */}
        <div className="flex-grow text-black p-8 flex flex-col gap-5">
          <ProfileInfo />
        </div>
      </div>
    </>
  );
};
