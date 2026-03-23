import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleChoose = (level) => {
    navigate('/upload', { state: { level } });
  };

  return (
    <div className="min-h-screen bg-[#050508] flex flex-col font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/10 blur-[150px] pointer-events-none"></div>

      {/* Premium Navbar */}
      <nav className="w-full h-16 border-b border-indigo-500/10 bg-[#0a0a0e]/60 backdrop-blur-xl flex items-center justify-between px-6 md:px-12 z-50">
        <Link to="/" className="text-sm sm:text-[1.1rem] md:text-xl font-black tracking-wider sm:tracking-[0.2em] uppercase text-white hover:text-indigo-300 transition-colors drop-shadow-sm whitespace-nowrap">
          Resume Worded
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/resume" className="text-slate-300 hover:text-white transition-colors relative group hidden sm:block">
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/" className="text-slate-400 hover:text-red-400 transition-colors relative group">
            Logout
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </nav>

      {/* Main Layout containing the central column */}
      <div className="flex-1 flex justify-center w-full sm:px-8 relative z-10 h-[calc(100vh-64px)]">
        
        {/* Central Column Container */}
        <div className="w-full max-w-3xl flex flex-col sm:rounded-b-3xl overflow-hidden shadow-[0_0_100px_rgba(49,46,129,0.15)] bg-[#131034] relative border-l border-r border-b sm:border border-indigo-500/20 animate-fade-in-up">
          
          {/* Top Section */}
          <div className="pt-16 pb-12 px-8 text-center relative border-b border-indigo-500/10 bg-gradient-to-b from-[#1c184d] to-[#131034]">
             {/* Subtle tech grid background inside header */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>
             
             <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-white mb-5 tracking-tight relative z-10 drop-shadow-md">What best describes you?</h1>
             <p className="text-slate-300 text-[1.1rem] relative z-10 font-light">Our AI will use this to personalize your resume review to you.</p>
          </div>

          {/* Bottom Section (Light Box) */}
          <div className="flex-1 bg-gradient-to-b from-[#f8f9fc] to-[#eef2ff] p-5 sm:p-6 md:p-14 relative flex flex-col justify-between">
            
            <div className="space-y-5">
              {/* Option 1: Entry Level */}
              <div 
                onClick={() => handleChoose('Entry-level')}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-indigo-50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.2)] hover:border-indigo-300 transition-all duration-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 cursor-pointer transform hover:-translate-y-1 overflow-hidden relative"
              >
                 <div className="flex gap-4 sm:gap-5 items-start relative z-10">
                    <div className="mt-1 text-slate-500 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.6rem] w-[1.6rem]" viewBox="0 0 20 20" fill="currentColor">
                         <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                       </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-900 transition-colors tracking-wide">Entry-level</h3>
                      <p className="text-slate-500 text-[1.05rem] font-light">Students & recent graduates. Less than 2 years of work experience.</p>
                    </div>
                 </div>
                 <button className="shrink-0 bg-indigo-50/80 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white font-bold text-xs tracking-[0.1em] uppercase px-5 py-3 rounded transition-all duration-300 self-start sm:self-center w-full sm:w-auto mt-2 sm:mt-0 shadow-sm border border-transparent group-hover:border-indigo-700 relative z-10 group-hover:shadow-[0_5px_15px_rgba(79,70,229,0.3)]">
                   Choose
                 </button>
              </div>

              {/* Option 2: Mid Level */}
              <div 
                onClick={() => handleChoose('Mid-level')}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-indigo-50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.2)] hover:border-indigo-300 transition-all duration-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 cursor-pointer transform hover:-translate-y-1 overflow-hidden relative"
              >
                 <div className="flex gap-4 sm:gap-5 items-start relative z-10">
                    <div className="mt-1 text-slate-500 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.6rem] w-[1.6rem]" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-900 transition-colors tracking-wide">Mid-level</h3>
                      <p className="text-slate-500 text-[1.05rem] font-light">You have between 2 and 10 years of relevant work experience.</p>
                    </div>
                 </div>
                 <button className="shrink-0 bg-indigo-50/80 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white font-bold text-xs tracking-[0.1em] uppercase px-5 py-3 rounded transition-all duration-300 self-start sm:self-center w-full sm:w-auto mt-2 sm:mt-0 shadow-sm border border-transparent group-hover:border-indigo-700 relative z-10 group-hover:shadow-[0_5px_15px_rgba(79,70,229,0.3)]">
                   Choose
                 </button>
              </div>

              {/* Option 3: Senior Level */}
              <div 
                onClick={() => handleChoose('Senior-level')}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-indigo-50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.2)] hover:border-indigo-300 transition-all duration-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 cursor-pointer transform hover:-translate-y-1 overflow-hidden relative"
               >
                 <div className="flex gap-4 sm:gap-5 items-start relative z-10">
                    <div className="mt-1 text-slate-500 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.6rem] w-[1.6rem]" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                       </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-900 transition-colors tracking-wide">Senior-level</h3>
                      <p className="text-slate-500 text-[1.05rem] font-light">You have more than 10 years of relevant work experience.</p>
                    </div>
                 </div>
                 <button className="shrink-0 bg-indigo-50/80 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white font-bold text-xs tracking-[0.1em] uppercase px-5 py-3 rounded transition-all duration-300 self-start sm:self-center w-full sm:w-auto mt-2 sm:mt-0 shadow-sm border border-transparent group-hover:border-indigo-700 relative z-10 group-hover:shadow-[0_5px_15px_rgba(79,70,229,0.3)]">
                   Choose
                 </button>
              </div>
            </div>

            <div className="mt-8 text-center pb-4">
               <p className="text-slate-500 text-sm font-medium">Choose just one option to continue. Don't worry; you can change your career level later.</p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default Onboarding;
