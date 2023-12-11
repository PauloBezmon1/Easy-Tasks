import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from './src/pages/landing-page.jsx'
import LoginPage from './src/pages/login-page.jsx'
import SignupPage from './src/pages/signup-page.jsx'
import TasksPage from './src/pages/tasks-page.jsx'
import ErrorPage from './src/pages/error-page.jsx'

export default function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage />}/>
                <Route exact path="/login" element={<LoginPage />}/>
                <Route exact path="/signUp" element={<SignupPage />}/>
                <Route exact path="/tasks" element={<TasksPage />}/>
                <Route exact path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
