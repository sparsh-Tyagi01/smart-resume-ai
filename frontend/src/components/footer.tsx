import { NotebookPen } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black/90 text-white">
      <div className="flex justify-evenly items-start py-8">
        <div className="flex justify-center items-center gap-2">
          <div className="text-blue-900 ">
            <NotebookPen size={40} />
          </div>
          <div>
            <h1 className="text-xl">SmartResumeAI</h1>
            <p className="text-xs text-white/60">AI-Powered Career Platform</p>
          </div>
        </div>
        <div>
          <h1 className="mb-4">Products</h1>
          <ul className="text-white/60">
            <li>Resume Builder</li>
            <li>Templates</li>
            <li>Job Scheduler</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4">Company</h1>
          <ul className="text-white/60">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4">Legal</h1>
          <ul className="text-white/60">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <hr className="text-white/40 w-[80vw]"/>
        <h1 className="text-white/60 mb-8">© 2026 SmartResumeAI. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
