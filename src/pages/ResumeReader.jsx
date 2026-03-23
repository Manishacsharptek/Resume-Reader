import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ResumeReader = () => {
  const location = useLocation();
  const uploadedFile = location.state?.uploadedFile || null;
  const careerLevel = location.state?.level || 'Entry-level';

  return (
    <div className="min-h-screen sm:h-screen flex flex-col font-sans bg-[#020617] text-slate-800 selection:bg-indigo-500 selection:text-white sm:overflow-hidden overflow-auto">
      {/* Premium Navbar */}
      <nav className="w-full h-16 bg-[#18113f] text-white flex items-center justify-between px-6 z-50 border-b border-indigo-500/20 shadow-md flex-shrink-0">
        <Link to="/" className="text-sm sm:text-[1.1rem] md:text-xl font-black tracking-wider sm:tracking-[0.2em] uppercase hover:text-indigo-300 transition-colors whitespace-nowrap">
          Resume Worded
        </Link>
        <Link to="/" className="text-slate-300 hover:text-red-400 transition-colors text-sm font-medium">
          Logout
        </Link>
      </nav>

      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col sm:flex-row sm:overflow-hidden overflow-visible custom-scrollbar">
        
        {/* Left Sidebar (Dark) */}
        <div className="w-full sm:w-[320px] md:w-[380px] lg:w-[420px] bg-gradient-to-b from-[#18113f] to-[#0c051a] text-white sm:overflow-y-auto border-t sm:border-t-0 sm:border-r border-indigo-500/30 custom-scrollbar flex-shrink-0 relative z-10 shadow-[20px_0_60px_-15px_rgba(0,0,0,0.5)] order-2 sm:order-1 h-auto sm:h-full pb-10 sm:pb-0">
          <div className="p-6 sm:p-8 pb-10 sm:pb-32">
            <h1 className="text-3xl font-bold mb-2 tracking-tight drop-shadow-md text-slate-100">Good evening, Manisha.</h1>
            <p className="text-indigo-200/80 mb-10 text-[1.05rem]">Welcome back to your career toolkit.</p>

            <h2 className="text-lg font-bold mb-6 tracking-wide text-slate-100">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
              {/* Box 1 */}
              <div className="bg-[#241a5a]/60 rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer group hover:bg-[#2e2170] transition-all border border-indigo-500/30 hover:border-indigo-400 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(192,38,211,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(192,38,211,0.7)] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.5rem] w-[2.5rem] text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xs font-semibold leading-relaxed tracking-wider text-slate-300 group-hover:text-white mb-2">Score My Resume</h3>
                <p className="text-[0.65rem] text-slate-400 leading-tight">Get expert feedback on your resume, instantly</p>
              </div>

              {/* Box 2 */}
              <div className="bg-[#241a5a]/60 rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer group hover:bg-[#2e2170] transition-all border border-indigo-500/30 hover:border-indigo-400 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-600 mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.7)] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.5rem] w-[2.5rem] text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xs font-semibold leading-relaxed tracking-wider text-slate-300 group-hover:text-white mb-2">Targeted Resume</h3>
                <p className="text-[0.65rem] text-slate-400 leading-tight">Tailor your resume to a job description</p>
              </div>

              {/* Box 3 */}
              <div className="bg-[#241a5a]/60 rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer group hover:bg-[#2e2170] transition-all border border-indigo-500/30 hover:border-indigo-400 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-800 mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.7)] transition-all relative">
                  <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse border-2 border-[#311b92] shadow-[0_0_10px_rgba(244,63,94,0.8)]"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.5rem] w-[2.5rem] text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xs font-semibold leading-relaxed tracking-wider text-slate-300 group-hover:text-white mb-2">LinkedIn Review</h3>
                <p className="text-[0.65rem] text-slate-400 leading-tight">Optimize your LinkedIn profile in seconds</p>
              </div>
            </div>

            <h2 className="text-lg font-bold mb-6 tracking-wide text-slate-100">Dashboard</h2>
            <div className="grid grid-cols-2 gap-y-5 gap-x-4">
               {/* Nav Links */}
               <div className="flex items-center gap-4 bg-indigo-600/90 rounded-2xl px-5 py-3 cursor-pointer shadow-[0_5px_20px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all border border-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  <span className="font-bold text-sm tracking-wide">PROGRESS</span>
               </div>
               <div className="flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  <span className="font-bold text-sm tracking-widest text-emerald-400">GET PRO</span>
               </div>
               
               <div className="flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-white/5 rounded-2xl transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">RESUMES</span>
               </div>
               <div className="flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-white/5 rounded-2xl transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors text-nowrap">CAREER TOOLS</span>
               </div>

               <div className="flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-white/5 rounded-2xl transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-[#0077b5] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">LINKEDIN</span>
               </div>
               <div className="flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-white/5 rounded-2xl transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors text-nowrap">HELP CENTER</span>
               </div>

               <div className="flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-white/5 rounded-2xl transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">FEEDBACK</span>
               </div>
               <div className="flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-white/5 rounded-2xl transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors text-nowrap">MY ACCOUNT</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Main Content Area (Light) */}
        <div className="flex-1 bg-[#f4f6fc] sm:overflow-y-auto custom-scrollbar relative order-1 sm:order-2 h-auto sm:h-full">
          
          <div className="max-w-4xl mx-auto p-5 sm:p-10 lg:p-14 relative pb-20 sm:pb-32">
            
            {/* Super premium Pro Banner */}
            <div className="mb-14 bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-300/50 shadow-[0_10px_40px_-15px_rgba(251,191,36,0.3)] relative overflow-hidden group hover:shadow-[0_15px_50px_-10px_rgba(251,191,36,0.4)] transition-all duration-500">
               <div className="absolute top-0 right-[-100px] w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-amber-400/30 group-hover:scale-125 transition-all duration-700"></div>
               <h2 className="text-[#db9200] font-black tracking-widest uppercase mb-5 text-[1.1rem]">
                 Offer: Get <span className="underline decoration-2 underline-offset-4 decoration-amber-400">75% off</span> Resume Worded Pro
               </h2>
               <p className="text-slate-500 mb-8 text-[1.08rem] max-w-[85%] leading-relaxed font-medium">
                 Unlock AI-powered resume writing, <span className="text-slate-800 font-bold">unlimited reviews</span>, ATS optimization, industry-specific templates, and expert tools. Proven to get you more interviews.
               </p>
               <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-[0_5px_15px_rgba(245,158,11,0.4)] hover:shadow-[0_10px_25px_rgba(245,158,11,0.5)] hover:-translate-y-1 transition-all duration-300">
                  Upgrade to Pro
               </button>
               <p className="mt-5 text-slate-400 text-[0.85rem] italic font-serif">
                 * Limited Time Bonus: You'll also get access to our LinkedIn optimization suite (worth $49) for free.
               </p>
            </div>

            {/* Track your progress section */}
            <h2 className="text-3xl font-black text-slate-800 mb-4 tracking-tight drop-shadow-sm">Track your progress</h2>
            <p className="text-slate-500 mb-10 text-[1.15rem] max-w-3xl leading-relaxed font-medium">
              Our tools will guide you through the process of creating your <strong className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">most effective</strong> resume and LinkedIn profile. To make the most out of them, follow the steps below.
            </p>

            <div className="space-y-6">
              {/* Box 1: Overall Resume Score */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-indigo-50 hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)] hover:border-indigo-100 transition-all duration-500 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-600 text-transparent group-hover:w-3 transition-all duration-500"></div>
                
                <h3 className="text-indigo-800 font-black uppercase tracking-[0.15em] text-sm mb-6 flex items-center gap-3">
                  Overall Resume Score
                  {uploadedFile && <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-1 rounded-md tracking-widest animate-pulse">PROCESSING</span>}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <p className="text-slate-500 text-[1.08rem] leading-relaxed">
                      {uploadedFile ? (
                        <>You have selected <strong className="text-indigo-600 font-bold">{uploadedFile}</strong>. Our AI scanners are extracting your skills and evaluating against key criteria...</>
                      ) : (
                        <><strong className="text-slate-800 font-bold">You have not uploaded your resume yet.</strong> Get your <span className="underline decoration-indigo-300 underline-offset-4 decoration-2">free</span> resume score.</>
                      )}
                    </p>
                    <button className="mt-8 bg-indigo-600 text-white font-black uppercase tracking-widest text-[0.8rem] px-6 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-[0_5px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_10px_25px_rgba(79,70,229,0.5)] hover:-translate-y-1 transition-all duration-300 sm:w-auto w-full group/btn">
                       {uploadedFile ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                       ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                       )}
                       {uploadedFile ? 'Re-upload Resume' : 'Upload Resume'}
                    </button>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-center bg-rose-100 text-[#b91c1c] rounded-[2rem] w-32 h-28 font-black text-3xl shadow-inner relative group-hover:bg-rose-200 transition-colors">
                     {uploadedFile ? (
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 border-[5px] border-rose-400 border-t-rose-700 rounded-full animate-spin"></div>
                       </div>
                     ) : (
                       <span>?/100</span>
                     )}
                  </div>
                </div>
              </div>

              {/* Box 2: Targeted Resume Score */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
                <h3 className="text-indigo-800 font-black uppercase tracking-[0.15em] text-sm mb-6">Targeted Resume Score</h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <p className="text-slate-500 text-[1.08rem] leading-relaxed">
                      <strong className="text-slate-800 font-bold">You have not tried this tool yet.</strong> Your resume may be missing important keywords. <span className="text-indigo-600 font-medium bg-indigo-50 px-1 rounded">Match it to a job posting to fix.</span>
                    </p>
                    <button className="mt-8 bg-white border-2 border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[0.8rem] px-6 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 hover:border-slate-300 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md sm:w-auto w-full">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                       </svg>
                       Target Your Resume
                    </button>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-center bg-rose-50/80 text-rose-300 border-2 border-dashed border-rose-100 rounded-[2rem] w-32 h-28 font-black text-3xl">
                     ?/100
                  </div>
                </div>
              </div>

              {/* Box 3: LinkedIn Profile Score */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 border-blue-100 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#0077b5] to-blue-300 text-transparent"></div>

                <h3 className="text-[#005582] font-black uppercase tracking-[0.15em] text-sm mb-6">LinkedIn Profile Score</h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <p className="text-slate-500 text-[1.08rem] leading-relaxed">
                      <strong className="text-slate-800 font-bold">You have not optimized your LinkedIn profile yet.</strong> You might be missing out on opportunities from recruiters.
                    </p>
                    <button className="mt-8 bg-[#0077b5]/5 border-2 border-[#0077b5]/20 text-[#0077b5] font-bold uppercase tracking-widest text-[0.8rem] px-6 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#0077b5] hover:text-white transition-all shadow-sm hover:shadow-lg sm:w-auto w-full group/linkedin">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/linkedin:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                       </svg>
                       Upload LinkedIn Profile
                    </button>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-center bg-rose-100 text-rose-900 rounded-[2rem] w-32 h-28 font-black text-3xl shadow-inner group-hover:bg-rose-200 transition-colors">
                     ?/100
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <h2 className="text-3xl font-black text-slate-800 mt-20 mb-8 tracking-tight drop-shadow-sm">Additional resources</h2>
            
            <div className="space-y-6">
               <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-indigo-50 hover:border-indigo-200 hover:shadow-[0_15px_40px_rgba(99,102,241,0.08)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-8">
                 <div className="flex-1">
                   <h3 className="text-indigo-800 font-black uppercase tracking-[0.1em] text-sm mb-3 flex items-center gap-3">
                     Cover Letter Generator
                     <span className="bg-indigo-600 text-white text-[10px] font-black px-2.5 py-1 rounded shadow-sm shadow-indigo-500/40 uppercase tracking-widest">New</span>
                   </h3>
                   <p className="text-slate-500 text-[1.1rem] max-w-xl font-medium">
                     Let our AI write a great cover letter for you, in seconds.
                   </p>
                 </div>
                 <button className="bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white font-bold text-[0.8rem] tracking-widest uppercase px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Generate Letter
                 </button>
               </div>

               <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-10 border-2 border-indigo-200/50 hover:border-indigo-300 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] transition-all cursor-pointer group">
                  <h3 className="text-indigo-800 font-black uppercase tracking-[0.1em] text-sm mb-4">Don't have a resume?</h3>
                  <p className="text-slate-500 text-[1.1rem] font-medium group-hover:text-indigo-900 transition-colors">
                    If you'd like to create a new resume with our sample templates and bullet points, click this. <span className="text-indigo-500 group-hover:translate-x-1 inline-block transition-transform font-bold">→</span>
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 bg-[#3b82f6] text-white shadow-[0_10px_25px_rgba(59,130,246,0.5)] hover:shadow-[0_15px_35px_rgba(59,130,246,0.6)] hover:-translate-y-2 hover:bg-[#2563eb] transition-all rounded-full p-4 flex items-center justify-center gap-3 font-bold z-50 group">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
         </svg>
      </button>

      {/* Custom Styles for Scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
};

export default ResumeReader;
