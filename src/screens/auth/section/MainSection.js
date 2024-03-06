import React, { useState } from 'react'
import '../auth.css'
import { Container, Stack } from '@mui/material'
import { useEffect } from 'react';
import { user_color } from '../../../utils/color';
import TabLoginVendor from '../../TabsScreens/Login/TabLoginVendor';
import TabLoginCustomer from '../../TabsScreens/SignUp/TabLoginCustomer';
import TabLoginExpert from '../../TabsScreens/Expert/TabLoginExpert';
import { setIndexValue } from '../../../store/slice/AuthSlice';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/new/logo1.png'
import slider1 from '../../../assets/new/Rectangle 19.png'
import slider2 from '../../../assets/new/Rectangle 20.png'
import slider3 from '../../../assets/new/Rectangle 21.png'
// import slider4
import p1 from  '../../../assets/new/Ellipse 11.png'
import p2 from  '../../../assets/new/Ellipse 11.png'
import p3 from '../../../assets/new/Ellipse 13.png'
import p4 from  '../../../assets/new/Ellipse 13.png'
const MainSection = () => {
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true);
    const [setIndex, setSetIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState("Vendor");
    const tabsBtn = [
        {
            TabName: 'Vendor',
            Value: "Vendor"
        },
        {
            TabName: 'Customer',
            Value: "Customer"
        },
        {
            TabName: 'Expert',
            Value: "Expert"
        },
    ]
    useEffect(() => {
        if (setIndex === null) {
            setSetIndex(0);
        }
    }, []);
    const handleToggle = (e, i) => {
        dispatch(setIndexValue(e.Value));
        setCurrentIndex(e.Value)
        setSetIndex(i);
        // setIsLogin((prevIsLogin) => !prevIsLogin);
    };
    console.log("currentIndex", currentIndex)
    useEffect(() => {
        dispatch(setIndexValue("Vendor"))
    }, [])
    return (
        <Stack
            className="main_container">
            <Stack   className="my-code" style={{width:"100%", maxWidth:"100%", minWidth:"100%", minHeight: '100vh', }} >
            <Stack
                    sx={{
                        borderRadius: "20px",
                    }}
                    className="blur-container-signup"
                >
                    <div className="form-container-1">
                    <img src={logo} style={{
                      width: '65%',
                      height: 'auto',
                      borderRadius: '20px 20px 0 0',
                  }} />
                        <div className="logo-container-1">
                            Sign In
                        </div>
                        <div className='from-btn-1'>
                            {tabsBtn.map((e, i) => {
                                return <button style={{
                                    backgroundColor: i === setIndex ? user_color : 'transparent',
                                    color: i === setIndex ? 'white' : user_color
                                }} onClick={() => handleToggle(e, i)} className='from-0'>{e.TabName}</button>
                            })}
                        </div>
                        {
                            currentIndex === "Vendor" ? <TabLoginVendor /> : currentIndex === "Customer" ? <TabLoginCustomer /> : currentIndex === "Expert" ? <TabLoginExpert /> : null
                        }
                    </div>
                </Stack>
                <Stack  className="popup-salider">
                <div class="loging-salider">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                        <div >
                          <ol class="carousel-indicators">
         <img src={p1} alt="" data-target="#carouselExampleIndicators" data-slide-to="0" class="active"/>
         <img src={p2} alt="" data-target="#carouselExampleIndicators" data-slide-to="1"/>
         <img src={p3} alt="" data-target="#carouselExampleIndicators" data-slide-to="2"/>
          <img src={p4} alt="" data-target="#carouselExampleIndicators" data-slide-to="3"/>
      </ol>
                        </div>
      <div className="carousel-inner">
      <div className="carousel-item active">
      <img className="d-block w-100" src={slider1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slider2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slider3} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={slider2} alt="fourth slide"/>
    </div>
      </div>
    </div>
      </div>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default MainSection