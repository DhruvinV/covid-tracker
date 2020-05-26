//  'use strict'
 const summaryUrl = 'https://api.covid19api.com/summary';
 import axios from 'axios';
 const url = 'https://covid19.mathdro.id/api';

export const getData = async () =>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
     let response = await fetch("https://api.covid19api.com/summary", requestOptions)
    let result = await response.json();
    // console.log(Global)
    // return {res}
    return result

}
export const getDailyData = async() =>{

try{
const {data} = await axios.get(`${url}/daily`)
console.log(data)
     
}catch(e){

}

}
