"use client";
import React from "react";
import StatusBar from "./Components/StatusBar";
import ProfileHeader from "./Pages/ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import PostsList from "./PostsList";

const ProfilePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <ProfileHeader />
      <ProfileInfo />
      <PostsList />
    </main>
  );
};

export default ProfilePage;
