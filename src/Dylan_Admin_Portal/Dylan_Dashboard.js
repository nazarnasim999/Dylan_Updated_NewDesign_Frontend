import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../config/apiHandle/apiHandle";


const Dylan_Dashboard =()=>{

    const [all_vendors,setall_vendors]= useState([])
    const [Vendor_Count,setVendor_Count]= useState()



    const [All_Customers,setAll_Customers]= useState([])
    const [Customer_Count,setCustomer_Count]= useState()




    const [All_Jobs,setAll_Jobs]= useState([])
    const [Jobs_Count,setJobs_Count]= useState()





    useEffect(()=>{

            axios.get(`${baseURL}/getallvendors`)
            .then((response)=>{

                console.log(response.data,"Show All Vendors")
                setall_vendors(response.data.Vendors)
                setVendor_Count(response.data.Vendors_Count)




            })
            .catch((error)=>{
                console.log(error)
            })






            axios.get(`${baseURL}/getalljobs`)
            .then((response)=>{

                // console.log(response.data,"Show All Vendors")
                // setAll_Customers(response.data.Customers)
                setJobs_Count(response.data.Jobs_Count)




            })
            .catch((error)=>{
                console.log(error)
            })




            axios.get(`${baseURL}/getallcustomers`)
            .then((response)=>{

                // console.log(response.data,"Show All Vendors")
                // setAll_Customers(response.data.Customers)
                setCustomer_Count(response.data.Customer_Count)




            })
            .catch((error)=>{
                console.log(error)
            })







    },[])





    return(

        <div>
 <section class="main-dashbord">
        <div class="main-mb">

            <div class="mb-part-1">

                <div class="mb-box-1">

                    <div class="mb-list">
                        <div class="mb-list-img">
                            <img src="./img/job.png" alt=""/>
                          
                        </div>

                        <span>
                            <h3>Total Jobs</h3>

                                <Link to={'/showalljobs'}>
                                <a>View Report</a>
                                </Link>
                            
                        </span>

                        <h2>
                            {Jobs_Count?Jobs_Count:0}
                        </h2>
                    </div>


                    <div class="mb-list">
                        <div class="mb-list-img">
                            <img src="./img/anime.png" alt=""/>
                        </div>

                        <span>
                            <h3>Total Customers</h3>
                            <a href="#">View Report</a>
                        </span>

                        <h2>
                            {Customer_Count?Customer_Count:0}
                        </h2>
                    </div>


                    <div class="mb-list">
                        <div class="mb-list-img">
                            <img src="./img/seller.png" alt=""/>
                        </div>

                        <span>
                            <h3>Total Vendors</h3>
                            <Link to={'/totalvendors'}> 
                            <a>View Report</a>
                            
                            </Link>
                        </span>

                        <h2>
                        {Vendor_Count}
                        </h2>
                    </div>

                </div>

                <div class="mb-box-2">

                </div>
            </div>

            <div class="mb-part-2">

                <div class="my-list-1">
                   
                    <div class="id-my-card">
                        <img src="./img/Ellipse 15.png" alt=""/>

                        <span>
                            <h2>Georgia Wilson</h2>
                            <h3>Admin</h3>
                        </span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <path d="M18.9997 0H0.333008V32.6667H32.9997V14H28.333V28H4.99967V4.66667H18.9997V0Z" fill="#01BAF2"/>
                      </svg>
                </div>

                <div class="my-list-2">
                    <p>Total Transactions</p>

                    <h3>100,000$</h3>

                    <a href="#">View Report</a>
                </div>

                <div class="my-list-3">
                    <span>

                        <h3>Sales goal</h3>
                        <h2>$32,000</h2>

                    </span>


                    <span>

                        <h3>Remaining</h3>
                        <h2>$7,600</h2>

                    </span>
                </div>

                <div class="my-list-4">

                </div>

                <div class="my-list-5">
                    <p>Take A Record</p>
                </div>

                <div class="my-list-6">
                    <span><h2> Heating and Ventilation</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>

                      <span><h2> Roofing</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>

                      <span><h2> Re-modelling</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>

                      <span><h2> Cleanings</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>
                      <span><h2>Water Heater</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>
                </div>
            </div>

        </div>
    </section>
            </div>


    )


}


export default Dylan_Dashboard