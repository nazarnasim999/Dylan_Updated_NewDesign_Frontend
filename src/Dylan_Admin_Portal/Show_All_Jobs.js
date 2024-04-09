import React, { useEffect, useState } from "react";

import vendor_pic from '../../src/assets/Vendors-pic.png'
import vendor_pic1 from '../../src/assets/Vendor-imger.png'
import axios from "axios";
import { baseURL } from "../config/apiHandle/apiHandle";
import { Link } from "react-router-dom";

const ShowAllJobs=()=>{

    const [all_jobs,setall_jobs]= useState([])
    const [job_count,setjob_count]= useState()

    useEffect(()=>{

            axios.get(`${baseURL}/getalljobs`)
            .then((response)=>{

                console.log(response.data,"Show All Jobs")
                setall_jobs(response.data.Jobs)
                setjob_count(response.data.Jobs_Count)




            })
            .catch((error)=>{
                console.log(error)
            })



    },[])






    return (

        <div>
  



  <section class="Admin-Vendors">

        <div class="main-Vendors">


            <div class="Vendors-tital">
                <span>

                    <img src={vendor_pic} alt=""/>
                    <h2>Total Jobs</h2>
                </span>
                

                <h2>{job_count}</h2>
            </div>


            <div class="Vendors-box">

                {
                    all_jobs.map((e,i)=>(

                        <div class="Vendors-list" key={i}>
                    <div class="your-listing-tital with">
                        <img src={vendor_pic} alt=""/>
                       
                        

                        {/* <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span> */}

                        <span>
                            <h2> Order ID</h2>
                            <h3>{e.Order_Id?e.Order_Id:'000'}</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                    <Link to={`/customer_vendor/${e._id}`}>
                        <button>View Profile</button>
                        </Link>
                    </div>

                </div>


                    ))
                }
                

                
                   {/* <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>
                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>
                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>
                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>
                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>
                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>
                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>                

                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>
                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div>                
                   <div class="Vendors-list">
                    <div class="your-listing-tital with">
                        <img src="./img/Vendor-imger.png" alt=""/>

                        <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span>

                        <span>
                            <h2> Address</h2>
                            <h3>City: California   Zip Code: 221133</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                        <button>View Profile</button>
                    </div>

                </div> */}

            </div>


        </div>

    </section>







</div>


    )



}


export default ShowAllJobs
