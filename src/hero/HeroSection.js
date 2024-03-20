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
        <Stack className='honest-11111'>
        <Container className='sec1 main-container honest-50'>
          {/* <Stack sx={{ height: { md: "100vh", lg: '100vh', xl: "100vh", sm: '100vh', xs: '80vh' } }} ></Stack> */}
          <div className='padding_container honest-51'>
            <Grid container zIndex={2} className='honest-52'>
              <Grid item md={8} sm={12} lg={8} xs={12} xl={8} className='banner-contents honest-53'>
                <Stack className='banner-content honest-54'>
                  <Stack className='heading_landing_page honest-55'>
                    <h1 className='honest-56'>The Honest Home Services Platform</h1>
                    <br />
                    <h3 className='honest-57'>No More Getting Ripped Off On Home Services</h3>
                    <p className='hero_subtitle honest-58'>We connect you with three quotes and store them in an easily manageable way.</p>
                    <h3 className='honest-59'>Feel Comfortable During Your Home Service</h3>
                    <p className='hero_subtitle honest-60'>Each vendor has a profile page with a selfie and history/interests to make you feel more comfortable during the home service.</p>
                    <h3 className='honest-61'>Be Completely Hands Off With An Expert</h3>
                    <p className='hero_subtitle honest-62'>Post a job and sit back with the help of an expert to decide between quotes.</p>
                    
                    
                    {/* <Link to='https://honesthomehub.com/mainsection' style={{textDecoration:'none'}} className='honest887'> */}
                    <div className='honest887'> 

                      <button onClick={NavigateSignUp} className='carousel_button honest-63'>Get Started Now</button>
                    </div>
                    {/* </Link> */}


                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={4} sm={12} lg={4} xs={12} xl={4}>
                <Stack className='banner-image honest-64'>
                  <img src={person_img} className='honest8888888' />
                </Stack>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Stack>
      
    )
}

export default HeroSection
