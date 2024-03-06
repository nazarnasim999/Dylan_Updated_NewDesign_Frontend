import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const FiveStarRating = ({C_ID,V_ID, J_ID, S_ID}) => {
  const [rating, setRating] = useState(0);
  const [review, setreview]= useState('')
  useEffect(() => {
    // This useEffect will run every time the rating state changes
    // alert(rating);
  }, [rating]); // Depend on the rating state
  const handleClick = (value) => {
    setRating(value);
  };
  const handleSubmit =(e)=>{
    e.preventDefault()
    const formData = {
        review:review,
        rating:rating,
        CustomerId:C_ID,
        VendorId: V_ID,
        JobId: J_ID,
        SheduleId: S_ID
    }
    console.log(formData,"FORM DATA")
    axios.post ('http://localhost:5000/customer_review',formData)
    .then((res)=>{
        console.log(res.data.message,"REVIEW")
        if(res.data.message=='Review Posted Successfully')
        {
            toast.success("Review Posted Successfully")
            window.location.reload()
        }
    })
  }
  return (
    <div className='Review-Form'>
      <h1 style={{color:'#002758'}}>How was your Experience?</h1>
      {/* <textarea onChange={(e)=>{setreview(e.target.value)}}  >
</textarea> */}
  <div className='Review_box'>
  <input onChange={(e)=>{setreview(e.target.value)}}  style={{borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    width: "310px"
}}/>
<div style={{display:'flex' , justifyContent:'center'}}>
{[1, 2, 3, 4, 5].map((value) => (
  <Star key={value} filled={value <= rating} onClick={() => handleClick(value)} />
))}
</div>
{/* <p>Current rating: {rating}</p> */}
  <form onSubmit={handleSubmit} style={{textAlign:'center'}}>
<button style={{textAlign:'center',
borderRadius:'10px',
backgroundColor:'#01BAF2',
border:'none',
outline:'none',
color:'white',
fontSize:'15px',
padding: '10px 70px',
justifyContent:'center'
}}>Submit</button>
  </form>
  </div>
    </div>
  );
};
const Star = ({ filled, onClick }) => {
  return (
   <div className='Stars'>
    <span style={{ cursor: 'pointer', color:filled?'orange':'gray' , fontSize:'60px' }} onClick={onClick}>
      {filled ? '★' : '☆'}
    </span>
   </div>
  );
};
export default FiveStarRating;