import { Stack } from '@mui/material'
import React from 'react'
// import mic from '../../assets/ep_mic.png'
import mic from '../../assets/new/icons8-microphone-64.png'

import { main_color, vendor_color } from '../../utils/color'
import { socket } from '../../config/apiHandle/apiHandle'
import { useEffect } from 'react'
import { CheckoutForm } from './Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import { create_req_async_service } from '../../services/customerService'
import { asyncStatus } from '../../utils/async_status'
import { toast } from "react-toastify";

const Get_Assistance = () => {

    const dispatch = useDispatch()

    const adminTalkHandle = () => {
        let elem = {
            Name: "Expert",
            Profile_Image: "https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_400_400/0/1516929476300?e=2147483647&v=beta&t=i9xTbCh2nx3upQEx53PPtGP28Da2T7i_AJOTsqQRliE",
            _id: "6570a161252b429f66e5980f"
        }

        localStorage.setItem('user_details', JSON.stringify(elem));
        localStorage.setItem('is_expert', "true");
    }

    const { selectedIndexValue } = useSelector((state) => state.authSlice)
    
    console.log('hello', selectedIndexValue);
    const { create_req_status,
        create_req_data,
        create_req_error } = useSelector((state) => state.customerAuth)

    const ExpertTalkHandle = async () => {
        // toast.success("Your request has been sent to the expert", {
        //     position: "top-center",
        //   });

         

        const customerId = localStorage.getItem('userId');
        const customer = localStorage.getItem('user_details');

        console.log('ssfsfssfsagasgdgasjTSTSSSSSSS', customer);
        let obj = {
            customerId: customerId,
            vendorId: "657b33a8b0ecf22648173b2c",
            customer:customer,
            // expertId: "6570a161252b429f66e5980f"
        }
        // Socket se request bhejo
        socket.emit("userRequest", obj);
        dispatch(create_req_async_service(obj))

        toast.success("Your request has been sent to the expert. Expert will join you soon", {
            position: "top-center",
          });
       

    }

    socket.on('requestAcceptedByExpert', (data) => {
        console.log('Acheeve:', data);
        
        // Handle the response from the server (if needed)
    });


   


    useEffect(() => {
        const handleRequestAccepted = (data) => {
            console.log('Request accepted by expert:', data);
            // Handle the accepted data on the client side
            // For example, update the UI or perform other actions
        };

        // Listen for the 'requestAccepted' event
        socket.on('requestAccepted', handleRequestAccepted);

        // Clean up when the component unmounts
        return () => {
            socket.off('requestAccepted', handleRequestAccepted);
        };
    }, []); // Empty dependency array ensures the effect runs once on mount

    // ...

    

    
    // Expert se response sunna

    socket.on('requestResponse', (data) => {
        console.log('Request response received:', data);

        let elem = {
            Name: "Expert",
            Profile_Image: "https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_400_400/0/1516929476300?e=2147483647&v=beta&t=i9xTbCh2nx3upQEx53PPtGP28Da2T7i_AJOTsqQRliE",
            _id: data.expertId
        }

        localStorage.setItem('user_details', JSON.stringify(elem));
        
        localStorage.setItem('is_expert', "true");
        // setRequest({ ...request, accepted: true, expertId: storedUserId })
        // Handle the response from the server (if needed)
    });
    socket.on('requestAcceptedByExpert', (data) => {
        console.log('Request requestAcceptedByExpert received:', data);
        // Handle the response from the server (if needed)
    });


    // useEffect(() => {
    //     if (create_req_status === asyncStatus.SUCCEEDED) {
    //         // localStorage.setItem('user_details', JSON.stringify(elem));
    //         // localStorage.setItem('is_expert', "true");
    //     }
    // }, [])

    return (
        <div className="unique-class-39">
        {selectedIndexValue === 'Customer' && (
          <Stack sx={{ backgroundColor: 'white', borderRadius: 4, position: 'relative' }} className='Expert-Assistance unique-class-40'>
            <Stack p={2} className="unique-class-41">
              <Stack sx={{ fontSize: 20, fontWeight: 'bold', color: main_color }} className="unique-class-42">Get Assistance</Stack>
              <Stack sx={{ fontSize: 12, color: main_color, mt: 0.8 , fontWeight: 'bold'}} className="unique-class-43">Seeking expert advice and exploring payment details—let's discuss now for valuable </Stack>
              <Stack onClick={ExpertTalkHandle} sx={{ fontSize: 14, backgroundColor: vendor_color, p: 0.9, borderRadius: 1, color: 'white', width: "120px", mt: 0.5, cursor: 'pointer' }} mt={2} className="unique-class-44">Want An Expert</Stack>
            </Stack>
            <Stack sx={{ position: 'absolute', bottom: 0, right: -6 }} className="unique-class-45">
              <img width={100} height={100} src={mic} className="unique-class-46" />
            </Stack>
          </Stack>
        )}
      </div>
      
    )
}

export default Get_Assistance