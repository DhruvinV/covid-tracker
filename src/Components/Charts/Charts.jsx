import React,{useState,useEffect} from 'react';
import {getDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2';
const Charts = () =>{

    const [dailyData,setDailyData] = useState({})
    useEffect (() =>{
        const asynccode = async () => {
            setDailyData(await getDailyData());
        }
        asynccode();
    })
    return(
        <h1>Charts</h1>
    )
}
export default Charts;
