import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import QrCode from "../../images/dashbord/qr-code.png";
import Share from "../../images/dashbord/share.png";
import Copy from "../../images/dashbord/copy.png";
import "./DashboardStyles.css";
import { makeRequest, endpoints } from "../../api/endpoints";
import axios from "axios";

export default function Dashboard() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const tokenUser = JSON.parse(localStorage.getItem("userInfo"));
      const respo = await axios.get(endpoints.referred.url, {
        headers: {
          Authorization: `Bearer ${tokenUser.accessToken}`,
        },
      });
      console.log(respo);
    } catch (error) {}
  };

  // Sample Data for the table
  const dataSource = [
    { key: "1", username: "Gourav", connection: 10, profit: 20 },
    { key: "2", username: "Kartik", connection: 20, profit: 20 },
    { key: "3", username: "Madhu", connection: 30, profit: 30 },
    { key: "4", username: "Karu", connection: 40, profit: 30 },
    { key: "5", username: "Dinesh", connection: 50, profit: 40 },
  ];

  // Sample Columns data
  const columns = [
    {
      title: "Name ",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Connection Level",
      dataIndex: "connection",
      key: "connection",
    },
    {
      title: "Total Profit",
      dataIndex: "profit",
      key: "profit",
    },
  ];

  return (
    <div
      style={{
        display: "block",
        width: 900,
        padding: 30,
      }}
    >
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <img src={QrCode} />
        <h3>Invite friends,get paid</h3>
        <h5>Share this code </h5>
        <hr />
        <img src={Copy} />
        <img src={Share} />
      </div>

      <h4>My Network</h4>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
