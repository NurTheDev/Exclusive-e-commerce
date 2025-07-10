import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css";
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { store } from './features/store.js'
import { Provider } from 'react-redux'
import Database from "./Database/firebase.config.js";
import { ToastContainer } from 'react-toastify';
import {AuthProvider} from "./Context/AuthProvider.jsx";
import ErrorBoundary from "./helper/ErrorBoundry.jsx";
const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)

    root.render(
        <StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                   <AuthProvider>
                       <ErrorBoundary>
                           <App/>
                       </ErrorBoundary>
                       <ToastContainer/>
                   </AuthProvider>
                </Provider>
            </BrowserRouter>
        </StrictMode>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}
