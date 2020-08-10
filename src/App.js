import React,{useState,useEffect} from 'react';
import './App.css';
import {StyleSheet,css} from 'aphrodite'; 
import {getDataFrom} from './api';
import logo from "./assets/corona-tracker-social-image.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import { Timeline } from 'react-twitter-widgets'
import {Cards,Charts,CountryPicker,Footer} from './Components';
const url2 = 'https://covid19.mathdro.id/api'

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
        console.log(error)
      }
    }
    fetchedData()
  },[setData,country])    
  return (
    <div className={css(styles.pageContainer)}>
      <div className={css(styles.contentWrap)}>
    <div className={css(styles.container)}>
      <Cards data={currData}/>
        <div className={css(styles.CountryPickerContainer)}>
            <CountryPicker setCountry={setCountry}/>
        </div>
      <Charts data={currData} country={country}/>
    </div>

      <h2 className={css(styles.sectionHeader)}>Latest on Covid-19</h2>
      <div className={css(styles.tweetContainer)}>
        <Timeline
        dataSource={{ sourceType: "profile", screenName: "GovCanHealth" }}
        options={{ chrome:"nofooter, noheader",theme: "light",width: "1200",borderColor: "#000000",height: "650"}}
        />
        <Timeline
        dataSource={{ sourceType: "profile", screenName: "TOPublicHealth" }}
        options={{ chrome:"nofooter, noheader",theme: "light", borderColor: "#000000",width: "1200",height: "650"}}
        />
      </div>
    <Footer/>
    </div>
    </div>

)
}



const styles = StyleSheet.create({

  logo:{
    height: "300px",
    width: "80%",
    
  },
  sectionHeader:{
    marginLeft: "10px"
  },
  tweetContainer:{
    paddingTop: "20px",
    // margin: "0 2% !important",
    width: "100%",
    display: "flex",
    flexDirection: "row"

  },
  body :{
    backgroundColor: "#f6f6f6"
  },
  container: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection:'column',
  },

  CountryPickerContainer:{
    marginTop: "19pt"
  }

})

export default App;
