import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login/Login";
import Contacts from "./components/Contacts/Contacts";
import { useSelector} from "react-redux";
import {getUserAuth} from "./redux/authReducer";

function App() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     (async () => {
    //         // setLoading(true);
    //         await dispatch(logIn("typescript@gmail.com", "qwerty"));
    //         // setLoading(false);
    //     })()
    // }, [dispatch])

    const isAuth = useSelector(getUserAuth);
    // console.log(user)
    // dispatch(logOut())
    // console.log(user)
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app__wrapper">
                    <div className="content">
                        <Header isAuth={isAuth}/>
                        <div className="content__load">
                            <Routes>
                                <Route path="/login" element={<Login isAuth={isAuth}/>}/>
                                <Route path="/contacts" element={<Contacts isAuth={isAuth}/>}/>
                                <Route path="/" element={<div>Welcome to "Takeoff Staff" contacts SPA</div>}/>
                                <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
