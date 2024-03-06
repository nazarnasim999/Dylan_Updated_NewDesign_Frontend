import React from 'react'
import '../../auth/auth.css'
import CheckboxList from './CheckBox'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Upload_image_component } from '../../../component/uploadImage/uploadImage'
import { useEffect } from 'react'
import { asyncStatus } from '../../../utils/async_status'
import axios from 'axios'
import { baseURL } from '../../../config/apiHandle/apiHandle'
import { setVendorIdle } from '../../../store/slice/vendorSlice'
import { user_color } from '../../../utils/color'
import { create_vendor_async_service } from '../../../services/vendorService'
const TabSignUpVendor = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const { vendor_status,
        vendor_data,
        vendor_error } = useSelector((state) => state.vendorAuth)
    const [selectedImage, setSelectedImage] = useState("");
    const [communityData, setCommunityData] = useState({});
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
    const [data, setData] = useState({
        selected_queries: null
    });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const set_selected_queries = (value) => {
        setData({ ...data, selected_queries: value });
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const isFormValid = () => {
        // Check if all required fields in the 'data' object are filled
        return (
            data && // Ensure 'data' is not null
            selectedImage.trim() !== ''
        );
    };
    const submitHandle = () => {
        let obj = {
            ...data,
            type: "vendor",
            Profile_Image: selectedImage,
            password: password
        }
        console.log(obj);;
        if (password === confirmPassword) {
            // Passwords match, handle the form submission
            console.log('Form submitted successfully', obj);
            dispatch(create_vendor_async_service(obj))
        } else {
            // Passwords don't match, update state to indicate the mismatch
            setPasswordsMatch(false);
            alert("Passwords do not match")
        }
    }
    useEffect(() => {
        if (vendor_status === asyncStatus.SUCCEEDED) {
            navigation('/dashboard')
            window.location.reload()
            dispatch(setVendorIdle(setVendorIdle))
        }
    }, [, vendor_status])
    React.useEffect(() => {
        setIsSubmitDisabled(!isFormValid());
    }, [selectedImage, data]);
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
                    <input type="Password" id="Password" name="Password" placeholder="Password" required="" value={password} onChange={handlePasswordChange} />
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
                            <input type="number" id="Phone No" name="Phone No" placeholder="Phone No" required="" onChange={(e) =>
                        setData({ ...data, phoneno: e.target.value })
                    } />
                            </div>
                {/* <div className='form-chek-box'>
                    <h2>Select Your Service You Wanna Provide</h2>
                    <div className='cheak-boxs'>
                        <div className='cheak-boxs-box'>
                            <label class="containerz">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <p>Heating, Ventilation & Air Conditioning</p>
                        </div>
                        <div className='cheak-boxs-box'>
                            <label class="containerz">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <p>Water Heater</p>
                        </div>
                        <div className='cheak-boxs-box'>
                            <label class="containerz">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <p>Roofing</p>
                        </div>
                        <div className='cheak-boxs-box'>
                            <label class="containerz">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <p>Plumbing</p>
                        </div>
                        <div className='cheak-boxs-box'>
                            <label class="containerz">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                            <p>Remodeling</p>
                        </div>
                    </div>
                </div> */}
                <CheckboxList set_selected_queries={set_selected_queries} />
                <div className='cheak-boxs-box'>
                    <label class="containerz">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <p className="signup-link-1">
                        Agree With
                        <a href="/privacypolicy" className="signup-link link-1"> Terms & Conditions </a>
                    </p>
                </div>
                <div className='btn-singup'>
                    <button
                        onClick={submitHandle} style={{
                            backgroundColor: user_color,
                            border: `1px solid  ${user_color}`
                        }} className="form-submit-btn" type="submit"> Sign up </button>
                </div>
            </div>
        </div>
    )
}
export default TabSignUpVendor