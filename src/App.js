import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {StyleSheet,css} from 'aphrodite'; 
import {getData} from './api';
import {Cards,Charts,CountryPicker} from './Components';

function App() {

  const[currData,updateData] = useState({
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0,
  })
  useEffect(() =>{
  getData().then(
    // data => console.log(data.Global)
    data => {
    let newData = {Confirmed: data.Global.TotalConfirmed,Deaths: data.Global.TotalDeaths,Recovered: data.Global.TotalRecovered} 
    updateData(newData);
    }
  ).catch(error => console.log(error))
  })
  return (
    <div className={css(styles.container  )}>
      <Cards data={currData}/>
      <CountryPicker/>
      <Charts/>
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

}
})

export default App;
