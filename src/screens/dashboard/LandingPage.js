import Footer from '../../component/footer/Footer'
import Landing_second_section from '../../component/grid/landing_second_section'
import LandingPageHeader from '../../component/header/LandingPageHeader'
import HeroSection from '../../hero/HeroSection'
import { main_color } from '../../utils/color'
import './main.css'
import { Grid, Stack } from '@mui/material'
import image1 from '../../assets/Frame 59.png'
import image2 from '../../assets/Frame 60.png'
import image3 from '../../assets/Frame 61.png'
import image4 from '../../assets/Frame 63.png'
import image5 from '../../assets/Frame 64.png'
import image6 from '../../assets/Frame 65.png'
const LandingPage = () => {
    return (

    //     <div style={{height:'102vh'}}  >
    //   <iframe src="https://honesthome.appssols.com/" width="100%" height="100%" frameborder="0"></iframe>

    //   {/* <iframe src="https://honesthomehubdylan.appssols.com/" width="100%" height="100%" frameborder="0"></iframe> */}
    // </div>


//     <Stack>
//     <Stack bgcolor={main_color} sx={{ height: '100%', }}>
//         <Stack >
//             <LandingPageHeader />
//         </Stack>
//         <Stack sx={{ position: 'relative' }}>

//             <Stack >
//                 <HeroSection />
//             </Stack>
// {/* 
//             <Stack className='marquee-bar' zIndex={2}>
//                 <Grid className='logo-div' container >
//                     <Grid className='company-logo' item md={4} sm={4} lg={4} xs={4}>
//                         <img width={'100%'} src={image1} />
//                     </Grid>
//                     <Grid className='company-logo' item md={4} sm={4} lg={4} xs={4}>
//                         <img width={'100%'} src={image2} />
//                     </Grid>
//                     <Grid className='company-logo' item md={4} sm={4} lg={4} xs={4}>
//                         <img width={'100%'} src={image3} />
//                     </Grid>
//                     <Grid className='company-logo' item md={4} sm={4} lg={4} xs={4}>
//                         <img width={'100%'} src={image2} />
//                     </Grid>
//                     <Grid className='company-logo' item md={4} sm={4} lg={4} xs={4}>
//                         <img width={'100%'} src={image3} />
//                     </Grid>
//                 </Grid>
//             </Stack> */}
//             <div class="marquee-bar">
// <div class="logo-div">
//     <ul>
//         <li>
//             <div class="company-logo">
//             <img width={'100%'} src={image1} />
//             </div>
//         </li>
//         <li>
//             <div class="company-logo">
//             <img width={'100%'} src={image2} />
//             </div>
//         </li>
//         <li>
//             <div class="company-logo">
//             <img width={'100%'} src={image3} />
//             </div>
//         </li>
//         <li>
//             <div class="company-logo">
//             <img width={'100%'} src={image4} />
//             </div>
//         </li>
//         <li>
//             <div class="company-logo">
//             <img width={'100%'} src={image5} />
//             </div>
//         </li>
//         <li>
//             <div class="company-logo">
//             <img width={'100%'} src={image6} />
//             </div>
//         </li>
    
       
      
        
//     </ul>
// </div>
// </div>

//         </Stack>
//     </Stack>
//     <Stack sx={{ mt: { md: 15, lg: 15, sm: 12, xs: 4 } }}>
//         <Landing_second_section />
//     </Stack>
//     <Stack sx={{ backgroundColor: main_color }}>
//         <Footer />
//     </Stack>

// </Stack>


<Stack className='honest-090090'>
  <Stack bgcolor={main_color} sx={{ height: '100%' }} className="honest-1">
    <Stack className="honest-2">
      <LandingPageHeader />
    </Stack>
    <Stack sx={{ position: 'relative' }} className="honest-3">

      <Stack className="honest-4">
        <HeroSection />
      </Stack>

      <div className="marquee-bar honest-5">
        <div className="logo-div honest-6">
          <ul className="honest-7">
            <li className="honest-8">
              <div className="company-logo honest-9">
                <img width={'100%'} src={image1} />
              </div>
            </li>
            <li className="honest-10">
              <div className="company-logo honest-11">
                <img width={'100%'} src={image2} />
              </div>
            </li>
            <li className="honest-12">
              <div className="company-logo honest-13">
                <img width={'100%'} src={image3} />
              </div>
            </li>
            <li className="honest-14">
              <div className="company-logo honest-15">
                <img width={'100%'} src={image4} />
              </div>
            </li>
            <li className="honest-16">
              <div className="company-logo honest-17">
                <img width={'100%'} src={image5} />
              </div>
            </li>
            <li className="honest-18">
              <div className="company-logo honest-19">
                <img width={'100%'} src={image6} />
              </div>
            </li>
          </ul>
        </div>
      </div>

    </Stack>
  </Stack>
  <Stack sx={{ mt: { md: 15, lg: 15, sm: 12, xs: 4 } }} className="honest-20">
    <Landing_second_section />
  </Stack>
  <Stack sx={{ backgroundColor: main_color }} className="honest-21">
    <Footer />
  </Stack>
</Stack>

      
    )
}

export default LandingPage