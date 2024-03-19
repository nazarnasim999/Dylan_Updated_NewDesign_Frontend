import React from 'react'
import { Stack } from 'react-bootstrap'
import './index.css'
import side_image_5 from '../../assets/img/Frame 68.png'
import Six_by_six from './Six_by_six'
import side_image from '../../assets/step1.png'
import side_image_2 from '../../assets/step2.png'
import side_image_3 from '../../assets/img/Frame 67.png'
import img1 from '../../assets/remodelr.png'
import img2 from '../../assets/Frame 115.png'
import img3 from '../../assets/Frame 114.png'
import { Carousel } from 'react-responsive-carousel';
import { Link, useNavigate } from 'react-router-dom'
import { Container } from "@mui/material";

const LandingFirstSection = () => {
    const navigation = useNavigate()

    const NavigateLogin = () => {
        navigation('/mainsection')
    }

  return (
    <Stack className='main-sec'>
        <Stack className='our-titel'>
        Our Process Work Flow 
        </Stack>
        <Stack className='our-titel-para'>
        Honest Home Hub is a service that helps you address home service problems by matching you with vetted vendors. You can choose from up to three vendors, have them come to your house at your preferred time, and even consult with an expert to select the best quote and service description. Payments are made through Honest Home Hub, and you can communicate with the vendor through a convenient chat box to coordinate until project completion.
        </Stack>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}
        autoPlay={true} // Enable auto-play
        autoPlaySpeed={5000} // Set the auto-play speed in milliseconds (optional)


      >
          <Container key="slide1" style={{ padding: 20, height: 650, }} maxWidth="xl">
              <Six_by_six
                  // main_style={{marginTop:'9em'}}
                  first_section={<Stack>
                      <Stack className='sec2-titel' mt={1}>Step 1</Stack>
                      <Stack className='sec2_titel_heading'>Describe Home Service Issue, Share 4 Images, and Provide Available Times</Stack>
                      <Stack className='sec2_titel_sub_data' >This is the easiest and fastest way for you to talk about your problem. There is no need to answer 100 questions, or give your whole life story before you can submit your problem and availability</Stack>
                      <div className='btn_section '>

                      <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}>
                      
                     
                          {/* <button onClick={NavigateLogin} className='carousel_button' */}
                           <button onClick={NavigateLogin} className='carousel_button'
                                          
                                          >Share Your Issue
                                          
                                          </button>
                                          </Link>

                      </div>
                  </Stack>}
                 
                  second_section={
                    
                      <img width={'100%'} src={side_image} alt='' className='carousel-img'/>
                 
                  }
              />  
          </Container>
          <Container key="slide2" style={{ padding: 20, height: 650, }} maxWidth="xl">
              <Six_by_six
                      first_section={
                      <Stack>
                          <Stack className='sec2-titel'>Step 2</Stack>
                          <Stack className='sec2_titel_heading'>We Match You with Vetted Vendors </Stack>
                          <Stack className='sec2_titel_sub_data'>
                          
                          
                          
                          After Step 1, Honest Home Hub does the rest. The more availability and vendors that you have giving quotes, the more likely it is to end up with a better end result whether that be cheaper or the project done with a better strategy.
                          </Stack>
                      
                          <Stack className='btn_section'>

                          <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}>

                            <button onClick={''} className='carousel_button'
                              // <button onClick={NavigateLogin} className='carousel_button'
                                            
                                            >Get Matched With A Vendor</button>
                                            </Link>

                            </Stack>
                      </Stack>
                      }
                      second_section={
                      <img width={'100%'} src={side_image_2} alt='' className='carousel-img'/>
                      }
                  />
          </Container>
          <Container key="slide3" style={{ padding: 20, height: 650, display:"flex", justifyContent:"center" , alignItems:"center" }} maxWidth="xl">
          <Six_by_six
                first_section={<Stack>
                  <Stack className='sec2-titel' mt={1}>Step 3</Stack>
                  <Stack className='sec2_titel_heading'>

                  The Approved Service Providers Visit Your Home, Then Share a Quote on the Platform.
                    {/* The approved service providers visit your home, then share a quote. */}
                  </Stack>

                  <Stack className='sec2_titel_sub_data' >

                  Approved vendors will visit your home at the time you specify, and afterwards, they upload their estimates and technique details directly to the platform. There is no need for direct discussion with the vendors. All relevant information, including the vendor profiles, is transparently shared on the website's dashboard to ensure both transparency and safety.
                    {/* Approved vendors visit your home as per your chosen time, provide estimates and technique details. Their information is shared on the website in the dashboard including a vendor profile for transparency and safety */}
                    </Stack>
                    <Stack className='btn_section'>


                    <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}>
                      <button 
                        onClick={''} className='carousel_button'
                        // onClick={NavigateLogin} className='carousel_button'
                      >
                        Find A Vendor
                      </button>
                      </Link>

                      </Stack>
                </Stack>}
                second_section={
                  <Stack style={{ flexDirection: 'row', alignItems: 'center' }}  >
                    <Stack>
                      <img width={'100%'} src={img1} alt='' className='img1'/>
                    </Stack>
                    <Stack>
                      <img width={'100%'} src={img2} alt='' className='img1'/>
                    </Stack>
                    <Stack>
                      <img width={'100%'} src={img3} alt='' className='img1'/>
                    </Stack>
                  </Stack>
                }
              />
          </Container>
          <Container key="slide4" style={{ padding: 20, height: 650, display:"flex", justifyContent:"center" , alignItems:"center"}} maxWidth="xl">
          <Six_by_six
                  second_section={<img width={'100%'} src={side_image_3} alt='' />}
                  first_section={
                    <Stack>
                      <Stack className='sec2-titel'>Step 4</Stack>
                      <Stack className='sec2_titel_heading'>
                      Consult an Expert for The Best Repair Choice Among Three Quotes
                        {/* Consult an expert for the best repair choice among three quotes */}
                        </Stack>
                      <Stack className='sec2_titel_sub_data'>
                      Now, you have the opportunity to consult with an expert who will offer their recommendation on which quote to select, based on the price and the approach proposed by the vendor.
                        
                        {/* Now, you have the option to consult with an expert who will provide their opinion on which quote you should choose based on price and the approach the vendor is taking. */}
                        
                        
                        </Stack>
                        <Stack className='btn_section'>
                          
                        {/* <Link to='https://testinghonesthome.appssols.com/mainSectiontwo' style={{textDecoration:'none'}}> */}

                        <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}>

                          <button onClick={''} className='carousel_button'
                          //  <button onClick={NavigateLogin} className='carousel_button'
                                          
                                          >Speak With An Expert</button>

