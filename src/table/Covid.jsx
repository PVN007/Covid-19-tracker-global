import React, { useEffect, useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
import Table from "./Table";

const Covid = () => {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise);
      setdata(actualData.statewise);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  });
  return (
    <div>
      <div className="card1">
        <img
          src={
            "https://thumbs.dreamstime.com/b/corona-virus-covid-black-white-background-177238608.jpg"
          }
          className="rotate"
          alt=""
        />
        <h1>LIVE</h1>
      </div>
      <h1>ALL STATE OF INDIA</h1>
      <div className="cards">
        <Table post={data} />;
      </div>
    </div>
  );
};

export default Covid;
