import React from "react";
import Header from "../components/Header";

const Settings = () => {
  const userSettings = {
    userName: "Zahra",
    email: "zahrabazrgari@outlook.com",
    teamName: "un employed",
    roleName: "Develpoer",
  };

  const labelStyles = "block text-sm font-medium dark:text-white";
  const textStyles =
    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

  return (
    <div className="p-8">
      <Header name="Setttings" />
      <div className="space-y-4">
        <div>
          <label className={labelStyles}>User Name</label>
          <div className={textStyles}>{userSettings.userName}</div>
        </div>

        <div>
          <label className={labelStyles}>Email</label>
          <div className={textStyles}>{userSettings.email}</div>
        </div>

        <div>
          <label className={labelStyles}>Team Name</label>
          <div className={textStyles}>{userSettings.teamName}</div>
        </div>

        <div>
          <label className={labelStyles}>Role Name</label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
