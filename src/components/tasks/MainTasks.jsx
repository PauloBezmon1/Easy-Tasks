import "./Header-Task.css"
import Aside from "../tasks/Aside";

function MainTasks() {
    return ( 
        <main className="flex w-full justify-end h-max">
            <div className="flex md:flex-row w-full flex-col mx-2 xl:mx-auto h-full personalized-height">
                <Aside />

                <div className="bg-gray-100 dark:bg-slate-950 h-max flex flex-col items-center xl:items-start flex-nowrap justify-center px-4 md:px-20 py-10 gap-14 xl:gap-7 w-full xl:flex-row rounded-r">
                    <div className="flex flex-col gap-0 justify-center">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-red-600 h-3.5 w-3.5"></div>
                            <p className="md:font-thin text-xs dark:text-white">Pending</p>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-yellow-400 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs dark:text-white">Progress</p>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 yellow rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-green-600 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs dark:text-white">Completed</p>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[250px] md:min-w-[280px] max-w-xs p-6 gap-3 green rounded-md bg-white dark:bg-slate-900">
                                <h1 className="font-medium text-base md:text-xl dark:text-white">Lorem Ipsum</h1>
                                <p className="text-xs font-thin md:text-base text-justify dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci amet ex, officia porro qui eligendi repellat, sapiente et, totam harum facilis quibusdam hic temporibus odio non placeat nulla reiciendis.</p>
                                <p className="font-thin text-xs dark:text-white">dd/mm/yyyy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainTasks;