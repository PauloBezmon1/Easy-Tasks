import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/landing-page'
import LoginPage from '../pages/login-page'
import SignupPage from '../pages/signup-page'
import TasksPage from '../pages/tasks-page'

function Rotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LandingPage /> }/>
                <Route path="/login" element={ <LoginPage /> }/>
                <Route path="/signUp" element={ <SignupPage /> }/>
                <Route path="/tasks" element={ <TasksPage /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;