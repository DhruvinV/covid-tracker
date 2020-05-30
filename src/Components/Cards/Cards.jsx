import React from 'react';
import {Card,CardContent, Typography, Grid,Paper} from '@material-ui/core';
import CountUp from 'react-countup';
import  styles from './Cards.module.css';
import cx from 'classnames';

const Cards = (props) =>{
    // console.log(props)
    if(!props.data){
        return 'Loading ....';
    }
    return(
     <div style={{paddingTop: 50}}>
         <Grid container spacing={3} justify='center'>
           <Grid item component={Card} xs ={12} md={6} lg={3} className={cx(styles.card,styles.infected)}>
               <Paper elevation={3}/>
               <CardContent>
                <Typography color='textSecondary' gutterBottom>Total Cases</Typography>
                <Typography variant='h5' gutterBottom>
                    <CountUp
                    start = {0}
                    end = {props.data.Confirmed}
                    duration={2}
                    separator=","
                    />
                </Typography>
               </CardContent>
            </Grid> 
            <Grid item component={Card} xs ={12} md={6} lg={3}className={cx(styles.card,styles.recovered)}>
               <Paper elevation={3}/>
               <CardContent>
                   <Typography color='textSecondary' gutterBottom>Total Recovered</Typography>
                   <Typography variant='h5' gutterBottom>
                    <CountUp
                    start = {0}
                    end = {props.data.Recovered}
                    duration={2}
                    separator=","
                    />
                </Typography>
               </CardContent>
            </Grid> 
            <Grid item component={Card} xs ={12} md={6} lg={3} className={cx(styles.card,styles.deaths)}>
               <Paper elevation={3}/>
               <CardContent>
                   <Typography color='textSecondary' gutterBottom>Total Deaths</Typography>
                   <Typography variant='h5' gutterBottom>
                    <CountUp
                    start = {0}
                    end = {props.data.Deaths}
                    duration={2}
                    separator=","
                    />
                </Typography>
               </CardContent>
            </Grid> 
         </Grid>
 
    </div>
       
    )
}
export default Cards;