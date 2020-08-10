//  'use strict'
import axios from 'axios'; 
const summaryUrl = 'https://api.covid19api.com/summary';
const url = 'https://covid19.mathdro.id/api';

export const getDataFrom = async(country) =>{

    // const newUrl = `${url}/countrrs/${country}`
    if(country==='' || country  === 'global'){
        try{
            // console.log( await axios.get(summaryUrl))
            // console.log(await axios.get(url))
            const {data:{Global:{TotalConfirmed,TotalDeaths,TotalRecovered}}} = await axios.get(summaryUrl);
            // 
            return {Confirmed:TotalConfirmed,Deaths:TotalDeaths,Recovered:TotalRecovered}
        }catch(error){
            console.log(error)
        }
    }
    else{
    try{
        
        const {data:{Countries}} = await axios.get(summaryUrl);
        const {TotalConfirmed,TotalDeaths,TotalRecovered} = Countries.filter(function(d){return d.Country === country})[0]
        return  {Confirmed:TotalConfirmed,Deaths:TotalDeaths,Recovered:TotalRecovered}
        // return {confirmed,recovered,deaths} 
    }catch(error){
        console.log(error)
    }
    }
}
export const getDailyData = async() =>{

    try{
    const {data} = await axios.get(`${url}/daily`)
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    }catch(error){

    }

}

export const getCountries = async() =>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
        // console.log(error)
    }catch(error){
        
    }
}
