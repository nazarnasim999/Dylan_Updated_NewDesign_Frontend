// import { Avatar, Divider, Stack } from '@mui/material'
import React from 'react'
import './index.css'
import { main_color } from '../../utils/color'
import problem_image from '../../assets/Frame 75.png'
import location_icon from '../../assets/basil_location-solid.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { get_customer_job_byId_async_service } from '../../services/customerService'
import { useState } from 'react'
import locationlogo from '../../../src/assets/new/icons8-location-24.png'
import clock from '../../../src/assets/new/icons8-clock-24.png'
import Slider from 'rc-slider'
import { Divider, Stack } from '@mui/material'
import ImageSlider from './Image_Slider'
const ActiveJobs = () => {
    const dispatch = useDispatch()
    const { get_job_byId_status,
        get_job_byId_data,
        get_job_byId_error } = useSelector((state) => state.customerAuth)
    useEffect(() => {
        dispatch(get_customer_job_byId_async_service())
    }, [])
    const [dateTime, setDateTime] = useState("")
    const get_time_data = get_job_byId_data?.map((e, i) => {
        return e.createdAt
    })
    const createdAtDate = new Date(get_time_data);
    // Format the date and time as per your requirement
    const formattedDate = createdAtDate.toLocaleDateString(); // Date in the format MM/DD/YYYY
    const formattedTime = createdAtDate.toLocaleTimeString(); // Time in the format HH:MM:SS
    // Concatenate date and time
    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    // Now, formattedDateTime will contain the date and time in the desired format
    // console.log(formattedDateTime);
    return (
        <>
        {get_job_byId_data?.map((e, i) => {
          console.log(e,"talhaaaaaaaaaaaaaaaaaaaaaaaaa")
          console.log(e.availablity_times)
          const createdAtDate = new Date(e.createdAt);
          const formattedDate = createdAtDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });
          const formattedTime = createdAtDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });
          return (
            <Stack mt={1} className='user_details unique-class-1'>
              <div className='image-slider unique-class-2'>
                <Stack flexDirection={'col'} className='unique-class-3'>
                  <Stack flexDirection={'row'} className='padd unique-class-4'>
                    <Stack flexDirection={'row'} alignItems={'center'} sx={{ fontSize: 10, color: '#333333', }} className='padd unique-class-5' gap={3}>
                      {e.images && e.images.length > 0 && <ImageSlider images={e.images} className="unique-class-6" />}
                    </Stack>
                  </Stack>
                </Stack>
              </div>
              <div className='jobs_inner unique-class-7'>
                <Stack flexDirection={'row'} className='ahtisham unique-class-8'>
                  <Stack flexDirection={'col'} className="unique-class-9">
                    <Stack sx={{ fontSize: 28, fontWeight: 600, color: '#002758', p: 2, fontFamily: 'sans-serif' }} alignItems={'start'} className="unique-class-10">
                      {e.selected_queries}
                    </Stack>
                  </Stack>
                </Stack>
                <Stack flexDirection={'column'} className='unique-class-11'>
                  <Stack flexDirection={'row'} className='colorbgs unique-class-12'>
                    <Stack flexDirection={'row'} gap={1} mt={2} className='colorbg unique-class-13'>
                      <Stack className="unique-class-14" style={{background:'transparent'}}>{e.details}</Stack>
                    </Stack>
                  </Stack>
                  <Stack flexDirection={'row'} alignItems={'end'} className='unique-class-15'>
                    <Stack><img width={25} height={25} src={locationlogo} style={{width:'25px', height:'25px'}} className='unique-class-16'/></Stack>
                    <Stack sx={{ fontSize: 17, fontWeight: 1000 }} mt={4} className="unique-class-17">   {e.location ? e.location:'----'}</Stack>
                  </Stack>
                  <Stack flexDirection={'column'} gap={1} mt={2} className='colorbg unique-class-18' style={{backgroundColor:'transparent'}} >
                    <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="unique-class-19">Availablity: </Stack>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={'70px'} sx={{ fontSize: 10, color: '#002758' }} className="unique-class-20">
                      {e.availablity_times?.map((availability, index) => (
                        console.log('aaaaaaaa',availability),
                        <Stack key={index} flexDirection={'row'} alignItems={'flex-start'} sx={{ fontSize: 18, color: '#002758' }} className="unique-class-21">
                          {/* <span className="time-span unique-class-22">{availability.date}</span> */}
                          <span className="time-span unique-class-22">{availability.date === '2000-01-01' ? ' ' : availability.date}</span>

                          <Stack fontSize={18} ml={2} flexDirection={'row'} gap={'100px'} alignItems={'center'} justifyContent={'center'} className="unique-class-23">
                            {availability.times.map((time, timeIndex) => (
                              <span key={timeIndex} className="time-span unique-class-24">
                                {time && <img src={clock} alt="Clock Icon" className="clock-icon unique-class-25" style={{marginRight:'10px'}}/>}
                                {time ? time : ''}
                              </span>
                            ))}
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          );
        })}
      </>
      
    )
}
export default ActiveJobs