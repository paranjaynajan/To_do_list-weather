import React, { Component, useEffect, useState } from 'react'
import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import "./Weather.css"
import { ReactComponent as Main } from "../../Assets/Icons/Weather/svg/wi-day-rain-mix.svg"
import { ReactComponent as Cloud } from "../../Assets/Icons/Weather/svg/wi-cloud.svg"
import { ReactComponent as Sunny } from "../../Assets/Icons/Weather/svg/wi-day-sunny.svg"
import { ReactComponent as Humidity } from "../../Assets/Icons/Weather/svg/wi-humidity.svg"
import { ReactComponent as Sunset } from "../../Assets/Icons/Weather/svg/wi-horizon-alt.svg"
import { ReactComponent as Temp } from "../../Assets/Icons/Weather/svg/wi-celsius.svg"
import { ReactComponent as Wind } from "../../Assets/Icons/Weather/svg/wi-strong-wind.svg"
import { ReactComponent as Moon } from "../../Assets/Icons/Weather/svg/wi-moon-alt-waning-crescent-3.svg"
import { ReactComponent as Eve } from "../../Assets/Icons/Weather/svg/wi-horizon.svg"
import { ReactComponent as Rain } from "../../Assets/Icons/Weather/svg/wi-day-rain-mix.svg"
 import moment from "moment"

import Dark from "../../Assets/Clouds.jpg"
import Light from "../../Assets/Lightclouds.jpg"
import FormGroup from '@mui/material/FormGroup';

 import FormControlLabel from '@mui/material/FormControlLabel';



