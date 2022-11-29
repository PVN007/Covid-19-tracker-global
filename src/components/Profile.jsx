import React from "react";
import image from "../images/babul.jpg";
import image2 from "../images/pavan.jpeg";
import image3 from "../images/ankit.jpeg";
import image4 from "../images/salj.jpeg";
import image5 from "../images/sashi.jpeg";
import "../components/profile.css";

const Profile = () => {
  return (
    <>
      <h4>Devlopers</h4>
      <div className="box">
        <div className="card">
          <img className="babul" src={image} alt="profile" />
          <div className="text">
            <h3>Babul Kumar</h3>
            <p>Enroll:0103CA191020</p>
            <p>Branch:MCA(4thSem)</p>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="profile" />
          <div className="text">
            <h3>Pavan chaurasia</h3>
            <p>Enroll:0103CA191043</p>
            <p>Branch:MCA(4thSem)</p>
          </div>
        </div>
        <div className="card">
          <img className="sal" src={image3} alt="profile" />
          <div className="text">
            <h3>Ankit Anand</h3>
            <p>Enroll:0103CA191010</p>
            <p>Branch:MCA(4thSem)</p>
          </div>
        </div>
        <div className="card">
          <img src={image4} alt="profile" />
          <div className="text">
            <h3>Shailja Tiwari</h3>
            <p>Enroll:0103CA191056</p>
            <p>Branch:MCA(4thSem)</p>
          </div>
        </div>
        <div className="card">
          <img src={image5} alt="profile" />
          <div className="text">
            <h3>Shashi Kumar sant</h3>
            <p>Enroll:0103CA191057</p>
            <p>Branch:MCA(4thSem)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
