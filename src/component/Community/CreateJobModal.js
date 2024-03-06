import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useTheme from "../../hooks/theme";
import { Grid, Stack } from "@mui/material";
import "./premium.css";
import TextField from '@mui/material/TextField';
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import GigButton from "../button/GigBtn";
import { user_color, vendor_color } from "../../utils/color";
import { MultiImageUploadComponent } from "../uploadImage/MultiImagesUpload";
import { Progress_Bar } from "../proress/ProgressBar";
import { IoAttach } from "react-icons/io5";
import Vender_Select from "../select/Vender_Select ";
import PriceSlider from "../Slider/Price_Slider";
import TimePicker from "../DateTimePicker/DateTimePicker";
import Btn from "../button/Button";
import { create_customer_job_async_service } from "../../services/customerService";
import { asyncStatus } from "../../utils/async_status";
import { setCustomerIdle } from "../../store/slice/customerSlice";
import TimeRangeSelector from "../DateTimePicker/TimerangePicker copy";
import Select_selected_queries from "../select/Select_selected_queries";
import { Row } from "react-bootstrap";
import { toast } from "react-toastify";

import backimg from '../../../src/assets/Frame 153.png'


const style = {
  position: "absolute",
  top: "50%",
  left: "45%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function CreateJobModal() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { customer_status,
    customer_data,
    customer_error,
    customer_job_status,
    customer_job_data,
    customer_job_error } = useSelector((state) => state.customerAuth)

  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState([{ date: "", times: ["", "", ""] }]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [progressValue, setProgressValue] = useState(0);
  const [data, setData] = useState({
    images: null,
    Budget: null,
    vendor_level: null,
    availablity_times: null,
    selected_queries: null,

    emergencyResponse: null,

    // 
    
   


  });


  const handleSelectedImages = (value) => {

    setProgressValue(value.totalValue)
    setData({ ...data, images: value.images, })
  };
  const setSelectOneValue = (value) => {
    setData({ ...data, vendor_level: value });
  }



const [showtime, setshowtime] = useState(true)

const handleshowtime =(selectedValue)=>{

    console.log("TS2312312312",selectedValue)

  
    setSelect_Queries(selectedValue);
    // Here you can add your condition based on the selected value
    if (selectedValue === 'Landscaping' ||selectedValue === 'Cleaning') {
      setshowtime(false); // Show content based on the selected value
      setdropdown(0);
    } 
    else{
      setshowtime(true)
    }
    
   

}

  const setSelect_Queries = (value) => {

   
    setData({ ...data, selected_queries: value });
  }
  const setSelectedPriceValue = (value) => {
    setData({ ...data, Budget: value });
  }
  // const setSelectedTimeValue = (value) => {
  //   setData({ ...data, availablity_times: value });

  // }
  const setSelectedTimeValue = (value) => {
    setData({ ...data, availablity_times: value });
  }

  const handleInputTitle = (e) => {
    console.log(e.target.value)
    setData({ ...data, title: e.target.value });
  };

  const handleInputBreif = (e) => {
    console.log(e.target.value)
    setData({ ...data, details: e.target.value });
  };


  const handleInputLocation = (e) => {
    console.log(e.target.value)
    setData({ ...data, location: e.target.value });
  };



  const handleInputZipCode = (e) => {
    console.log(e.target.value)
    setData({ ...data, zipcode: e.target.value });
  };
// 

const handleInputAmount = (e) => {
  console.log(e.target.value)
  setData({ ...data, amount: e.target.value });
};



const handleInputNote = (e) => {
  console.log(e.target.value,"noteeeeee")
  setData({ ...data, note: e.target.value });
};




  const handleInputTodate = (e) => {
    console.log(e.target.value)
    setData({ ...data, to_date: e.target.value });
  };

  const handleInputTotime = (e) => {
    console.log(e.target.value)
    setData({ ...data, first_time: e.target.value });
  };


  const handleInputTodates = (e, dateIndex) => {
    const { value } = e.target;
    const updatedDates = [...dates];
    updatedDates[dateIndex].date = value;
    setDates(updatedDates);
  };

  const handleInputTime = (e, dateIndex) => {
    const { value } = e.target;
    const updatedDates = [...dates];
    updatedDates[dateIndex].times = value;
    setDates(updatedDates);
  };


// ts work


const [addDateClickCount, setAddDateClickCount] = useState(0);
const handleAddDate = () => {


 
  if (addDateClickCount < 2) {
    setAddDateClickCount((prevCount) => prevCount + 1);
    setDates([...dates, { date: "", times: [] }]);
    setshowdt(true)
  } else {
    console.log("Cannot add more dates.");
    toast.error("Cannot Add more than 3 Quotes")
    // Optionally, you can show a message or take other actions when the limit is reached.
  }
};



const [dropdown,setdropdown] = useState(0)

const [dropdown1,setdropdown1] = useState(0)
const [showdt,setshowdt]= useState(false)

// const handledropdown =(e)=>{

// setdropdown(e)

// setdropdown1(e.target.value)
// console.log(dropdown1)
// if (dropdown1 !== "1" && dropdown1 !== "2" && dropdown1 !== "3") {
//   setshowdt(false);
// } else {
//   setshowdt(true);
//   let i=1

// for (i=1; i<=parseInt(dropdown1); i++){


//   setTimeout(() => {
//   handleAddDate();
// }, 1500); 
//   console.log(i,"TSTSTS")
// }

// }

// // console.log(dropdown+1,"dropdownnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
// console.log(dropdown1,"askdask")

// let i=1

// // for (i=1; i<=parseInt(dropdown1); i++){


// //   setTimeout(() => {
// //   handleAddDate();
// // }, 1500);
// //   console.log(i,"TSTSTS")
// // }

// }
// let v = 0
const [v, setV] = useState(0);

const handledropdown = (e) => {
  const selectedValue = e.target.value;
  setdropdown1(selectedValue);
  console.log(selectedValue,"selected");

  if (selectedValue === '1' && v === 0) { 
    setV(prevV => prevV + 1); // Update v to 1 and show the div
    setshowdt(true);
    console.log(v,"TSasdasdasdasd");
  } else if (selectedValue === '2') {
    handleDeleteDate();
    console.log("delete")
  } else if (v === 1) {
    handleAddDate();
  }
};



  const handleDeleteDate = () => {


    
      const updatedDates = [...dates];
      updatedDates.pop(); // Remove the last element
      setDates(updatedDates);
      
      // Reverse the count when deleting a date
      setAddDateClickCount((prevCount) => Math.max(0, prevCount - 1));
    
  };





  const handleInputFromtime = (e) => {
    console.log(e.target.value)
    setData({ ...data, second_time: e.target.value });
  };


  const handleInputLasttime = (e) => {
    console.log(e.target.value)
    setData({ ...data, last_time: e.target.value });
  };


// My work
// My work
const [selectedImage, setSelectedImage] = useState("");
const [communityData, setCommunityData] = useState({});


// my work


// my work












  const storedUserId = localStorage.getItem('userId');
  // const query = localStorage.getItem('user_query');
  const submitHandle = () => {
    let obj = {
      type: "customer",
      user_id: storedUserId,
      available:dates,
      ...data,

    }
    if(data.selected_queries === 'public' || !data.selected_queries )
    {
      // alert("Selected Queries cannot be Null")
      toast.warning('Selected Queries cannot be Null');
    }

    else {
      dispatch(create_customer_job_async_service(obj))
      if (customer_job_status === asyncStatus.SUCCEEDED) {
        dispatch(setCustomerIdle(setCustomerIdle))
      }
  
    }


    // dispatch(create_customer_job_async_service(obj))
    // if (customer_job_status === asyncStatus.SUCCEEDED) {
    //   dispatch(setCustomerIdle(setCustomerIdle))
    // }


    // console.log(obj);

  };

  useEffect(() => {
    if (customer_job_status === asyncStatus.SUCCEEDED) {
      handleClose();
      window.location.reload()
      dispatch(setCustomerIdle(setCustomerIdle))
    }
  }, [, customer_job_status])



  // Create state for emergency response


  const [buttonColor, setButtonColor] = useState("Transparent");
  const [emergency, setEmergency] = useState("");
  // const [emergency, setEmergency] = useState("");
  const [fontColor, setFontColor] = useState("black");


 



  const handleEmergencyClick = () => {
    // Check the current state and toggle styles accordingly
    if (buttonColor === "transparent" && fontColor === "black") {
      setButtonColor("brown");
      setFontColor("white");
      setEmergency("emergency");
      setData({ ...data, emergency:'emergency' });
      console.log("EmergencyButtonClicked", emergency);
      // SetisVisible(!isVisible)
    } else {
      setButtonColor("transparent");
      setFontColor("black");
      setEmergency("");
      setData({ ...data, emergency:false });
      console.log("EmergencyButtonUNClicked", emergency);
      // SetisVisible(isVisible)
    }
  };
  

  
  const [showTextField, setShowTextField] = useState(false);



  const [isVisible,SetisVisible] =useState(true);

  const handleVisible = ()=>{

    SetisVisible(!isVisible);

  }
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };



  const items = Array.from({ length: dropdown }, (_, index) => index);




  return (
    <div className="class-215">
    <GigButton
        onClick={handleOpen}
        color={theme.text_color}
        style={{
            backgroundColor: user_color
        }}
        padding="10px 20px 10px 20px"
        title="Create Job"
        className="class-216"
    />
    <Modal
        disableScrollLock
        open={open}
        className="scroll-remove class-217"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{}}
        
    >
        <Box
            sx={{
                ...style,
                width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
                height: { md: "95%", lg: "95%", sm: "90%", xs: "90%" },
                overflowY: "scroll",
            }}
            className="scroll_content scroll-remove jobmodal class-218"
        >
            <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                className="class-219"
            >
                <Stack
                    sx={{
                        fontSize: { md: 36, lg: 36, sm: 30, xs: 15 },
                        color: "#002758",
                        fontWeight: "bold",
                    }}
                    className="class-220"
                >
                    {" "}
                    Create Job
                </Stack>
            </Stack>
            <Stack
                sx={{
                    fontSize: { md: 19, lg: 19, sm: 15, xs: 12 },
                    color: "black",
                }}
                className="class-221"
            >
                Include job details such as job title, location, and date to specify the job requirements. Additionally, input your availability for the vendor to schedule a visit during that time.
            </Stack>
            {/* Discription And Image upload section */}
            <Stack sx={{ flexDirection: 'row', gap: 0.1, alignItems: 'center', mt: 1, textAlign: 'start', justifyContent: 'center' }} className="class-222">
                <Stack><IoAttach color={"black"} size={20} /></Stack>
                <Stack sx={{ color: "black", fontSize: { md: 14, lg: 14, sm: 14, xs: 12 }, }} className="class-223">Attach file and photo (Optional)</Stack>
            </Stack>
            <Stack flexDirection={'row'} sx={{ justifyContent: 'center' }} className="class-224">
                <MultiImageUploadComponent selectedImagesHandle={handleSelectedImages} />
            </Stack>
            <Stack className="class-225">
                <Progress_Bar progressValue={progressValue} />
            </Stack>
            {/* Discription And Image upload section */}
            {/* Level Time or  Price section */}
            <Grid container className="class-226">
                <Grid item md={12} lg={12} xs={12} sm={12} mt={1} className="class-227">
                    <Select_selected_queries setSelect_Queries={handleshowtime} option_First={' Type of Home Service'} className="class-228" />
                </Grid>
                <Grid item md={12} lg={12} xs={12} sm={12} className="class-229">
                    <Stack alignItems={'center'} className="class-230">
                        <br />
                        <TextField
                            label="One Sentence Description"
                            variant="outlined"
                            fullWidth
                            name="details"
                            value={data.details}
                            onChange={handleInputBreif}
                            className="class-231"
                        />
                        <br />
                        <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            name="location"
                            value={data.location}
                            onChange={handleInputLocation}
                            className="class-232"
                        />
                        <br />
                        <TextField
                            label="Zip Code"
                            variant="outlined"
                            fullWidth
                            name="zipcode"
                            value={data.zipcode}
                            onChange={handleInputZipCode}
                            className="class-233"
                        />
                        <br/>
                        {!showtime ? (
                            <TextField
                                label="Time"
                                variant="outlined"
                                fullWidth
                                name="amount"
                                value={data.amount}
                                onChange={handleInputAmount}
                                className="class-234"
                            />
                        ) : null}
                    </Stack>
                    {showtime && emergency !== 'emergency' ? (
                        <div className="dropdown class-235">
                            <label htmlFor="dropdown">Amount of Quotes:</label>
                            <select id="dropdown" value={dropdown} onChange={handledropdown}>
                                <option value="">Select...</option>
                                <option value="1"> Add</option>
                                <option value="2"> Delete</option>
                            </select>
                        </div>
                    ) : null}
                    <button
                        onClick={handleEmergencyClick}
                        style={{
                            backgroundColor: buttonColor,
                            color: fontColor,
                            border: '1px solid brown',
                            outline: 'none',
                            padding: '10px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                        }}
                        className="class-236"
                    >
                        Emergency
                    </button>
                    <br />
                    <br />
                    
                    {emergency === 'emergency' && (
                        <TextField
                            label="NOTE"
                            variant="outlined"
                            fullWidth
                            name="note"
                            value={data.note}
                            onChange={handleInputNote}
                            className="class-237"
                        />
                    )}
                    {emergency !== 'emergency' && showdt && (
                        <Stack className="class-238">
                            {dates.map((date, dateIndex) => (
                                <div key={dateIndex} mt={3}>
                                    <Grid container spacing={2} mt={3}>
                                        <Grid item md={6} lg={6} xs={12} sm={12}>
                                            <Stack sx={{ color: "black", fontSize: { md: 20, lg: 20, sm: 15, xs: 8 }, fontWeight: "bold" }} mt={3}>
                                                Select job date
                                            </Stack>
                                        </Grid>
                                        <Grid item md={6} lg={6} xs={12} sm={12}>
                                            <TextField
                                                label="Date"
                                                type="date"
                                                variant="outlined"
                                                fullWidth
                                                name={`to_date_${dateIndex}`}
                                                value={date.date}
                                                onChange={(e) => handleInputTodates(e, dateIndex)}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className="class-239"
                                            />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={2}>
                                        <Grid item md={6} lg={6} xs={12} sm={12}>
                                            <Stack sx={{ color: "black", fontSize: { md: 20, lg: 20, sm: 15, xs: 8 }, fontWeight: "bold" }} mt={3}>
                                                Select Your Availability
                                            </Stack>
                                        </Grid>
                                        <Grid item md={6} lg={6} xs={12} sm={12}>
                                            <TextField
                                                label="Availability"
                                                type="time"
                                                variant="outlined"
                                                fullWidth
                                                name={`time_${dateIndex}`}
                                                value={date.times}
                                                onChange={(e) => handleInputTime(e, dateIndex)}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className="class-240"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            ))}
                        </Stack>
                    )}
                </Grid>
                {emergency !== 'emergency' && (
                    <Stack
                        style={{
                            width: "100%",
                            display: "flex",
                            alignContent: "flex-start",
                            flexWrap: "nowrap",
                            flexDirection: "row",
                        }}
                        className="class-241"
                    >
                    </Stack>
                )}
            </Grid>
            <br />
            <Stack mt={3} alignItems={'center'} className="Create_button class-242">
                <Btn
                    onClick={submitHandle}
                    label={'Create Now'}
                    style={{
                        backgroundColor: user_color,
                        border: 'none', outline: 'none', padding: "10px", borderRadius: '10px', color: 'white', cursor: "pointer", width: '130px'
                    }}
                    className="class-243"
                />
            </Stack>
        </Box>
    </Modal>
</div>

  );
}