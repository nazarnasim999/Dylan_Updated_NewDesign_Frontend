import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import './index.css'
import side_image_5 from '../../assets/img/Frame 68.png'
import Six_by_six from './Six_by_six'
import side_image from '../../assets/step1.png'
import side_image_2 from '../../assets/step2.png'
import side_image_3 from '../../assets/img/Frame 67.png'
import group_img from '../../assets/img/Group 1000002799 (1).png'
import { FaCheck } from "react-icons/fa";
import { Container } from '@mui/material'

import img1 from '../../assets/remodelr.png'

import img2 from '../../assets/Frame 115.png'

import img3 from '../../assets/Frame 114.png'



const Landing_second_section = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    // Attach the event listener
    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log(innerWidth);
  return (
    <Stack className='main-sec'>
      <Stack className='our-titel'>
        Our Process Work Flow
      </Stack>
      <Stack className='our-titel-para'>
        Honest Home Hub is a service that helps you address home service problems bymatching you with vetted vendors. You can choose from up to three vendors, have themcome to your house at your preferred time, and even consult with an expert to select thebest quote and service description. Payments are made through Honest Home Hub,and you can communicate with the vendor through a convenient chat box to coordinateproject completion.
      </Stack>
      <Stack className='row-sec' >
        <Container className='sec3 main-container'>
          <Stack className='back_img_sec2'>
            <Six_by_six
              // main_style={{marginTop:'9em'}}
              first_section={<Stack>
                <Stack className='sec2-titel' mt={1}>Step 1</Stack>
                <Stack className='sec2_titel_heading'>Describe Home Service Issue, Share 4 Images, and Provide Available Times.</Stack>
                <Stack className='sec2_titel_sub_data' >This is the easiest and fastest way for you to talk about your problem. There is noneed to answer 100 questions, or give your whole life story before you can submit your problem and availability</Stack>
              </Stack>}
              second_section={
                <img width={'100%'} src={side_image} alt='' />
              }
            />
            {
              innerWidth < 900 ? <Six_by_six
                first_section={
                  <Stack>
                    <Stack className='sec2-titel'>Step 2</Stack>
                    <Stack className='sec2_titel_heading'>We Match You with Vetted Vendors </Stack>
                    <Stack className='sec2_titel_sub_data'>
                      
                      
                      
                      After Step 1, Honest Home Hub does the rest. The more availability and vendors that you have giving quotes, the more likely it is to end up with a better end result whether that be cheaper or the project done with a better strategy.
                      </Stack>
                  
                  
                  </Stack>
                }
                second_section={
                  <img width={'100%'} src={side_image_2} alt='' />
                }
              /> : <Six_by_six
                first_section={<img width={'100%'} src={side_image_2} alt='' />}
                second_section={
                  <Stack>
                    <Stack className='sec2-titel'>Step 2</Stack>
                    <Stack className='sec2_titel_heading'>We Match You with Vetted Vendors</Stack>
                    <Stack className='sec2_titel_sub_data'>

                    After completing Step 1, Honest Home Hub takes care of the rest. We recommend providing three available times to accommodate quotes from three different vendors. This approach increases the likelihood of achieving a better outcome, whether it means a more cost-effective solution or a project executed with a superior strategy.
                      {/* After Step 1, Honest Home Hub does the rest. The more availability and vendors that you have giving quotes, the more likely it is to end up with a better end result whether that be cheaper or the project done with a better strategy. */}
                      </Stack>
                  </Stack>
                }
              />
            }
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
            {
              innerWidth < 900 ? <Six_by_six
                first_section={
                  <Stack>
                    <Stack className='sec2-titel'>Step 4</Stack>
                    <Stack className='sec2_titel_heading'>
                    Consult an Expert for The Best Best Repair Choice Among Three Quotes
                      {/* Consult an expert for the best repair choice among three quotes */}
                    
                    
                    </Stack>
                    <Stack className='sec2_titel_sub_data'>Now, you have the option to consult with an expert who will provide their opinion on which quote you should choose based on price and the approach the vendor is taking.</Stack>
                  </Stack>
                }
                second_section={
                  <img width={'100%'} src={side_image_3} alt='' />
                }
              /> : <Six_by_six
                first_section={<img width={'100%'} src={side_image_3} alt='' />}
                second_section={
                  <Stack>
                    <Stack className='sec2-titel'>Step 4</Stack>
                    <Stack className='sec2_titel_heading'>
                    Consult an Expert for The Best Best Repair Choice Among Three Quotes
                      {/* Consult an expert for the best repair choice among three quotes */}
                      </Stack>
                    <Stack className='sec2_titel_sub_data'>
                    Now, you have the opportunity to consult with an expert who will offer their recommendation on which quote to select, based on the price and the approach proposed by the vendor.
                      
                      {/* Now, you have the option to consult with an expert who will provide their opinion on which quote you should choose based on price and the approach the vendor is taking. */}
                      
                      
                      </Stack>
                  </Stack>
                }
              />
            }

<Six_by_six
              // main_style={{marginTop:'9em'}}
              first_section={<Stack>
                <Stack className='sec2-titel' mt={1}>Step 5</Stack>
                <Stack className='sec2_titel_heading'>Pay Through Honest Home Hub and Coordinate Project Timing via Vendor Chat</Stack>
                <Stack className='sec2_titel_sub_data' >
                  
                  
                  {/* You now will pay directly through Honest Home Hub and communicate with the vendor via the dashboard chat box to determine when they will be completing your project */}
                  
                  You will now make payments directly through Honest Home Hub. Additionally, you can communicate with the vendor via the dashboard's chat box to finalize the schedule for completing your project.
                  
                  </Stack>
              </Stack>}
              second_section={
                <img width={'100%'} src={side_image_5} alt='' />
              }
            />


          </Stack>
        </Container>
      </Stack>
      <Stack className='last_back_img'>
        <Container className='sec4 main-container'>
          <Six_by_six
            first_section={
              <img width={'100%'} src={group_img} alt=''  className='groupimg'/>
            }
            second_section={
              <Stack>
                <Stack className='lat_sec_heafing'>
                  Advanced Solution and Professional Talent:
                </Stack>

                <Stack className='lat_sec_para'>
                At Honest Home Hub, our mission is to make the easiest and safest way to do any home service or home improvement project.
                
                </Stack>
                <Stack style={{ flexDirection: 'row', alignItems: 'center', mt: 2 }} className='list-class'>
                  <Stack>
                    <FaCheck className='lat_sec_points' color='white' size={20} />
                  </Stack>
                  <Stack className='lat_sec_points'>You won't need to answer numerous project-related questions.</Stack>
                </Stack>
                <Stack style={{ flexDirection: 'row', alignItems: 'center', mt: 2 }} className='list-class'>
                  <Stack>
                    <FaCheck className='lat_sec_points' color='white' size={20} />
                  </Stack>
                  <Stack className='lat_sec_points'>Share your contact information with multiple companies. </Stack>
                </Stack>
                <Stack style={{ flexDirection: 'row', alignItems: 'center', mt: 2 }} className='list-class'>
                  
                  <Stack>

                    <FaCheck className='lat_sec_points' color='white' size={20} />
                  </Stack>
                  <Stack className='lat_sec_points'>Be concerned about your safety when our home service professionals arrive.</Stack>
                </Stack>



                <Stack style={{ flexDirection: 'row', alignItems: 'center', mt: 2 }} className='list-class'>
                  
                  <Stack>

                    <FaCheck className='lat_sec_points' color='white' size={20} />
                  </Stack>
                  <Stack className='lat_sec_points'>Worry about being overcharged.</Stack>
                </Stack>
    

                


              </Stack>
            }
          />
        </Container>
      </Stack>
    </Stack >
  )
}
export default Landing_second_section