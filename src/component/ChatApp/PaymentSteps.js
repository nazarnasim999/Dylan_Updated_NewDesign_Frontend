import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { apiHandle, baseURL } from '../../config/apiHandle/apiHandle';
import { user_color } from '../../utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { edit_schedule_by_id_async, save_and_post_async } from '../../services/paymentService ';
import { get_customer_schedule_async_service } from '../../services/customerService';
import { socket } from "../../config/apiHandle/apiHandle.js";
import FiveStarRating from '../Community/Rating.js';


export function CheckoutFormSteps({vendor_budget,J_ID,numberofinstallments_matching,numberofinstallments ,selected_schedule_id}) {
    const   stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch()
    const [clientSecret, setClientSecret] = useState(null);

    const [showrating,setshowrating] = useState(false)

    const [showpayment,setshowpayment] = useState(true)


    const [showopen,setshowopen] = useState(false)

  

    useEffect(()=>{

        async function updateSchedule() {
        

            await axios.post(`${baseURL}/updatescheduleandcustomerjob`,J_ID)
            .then((response)=>
            
                console.log(response)
            )
            .catch(error=>
                console.log(error)
            )
    
    
    
        } 


        if(showopen===true){

            updateSchedule();
        }




    },[])

    
   


   



    const handleID=()=>{

        setshowpayment(false)
        setshowrating(true)

     
      
        
        
        // const formData ={
        //     job_ID:job_ID,
        //     _id: s_id
        // }
        // try{
        //     axios.post('http://localhost:5000/order_completed',formData)
        //     .then((response)=> {
        //         console.log("ORDER_COMPLETED")
        //     }
        //     )
            
        // }
        // catch (err) {
        //     console.log(err)
        // }
        
        

    }

    const [id1, setid1]=useState('');
    const { payment_status,
        payment_data,
        payment_error } = useSelector((state) => state.payment)


        // const handle_date =()=>{
        //     let i_num = 1;
        //     axios.post(' http://localhost:5000/update-shedule',{ id1: id1, i_num: i_num })
        //     console.log("Payment done TSTSTSTSTSTST",id1,i_num)

        // }

       
        

    useEffect(() => {
        // setid1(get_schedule_data_nested.scheduleId)
        // console.log(get_schedule_data_nested.scheduleId,"aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANANANANANANANANANANANANAN")
        // Fetch the client secret when the component mounts
        // apiHandle.post('/create-payment-intent', { amount: get_schedule_data_nested?.vendorBudget.toString() + '00' })
        
        if(vendor_budget!==0||vendor_budget!=='')
        {

        

        apiHandle.post('/create-payment-intent', { amount:vendor_budget.toString()+ '00' })
            .then(response => {
                const { clientSecret } = response.data;
                console.log('Client Secret:', clientSecret); // Log clientSecret
                setClientSecret(clientSecret);
            })
            .catch(error => {
                console.error('Error fetching client secret:', error);
            });
        }
    }, [vendor_budget]);

    // console.log("get_schedule_data_nested", get_schedule_data_nested);
        

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        // Fetch additional data (customerId, vendorId, amount) from your application state or props

        // Use the client secret to confirm the payment
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
            // Pass additional data here

            // customerId: '657b3267b61870438dc6a2da', // Replace with actual customerId
            // vendorId: '657b33a8b0ecf22648173b2c',     // Replace with actual vendorId
            // amount: 20000,                   // Replace with actual amount

        });

        if (error) {
            console.error('Payment failed:', error.message);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded!');

            const formData={
                J_ID:J_ID,
                schedule_id:selected_schedule_id
            }
            await axios.post(`${baseURL}/updatescheduleandcustomerjob`,formData)
            .then((response)=>
            
                console.log(response),
                window.location.reload()
            )
            .catch(error=>
                console.log(error)
            )
    
    
    
        


          


            // get_status_from_api(paymentIntent.status)





            
            // const messageData = {
            //     sender: get_schedule_data_nested?.customerId, // Assuming storedUserId is the vendorId
            //     receiver: get_schedule_data_nested?.vendorId, // Assuming receivedObject._id is the customerId
            //     message: 'Payment send successfully', 
            //   };
            
            //   // Emit chat message event with sender, receiver, and message
            //   socket.emit('send_message', messageData);
        

            // console.log("paymentIntent", paymentIntent)

            // Handle successful payment and send data to your backend for saving in MongoDB
            // const { customerId, vendorId, amount } = paymentIntent;

            // Make an API call to your backend to save the payment details
            // savePaymentDetails(customerId, vendorId, amount);
            // dispatch(save_and_post_async(
            //     {
            //         customerId: get_schedule_data_nested?.customerId,
            //         vendorId: get_schedule_data_nested?.vendorId,
            //         amount: get_schedule_data_nested?.vendorBudget
            //     }
            // ))
            // dispatch(edit_schedule_by_id_async({
            //     scheduleId: get_schedule_data_nested?.scheduleId
            // }))
            // dispatch(get_customer_schedule_async_service())

        }
    };








    const handleSubmitInstallment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        // Fetch additional data (customerId, vendorId, amount) from your application state or props

        // Use the client secret to confirm the payment
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
            // Pass additional data here

            // customerId: '657b3267b61870438dc6a2da', // Replace with actual customerId
            // vendorId: '657b33a8b0ecf22648173b2c',     // Replace with actual vendorId
            // amount: 20000,                   // Replace with actual amount

        });

        if (error) {
            console.error('Payment failed:', error.message);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded!');

            const formData={
                J_ID:J_ID,
                numberofinstallments:numberofinstallments,
                numberofinstallments_matching:numberofinstallments_matching,
                schedule_id:selected_schedule_id
            }
            await axios.post(`${baseURL}/updateinstallmentscheduleandcustomerjob`,formData)
            .then((response)=>
            
                console.log(response),
                window.location.reload()
            )
            .catch(error=>
                console.log(error)
            )
    
    
    
        


          


            // get_status_from_api(paymentIntent.status)





            
            // const messageData = {
            //     sender: get_schedule_data_nested?.customerId, // Assuming storedUserId is the vendorId
            //     receiver: get_schedule_data_nested?.vendorId, // Assuming receivedObject._id is the customerId
            //     message: 'Payment send successfully', 
            //   };
            
            //   // Emit chat message event with sender, receiver, and message
            //   socket.emit('send_message', messageData);
        

            // console.log("paymentIntent", paymentIntent)

            // Handle successful payment and send data to your backend for saving in MongoDB
            // const { customerId, vendorId, amount } = paymentIntent;

            // Make an API call to your backend to save the payment details
            // savePaymentDetails(customerId, vendorId, amount);
            // dispatch(save_and_post_async(
            //     {
            //         customerId: get_schedule_data_nested?.customerId,
            //         vendorId: get_schedule_data_nested?.vendorId,
            //         amount: get_schedule_data_nested?.vendorBudget
            //     }
            // ))
            // dispatch(edit_schedule_by_id_async({
            //     scheduleId: get_schedule_data_nested?.scheduleId
            // }))
            // dispatch(get_customer_schedule_async_service())

        }
    };



        const [payment,setpayment]=useState(true)
        const [installment,setinstallment]=useState(false)


        const handleShow =()=>{

            setinstallment(false)
            setpayment(true)

            setIsActive1(false);
            setIsActive(true);

            console.log(vendor_budget,"CHECKOUT BUDGET")


        }

        const handleShow1 =()=>{

            setpayment(false)

            setinstallment(true)

            console.log("cancel")
            setIsActive(false);

            setIsActive1(true);

        }


        const [isActive, setIsActive] = useState(true);
        const [isActive1, setIsActive1] = useState(false);



    return (


            //  new form


            
    <div class="popup-my">
    <div class="main-ts-popup">


        <div class="tab">
            <button class="tablinks" onClick={handleShow}      className={`hover-yellow ${isActive ? 'active' : ''}`}>Direct Pay</button>
            <button class="tablinks" onClick={handleShow1}      className={`hover-yellow ${isActive1 ? 'active' : ''}`} >Easy Installments</button>
          </div>

          {
            payment &&
          

        <div id=" " class=" ">


            <div class="go-dady">
                
              
            <form onSubmit={handleSubmit} style={{ padding: '10px', width:'80%' }} className="unique-class-78">
                {/* Add your additional fields here */}
                <h2 style={{ marginBottom: '20px', color: "#002758", fontWeight: '600', fontFamily: 'Urbanist', textAlign:'center', fontSize:'50px', letterSpacing:'1px' }} className="unique-class-79">Pay With Stripe</h2>
                <label style={{ color: "#01BAF2", fontFamily: 'Urbanist', fontSize:'20px', fontWeight:'600' }} className="unique-class-9090">
                    Enter Card Details
                    <CardElement className="unique-class-81" />
                </label>
                <div style={{ display:'flex', justifyContent:'center' }} className="unique-class-82">
                    <button style={{ padding: '10px', borderRadius: '10px', background: '#01BAF2', width: '100%', color: 'white', border: "none", outline: "none", marginTop: '30px', width:'257px' }} type="submit" disabled={!stripe} onClick={stripe} className="unique-class-83">
                        Pay
                    </button>
                </div>
            </form>





            </div>

          

          </div>
}

{
    installment &&

          
          <div id=" " class=" ">
            

            <div class="go-dady">
           
              
       
            <form onSubmit={handleSubmitInstallment} style={{ padding: '10px', width:'80%' }} className="unique-class-78">
            <div>
                    <div>Total Installments:{numberofinstallments}</div>
                    <div>Installment:{numberofinstallments_matching} </div>

                </div>
                {/* Add your additional fields here */}
                <h2 style={{ marginBottom: '20px', color: "#002758", fontWeight: '600', fontFamily: 'Urbanist', textAlign:'center', fontSize:'50px', letterSpacing:'1px' }} className="unique-class-79">Pay Installments With Stripe</h2>

               
                <label style={{ color: "#01BAF2", fontFamily: 'Urbanist', fontSize:'20px', fontWeight:'600' }} className="unique-class-9090">
                    Enter Card Details
                    <CardElement className="unique-class-81" />
                </label>


                <div style={{ display:'flex', justifyContent:'center' }} className="unique-class-82">

                        
              

                    <button style={{ padding: '10px', borderRadius: '10px', background: '#01BAF2', width: '100%', color: 'white', border: "none", outline: "none", marginTop: '30px', width:'257px' }} type="submit" disabled={!stripe} onClick={stripe} className="unique-class-83 ">
                        Pay Installment 
                    </button>
                </div>
            </form>


            </div>
          </div>

}
          
    


    </div>
</div>





       
     
    );
}

