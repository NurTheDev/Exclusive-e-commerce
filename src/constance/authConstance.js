// Auth action types
export const AUTH_ACTIONS = {
    SET_LOADING: 'SET_LOADING',
    SET_USER: 'SET_USER',
    SET_ERROR: 'SET_ERROR',
    LOGOUT: 'LOGOUT',
    RESET_ERROR: 'RESET_ERROR',
};
// Initial auth state
export const AUTH_INITIAL_STATE = {
    user: null,
    isAuthenticated: false,
    isLoading: true, // Start with true for initial auth check
    error: null,
};
// Toast configuration
export const TOAST_CONFIG = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
};
// Error messages
export const AUTH_ERROR_MESSAGES = {
    "auth/email-already-in-use": "Email already in use",
    "auth/invalid-email": "Invalid email",
    "auth/weak-password": "Password is too weak",
    "auth/user-not-found": "User not found",
    "auth/wrong-password": "Incorrect password",
    "auth/invalid-credential": "Invalid credentials",
    "auth/too-many-requests": "Too many failed attempts. Please try again later",
};
