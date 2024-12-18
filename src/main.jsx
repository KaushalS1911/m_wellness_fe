import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from "./components/theme/theme";
import store from "./app/store";
import { Provider } from "react-redux";
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
)
