import React, { useRef, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';

const UploadResume = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const careerLevel = location.state?.level || 'Entry-level';
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      
      const formData = new FormData();
      formData.append('resume', file);
      formData.append('level', careerLevel);

      try {
        const response = await api.post('/api/resume/upload', formData);
        
        const data = response.data;
        setIsUploading(false);

        // Always navigate to score page — even if parsing failed, show what we have
        navigate('/score', { 
          state: { 
            uploadedFile: file.name, 
            level: careerLevel, 
            scoreData: data.data || {},
            resumeText: data.data?.rawText || ""
          } 
        });
      } catch (error) {
        // Network / server down — still navigate to score with empty data + AI fallback tips
        setIsUploading(false);
        console.error('Upload Error:', error);
        navigate('/score', {
          state: {
            uploadedFile: file.name,
            level: careerLevel,
            scoreData: {},
            resumeText: ""
          }
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#110e2b] flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Premium Navbar */}
      <nav className="w-full h-16 bg-[#18113f]/80 backdrop-blur-md text-white flex items-center justify-between px-6 z-50 border-b border-indigo-500/10 shadow-sm shrink-0">
        <Link to="/" className="text-sm sm:text-[1.1rem] md:text-xl font-black tracking-wider sm:tracking-[0.2em] uppercase hover:text-indigo-300 transition-colors drop-shadow-sm whitespace-nowrap">
          Resume Worded
        </Link>
        <div className="flex gap-8">
          <Link to="/resume" className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide">Dashboard</Link>
          <Link to="/" className="text-slate-400 hover:text-red-400 transition-colors text-sm font-medium tracking-wide">Logout</Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative">
         {/* Background ambient glow */}
         <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full"></div>

         <div className="max-w-[70rem] mx-auto px-6 pt-24 pb-32 flex flex-col items-center relative z-10 text-center">
            
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-white mb-6 tracking-wide drop-shadow-md">Upload Your Resume</h1>
            
            <p className="text-slate-300 text-lg mb-14 tracking-wide">
               Career Level: <strong className="text-white font-semibold">{careerLevel}</strong> <Link to="/onboarding" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-400/30 ml-2 text-sm transition-colors">(Change)</Link>
            </p>

            {/* Interactive Upload Box */}
            <div 
               onClick={handleUploadClick}
               className={`w-full max-w-3xl border-2 border-dashed border-indigo-400/30 rounded-[2rem] p-8 sm:p-12 md:p-20 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 hover:bg-white/[0.03] transition-all duration-300 group shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_60px_rgba(79,70,229,0.15)] bg-[#130f36]/40 backdrop-blur-sm ${isUploading ? 'opacity-50 pointer-events-none grayscale duration-700' : ''}`}
            >
               <input 
                 type="file" 
                 ref={fileInputRef} 
                 onChange={handleFileChange} 
                 accept=".pdf,.doc,.docx" 
                 className="hidden" 
               />

               {isUploading ? (
                 <div className="flex flex-col items-center animate-fade-in">
                   <div className="w-20 h-20 border-4 border-indigo-500 border-t-white rounded-full animate-spin mb-8 shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
                   <p className="text-2xl text-white font-bold animate-pulse tracking-wide">Securely Uploading...</p>
                 </div>
               ) : (
                 <>
                   <div className="w-28 h-28 bg-[#1f1a45] rounded-[2rem] flex items-center justify-center mb-10 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(99,102,241,0.25)] transition-all duration-500 border border-indigo-500/20">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-[3.5rem] w-[3.5rem] text-indigo-400 group-hover:text-indigo-300 transition-colors drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
                       <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                       <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                     </svg>
                   </div>
                   <p className="text-[1.35rem] text-slate-200 mb-6 font-light tracking-wide">
                      Click the button above or drop your resume in here.
                   </p>
                   <p className="text-[1.1rem] text-slate-400 font-light tracking-wide">
                      English resumes in <strong className="text-white font-semibold">PDF (or DOCX)</strong> only. Max 2MB file size.
                   </p>
                 </>
               )}
            </div>

            {/* Privacy note */}
            <div className="flex items-center justify-center gap-3 mt-10 text-slate-400 text-sm tracking-wide">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.1rem] w-[1.1rem]" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
               </svg>
               <p>We're committed to your <span className="underline underline-offset-4 decoration-slate-500 hover:text-slate-300 transition-colors cursor-pointer">privacy</span>. Your resume is processed securely on our servers and is private to you.</p>
            </div>

            {/* Guidelines header indicator */}
            <div className="mt-32 flex flex-col items-center group cursor-default">
               <p className="text-white font-bold tracking-[0.25em] text-xs uppercase mb-4 drop-shadow-sm">Guidelines Below</p>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white animate-bounce drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
               </svg>
            </div>

            {/* Complete Guidelines Box */}
            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-medium text-white mt-32 sm:mt-40 mb-10 tracking-wide drop-shadow-md">Guidelines for uploading your resume</h2>
            <p className="text-slate-300 text-[1.15rem] mb-14 max-w-4xl leading-relaxed font-light">
               To make sure we analyze your resume correctly and generate the right recommendations, please ensure that the resume you upload meets the following guidelines:
            </p>

            <div className="w-full max-w-[55rem] border border-indigo-500/20 rounded-3xl pt-12 sm:pt-16 pb-16 sm:pb-20 px-6 sm:px-8 md:px-20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-md text-left shadow-[0_20px_80px_rgba(0,0,0,0.5)] mb-24 sm:mb-32 hover:border-indigo-500/30 transition-colors duration-500">
               <ul className="space-y-5 sm:space-y-7 text-[1.05rem] sm:text-[1.15rem] text-slate-300 flex flex-col items-center">
                 {[
                   "is in PDF or DOCX",
                   "is in English",
                   "contains readable text & is not an image",
                   "is a maximum of 2 MB in filesize",
                   "is a resume and not any other file",
                   "is not password protected",
                   "contains only your resume and no other additional documents"
                 ].map((item, index) => (
                   <li key={index} className="flex items-center gap-5 group/item w-full max-w-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400 shrink-0 group-hover/item:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span className="font-light group-hover/item:text-white transition-colors">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Footer text logic */}
            <div className="text-center pb-20 max-w-4xl">
               <p className="text-slate-300 text-[1.15rem] mb-10">
                  Need help? See our <span className="text-white border-b border-indigo-400 hover:text-indigo-300 hover:border-indigo-300 transition-colors cursor-pointer pb-1 tracking-wide">help article</span>.
               </p>
               <p className="text-slate-400 text-[1.05rem] leading-[2] font-light">
                  Tip: If you upload a Word document, it may look a little different on our app due to different fonts and system configurations. But don't worry, it will be processed completely fine on our servers and the resume review will be accurate.
               </p>
            </div>

         </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default UploadResume;
