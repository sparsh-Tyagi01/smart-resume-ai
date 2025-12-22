import { Check, Medal, NotebookPen, Users } from "lucide-react"

const Homepage = () => {
  return (
    <div className="w-screen">
        <div className=" bg-slate-100 w-full h-screen flex flex-col justify-center items-center pt-30 pb-10">
            <h1 className="text-6xl">Land Your Dream Job With <span className="bg-blue-900 bg-clip-text text-black/0 font-extrabold">AI-</span></h1>
            <h1 className="text-6xl bg-gradient-to-r from-blue-900 to-green-800 bg-clip-text text-black/0 font-extrabold">Powered Resumes</h1>
            <div className="flex flex-col justify-center items-center text-black/60 mt-10 text-xl">
                <p>Create professional resumes in minutes, get AI powered content</p>
                <p>suggestions, and find jobs that perfectly match your skills. All in one</p>
                <p>platform.</p>
            </div>
            <div>
                <button className="px-6 py-3 rounded-[10px] bg-gradient-to-r from-blue-800 to-slate-600 text-white hover:from-blue-900 hover:to-slate-700 transition-all duration-150 shadow-blue-200 shadow-xl">Create Your Resume Free</button>
                <button className="border-2 border-black/30 rounded-[10px] py-3 px-4 ml-4 mt-10 hover:border-black/50 transition-all duration-150">Watch Demo</button>
            </div>
            <ul className="flex justify-evenly items-center gap-4 mt-10">
                <li className="flex justify-center items-center gap-1 text-xs"><Check className="text-green-600"/>No Credit Card Required</li>
                <li className="flex justify-center items-center gap-1 text-xs"><Check className="text-green-600"/>Free Templates</li>
                <li className="flex justify-center items-center gap-1 text-xs"><Check className="text-green-600"/>AI-Powered</li>
            </ul>
            <div className="mt-10 flex justify-evenly items-center gap-8">
                <div className="w-[25vw] h-[30vh] bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl">
                    <Users size={60} className="rounded-full bg-blue-300 text-blue-700 p-2"/>
                    <h1 className="text-2xl mt-1">50,000+</h1>
                    <p className="text-black/60">Active Users</p>
                </div>
                <div className="w-[25vw] h-[30vh] bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl">
                    <NotebookPen size={60} className="rounded-full bg-violet-300 text-violet-700 p-2"/>
                    <h1 className="text-2xl mt-1">100,000+</h1>
                    <p className="text-black/60">Resumes Created</p>
                </div>
                <div className="w-[25vw] h-[30vh] bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl">
                    <Medal size={60} className="rounded-full bg-green-300 text-green-700 p-2"/>
                    <h1 className="text-2xl mt-1">85%</h1>
                    <p className="text-black/60">Success Rate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage