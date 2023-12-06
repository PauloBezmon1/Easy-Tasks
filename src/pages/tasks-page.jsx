import Header from "../components/tasks/Header-Task";
import MainTasks from "../components/tasks/MainTasks";

function tasksPage() {
    return (
        <div className="flex flex-col items-center justify-start mx-auto max-w-[85rem] min-h-screen">
            <Header />
            <MainTasks />
        </div> 
    );
}

export default tasksPage;