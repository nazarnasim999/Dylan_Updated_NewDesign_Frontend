import React from 'react'
import '../../auth/auth.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { admin_register_post_async } from '../../../services/adminAuthService '
import { asyncStatus } from '../../../utils/async_status'
import CheckboxList from '../Login/CheckBox'
const TabSignUpExpert = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { admin_register_status,
        admin_register_data,
        admin_register_error } = useSelector((state) => state.adminAuth)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [data, setData] = useState({});
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const submitHandle = () => {
        let obj = {
            ...data,
            password: password,
            role: "admin",
        }
        // console.log(obj);
        if (password === confirmPassword) {
            // Passwords match, handle the form submission
            console.log('Form submitted successfully', obj);
            dispatch(admin_register_post_async(obj))
        } else {
            // Passwords don't match, update state to indicate the mismatch
            setPasswordsMatch(false);
            alert("Passwords do not match")
        }
    }
    console.log("admin_register_status", admin_register_status)
    useEffect(() => {
        if (admin_register_status === asyncStatus.SUCCEEDED) {
            localStorage.setItem('userId', admin_register_data?.user_id)
            navigation('/Admin_Dashboard')
            window.location.reload()
        }
    }, [, admin_register_status])
    const set_selected_queries = (value) => {
        setData({ ...data, selected_queries: value });
    }
    return (
        <div>
            <div className="form-1">
                <div className="form-group-1" style={{
                    marginTop:'50px'
                }}>
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
                    <input type="phoneno" id="phoneno" name="phoneno" placeholder="Phone No" required="" onChange={(e) =>
                        setData({ ...data, phoneno: e.target.value })
                    } />
                    </div>
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
                <CheckboxList set_selected_queries={set_selected_queries} />
                <div className='btn-singup'>
                    <button
                        onClick={submitHandle} className="form-submit-btn" type="submit"> Sign up </button>
                </div>
            </div>
        </div>
    )
}
export default TabSignUpExpert