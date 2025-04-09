import React from "react";
import vitelogo from "./assets/insta logo.png"
const ProfileCard =({profile}) => {
  return (
    <div style={{
        border: "3px solid black",
        margin:"300px auto",
        width:"500px",
        height:"300px",
        textAlign:"center",


    }}>
        <div>
            <img
            style={{border: "2px solid white",borderRadius: "50%",width: "70px",height: "70px"}}
            src={vitelogo}/>
        </div>
        <div style={{
            paddingTop:"50px"
        }}>
      <div>
        <span>Name:</span>
        <span>{profile.name}</span>
      </div>
      <div>
        <span>Year:</span>
        <span>{profile.Year}</span>
      </div>
      <div>
        <span>Department:</span>
        <span>{profile.Department}</span>
      </div>
      <div>
        <span>mobile:</span>
        <span>{profile.mobile}</span>
      </div>
      <div>
        <span>address:</span>
        <span>{profile.address}</span>
      </div>
      </div>
    </div>
  );
};
export default ProfileCard;
