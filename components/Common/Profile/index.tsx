import React from "react";
import { ProfileViewMap } from "../Header/HeaderUtils";

type Props={
  defaultValue:string;
}
const ProfileComponent = ({ defaultValue }:Props) => {
  const Renderer = ProfileViewMap[defaultValue];
  return (
    <>
      <Renderer />
    </>
  );
};
export default ProfileComponent;
