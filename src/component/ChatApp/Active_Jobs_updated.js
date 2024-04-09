import React, { useEffect, useState } from 'react';
import locationlogo from '../../../src/assets/new/icons8-location-24.png';
import clock from '../../../src/assets/new/icons8-clock-24.png';
import ImageSlider from './Image_Slider';
import { get_customer_job_byId_async_service } from '../../services/customerService';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import axios from 'axios';
import { baseURL } from '../../config/apiHandle/apiHandle';
import { toast } from 'react-toastify';
import Steps from '../CreatePostCard/Steps';
import { Link    } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const ActiveJobsUpdated = () => {
    const dispatch = useDispatch();
    const { get_job_byId_data } = useSelector((state) => state.customerAuth);
    
    useEffect(() => {
        dispatch(get_customer_job_byId_async_service());
    }, [dispatch]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            
        });
    };

    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours, 10);
        const minute = parseInt(minutes, 10);
        const suffix = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${suffix}`;
    };

     async function handleDeleteJob(e){
        console.log(e,"DeleteJOBID")


        const formData = {

            _id:e

        }

        try{
            const response =  await axios.post(`${baseURL}/deletejob`,formData)
            
            console.log(response.data,"deletejob1")
            if(response.data== true)
            {

                toast.success("Job Deleted Successfully")
                window.location.reload();
            }
           
            
           
        }
        catch (error){
            console.log(error)
            toast.error(error)
        }

    }


    console.log(get_job_byId_data? 'TS':'null',"DATAArr")

    const [Customer_Job_id,setCustomer_Job_id]= useState(0)
    const [a,seta]= useState(0)
    
   

    // const View_Steps =(e)=>{

    //     const navigation = useNavigate()

    //     setCustomer_Job_id(e)

    //     console.log(Customer_Job_id,"DylanID")

    //    navigation('/steps')

    



    // }


    const View_Steps = ( e ) => {
        const navigate = useNavigate();
    
        
            setCustomer_Job_id(e); 
    
            console.log(Customer_Job_id, "DylanID");
            navigate('/steps');
    
            
        };







    return (
        < div className='pheku-chand'>
            {get_job_byId_data?.map((e, i) => (
                <Stack key={i} mt={1} className='active-boxes-divs'>
                       <div>
                       <section class="pulilli">
        <div class="long-boxing">
            <div class="boxing-list-1">
                <h2>Order ID: {e.Order_Id? e.Order_Id:'123'}</h2>
                <p>{e.selected_queries}</p>
            </div>
    
            <div class="boxing-list-2">
                <p>{e.phase? e.phase:"Phase"}</p>
            </div>
    
    
            <div class="boxing-list-3">
    
                {/* <button onClick={ ()=>{View_Steps(e._id)}}>View</button> */}

                <Link to={`/steps/${e._id}`}>

                 <button>View</button>

                </Link>

                
                
               
    
                {/* <button>Modify</button> */}
    
                <button class="Cancel" onClick={()=>handleDeleteJob(e?._id)}>Cancel</button>
            </div>
        </div>
    </section>

                       </div>                             





                </Stack>


                                                    


            ))} 
            
              
            
            
               
            
       
        </div>
    );
};

export default ActiveJobsUpdated;
