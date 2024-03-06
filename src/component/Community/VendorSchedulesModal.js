import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import CommunityButton from "../button/GigBtn";
import useTheme from "../../hooks/theme";
import { Stack } from "@mui/material";
import "./premium.css";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { asyncStatus } from "../../utils/async_status";
import { vendor_color } from "../../utils/color";
import { toast } from "react-toastify";
import { create_schedule_async_service } from "../../services/vendorService";
import { create_payment_async_service } from "../../services/vendorService";
import { socket } from "../../config/apiHandle/apiHandle.js";

import { setCreateSeheduleIdle } from "../../store/slice/vendorSlice";
import { setCreatePayment } from "../../store/slice/vendorSlice";

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TextField from '@mui/material/TextField';

const style = {
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,

};

export default function VendorSchedulesModal() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { create_schedule_status,
    create_schedule_data,
    create_schedule_error } = useSelector((state) => state.vendorAuth)

    const { create_payment_status,
      create_payment_data,
      create_payment_error } = useSelector((state) => state.vendorAuth)

  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);

  const [quotetopen,setquoteopen] = useState(false);

const handlequotetopen =()=> setquoteopen(true);


const handleclosequoteopen = ()=> setquoteopen(false);
const [showInstallments, setShowInstallments] = useState(false);







// 
const [numInputs, setNumInputs] = useState('');
  const [inputs, setInputs] = useState([]);

  const handleInputChange1 = (event) => {
    const { value } = event.target;
    setNumInputs(value);
  };

  const handleAddInputs = () => {
    const value = parseInt(numInputs, 10);
    if (!isNaN(value) && value > 0) {
      const newInputs = Array.from({ length: value }, (_, index) => ({
        id: Date.now() + index,
        value: ''
      }));
      setInputs(newInputs);
    }
  };

  const handleDelete = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  const handleInputChangeById = (id, value) => {
    setInputs(inputs.map(input => (input.id === id ? { ...input, value } : input)));
  };



  const submitHandleQuote=()=>{

    console.log(inputs,"quotes")

  }

// 








  const [installmentopen,setinstallmentopen] = useState(false);

const handleinstallmentopen =()=> setinstallmentopen(true);


