export const type_constants = {
  AUTH: "AUTH",
  REGISTER_USER: "REGISTER_USER",
  LOGIN_USER: "LOGIN_USER",
  ADMIN_LOGIN: "ADMIN_LOGIN",
  ADMIN_REGISTER: "  ADMIN_REGISTER",
  GET_UPCOMING_REQ: "GET_UPCOMING_REQ",
  CHECK_AUTH: "CHECK_AUTH",
  VERIFY_OTP: "VERIFY_OTP",
  VERIFY_OTP_RESET: "VERIFY_OTP_RESET",
  RESEND_OTP: "RESEND_OTP",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  RESET_PASSWORD: "RESET_PASSWORD",
  GET_ALL_TOPICS: "GET_ALL_TOPICS",
  CREATE_COMMUNITY: "CREATE_COMMUNITY",
  SEARCH_COMMUNITY: "SEARCH_COMMUNITY",
  JOIN_COMMUNITY: "JOIN_COMMUNITY",
  SEARCH_POST: "SEARCH_POST",
  VOTE_POST: "VOTE_POST",
  CREATE_VENDOR: "CREATE_VENDOR",
  GET_VENDOR_PROFILE: "GET_VENDOR_PROFILE",
  CREATE_CUSTOMER: "CREATE_CUSTOMER",
  CREATE_CUSTOMER_JOB: "CREATE_CUSTOMER_JOB",
  GET_CUSTOMER_PROFILE: "GET_CUSTOMER_PROFILE",
  GET_ALL_VENDOR_PROFILE: "GET_ALL_VENDOR_PROFILE",
  LOGIN_VENDOR: "LOGIN_VENDOR",
  LOGIN_CUSTOMER: "LOGIN_CUSTOMER",
  GET_MATCHING_CUSTOMER: "GET_MATCHING_CUSTOMER",
  CREATE_GIG: "CREATE_GIG",
  GET_GIG: "GET_GIG",
  GET_CUSTOMER_JOB_BY_ID: "GET_CUSTOMER_JOB_BY_ID",
  GET_RECENT_VENDORS_CHAT: "GET_RECENT_VENDORS_CHAT",
  GET_RECENT_CUSTOMER_CHAT: "GET_RECENT_CUSTOMER_CHAT",
  CREATE_SCHEDULE: "CREATE_SCHEDULE",
  CREATE_PAYMENT: "CREATE_PAYMENT",

  GET_VENDOR_SCHEDULE: "GET_VENDOR_SCHEDULE",
  GET_CUSTOMER_SCHEDULE: "GET_CUSTOMER_SCHEDULE",
  RESPONSE_TO_VENDOR_SCHEDULE: "RESPONSE_TO_VENDOR_SCHEDULE",
  SAVE_PAYMENT: "SAVE_PAYMENT",
  EDIT_SCHEDULE: "EDIT_SCHEDULE",
  CREATE_REQUEST: "CREATE_REQUEST",
};

export const save_tokens_constant = "@usertokens";
export const session_expired = "@session_expired";

export const constants = () => {
  return {
    light_theme: "light",
    dark_theme: "dark",
  };
};
