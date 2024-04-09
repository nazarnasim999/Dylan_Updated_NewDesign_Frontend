import Dashboard from "../screens/dashboard/Dashboard";
import { GoHome } from "react-icons/go";
import Dashboard_Screen from "../screens/dashboard/dashboardScreens/Dashboard";
import Signup from "../screens/auth/signup/signup";
import Login from "../screens/auth/login/login";
import ForgotPassword from "../screens/auth/forgotPassword/forgotPassword";
import VerifyOtpPassword from "../screens/auth/verifyOtp/verifyOtpPassword";
import ResetPassword from "../screens/auth/resetPassword/resetPassword";
import LandingPage from "../screens/dashboard/LandingPage";
import MainSection from "../screens/auth/section/MainSection";
import AdminLogin from "../screens/dashboard/adminScreen/auth/AdminLogin";
import Admin_Dashboard from "../screens/dashboard/adminScreen/dashboard/Dashboard";
import ChatApp from "../chatApp";
import MainSectiontwo from "../screens/auth/section/MainSectionTwo";
// import SignUpMainSection from "../screens/auth/section/SignUpMainSection";
// import MainSectiontwo from "../screens/auth/section/MainSectiontwo";
// import SignUpMainSection fro../screens/auth/section/SignUpMainSectionon";

import PrivacyPolicy from "../component/PrivacyPolicy";
import CustomerPolicy from "../component/CustomerPolicy";
import VendorPolicy from "../component/VendorPolicy";

import ForgotPassworde from "../screens/auth/forgotPassword/forgotPassworde";
// import Footer1 from "../component/footer/Footer1";
// import Footer1 from "../component/footer/footer1";
import ForgotPasswordv from "../screens/auth/forgotPassword/forgotPasswordv";
import VerifyOtpPasswordv from "../screens/auth/verifyOtp/VerifyOtpPasswordv";
import VerifyOtpPassworde from "../screens/auth/verifyOtp/VerifyOtpPassworde";
import ResetPassworde from "../screens/auth/resetPassword/resetPassworde";
import ResetPasswordv from "../screens/auth/resetPassword/resetPasswordv";
import FiveStarRating from "../component/Community/Rating";
import Steps from "../component/CreatePostCard/Steps";
import ShowAllVendors from "../Dylan_Admin_Portal/ShowAllVendors";
import Customer_Vendor from "../Dylan_Admin_Portal/View_Customer_Vendor_Job_details";
import Dylan_Dashboard from "../Dylan_Admin_Portal/Dylan_Dashboard";
import ShowAllJobs from "../Dylan_Admin_Portal/Show_All_Jobs";

export const main_routes = [
  // {
  //   caption: "chatapp",
  //   linkTo: "/",
  //   element: <ChatApp />,
  //   auth_required: false,
  // },
  {
    caption: "LandingPage",
    linkTo: "/",
    element: <LandingPage />,
    auth_required: false,
  },
  {
    caption: "Login",
    linkTo: "/login",
    element: <Login />,
    auth_required: false,
  },
  {
    caption: "Signup",
    linkTo: "/signup",
    element: <Signup />,
    auth_required: false,
  },
  {
    caption: "MainSection",
    linkTo: "/mainsection",
    element: <MainSection />,
    auth_required: false,
  },
  {
    caption: "MainSectiontwo",
    linkTo: "/mainSectiontwo",
    element: <MainSectiontwo />,
    auth_required: false,
  },

  {
    caption: "rating",
    linkTo: "/rating",
    element: <FiveStarRating />,
    auth_required: false,
  },

  {
    caption: "steps",
    linkTo: "/steps/:id",
    element: <Steps />,
    auth_required: false,
  },





  {
    caption: "total_vendors",
    linkTo: "/totalvendors",
    element: <ShowAllVendors />,
    auth_required: false,
  },


  {
    caption: "total_vendors",
    linkTo: "/customer_vendor/:id",
    element: <Customer_Vendor />,
    auth_required: false,
  },



  
  {
    caption: "total_vendors",
    linkTo: "/showalljobs",
    element: <ShowAllJobs />,
    auth_required: false,
  },









  {
    caption: "Dylan_Dashbaord",
    linkTo: "/honest_dashboard",
    element: <Dylan_Dashboard />,
    auth_required: false,
  },






  // {
  //   caption: "SignUpMainSection ",
  //   linkTo: "/signUpMainSection ",
  //   element: <SignUpMainSection />,
  //   auth_required: false,
  // },
  // {
  //   caption: "verifyOtp",
  //   linkTo: "/verifyOtp",
  //   element: <VerifyOtp />,
  //   auth_required: false,
  //   otpScreen: true,
  // },
  {
    caption: "ForgotPassword",
    linkTo: "/forgotPassword",
    element: <ForgotPassword />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "ForgotPassword",
    linkTo: "/forgotPasswordv",
    element: < ForgotPasswordv/>,
    auth_required: false,
    otpScreen: true,
  },


  {
    caption: "ForgotPassword",
    linkTo: "/forgotPassworde",
    element: <ForgotPassworde />,
    auth_required: false,
    otpScreen: true,
  },



  {
    caption: "ResetPassword",
    linkTo: "/resetPassword",
    element: <ResetPassword />,
    auth_required: false,
    otpScreen: true,
  },

  {
    caption: "ResetPassword",
    linkTo: "/resetPassworde",
    element: <ResetPassworde />,
    auth_required: false,
    otpScreen: true,
  },




  {
    caption: "ResetPassword",
    linkTo: "/resetPasswordv",
    element: <ResetPasswordv />,
    auth_required: false,
    otpScreen: true,
  },


  {
    caption: "VerifyOtpPassword",
    linkTo: "/verifyOtpPassword",
    element: <VerifyOtpPassword />,
    auth_required: false,
    otpScreen: true,
  },
  
  {
    caption: "VerifyOtpPassword",
    linkTo: "/verifyOtpPasswordv",
    element: <VerifyOtpPasswordv />,
    auth_required: false,
    otpScreen: true,
  },
  

  {
    caption: "VerifyOtpPassword",
    linkTo: "/verifyOtpPassworde",
    element: <VerifyOtpPassworde />,
    auth_required: false,
    otpScreen: true,
  },
  


  {
    caption: "Dashboard",
    linkTo: "/dashboard",
    element: <Dashboard />,
    auth_required: false,
  },
  {
    caption: "AdminLogin",
    linkTo: "/AdminLogin",
    element: <AdminLogin />,
    auth_required: false,
  },
  {
    caption: "Admin_Dashboard",
    linkTo: "/Admin_Dashboard",
    element: <Admin_Dashboard />,
    auth_required: false,
  },

  {
    caption: "PrivacyPolicy",
    linkTo: "/privacypolicy",
    element: <PrivacyPolicy />,
    // element: <Footer1 />,
    auth_required: false,
  },
  {
    caption: "CustomerPolicy",
    linkTo: "/customerpolicy",
    element: <CustomerPolicy />,
    // element: <Footer1 />,
    auth_required: false,
  }, {
    caption: "VendorPolicy",
    linkTo: "/vendorpolicy",
    element: <VendorPolicy />,
    // element: <Footer1 />,
    auth_required: false,
  },

  


];
export const sideBarData = [
  {
    name: "Dashboard",
    linkTo: "/dashboard",
    icon: <GoHome size={20} />,
    element: <Dashboard_Screen />,
    both: true,
    list_in_sidebar: true,
  },
];