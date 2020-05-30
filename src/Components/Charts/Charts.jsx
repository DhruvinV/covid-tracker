import React,{useState,useEffect} from 'react';
import {getDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'

const Charts = ({data,country}) =>{
    const [dailyData,setDailyData] = useState([])
    useEffect (() => {
        const asynCode = async () => {
            setDailyData(await getDailyData());
        }
        asynCode();
        // console.log(dailyData.map(({ confirmed })=>confirmed))
    },[]);
    console.log(data,country)
    const lineChart = (
        dailyData[0] 
        ? (
        <Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data: dailyData.map((data)=>data.confirmed),
                label:'Infected',
                borderColor: '#ffce56',
                // backgroundColor:'#fef6a5',
                fill: true,
            },{
                data: dailyData.map((data)=>data.deaths),
                label:'Deaths',
                borderColor: '#ff6384',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true, 
            },
        ],

        }}
        />
        ): null
    );
    const barChar =  (
        data 
        ?(
            <Bar
            data = {{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor:['rgba(245, 12, 233, 0.5)','rgba(11, 209, 133, 0.5)','rgba(255,0,0, 0.5)'],
                    data:[data.Confirmed,data.Recovered,data.Deaths]

                }]
            }}
            options={{
                legend: {display: false},
                title:{display: true,text:`Covid-19 situation in ${country}`}
            }}
            
            
            
            />


        ): null

    )
    return(
       <div className={styles.container}>
           {country ? barChar: lineChart}
           {/* {lineChart} */}
       </div>
    )
}
export default Charts;
