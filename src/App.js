import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {StyleSheet,css} from 'aphrodite'; 
import {getDataFrom} from './api';
import axios from 'axios'; 
import {Cards,Charts,CountryPicker} from './Components';
const url2 = 'https://covid19.mathdro.id/api'
// import styles from './App.module.css'

function App() {

  const[currData,setData] = useState({
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0,
  })
  const [country,setCountry] = useState('')

  useEffect(() =>{
    const fetchedData = async() =>{
      try {
        setData(await getDataFrom(country))
      }catch(error){
        // const {data:{confirmed,recovered,deaths}} = await axios.get(url)
        // return {Confirmed: confirmed.value,Deaths: deaths.value,Recovered:recovered.value}
        console.log("Ewew",error,"323")
      }
    }
    fetchedData()
  },[setData,country])

  // useEffect(() =>{
  //   const fetchedData = async() =>{
  //     try{
  //       setData(awa)
  //     }
  //   }
  // },[country])

    
  return (
    <div className={css(styles.container)}>
      <Cards data={currData}/>
      <CountryPicker setCountry={setCountry}/>
      <Charts data={currData} country={country}/>
    </div>
  );
}



const styles = StyleSheet.create({
  body :{
    backgroundColor: "#f6f6f6"
  },
container: {
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
flexDirection:'column',

}
})

export default App;
