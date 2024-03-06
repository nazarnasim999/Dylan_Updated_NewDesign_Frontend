

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid, Stack } from '@mui/material';
import { MdLeaderboard, MdPlumbing } from 'react-icons/md';
import sildeImage from '../../assets/carousel.png'
import { main_color, vendor_color } from '../../utils/color';
import './slider.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_customer_gig_async_service, get_customer_gig_async_service1, get_expert_gig_async_service1 } from '../../services/vendorService';
import Btn from '../button/Button';
import axios from 'axios';



const ExpertSlider = () => {
  const dispatch = useDispatch()

  const {
    get_customer_gig_status,
    get_customer_gig_data,
    get_customer_gig_error
  } = useSelector((state) => state.vendorAuth)

  const storedUserId = localStorage.getItem('userId');
  useEffect(() => {
    dispatch(get_expert_gig_async_service1({
      vender_id: storedUserId
    }))
  }, [])
  


  // console.log("get_customer_gig_data", get_customer_gig_data);

let [_id,Set_id]=useState(" ")

// const  id_handler1=  async(e)=>{


//   Set_id(e)
// console.log(_id,"SaskldakldjaksdjaksdjakldjaskjkldjajdskldjklasjdklsjdakldjlkadklasdjklasjdTSTSTSTSTaaaa")


// //  axios.post('http://localhost:5000/delete-vendor-gig', { _id });

// try {
//   const response =  await axios.post('http://localhost:5000/delete-vendor-gig', { _id });
//   console.log(response);

//   window.location.reload();




// } catch (error) {
//   console.error(error.response);
// }

// }
const  id_handler=  async(e)=>{
console.log(e);
const _id = e;

  Set_id(e)
console.log(_id,"SaskldakldjaksdjaksdjakldjaskjkldjajdskldjklasjdklsjdakldjlkadklasdjklasjdTSTSTSTSTaaaa")


//  axios.post('http://localhost:5000/delete-vendor-gig', { _id });
// https://dylan-production.up.railway.app

try {
  const response =  await axios.post('https://dilannazartsbackendtest-production.up.railway.app/delete-expert-gig', { _id });
  console.log(response);

  window.location.reload();




} catch (error) {
  console.error(error.response);
}

}






  return (
    <Carousel
      dynamicHeight={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      stopOnHover={true}
      autoPlay={true}
      useKeyboardArrows={true}
      swipeable={true}
      showStatus={false}

    // infiniteLoop={true}
    >
      {get_customer_gig_data?.map((e, i) => {

        {console.log(e._id,"customerdetailsTSTSTSTTSTTS")}

        return <div>
          <Stack mt={2}>
            <Grid container p={2} sx={{ backgroundColor: vendor_color, borderRadius: 4, minHeight: '300px' }} >
              <Grid item md={8} lg={8} sm={12} xs={12}>
                <Stack className='space_between_class' flexDirection={'column'} justifyContent={'space-between'}  >
                  <Stack flex={1}>
                    <Stack sx={{ fontSize: { md: 30, lg: 38, sm: 25, xs: 20 }, color: 'white', fontWeight: 1000, textAlign: 'start' }}>{e.gig_title}</Stack>
                    <Stack mt={1} mb={1} sx={{ fontSize: { md: 14, lg: 18, sm: 15, xs: 13, color: 'white', textAlign: 'start' } }}>{e.gig_discription}</Stack>
                  </Stack>
                  <Stack sx={{ mt: { xl: 7, lg: 0, md: 0, sm: 0, xs: 0 } }} >
                    <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} >
                      {/* {e.keywords.map((e, i) => {
                        return <Stack flexDirection={'row'} alignItems={'center'}>
                          <Stack ><MdPlumbing color={vendor_color} /></Stack>
                          <Stack sx={{ color: "white", fontSize: { md: 15, lg: 18, sm: 15, xs: 13 }, fontWeight: 'bold' }}>{e}</Stack>
                        </Stack>
                      })} */}

                    </Stack>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} mt={0.9} mb={{ md: 1, sm: 1 }}>
                      {/* <Stack><MdLeaderboard color={'#FB8500'} /></Stack> */}
                      <Stack sx={{ color: "white", fontSize: { md: 12, lg: 15, sm: 12, xs: 10 }, fontWeight: 'bold' }}></Stack>
                      {/* <Stack ml={2}><MdLeaderboard color={'#FB8500'} /></Stack> */}
                      <Stack sx={{ color: "white", fontSize: { md: 12, lg: 15, sm: 12, xs: 10 }, fontWeight: 'bold' }}></Stack>
                    </Stack>
                  </Stack>

                </Stack>
              </Grid>
              <Grid item md={12} lg={4} sm={12} xs={12}>
                <img className='img_control' src={e.gig_image} alt="carousel image" />
              </Grid>
                        <Grid  className="delete1"   >
                         


{/* <Btn

 
  onClick={() => id_handler(e._id)}
>
  Delete
</Btn> */}

<Btn variant="contained" color="danger" label={'Delete'} onClick={() => id_handler(e._id)} style={{
              backgroundColor: main_color,
             marginLeft:'5px',
              border: 'none', outline: 'none', padding: "5px", borderRadius: '10px', color: 'white', cursor: "pointer" , width:'70px',
              marginTop: '10px', 
            }}/>



                        </Grid>

            </Grid>
          </Stack>
        </div>
      })}

      {/* <div>

        {slider_data}
      </div> */}

    </Carousel>
  );
};
export default ExpertSlider

// ReactDOM.render(<Slider />, document.querySelector('.demo-carousel'));