function Weather() {

    useEffect(() => {

        fetchData()
    }, [])
    const [day1, setDay] = useState([])
    const [wday, setWday] = useState([])
    const [toggle, setToggle] = useState(true)
    const [data, setData] = useState([])


    let daydetails = []

    const weekday = (data) => {
        console.log(data)
        let day = data?.daily.map((e) => {
            return moment.unix(e.dt).isoWeekday()

        })
        console.log(day)
        if (daydetails?.length == 0) {
            for (let i = 0; i < day.length; i++) {
                if (day[i] == 1) {
                    daydetails.push("Mon")
                }
                if (day[i] == 2) {
                    daydetails.push("Tue")
                }
                if (day[i] == 3) {
                    daydetails.push("Wed")
                }
                if (day[i] == 4) {
                    daydetails.push("Thu")
                }
                if (day[i] == 5) {
                    daydetails.push("Fri")
                }
                if (day[i] == 6) {
                    daydetails.push("Sat")
                }
                if (day[i] == 7) {
                    daydetails.push("Sun")
                }
            }
        }

        setDay(daydetails)
        const final1 = Object.entries(data?.daily[0].feels_like)
        console.log(final1)
        setWday(final1)

    }


    const handelChange = () => {
        setToggle(!toggle)
    }
    const fetchData = async () => {
    //     console.log("in useeff")
    //     const main = await fetch("https://countriesnow.space/api/v0.1/countries/states")
    //     const result =await main.json()
    //     console.log(result.data)
    //     const country = result.data.filter((e) => { return e.name == "India"})
    //    console.log("country",country)

        const res = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=22.7179&lon=75.8333&units=imperial&exclude=minutely,hourly&appid=f408733541f79d3cc2e15ea6c311e06f")
        
        const final = await res.json()
        console.log(res,final)
        setData(final);
        weekday(final)

        

    }


    console.log(data)
    return (
        <>


            <Box className={toggle ? "Mainbody" : "Mainbody1"}
                sx={{ backgroundImage: toggle ? `url(${Dark})` : `url(${Light})` ,pb:2}}
            >
                <Container maxWidth={'xxl'}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box className="Alignleft">
                            <Box>
                                <Box>
                                    <Typography className={toggle ? 'Heading' : 'Heading1'} >London ,UK</Typography>
                                </Box>
                                <Box className="Alignleft">
                                    <Typography className={toggle ? 'Subheading' : 'Subheading1'} >
                                        {moment.unix(data?.current?.dt).format("MMM/DD")}

                                    </Typography>
                                </Box>

                            </Box>

                        </Box>
                        <Box className="Alignright">
                            <FormGroup>
                                <FormControlLabel control={
                                    <Switch defaultChecked onChange={handelChange} />} label={toggle ? "Dark" : "Light"} />

                            </FormGroup>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }} >
                        <Box >
                            <Paper className={toggle ? 'trans' : 'trans1'} sx={{ width: "400px" }} >
                                <Grid container>
                                    <Grid items lg={6}>

                                        <Box>

                                            <Main style={{ fill: toggle ? 'white' : 'black', height: "150px", width: "150px" }} />
                                        </Box>

                                    </Grid>
                                    <Grid items lg={6}>

                                        <Box >
                                            <Box>
                                                <Typography className={toggle ? 'Heading' : 'Heading1'} sx={{ textAlign: "end" }}  >{data?.current?.temp}{'\u00b0'}F</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className={toggle ? 'Para' : 'Para1'} sx={{ textAlign: "end" }} >{data?.current?.weather[1]?.description.charAt(0).toUpperCase() +
                                                    data?.current?.weather[1]?.description.substr(1)
                                                },{data?.current?.weather[0]?.description.charAt(0).toUpperCase() +
                                                    data?.current?.weather[0]?.description.substr(1)}</Typography>
                                            </Box>

                                        </Box>
                                    </Grid>
                                </Grid>


                            </Paper>
                            <Paper className={toggle ? 'trans' : 'trans1'}>
                                <Container>
                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Box>
                                            <Temp style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} />
                                        </Box>
                                        <Box sx={{ marginTop: "12px" }}>
                                            <Typography className={toggle ? 'Para' : 'Para1'} sx={{ textAlign: "end" }} >{data?.current?.temp}{'\u00b0'}F </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Box>
                                            <Humidity style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} />
                                        </Box>
                                        <Box sx={{ marginTop: "12px" }}>
                                            <Typography className={toggle ? 'Para' : 'Para1'} sx={{ textAlign: "end" }} >{data?.current?.humidity}% </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Box>
                                            <Sunset style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} />
                                        </Box>
                                        <Box sx={{ marginTop: "12px" }}>
                                            <Typography className={toggle ? 'Para' : 'Para1'}  >


                                                {moment.unix(data?.current?.sunset).format("h:SS")}pm


                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Box>
                                            <Cloud style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} />
                                        </Box>
                                        <Box sx={{ marginTop: "12px" }}>
                                            <Typography className={toggle ? 'Para' : 'Para1'} sx={{ textAlign: "end" }} >{data?.current?.clouds}% </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Box>
                                            <Wind style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} />
                                        </Box>
                                        <Box sx={{ marginTop: "12px" }}>
                                            <Typography className={toggle ? 'Para' : 'Para1'} sx={{ textAlign: "end" }} >{data?.current?.wind_speed}mph </Typography>
                                        </Box>
                                    </Box>
                                    {/* <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                        <Box>
                                            <Temp style={{ height: "50px", width: "50px" }} />
                                        </Box>
                                        <Box sx={{ marginTop: "12px" }}>
                                            <Typography sx={{ textAlign: "end" }} >{data?.current?.temp} </Typography>
                                        </Box>
                                    </Box> */}



                                </Container>

                            </Paper>
                        </Box>

                        <Box sx={{ width: "75%", }}>
                            map

                        </Box>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                        <Box>
                            <Typography className={toggle ? 'Subheading' : 'Subheading1'} >
                                Today's Temperature

                            </Typography>



                            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }} >
                                {
                                    wday?.map((e, i) => {
                                        return <Paper className={toggle ? 'trans' : 'trans1'} key={i} sx={{ backgroundColor: "white", m: 1, p: 1, width: "150px" }}>
                                            <Box >
                                                <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                    {e[0].charAt(0).toUpperCase() + e[0].substr(1)}
                                                </Typography>

                                            </Box>
                                            <Box >
                                                {

                                                    e[0] == "day" ? <Sunny style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} /> :
                                                        e[0] == "eve" ? <Eve style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} /> :
                                                            e[0] == "night" ? <Moon style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} /> :
                                                                <Sunset style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} />
                                                }





                                            </Box>

                                            <Box sx={{ padding: 2, textAlign: "center" }}>


                                                <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                    {e[1]}{'\u00b0'}F
                                                </Typography>

                                            </Box>
                                        </Paper>

                                    })
                                }

                            </Box>

                        </Box>

                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Box >

                            <Box sx={{ display: "flex", justifyContent: "left" }}>
                                <Typography className='Subheading' >
                                    Next Week Forecast

                                </Typography>

                            </Box>
                            <Box  >
                                {
                                    data?.daily?.map((e, i,) => {
                                        return <Paper key={i} className={toggle ? 'trans' : 'trans1'} sx={{ backgroundColor: "white", mt: 1, p: 1, width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>

                                            <Grid container>
                                                <Grid item xs={2} md={2} lg={2}>
                                                    <Box >

                                                        <Box>
                                                            <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>

                                                                {day1[i]}
                                                            </Typography>

                                                        </Box>
                                                        <Box>
                                                            <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>

                                                                {moment.unix(e.dt).format("MM/DD")}
                                                            </Typography>

                                                        </Box>

                                                    </Box>
                                                </Grid>
                                                <Grid item xs={2} md={2} lg={2}>     <Box sx={{ padding: 2, textAlign: "center" }}>

                                                    {

                                                        e.weather[0]?.main == "Sunny" ? <Sunny style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} /> :
                                                            e.weather[0]?.main == "Rain" ? <Rain style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} /> :
                                                                e.weather[0]?.main == "Wind" ? <Wind style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} /> :
                                                                    <Cloud style={{ fill: toggle ? 'white' : 'black', height: "50px", width: "50px" }} />
                                                    }

                                                </Box></Grid>
                                                <Grid item xs={2} md={2} lg={2}> <Box >

                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                            {e.temp.max}{'\u00b0'}F
                                                        </Typography>

                                                    </Box>
                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                            High
                                                        </Typography>

                                                    </Box>

                                                </Box></Grid>
                                                <Grid item xs={2} md={2} lg={2}>       <Box >

                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                            {e.temp.min}{'\u00b0'}F
                                                        </Typography>

                                                    </Box>
                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                            Low
                                                        </Typography>

                                                    </Box>

                                                </Box></Grid>
                                                <Grid item xs={2} md={2} lg={2}>     <Box >

                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                            {e.wind_speed}mph
                                                        </Typography>

                                                    </Box>
                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                            Wind Speed
                                                        </Typography>

                                                    </Box>

                                                </Box></Grid>
                                                <Grid item xs={2} md={2} lg={2}>  <Box >

                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "24px" }}>
                                                            {e.weather[0]?.main}
                                                        </Typography>

                                                    </Box>
                                                    <Box>
                                                        <Typography className={toggle ? 'Para' : 'Para1'} sx={{ fontWeight: "400", fontSize: "20px" }}>
                                                            {e.weather[0]?.description.charAt(0).toUpperCase() + e.weather[0]?.description.substr(1)}

                                                        </Typography>

                                                    </Box>

                                                </Box></Grid>

                                            </Grid>











                                        </Paper>

                                    })
                                }

                            </Box>

                        </Box>
                    </Box>
                </Container>


            </Box>
        </>
    )
}

export default Weather

