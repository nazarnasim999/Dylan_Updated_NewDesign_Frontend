import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../config/apiHandle/apiHandle";

import m1 from '../../src/assets/m1.png'
import m2 from '../../src/assets/m2.png'
import m3 from '../../src/assets/m3.png'
import m4 from '../../src/assets/m4.png'
import m5 from '../../src/assets/m5.png'
import m6 from '../../src/assets/m6.png'

import job_pic from '../../src/assets/woh.png'

import vendor_profile from '../../src/assets/Vendor-imger copy.png'
import { useParams } from "react-router-dom";


const Customer_Vendor =()=>{

            const [order_id,setorder_id]=useState('')
            const [selected_queries,setselected_queries]=useState('')
            const [description,setdescription]=useState('')
            const [job_created_date,setjob_created_date]=useState('')

            const [Job_Review,setJob_Review]= useState([])

            const [get_selected_vendor_profile,setget_selected_vendor_profile]= useState([])

            const [Vendor_Selected,setVendor_Selected]= useState([])

            const [Selected_Quote,setSelected_Quote]= useState([])

            const [CustomerProfile,setCustomerProfile]= useState([])

            const { id } = useParams();

        useEffect(()=>{
            console.log('tlllllllllll')

            axios.get(`${baseURL}/get_vendor_customer_job_details/${id}`)
            .then((response)=>{


                console.log(response.data,"CUSTOMER_VENDOR_DETAILS")

                setorder_id(response.data.data.Order_Id)
                setselected_queries(response.data.data.selected_queries)
                setdescription(response.data.data.details)
                setjob_created_date(response.data.data.createdAt)

                setJob_Review(response.data.Job_Review)

                setget_selected_vendor_profile(response.data.get_selected_vendor_profile)

                setVendor_Selected(response.data.Vendor_Selected)

                setSelected_Quote(response.data.selectedObjects)

                setCustomerProfile(response.data.customer_details)          

                console.log(Selected_Quote,"Vendor Selected")

            })
            .catch((error)=>{

                console.log(error)
            })



        },[])



         // Parse the ISO 8601 date string
         const date = new Date(job_created_date);

         // Format the date to "day month year" format
         const formattedDate = date.toLocaleDateString('en-US', {
             day: 'numeric',
             month: 'long',
             year: 'numeric'
         });
     
         // Format the time to "hour:minute AM/PM" format
         const formattedTime = date.toLocaleTimeString('en-US', {
             hour: 'numeric',
             minute: '2-digit',
             hour12: true
         });



    return (

        <div>
         

            <section class="ts-bhai">
        <div class="main-ts-bhai">
            <div class="ts-bhai-box">
                <div class="ts-list-bhai-1">
                    <h2>Order Id: {order_id}</h2>
                </div>

                <div class="ts-list-bhai-2">
                    <h3>Timeline</h3>
                </div>

                <div class="ts-list-bhai-3">
                    <div class="who-list-1">
                        <img src={m1} alt="" class="mm"/>
                       <div class="who-tital">
                        <h2>Job Created</h2>
                        <p>{formattedDate}, {formattedTime}</p>
                       </div>

                       <div class="who-box">
                        <div class="who-box-tital">
                            <h2>{selected_queries?selected_queries:'No Job Here'}</h2>
                            <p>{description?description:'No Description Posted'}</p>

                            <div class="who-box-btn">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                                        <path d="M22.3072 9.99793L17.3134 5.00418L14.303 7.97918L11.2926 5.00418L15.2947 0.966683C15.578 0.68335 15.8967 0.476988 16.2509 0.3476C16.6051 0.218211 16.9592 0.153044 17.3134 0.1521C17.6912 0.1521 18.0515 0.217266 18.3943 0.3476C18.7372 0.477933 19.038 0.684294 19.2967 0.966683L22.3072 3.9771C22.7322 4.37849 23.0452 4.84504 23.2464 5.37677C23.4476 5.90849 23.5477 6.44541 23.5467 6.98752C23.5467 7.53057 23.4466 8.06182 23.2464 8.58127C23.0462 9.10071 22.7331 9.57293 22.3072 9.99793ZM2.79258 16.5146C2.36758 16.0896 2.15508 15.5876 2.15508 15.0087C2.15508 14.4297 2.36758 13.9282 2.79258 13.5042L6.26341 9.99793L9.27383 13.0084L5.76758 16.5146C5.36619 16.9396 4.87602 17.1521 4.29708 17.1521C3.71813 17.1521 3.21663 16.9396 2.79258 16.5146ZM1.26966 27.0333C1.00994 26.75 0.809245 26.4374 0.667578 26.0955C0.525912 25.7536 0.455078 25.3933 0.455078 25.0146C0.455078 24.6368 0.520245 24.277 0.650578 23.9351C0.780911 23.5932 0.987273 23.2801 1.26966 22.9958L11.2926 13.0084L6.79466 8.47502C6.36966 8.07363 6.15716 7.58393 6.15716 7.00593C6.15716 6.42793 6.36966 5.92596 6.79466 5.50002C7.19605 5.07502 7.69188 4.86252 8.28216 4.86252C8.87244 4.86252 9.38008 5.07502 9.80508 5.50002L14.303 9.99793L16.3217 7.97918L20.2884 12.0167C20.5717 12.3 20.7134 12.6306 20.7134 13.0084C20.7134 13.3861 20.5717 13.7167 20.2884 14C20.0051 14.2833 19.6745 14.425 19.2967 14.425C18.919 14.425 18.5884 14.2833 18.3051 14L5.27174 27.0333C4.98841 27.3167 4.67533 27.5235 4.33249 27.6538C3.98966 27.7842 3.64163 27.8489 3.28841 27.8479C2.93424 27.8479 2.58008 27.7771 2.22591 27.6354C1.87174 27.4938 1.553 27.2931 1.26966 27.0333Z" fill="#B22234"/>
                                      </svg>
                                    {/* <p>Plumbing</p> */}
                                </span>



                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                                        <path d="M22.3072 9.99793L17.3134 5.00418L14.303 7.97918L11.2926 5.00418L15.2947 0.966683C15.578 0.68335 15.8967 0.476988 16.2509 0.3476C16.6051 0.218211 16.9592 0.153044 17.3134 0.1521C17.6912 0.1521 18.0515 0.217266 18.3943 0.3476C18.7372 0.477933 19.038 0.684294 19.2967 0.966683L22.3072 3.9771C22.7322 4.37849 23.0452 4.84504 23.2464 5.37677C23.4476 5.90849 23.5477 6.44541 23.5467 6.98752C23.5467 7.53057 23.4466 8.06182 23.2464 8.58127C23.0462 9.10071 22.7331 9.57293 22.3072 9.99793ZM2.79258 16.5146C2.36758 16.0896 2.15508 15.5876 2.15508 15.0087C2.15508 14.4297 2.36758 13.9282 2.79258 13.5042L6.26341 9.99793L9.27383 13.0084L5.76758 16.5146C5.36619 16.9396 4.87602 17.1521 4.29708 17.1521C3.71813 17.1521 3.21663 16.9396 2.79258 16.5146ZM1.26966 27.0333C1.00994 26.75 0.809245 26.4374 0.667578 26.0955C0.525912 25.7536 0.455078 25.3933 0.455078 25.0146C0.455078 24.6368 0.520245 24.277 0.650578 23.9351C0.780911 23.5932 0.987273 23.2801 1.26966 22.9958L11.2926 13.0084L6.79466 8.47502C6.36966 8.07363 6.15716 7.58393 6.15716 7.00593C6.15716 6.42793 6.36966 5.92596 6.79466 5.50002C7.19605 5.07502 7.69188 4.86252 8.28216 4.86252C8.87244 4.86252 9.38008 5.07502 9.80508 5.50002L14.303 9.99793L16.3217 7.97918L20.2884 12.0167C20.5717 12.3 20.7134 12.6306 20.7134 13.0084C20.7134 13.3861 20.5717 13.7167 20.2884 14C20.0051 14.2833 19.6745 14.425 19.2967 14.425C18.919 14.425 18.5884 14.2833 18.3051 14L5.27174 27.0333C4.98841 27.3167 4.67533 27.5235 4.33249 27.6538C3.98966 27.7842 3.64163 27.8489 3.28841 27.8479C2.93424 27.8479 2.58008 27.7771 2.22591 27.6354C1.87174 27.4938 1.553 27.2931 1.26966 27.0333Z" fill="#B22234"/>
                                      </svg>
                                    {/* <p>Plumbing</p> */}
                                </span>
                            </div>
                        </div>

                        <div class="who-box-imger">
                            <img src={job_pic} alt=""/>
                        </div>
                       </div>
                    </div>


                    <div class="who-list-1">
                        <img src={m2} alt="" class="mm"/>
                        <div class="who-tital">
                            <h2>Vendor Selected</h2>
                            <p>30 March 2024  22:00</p>
                           </div>
 
                        <div class="who-box">
                      <div class="Vendor-id">
                        <img src={get_selected_vendor_profile.Profile_Image?get_selected_vendor_profile.Profile_Image:vendor_profile} alt=""/>
                        <span>
                            <h2>{get_selected_vendor_profile.Name?get_selected_vendor_profile.Name:'No Data'}</h2>
                            <p>Vendor</p>
                        </span>
                      </div>

                      <div class="Vendor-ul-boxer">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.29297 8.33333C7.29297 7.61504 7.57831 6.92616 8.08622 6.41825C8.59413 5.91034 9.28301 5.625 10.0013 5.625C10.7196 5.625 11.4085 5.91034 11.9164 6.41825C12.4243 6.92616 12.7096 7.61504 12.7096 8.33333C12.7096 9.05163 12.4243 9.7405 11.9164 10.2484C11.4085 10.7563 10.7196 11.0417 10.0013 11.0417C9.28301 11.0417 8.59413 10.7563 8.08622 10.2484C7.57831 9.7405 7.29297 9.05163 7.29297 8.33333Z" fill="#01BAF2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z" fill="#01BAF2"/>
                          </svg> {get_selected_vendor_profile.Home_Address?get_selected_vendor_profile.Home_Address:'Home_Address'}</span>


                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#01BAF2"/>
                              </svg>{get_selected_vendor_profile.phoneno?get_selected_vendor_profile.phoneno:'No Number Yet'}
                          </span>

                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#01BAF2"/>
                                <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#01BAF2"/>
                              </svg>{get_selected_vendor_profile.email?get_selected_vendor_profile.email:'Email@email.com'}
                          
                               
                          </span>
                      </div>

                      <div class="Vendor-para">
                        <h2>{Job_Review.rating?Job_Review.rating:'-'}</h2>
                        <p>Rating</p>
                      </div>
                     </div>
             
                    </div>


                    <div class="who-list-1">
                        <img src={m3} alt="" class="mm"/>
                        <div class="who-tital">
                         <h2>Quotes Created</h2>
                         {/* <p>24 March 2024  18:00</p> */}
                        </div>
 
                        <div class="who-box jj">

                        {
                            Vendor_Selected.map((e,i)=>(
                                

                                <div key={i}class="sh-card" >

                                <div class="sh-box-1">
                                    <div class="sh-list-1">
                                        <img src={e.gig_image?e.gig_image:vendor_profile} alt=""/>
                                        <span>
                                            <h2>{e.Vendor_Name?e.Vendor_Name:'Name'}</h2>
                                            <h3>Plumber</h3>
                                            <button>View</button>
                                        </span>
                                    </div>
                                        <div class="sh-list-2">
                                            <p>Note:</p>
                                
                                
                                
                                        </div>
                                
                                        <p>{e.status?e.status:'-'} </p>
                                    
                                        <div class="sh-list-2">
                                            <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.0015 6.80764C12.0015 6.65463 11.9407 6.50788 11.8325 6.39969C11.7243 6.2915 11.5776 6.23071 11.4246 6.23071C11.2716 6.23071 11.1248 6.2915 11.0166 6.39969C10.9084 6.50788 10.8477 6.65463 10.8477 6.80764V13.1538C10.8477 13.2555 10.8746 13.3554 10.9257 13.4433C10.9767 13.5312 11.0501 13.6041 11.1384 13.6546L15.1769 15.9623C15.3094 16.0339 15.4647 16.0508 15.6096 16.0095C15.7544 15.9681 15.8774 15.8717 15.9521 15.7409C16.0268 15.6101 16.0475 15.4553 16.0095 15.3095C15.9716 15.1637 15.8782 15.0385 15.7492 14.9607L12.0015 12.8192V6.80764Z" fill="#01BAF2"/>
                                                <path d="M12.0003 21.2308C14.4485 21.2308 16.7963 20.2583 18.5274 18.5272C20.2585 16.7961 21.2311 14.4482 21.2311 12.0001C21.2311 9.5519 20.2585 7.20402 18.5274 5.47292C16.7963 3.74181 14.4485 2.76929 12.0003 2.76929C9.55215 2.76929 7.20427 3.74181 5.47316 5.47292C3.74206 7.20402 2.76953 9.5519 2.76953 12.0001C2.76953 14.4482 3.74206 16.7961 5.47316 18.5272C7.20427 20.2583 9.55215 21.2308 12.0003 21.2308ZM20.0772 12.0001C20.0772 14.1422 19.2263 16.1966 17.7115 17.7113C16.1968 19.226 14.1424 20.077 12.0003 20.077C9.85817 20.077 7.80377 19.226 6.28905 17.7113C4.77434 16.1966 3.92338 14.1422 3.92338 12.0001C3.92338 9.85792 4.77434 7.80353 6.28905 6.28881C7.80377 4.77409 9.85817 3.92313 12.0003 3.92313C14.1424 3.92313 16.1968 4.77409 17.7115 6.28881C19.2263 7.80353 20.0772 9.85792 20.0772 12.0001Z" fill="#01BAF2"/>
                                              </svg><p>Job Duration : 2days </p></span>
                                
                                           <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                                            <path d="M22.5 0.875H1.5C1.20163 0.875 0.915483 0.993526 0.704505 1.2045C0.493526 1.41548 0.375 1.70163 0.375 2V14C0.375 14.2984 0.493526 14.5845 0.704505 14.7955C0.915483 15.0065 1.20163 15.125 1.5 15.125H22.5C22.7984 15.125 23.0845 15.0065 23.2955 14.7955C23.5065 14.5845 23.625 14.2984 23.625 14V2C23.625 1.70163 23.5065 1.41548 23.2955 1.2045C23.0845 0.993526 22.7984 0.875 22.5 0.875ZM16.9884 12.875H7.01156C6.78896 11.7952 6.25487 10.8043 5.47529 10.0247C4.6957 9.24513 3.70479 8.71104 2.625 8.48844V7.51156C3.70479 7.28896 4.6957 6.75487 5.47529 5.97529C6.25487 5.1957 6.78896 4.20479 7.01156 3.125H16.9884C17.211 4.20479 17.7451 5.1957 18.5247 5.97529C19.3043 6.75487 20.2952 7.28896 21.375 7.51156V8.48844C20.2952 8.71104 19.3043 9.24513 18.5247 10.0247C17.7451 10.8043 17.211 11.7952 16.9884 12.875ZM21.375 5.18188C20.9012 5.01274 20.4709 4.74048 20.1152 4.38477C19.7595 4.02906 19.4873 3.59877 19.3181 3.125H21.375V5.18188ZM4.68187 3.125C4.51274 3.59877 4.24048 4.02906 3.88477 4.38477C3.52906 4.74048 3.09877 5.01274 2.625 5.18188V3.125H4.68187ZM2.625 10.8181C3.09877 10.9873 3.52906 11.2595 3.88477 11.6152C4.24048 11.9709 4.51274 12.4012 4.68187 12.875H2.625V10.8181ZM19.3181 12.875C19.4873 12.4012 19.7595 11.9709 20.1152 11.6152C20.4709 11.2595 20.9012 10.9873 21.375 10.8181V12.875H19.3181ZM12 4.25C11.2583 4.25 10.5333 4.46993 9.91661 4.88199C9.29993 5.29404 8.81928 5.87971 8.53545 6.56494C8.25162 7.25016 8.17736 8.00416 8.32205 8.73159C8.46675 9.45902 8.8239 10.1272 9.34835 10.6517C9.8728 11.1761 10.541 11.5333 11.2684 11.6779C11.9958 11.8226 12.7498 11.7484 13.4351 11.4645C14.1203 11.1807 14.706 10.7001 15.118 10.0834C15.5301 9.4667 15.75 8.74168 15.75 8C15.75 7.00544 15.3549 6.05161 14.6517 5.34835C13.9484 4.64509 12.9946 4.25 12 4.25ZM12 9.5C11.7033 9.5 11.4133 9.41203 11.1666 9.2472C10.92 9.08238 10.7277 8.84811 10.6142 8.57403C10.5006 8.29994 10.4709 7.99834 10.5288 7.70736C10.5867 7.41639 10.7296 7.14912 10.9393 6.93934C11.1491 6.72956 11.4164 6.5867 11.7074 6.52882C11.9983 6.47094 12.2999 6.50065 12.574 6.61418C12.8481 6.72771 13.0824 6.91997 13.2472 7.16665C13.412 7.41332 13.5 7.70333 13.5 8C13.5 8.39782 13.342 8.77936 13.0607 9.06066C12.7794 9.34196 12.3978 9.5 12 9.5Z" fill="#01BAF2"/>
                                          </svg><p>Budget: {e.vendorBudget?e.vendorBudget:0} </p></span>
                                
                                
                                        </div>
                                </div>
                                
                               
                                
                                </div>



                            ))
                        }



 
                         <div class="who-box-imger">
                             <img src="./img/woh.png" alt=""/>
                         </div>
                        </div>
                     </div>
 
 
                     <div class="who-list-1">
                        <img src={m4} alt="" class="mm"/>
                         <div class="who-tital">
                             <h2>Selected Quote</h2>
                             <p>{Selected_Quote.lenght > 0 ? Selected_Quote[0].date:'Date'}</p>
                            </div>
  
                         <div class="who-box">
                       <div class="Vendor-id">
                         <img src={Selected_Quote.lenght > 0 ?Selected_Quote[0].gig_image:vendor_profile} alt=""/>
                         <span>
                             <h2>{Selected_Quote.length > 0 ?Selected_Quote[0].Vendor_Name:'Name'}</h2>
                             <p>Vendor</p>
                         </span>
                       </div>
 
                       <div class="Vendor-ul-boxer">
                         <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                             <path d="M7.29297 8.33333C7.29297 7.61504 7.57831 6.92616 8.08622 6.41825C8.59413 5.91034 9.28301 5.625 10.0013 5.625C10.7196 5.625 11.4085 5.91034 11.9164 6.41825C12.4243 6.92616 12.7096 7.61504 12.7096 8.33333C12.7096 9.05163 12.4243 9.7405 11.9164 10.2484C11.4085 10.7563 10.7196 11.0417 10.0013 11.0417C9.28301 11.0417 8.59413 10.7563 8.08622 10.2484C7.57831 9.7405 7.29297 9.05163 7.29297 8.33333Z" fill="#01BAF2"/>
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z" fill="#01BAF2"/>
                           </svg> United States</span>
 
 
                           <span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#01BAF2"/>
                               </svg>{get_selected_vendor_profile.phoneno?get_selected_vendor_profile.phoneno:'No Number Yet'}
                           </span>
 
                           <span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#01BAF2"/>
                                 <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#01BAF2"/>
                               </svg> {get_selected_vendor_profile.email?get_selected_vendor_profile.email:'Email@email.com'}
                           </span>
                       </div>
 
                       <div class="Vendor-para">
                         <h2>{Job_Review.rating?Job_Review.rating:'-'}</h2>
                         <p>Rating</p>
                       </div>
                      </div>
              
                     </div>

                     <div class="who-list-1">
                        <img src={m5} alt="" class="mm"/>
                        <div class="who-tital">
                         <h2>Payment Option</h2>
                         {/* <p>24 March 2024  18:00</p> */}
                        </div>
 
                        <div class="who-box">
                         <div class="who-box-tital pppopp">
                             {/* <h2>Plumbing Maintainance</h2> */}
                             <p>Payment Option</p>
                             
 
                             <div class="who-box-btn">
                             <p>Direct Pay</p>
                             </div>
                         </div>
 
                         <div class="who-box-imger">
                             <img src="./img/woh.png" alt=""/>
                         </div>
                        </div>
                     </div>
 
 
                     <div class="who-list-1">
                        <img src={m6} alt="" class="mm"/>
                         <div class="who-tital">
                             <h2>Project Closed</h2>
                             <p>30 March 2024  22:00</p>
                            </div>
  
                         <div class="who-box">
                       <div class="Vendor-id">
                         <img src="./img/Vendor-imger.png" alt=""/>
                         <span>
                             {/* <h2>George</h2> */}
                             <p>{Job_Review.review?Job_Review.review:'-'}</p>
                         </span>
                       </div>
 
                       {/* <div class="Vendor-ul-boxer">
                         <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                             <path d="M7.29297 8.33333C7.29297 7.61504 7.57831 6.92616 8.08622 6.41825C8.59413 5.91034 9.28301 5.625 10.0013 5.625C10.7196 5.625 11.4085 5.91034 11.9164 6.41825C12.4243 6.92616 12.7096 7.61504 12.7096 8.33333C12.7096 9.05163 12.4243 9.7405 11.9164 10.2484C11.4085 10.7563 10.7196 11.0417 10.0013 11.0417C9.28301 11.0417 8.59413 10.7563 8.08622 10.2484C7.57831 9.7405 7.29297 9.05163 7.29297 8.33333Z" fill="#01BAF2"/>
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z" fill="#01BAF2"/>
                           </svg> Arizona Towers, Street 21</span>
 
 
                           <span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#01BAF2"/>
                               </svg>111-222-444-0
                           </span>
 
                           <span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#01BAF2"/>
                                 <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#01BAF2"/>
                               </svg> Alex@example.com
                           </span>
                       </div> */}
 
                       <div class="Vendor-para">
                         <h2>{Job_Review.rating?Job_Review.rating:'-'}</h2>
                         <p>Rating</p>
                       </div>
                      </div>
              
                     </div>
            </div>
        </div>
            <div class="ts-bhai-box-1">


                <div class="custumber-card">
                    <div class="cs-list-1">
                        <h2>Customer Profile</h2>
                    </div>

                    <div class="cs-list2">
                        <div class="cs-card">
                        <div class="cs-card-tital">
                            <img src={vendor_profile} alt=""/>
                            <span>
                                <h2>{CustomerProfile.Name?CustomerProfile.Name:'Name'}</h2>
                                <p>Customer</p>
                            </span>
                        </div>
                    <span>
                        {/* <h2>4.5</h2>
                        <p>Rating</p> */}
                    </span>    
                        </div>

                        {/* <div class="cs-card-para">
                            <h3>Intro</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue leo, dapibus vitae cursus sed, tempor fringilla .</p>
                        </div> */}
                        <div class="cs-ul-li">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.29297 8.33333C7.29297 7.61504 7.57831 6.92616 8.08622 6.41825C8.59413 5.91034 9.28301 5.625 10.0013 5.625C10.7196 5.625 11.4085 5.91034 11.9164 6.41825C12.4243 6.92616 12.7096 7.61504 12.7096 8.33333C12.7096 9.05163 12.4243 9.7405 11.9164 10.2484C11.4085 10.7563 10.7196 11.0417 10.0013 11.0417C9.28301 11.0417 8.59413 10.7563 8.08622 10.2484C7.57831 9.7405 7.29297 9.05163 7.29297 8.33333Z" fill="#01BAF2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z" fill="#01BAF2"/>
                              </svg> {CustomerProfile.Home_Address?CustomerProfile.Home_Address:'ADDRESS'}</span>
    
    
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#01BAF2"/>
                                  </svg>{CustomerProfile.phoneno?CustomerProfile.phoneno:'123'}
                              </span>
    
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#01BAF2"/>
                                    <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#01BAF2"/>
                                  </svg> {CustomerProfile.email?CustomerProfile.email:'Email'}
                              </span>
                        </div>
                    </div>
                </div>


                
                <div class="custumber-card">
                    <div class="cs-list-1">
                        <h2>Vendor Profile</h2>
                    </div>

                    <div class="cs-list2">
                        <div class="cs-card">
                        <div class="cs-card-tital">
                            <img src={get_selected_vendor_profile.Profile_Image?get_selected_vendor_profile.Profile_Image:vendor_profile} alt=""/>
                            <span>
                                <h2>{get_selected_vendor_profile.Name?get_selected_vendor_profile.Name:'No Data'}</h2>
                                <p>Vendor</p>
                            </span>
                        </div>
                    <span>
                        <h2>{Job_Review.rating?Job_Review.rating:'-'}</h2>
                        <p>Rating</p>
                    </span>    
                        </div>

                        {/* <div class="cs-card-para">
                            <h3>Intro</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue leo, dapibus vitae cursus sed, tempor fringilla .</p>
                        </div> */}
                        <div class="cs-ul-li">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.29297 8.33333C7.29297 7.61504 7.57831 6.92616 8.08622 6.41825C8.59413 5.91034 9.28301 5.625 10.0013 5.625C10.7196 5.625 11.4085 5.91034 11.9164 6.41825C12.4243 6.92616 12.7096 7.61504 12.7096 8.33333C12.7096 9.05163 12.4243 9.7405 11.9164 10.2484C11.4085 10.7563 10.7196 11.0417 10.0013 11.0417C9.28301 11.0417 8.59413 10.7563 8.08622 10.2484C7.57831 9.7405 7.29297 9.05163 7.29297 8.33333Z" fill="#01BAF2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z" fill="#01BAF2"/>
                              </svg>{get_selected_vendor_profile.Home_Address?get_selected_vendor_profile.Home_Address:'Home_Address'}</span>
    
    
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#01BAF2"/>
                                  </svg>{get_selected_vendor_profile.phoneno?get_selected_vendor_profile.phoneno:'phoneno'}
                              </span>
    
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#01BAF2"/>
                                    <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#01BAF2"/>
                                  </svg> {get_selected_vendor_profile.email?get_selected_vendor_profile.email:'email'}
                              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


        </div>

    )



}




export default Customer_Vendor