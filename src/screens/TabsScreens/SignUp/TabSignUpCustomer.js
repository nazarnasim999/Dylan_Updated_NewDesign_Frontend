import React from 'react'
import '../../auth/auth.css'
import { Upload_image_component } from '../../../component/uploadImage/uploadImage'
import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../config/apiHandle/apiHandle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { create_customer_async_service } from '../../../services/customerService';
import { asyncStatus } from '../../../utils/async_status';
import { setCustomerIdle } from '../../../store/slice/customerSlice';
import { useEffect } from 'react';
import { user_color } from '../../../utils/color';
const TabSignUpCustomer = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const { customer_status,
        customer_data,
        customer_error, } = useSelector((state) => state.customerAuth)
    const [selectedImage, setSelectedImage] = useState("");
    const [communityData, setCommunityData] = useState({});
    const [data, setData] = useState({});
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    // console.log('communityData', communityData);
    const selectedImageHandle = async (e) => {
        const { id, files } = e.target;
        try {
            const formData = new FormData();
            formData.append("files", files[0]);
            const response = await axios.post(`${baseURL}/upload-files`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // console.log({ response });
            // Handle the response from the backend
            setSelectedImage(response?.data?.url);
            setCommunityData((prev) => ({
                ...prev,
                community_image_url: response?.data?.url,
            }));
            console.log("Response from the backend:", response.data);
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };
    const isFormValid = () => {
        // Check if all required fields in the 'data' object are filled
        return (
            data
            && // Ensure 'data' is not null
            selectedImage.trim() !== ''
        );
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const submitHandle = () => {
        let obj = {
            ...data,
            type: "customer",
            password: password
        }
        // Check if passwords match
        if (password === confirmPassword) {
            // Passwords match, handle the form submission
            // console.log('Form submitted successfully', obj);
            dispatch(create_customer_async_service(obj))
        } else {
            // Passwords don't match, update state to indicate the mismatch
            setPasswordsMatch(false);
            alert("Passwords do not match")
        }
        // console.log(obj);
    }
    React.useEffect(() => {
        setIsSubmitDisabled(!isFormValid());
    }, [selectedImage, data]);
// }, [ data]);
    useEffect(() => {
        if (customer_status === asyncStatus.SUCCEEDED) {
            navigation('/dashboard')
            window.location.reload()
            dispatch(setCustomerIdle(setCustomerIdle))
        }
    }, [, customer_status])
    return (
        <div>
            <div className="form-1">
                <div style={{
                    textAlign: 'start',
                    alignItems: 'flex-start'
                }}>
                    {/* <Upload_image_component
                        selectedImage={selectedImage}
                        selectedImageHandle={selectedImageHandle}
                    /> */}
                </div>
                <div className="form-group-1">
                    <input type="text" id="Name" name="name" placeholder="Name" required="" onChange={(e) =>
                        setData({ ...data, Name: e.target.value })
                    } />
                    <input type="email" id="email" name="email" placeholder="Enter your email" required="" onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    } />
                </div>
                <div className="form-group-1">
                    <input id="Password" name="Password" placeholder="Password" required="" type="password" value={password} onChange={handlePasswordChange} />
                    <input type="Password" id="Password-c" name="Password" placeholder="Confirm Password" required="" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <div className="form-group-1">
                    <input type="text" id="Address" name="Address" placeholder="Address" required="" onChange={(e) =>
                        setData({ ...data, Home_Address: e.target.value })
                    } />
                    <input type="number" id="Zip Code" name="Zip Code" placeholder="Zip Code" required="" onChange={(e) =>
                        setData({ ...data, zipCode: e.target.value })
                    } />
                </div>
                <div className="form-group-1">
                    <input type="phoneno" id="phoneno" name="phoneno" placeholder="Phone No" required="" onChange={(e) =>
                        setData({ ...data, phoneno: e.target.value })
                    } />
                    </div>
                <div className='cheak-boxs-box' >
                    <label class="containerz">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <p className="signup-link-1" >
                        Agree With
                        <a href="/privacypolicy" className="signup-link link-1"> Terms & Conditions </a>
                    </p>
                </div>
                <div className='btn-singup' >
                    <button
                        // disabled={isSubmitDisabled}
                        // onClick={submitHandle} style={{
                        //     backgroundColor: isSubmitDisabled ? "gray" : user_color,
                        //     border: isSubmitDisabled ? "none" : `1px solid  ${user_color}`
                        // }} className="form-submit-btn" type="submit"> Sign up </button>
                        onClick={submitHandle} style={{
                            backgroundColor: user_color,
                            border: `1px solid  ${user_color}`
                        }} className="form-submit-btn" type="submit"> Sign up </button>
                </div>
            </div>
        </div>
    )
}
export default TabSignUpCustomer