</Link>

                          </Stack>
                    </Stack>
                  }
                />
          </Container>
          <Container key="slide5" style={{ padding: 20, height: 650, display:"flex", justifyContent:"center" , alignItems:"center"}} maxWidth="xl">
          <Six_by_six
                // main_style={{marginTop:'9em'}}
                first_section={<Stack>
                  <Stack className='sec2-titel' mt={1}>Step 5</Stack>
                  <Stack className='sec2_titel_heading'>Pay Through Honest Home Hub and Coordinate Project Timing via Vendor Chat</Stack>
                  <Stack className='sec2_titel_sub_data' >
                    
                    
                    {/* You now will pay directly through Honest Home Hub and communicate with the vendor via the dashboard chat box to determine when they will be completing your project */}
                    
                    You will now make payments directly through Honest Home Hub. Additionally, you can communicate with the vendor via the dashboard's chat box to finalize the schedule for completing your project.
                    
                    </Stack>
                                        <Stack className='btn_section'>

                                        <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}>              

                          <button onClick={''} className='carousel_button'
                          //  <button onClick={NavigateLogin} className='carousel_button'
                                          
                                          >Share Your Issue</button>

                                          </Link>

                      </Stack>


                </Stack>}
              
                second_section={
                  <img width={'100%'} src={side_image_5} alt='' />
                }
              />
          </Container>
      </Carousel>
    </Stack>
  )
}

export default LandingFirstSection