const handlecloseinstallment = ()=> setinstallmentopen(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  
  const [inputValue, setInputValue] = useState(null);

  const [shedule_description, setshedule_descriptions] = useState(null)
  
  const [data, setData] = useState({
    time: null,
   
    index: null,
   
    shedule_descriptions: ''

    

  })

  const [cost,setcost] = useState(0)
  const [inst,setinst]= useState(0)

  const [instAmt,setinstAmt] = useState(0)

  

  const handleTimeChange = (newTime) => {
    console.log(newTime);
    setData({ ...data, time: newTime });
  };

  // const setshedule_description = (e) => {
  //   console.log('ffffffffffffffffffffffffffffffffffffffff', e.target.value);
  //   setData({ ...data, shedule_descriptions: e.target.value });
  // };


  const setshedule_description = (e) => {
    const inputValue = e.target.value;
    setData({ ...data, shedule_descriptions: inputValue });
    // alert(data.shedule_descriptions)
  };

  const handleInputTitle = (e) => {
    console.log(e.target.value)
    setData({ ...data, duration: e.target.value });
  };

  // const handleInputLocation = (e) => {
  //   console.log(e.target.value)
  //   setData({ ...data, cost: e.target.value });
  // };

    
  const handleInputLocation = (event) => {
    // Update the state only if the entered value is a number or an empty string
    const input = event.target.value;
    if (/^\d*$/.test(input) || input === '') {
      setData({
        ...data,
        [event.target.name]: input
      });
    }
  };



  const handleInputFromtime = (e) => {
    console.log(e.target.value)
    setData({ ...data, time: e.target.value });
  };

  const handleTimeClick = (time , timeIndex) => {
    console.log('hey',time)
    setSelectedTime(time);
    setSelectedIndex(timeIndex);

    setData({ ...data, time: time});
  };

  const handleDateClick = (date,index) => {
    // console.log('hey',date)

    console.log('hey', date, 'Index:', index)
    
    setSelectedDate(date);
    setData({ ...data, date: date, index: index });
  };

  const handleInputChange = (event) => {
    // Update the state with the new input value
    // setInputValue(event.target.value);
    
    
    // alert(inputValue)

    console.log(inputValue,"INPUT VALUE")

    // Now you can send data to your API if needed
    // Example: sendToApi(event.target.value);
  };

  

  // localStorage

  const storedUserId = localStorage.getItem('userId');
  const user_details = localStorage.getItem('user_details');
  const receivedObject = JSON.parse(user_details);

  const job_id =receivedObject.job_details._id


useEffect (()=>{

console.log(receivedObject,"ZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYMAAAALL")

console.log(receivedObject.job_details._id,"ZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYMAAAALL")

},[])




  // localStorage
  // console.log('aaaaaaaa',receivedObject);

  const submitHandle = () => {

    // setInputValue(e.target.value);
    // setSelectedTime(e);
    // console.log(inputValue,"INPUT VALUE")
    
    
    console.log("YOOOOOOOO!")

    let obj = {
      vendorId: storedUserId,
      customerId: receivedObject._id,
      jobId: receivedObject.job_details._id,
      customerJobDetails: {
        images: receivedObject.job_details?.images,
        details: receivedObject.job_details?.details,
        // customer_job_id: receivedObject.job_details?._id
      },
      customerDetails: {
        Name: receivedObject.Name,
        email: receivedObject.email,
        Home_Address: receivedObject.Home_Address
      },
      // vendorBudget: data,
      status: "pending",
      Paystatus: "unPaid",
      vendorBudget:"0.00",
      ...data
    }
    // shedule_description
    

    // if (!data.vendorBudget) {
    //   toast.error("Please Enter Budget", {
    //     position: "top-center",
    //   });
    // } 
    if(!data.time && data.shedule_descriptions)
    {
      dispatch(create_schedule_async_service(obj))
    }

    else if (data.time && !data.shedule_descriptions)
    {
      dispatch(create_schedule_async_service(obj))
    }
    else {
      toast.error("Please Select Time", {
        position: "top-center",
      });
    }
    //  if (!data.time || !data.shedule_descriptions) {
    //   console.log('ddddddddddddddddddd' , data.shedule_descriptions);
    //   toast.error("Please Select TImesss", {
    //     position: "top-center",
    //   });
    // } else {
    //   // console.log(obj);
    //   dispatch(create_schedule_async_service(obj))

    // }



  };

  let InstallmentPerMonth=0;

  const handleInt = ()=>{

    InstallmentPerMonth = cost/inst;

    console.log(InstallmentPerMonth,"ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")

    setData(InstallmentPerMonth,...data)

  }

  const submitHandles = () => {

   
    InstallmentPerMonth = cost/inst;

    console.log(InstallmentPerMonth,"ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")

    // setinstAmt(InstallmentPerMonth);



if (inst>4){

  toast.error("Installments cannot be more than 4")
}

else {


  

    let obj = {
      vendorId: storedUserId,
      customerId: receivedObject._id,
      InstallmentPerMonth:InstallmentPerMonth,
      FullInstallmentCost: parseInt(cost),
      NumberofInstallments:parseInt(inst),
     
      ...data
    }
      dispatch(create_payment_async_service(obj));

      const messageData = {
        sender: storedUserId, // Assuming storedUserId is the vendorId
        receiver: receivedObject._id, // Assuming receivedObject._id is the customerId
        message: `Payment created successfully. Cost: ${data.FullInstallmentCost}, Duration: ${data.NumberofInstallments}`, 
      };
    
      // Emit chat message event with sender, receiver, and message
      socket.emit('send_message', messageData);

   
    }



  };
  useEffect(() => {
    if (create_schedule_status === asyncStatus.SUCCEEDED) {
      handleClose();
      dispatch(setCreateSeheduleIdle(setCreateSeheduleIdle))
    }

    if (create_payment_status === asyncStatus.SUCCEEDED) {
      console.log('aaaaaaaaa');
      handleCloses();
      dispatch(setCreatePayment(setCreatePayment))
    }
  }, [, create_schedule_status, create_payment_status, open]);

// let job_id= ''

  return (
    <div>
      <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px',
        marginRight:'10px',

      }}
        onClick={handleOpen}
      >
        To Pick a Time
      </button>

      <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px'

      }}
        onClick={handleOpens}
      >
        Charge the Customer
      </button>

      <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px',
        marginRight:'10px',
        marginLeft:'10px'

      }}
        onClick={handleinstallmentopen}
      >
        Create Installments
      </button>




      {/* <button style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        padding: '5px',
        borderRadius: '10px',
        color: '#002758',
        fontSize: '12px',
        marginRight:'10px',
        marginLeft:'10px'

      }}
        onClick={handlequotetopen}
      >
        Create a Quote
      </button> */}


      <Modal
        disableScrollLock
        open={open}
        className="scroll-remove"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "55%", lg: "55%", sm: "80%", xs: "70%" },
            // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              sx={{
                fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
                color: "#002758",
                fontWeight: "bold",
                mb: 4
              }}
            >
              {" "}
              Create Schedule
            </Stack>
          </Stack>
          {/* =============== Name  ============ */}
          <Stack  alignItems={'center'}  gap={1.5}  flexDirection={'row'} >
            

            <Stack
              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              Name:
            </Stack>
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              {receivedObject.Name}
            </Stack>
           

         

            <Stack
              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              Email:
            </Stack>
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              {receivedObject.email}
            </Stack>

          
          
          {/* =============== Email  ============ */}
          {/* =============== Home Address  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5}>

            <Stack
              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              Home Address:
            </Stack>
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              {receivedObject.Home_Address}
            </Stack>

          </Stack>
          {/* =============== Home Address  ============ */}
          {/* =============== Problem Details  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5}>

            <Stack
              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              Problem Details:
            </Stack>
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
                fontWeight: "bold",
              }}
            >
              {receivedObject.job_details.details}
            </Stack>

          </Stack>

          

          {/* =============== Problem Details  ============ */}
          {/* =============== Customer Budget  ============ */}
          
          {/* =============== Customer Budget  ============ */}
          {/* ===============Budget  ============ */}
          
          </Stack>

          
          <Stack flexDirection={'row'} gap={1.5} justifyContent={'center'}>
      <Stack px={2} flexDirection={'column'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }} >
        <Stack sx={{ fontSize: 17, fontWeight: 1000, color: 'black' }}>Availablity Date: </Stack>
        {

          receivedObject.job_details?.availablity_time?.map((availability, index) => (
            // <Stack 
            //   key={index}
            //   // var job_id 
             
            //   flexDirection={'row'}
            //   alignItems={'center'}
            //   gap={'80px'}
            // >
            //   {availability.date && (
            //     <>
                        
            //             {console.log(receivedObject?.job_details?.time1,"job_detailssssssssssssssssssssttssssts")}
            //             {console.log('Key1:', index)}
            //             {/* {var job_id=receivedObject.job_details?._id} */}

            //             {/* {{ job_id: receivedObject.job_details?._id }} */}

            //             {/* {console.log(job_id,"job_detailssssssssssssssssssssttssssts")} */}
                        
            //       <Stack
            //         sx={{
            //           color: selectedDate === availability.date ? 'red' : 'black',
            //           cursor: 'pointer',
            //         }}
            //         onClick={() => handleDateClick(availability.date,index)}
            //       >
            //         {new Intl.DateTimeFormat('en-US', {
            //           year: 'numeric',
            //           month: 'long',
            //           day: 'numeric',
            //         }).format(new Date(availability.date))}
            //       </Stack>
            //       <Stack
            //         flexDirection={'row'}
            //         alignItems={'center'}
            //         gap={'35px'}
            //         fontSize={15}
            //         ml={1}
            //       >
            //         {availability.times?.length > 0 ? (
            //           availability.times.map((time, timeIndex) => (
            //             <span
            //               key={timeIndex}
            //               onClick={() => handleTimeClick(time , index)}
            //               style={{
            //                 color: selectedTime === time && selectedIndex === index ? 'red' : 'black',
            //                 cursor: 'pointer',
            //               }}
            //             >
            //               {new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
            //                 hour: '2-digit',
            //                 minute: '2-digit',
            //               })}
            //             </span>
            //           ))
            //         ) : (
            //           <span>-----</span>
            //         )}
            //       </Stack>
            //     </>
            //   )}
            // </Stack>


            <Stack 
  key={index}
  flexDirection={'row'}
  alignItems={'center'}
  gap={'80px'}
>
  {availability.date  && (
    <>
      {console.log(receivedObject?.job_details?.time1, "job_detailssssssssssssssssssssttssssts")}
      {console.log('Key1:', index)}

      <Stack 
        sx={{
          color: selectedDate === availability.date ? 'red' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => handleDateClick(availability.date, index)}
      > 
      {availability.date==='2000-01-01' ? 
      
      // <input 
      
      
      // className="inputshedule"
      // type="text"
      // value={data.shedule_descriptions}
    

      // onChange={setshedule_description}

      
      
      
      // >
      <Stack   className="inputshedule">
      <input 
     
        placeholder="Enter Date and Time"

      
      type="text"
      value={data.shedule_descriptions}
      onChange={(e) => setshedule_description(e)}
    >
    
      </input>

      </Stack>
      
      : 
        new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(availability.date ))}
      </Stack>
      <Stack
        flexDirection={'row'}
        alignItems={'center'}
        gap={'35px'}
        fontSize={15}
        ml={1}
      >
        {availability.times?.length > 0 ? (
          availability.times.map((time, timeIndex) => (
            <span
              key={timeIndex}
              onClick={() => handleTimeClick(time, index)}
              style={{
                color: selectedTime === time && selectedIndex === index ? 'red' : 'black',
                cursor: 'pointer',
              }}
            > 
              {time? 
              new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }) : ' '
            }
            </span>
          ))
        ) : (
          <span>-----</span>
          
        )}
      </Stack>
    </>
  )}
</Stack>

          ))
        }
      </Stack>
    </Stack>
         
          
          {/* <Stack flexDirection={'row'}  gap={1.5} mt={1} >
              
            <Stack  flexDirection="column"
    flex="0.3"
    alignItems={'end'}
    justifyContent="flex-end" 
              sx={{
                fontSize: { md: 24, lg: 24, sm: 16, xs: 11 },
                color: "black",
                fontWeight: "bold",
              }}
            >
              Select Time:
            </Stack>
            

<Stack  flexDirection="column"
            flex="1"
              ml={2}>
      
        <TextField
          label="Time"
          type="time"
          variant="outlined"
          fullWidth
          name="time"
          value={data.time}
          onChange={handleInputFromtime}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>

 

          </Stack> */}
          
          {/* ===============Budget  ============ */}
          {/* =============== Images  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} mt={2}>

            
            {/* </Stack> */}

          </Stack>

          {/* </Stack> */}
          {/* =============== Images  ============ */}
          <Stack alignItems={'center'}>
          <button style={{
            backgroundColor: vendor_color,
            border: 'none',
            outline: 'none',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px',
            // width: '30%'

          }}
            onClick={submitHandle}
          >
            Sumbit
          </button>
          </Stack>







        </Box>
      </Modal>

      <Modal
        disableScrollLock
        open={opens}
        className="scroll-remove"
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "50%", lg: "50%", sm: "80%", xs: "70%" },
            // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              sx={{
                fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
                color: "#002758",
                fontWeight: "bold",
                mb: 4
              }}
            >
              {" "}
              Enter Payment Details
            </Stack>
          </Stack>
          <Stack alignItems={'center'}>
       
       <TextField
       className="create_payment"
         label="Job Duration"
         variant="outlined"
         fullWidth
         name="duration"
         value={data.duration}

         onChange={handleInputTitle}
       

         sx={{
           '& .MuiInput-root': {
             borderBottom: '1px solid black', // Border only at the bottom
             borderTop: 'none', // No top border
             borderLeft: 'none', // No left border
             borderRight: 'none', // No right border
           },
           '&:hover .MuiInput-root': {
             borderBottom: '2px solid black', // Increase border thickness on hover
           },
         }}
         
       />
     <br/>


    
       <br/>
       <TextField
        

        label="Job Cost"
        variant="outlined"
        fullWidth
        name="cost"
        value={data.cost}
        onChange={handleInputLocation}
        InputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}
        sx={{
          '& .MuiInput-root': {
            borderBottom: '1px solid black', // Border only at the bottom
            borderTop: 'none', // No top border
            borderLeft: 'none', // No left border
            borderRight: 'none', // No right border
          },
          '&:hover .MuiInput-root': {
            borderBottom: '2px solid black', // Increase border thickness on hover
          },
        }}

         
       />
     </Stack>
          
       

           
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
              }}
            >
              {receivedObject.Budget}
            </Stack>

      
          {/* =============== Customer Budget  ============ */}
          {/* ===============Budget  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} >

           

          </Stack>
          {/* <br/> */}
          <Stack alignItems={'center'}>
        
          <button style={{
            backgroundColor: vendor_color,
            border: 'none',
            outline: 'none',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px',
            // width:'30%'

          }}
            onClick={submitHandles}
          >
            Sumbit
          </button>
          </Stack>







        </Box>
      </Modal>



          {/* Installments Logic */}

          <Modal
        disableScrollLock
        open={installmentopen}
        className="scroll-remove"
        onClose={handlecloseinstallment}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "50%", lg: "50%", sm: "80%", xs: "70%" },
            // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              sx={{
                fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
                color: "#002758",
                fontWeight: "bold",
                mb: 4
              }}
            >
              {" "}
              Enter Installment Details
            </Stack>
          </Stack>
          <Stack alignItems={'center'}>
       
       <TextField
       className="create_payment"
         label="No of Installments"
         variant="outlined"
         fullWidth
         name="duration"
        //  value={data.installments}

         onChange= {(e)=>(setinst(e.target.value))}
       

         sx={{
           '& .MuiInput-root': {
             borderBottom: '1px solid black', // Border only at the bottom
             borderTop: 'none', // No top border
             borderLeft: 'none', // No left border
             borderRight: 'none', // No right border
           },
           '&:hover .MuiInput-root': {
             borderBottom: '2px solid black', // Increase border thickness on hover
           },
         }}
         
       />
     <br/>
    
       <br/>
       <TextField
        

        label="Job Cost"
        variant="outlined"
        fullWidth
        name="cost"
        // value={data.installment_cost}
        onChange={(e)=>(setcost(e.target.value))}
        InputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
        }}
        sx={{
          '& .MuiInput-root': {
            borderBottom: '1px solid black', // Border only at the bottom
            borderTop: 'none', // No top border
            borderLeft: 'none', // No left border
            borderRight: 'none', // No right border
          },
          '&:hover .MuiInput-root': {
            borderBottom: '2px solid black', // Increase border thickness on hover
          },
        }}

         
       />
     </Stack>
          
       

           
            <Stack

              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
              }}
            >
              {receivedObject.Budget}
            </Stack>

      
          {/* =============== Customer Budget  ============ */}
          {/* ===============Budget  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} >

           

          </Stack>
          {/* <br/> */}
          <Stack alignItems={'center'}>
        
          <button style={{
            backgroundColor: vendor_color,
            border: 'none',
            outline: 'none',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px',
            // width:'30%'



          }}
            onClick={submitHandles}
          >
            Sumbit
          </button>
          </Stack>







        </Box>
      </Modal>





      {/* Create a quote Logic */}

      <Modal
        disableScrollLock
        open={quotetopen}
        className="scroll-remove"
        onClose={handleclosequoteopen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "50%", lg: "50%", sm: "80%", xs: "70%" },
            // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              sx={{
                fontSize: { md: 40, lg: 40, sm: 30, xs: 15 },
                color: "#002758",
                fontWeight: "bold",
                mb: 4
              }}
            >
              {" "}
              Create No of Quotes for Customer
            </Stack>
          </Stack>
          <Stack alignItems={'center'}>
              <Stack>
              <div>
      <input
        type="text"
        value={numInputs}
        onChange={handleInputChange1}
      />
      <button onClick={handleAddInputs}>Add Quotes</button>
      {inputs.map(input => (
        <div key={input.id}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChangeById(input.id, e.target.value)}
          />
          <button onClick={() => handleDelete(input.id)}>Delete</button>
        </div>
      ))}
    </div>
              </Stack>

       {/* <TextField
       className="create_payment"
         label="Quote"
         variant="outlined"
         fullWidth
         name="duration"
        //  value={data.installments}
         onChange= {(e)=>(setinst(e.target.value))}
         sx={{
           '& .MuiInput-root': {
             borderBottom: '1px solid black', // Border only at the bottom
             borderTop: 'none', // No top border
             borderLeft: 'none', // No left border
             borderRight: 'none', // No right border
           },
           '&:hover .MuiInput-root': {
             borderBottom: '2px solid black', // Increase border thickness on hover
           },
         }}
       /> */}
     <br/>
       <br/>

     </Stack>
            <Stack
              sx={{
                fontSize: { md: 16, lg: 16, sm: 16, xs: 11 },
                color: "#646464",
              }}
            >
              {receivedObject.Budget}
            </Stack>
          {/* =============== Customer Budget  ============ */}
          {/* ===============Budget  ============ */}
          <Stack flexDirection={'row'} alignItems={'center'} gap={1.5} >
          </Stack>
          {/* <br/> */}
          <Stack alignItems={'center'}>
          <button style={{
            backgroundColor: vendor_color,
            border: 'none',
            outline: 'none',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px',
            // width:'30%'
          }}
            onClick={submitHandleQuote}
          >
            Sumbit
          </button>
          </Stack>
        </Box>
      </Modal>









      


{/*  */}







    </div >
  );
}


