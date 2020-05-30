import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl}  from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {getCountries} from "../../api"
const CountryPicker = ({setCountry}) =>{
    const [fetchedCountries,setFetchedCountries] = useState([]) 
    
    useEffect(()=>{
        const fetchedCountries = async() =>{
            setFetchedCountries(await getCountries())
        }
        fetchedCountries(); 
    },[setFetchedCountries])



    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue='' onChange={(e)=>setCountry(e.target.value)}>
                <option value="global">
                Global
                </option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}> {country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;