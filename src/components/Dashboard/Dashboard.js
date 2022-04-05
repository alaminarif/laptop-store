import React from 'react';
import MyAriaChart from '../MyAriaChart/MyAriaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './Dashboard.css';


const Dashboard = () => {
    return (
        <div className='charts'>
            <div>
            <MyLineChart></MyLineChart>
            <MyAriaChart></MyAriaChart>
            </div>
            <div>
            <MyBarChart></MyBarChart>
            <MyPieChart></MyPieChart>
          </div>
       </div>
    );
};

export default Dashboard;