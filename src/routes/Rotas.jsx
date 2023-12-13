import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/landing-page.jsx'
import LoginPage from '../pages/login-page.jsx'
import SignupPage from '../pages/signup-page.jsx'
import TasksPage from '../pages/tasks-page.jsx'
import DeleteTask from "../components/tasks/DeleteTask.jsx"
import UpdateTask from "../components/tasks/UpdateTask.jsx"
import ErrorPage from "../pages/error-page.jsx";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signUp" element={<SignupPage />} />
                <Route exact path="/tasks" element={<TasksPage />} />
                <Route exact path="/tasks/:id/delete" element={<>
                    <TasksPage />
                    <DeleteTask />
                </>}
                />
                <Route exact path="/tasks/:id/update" element={<>
                    <TasksPage />
                    <UpdateTask />
                </>}
                />
                <Route exact path="*" element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;