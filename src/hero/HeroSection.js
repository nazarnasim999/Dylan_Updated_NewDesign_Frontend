import { Container, Grid, Stack, colors } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './hero.css'
import person_img from '../assets/dylannew.png'
import { Link, useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigation = useNavigate()

    const NavigateLogin = () => {
        navigation('/mainsection')
    }
    const NavigateSignUp = () => {
        navigation('/mainSectiontwo')
    }
    return (
        <Stack>
            <Container className='sec1 main-container'>
                {/* <Stack sx={{ height: { md: "100vh", lg: '100vh', xl: "100vh", sm: '100vh', xs: '80vh' } }} ></Stack> */}
                <div className='padding_container'>
                    <Grid container zIndex={2} >
                        <Grid item md={8} sm={12} lg={8} xs={12} xl={8} className='banner-contents'>
                            <Stack className='banner-content'>
                                <Stack className='heading_landing_page'>
                                    <h1>The Honest Home Services Platform</h1>
 <br /> 
                                    {/* <p>
                                  At Honest Home Hub, we're your trusted partner for worry-free home services. We prioritize your safety and peace of mind by connecting you with thoroughly vetted vendors. Our transparent payment system, expert guidance, and clear communication channels ensure that you get the best value for your home projects, safeguarding you from overcharging and underservice.
                                        
                                        </p> */}
                                         <h3>No More Getting Ripped Off On Home Services</h3>
                                    <p className='hero_subtitle'>We connect you with three quotes and store them in an easily manageable way.</p>
                                    <h3>Feel Comfortable During Your Home Service</h3>
                                    <p className='hero_subtitle'>Each vendor has a profile page with a selfie and history/interests to make you feel more comfortable during the home service.</p>
                                    <h3>Be Completely Hands Off With An Expert</h3>
                                    <p className='hero_subtitle'>Post a job and sit back with the help of an expert to decide between quotes.</p>
                                    

                                           {/* <button onClick={NavigateLogin} className='carousel_button' */}

                                            <Link to='https://honesthomehub.com/mainsection' style={{textDecoration:'none'}}>
                                            <button onClick={''} className='carousel_button'

                                                        >Get Started Now</button>
                                            </Link>

                                </Stack>
                              
                                {/* <Stack className='hero_input'>
                                    <input 
                                        
                                        type='text'
                                        placeholder='  What do you need help with?
                                        '
                                        className='hero_input_input'
                                        /> */}
                                    {/* <button style={{ background: !searchTerm && !selectedItem ? "gray" : saveValue === "Vendor" ? vendor_color : saveValue === "Customer" ? user_color : null }} className='hero_button' onClick={NavigateHandle}
                                        disabled={!searchTerm && !selectedItem}
                                    >Next</button> */}
                                    {/* <button onClick={NavigateLogin} className='hero_button'
                                       
                                    >Search</button> */}
                                {/* </Stack> */}
                            </Stack>
                        </Grid>
                        <Grid item md={4} sm={12} lg={4} xs={12} xl={4}>
                            <Stack className='banner-image'>
                                <img src={person_img} />
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Stack>
    )
}

export default HeroSection
