import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simulate moving to the sign up step immediately after selecting a resume!
      navigate('/signup', { state: { uploadedFile: file.name } });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#020617] text-slate-200 overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900 opacity-20 blur-[120px] pointer-events-none animate-pulse duration-10000"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900 opacity-20 blur-[120px] pointer-events-none animate-pulse duration-7000"></div>

      {/* Navbar - Glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} bg-[#020617]/70 backdrop-blur-lg border-b border-indigo-500/10 px-3 sm:px-6 md:px-12 py-3 sm:py-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-0 overflow-hidden`}>
        <div className="text-lg sm:text-xl md:text-2xl font-black tracking-normal sm:tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400 cursor-pointer hover:scale-105 transition-transform whitespace-nowrap text-center">
          Resume Worded
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-6 md:gap-10 shrink-0">
          <button className="text-slate-300 hover:text-white font-medium transition-colors text-sm md:text-base hidden sm:block">Products <span className="text-xs">▾</span></button>
          <Link to="/signup" className="group relative px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold flex items-center justify-center gap-2 overflow-hidden bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient"></div>
            <span className="relative z-10 text-yellow-300 group-hover:rotate-180 transition-transform duration-500">★</span>
            <span className="relative z-10 whitespace-nowrap">Get a free ATS scan</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 md:px-16 pt-36 pb-32 flex flex-col lg:flex-row items-center min-h-screen">
        <div className={`w-full lg:w-[50%] z-10 xl:ml-12 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs md:text-sm font-semibold tracking-[0.2em] text-indigo-300 mb-8 uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            Score My Resume - Free ATS Scan
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
            How good is <br/> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">your resume?</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
            Find out instantly. Upload your resume and our free scanner evaluates it against key criteria that hiring managers and Applicant Tracking Systems (ATS) demand.
          </p>
          
          {/* Glassmorphic Dropzone */}
          <div 
            onClick={handleBoxClick}
            className="group relative max-w-lg rounded-2xl p-[1px] bg-gradient-to-b from-indigo-500/50 to-purple-500/10 hover:from-indigo-400 hover:to-purple-400/50 transition-all duration-500 cursor-pointer shadow-[0_10px_40px_-10px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_50px_-15px_rgba(79,70,229,0.5)] transform hover:-translate-y-2"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept=".pdf,.doc,.docx" 
              className="hidden" 
            />
            <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center border border-dashed border-indigo-500/30 group-hover:border-transparent transition-all h-full">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                 </svg>
              </div>
              <p className="font-semibold text-lg sm:text-xl text-center text-white mb-2 group-hover:text-indigo-300 transition-colors">Drop your resume here or choose file</p>
              <p className="text-slate-400 text-sm">PDF or DOCX only. Max 2MB.</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col md:flex-row md:items-center gap-6">
            <div>
              <p className="text-slate-400 text-lg">Trusted by over <strong className="text-white">1,000,000+</strong> professionals.</p>
              <div className="flex items-center gap-3 mt-2">
                 <span className="font-bold text-xl text-white">Excellent</span>
                 <div className="flex gap-1 text-green-400 text-2xl drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">
                   ★★★★★
                 </div>
              </div>
              <p className="text-sm text-slate-400 mt-1">Rated 4.9/5 based on 1000+ reviews on <strong className="text-white">Trustpilot</strong></p>
            </div>
          </div>
        </div>

        {/* Floating Laptop / Dashboard Glass Mockup */}
        <div className={`hidden lg:block absolute right-[-10%] top-[10%] w-[65%] transform -rotate-2 z-0 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'}`}>
           <div className="relative group perspective">
             {/* Glow behind laptop */}
             <div className="absolute inset-0 bg-indigo-500 opacity-20 blur-[100px] rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
             
             {/* Laptop Frame */}
             <div className="bg-gradient-to-br from-slate-800 to-black rounded-t-3xl p-3 shadow-2xl border border-slate-700/50 relative overflow-hidden transform group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700">
               
               {/* Screen reflection */}
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none rounded-t-3xl"></div>
               <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-slate-700"></div>
               
               <div className="bg-[#0b1120] h-[750px] rounded-md overflow-hidden flex relative font-sans shadow-inner border border-slate-800">
                  {/* Dashboard Sidebar */}
                  <div className="w-1/4 bg-[#1e293b]/50 backdrop-blur-md border-r border-slate-700/50 p-6 flex flex-col items-center relative isolation-auto">
                     <div className="text-xs text-indigo-400 mb-10 font-bold tracking-[0.3em] w-full text-center border-b border-slate-700/50 pb-6">SCORE</div>
                     
                     {/* Score Ring */}
                     <div className="relative w-32 h-32 rounded-full flex items-center justify-center mb-6">
                       <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                         <circle cx="64" cy="64" r="56" fill="none" stroke="#1e293b" strokeWidth="8" />
                         <circle cx="64" cy="64" r="56" fill="none" stroke="#4ade80" strokeWidth="8" strokeDasharray="351.8" strokeDashoffset="175.9" className="animate-[spin_2s_ease-out]" />
                       </svg>
                       <div className="absolute inset-2 bg-[#0f172a] rounded-full flex items-center justify-center shadow-inner border border-slate-700/50">
                          <span className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">49</span>
                       </div>
                     </div>
                     <p className="text-center text-xs font-bold tracking-widest text-slate-400">OVERALL</p>
                     
                     <div className="mt-8 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg text-xs font-bold shadow-[0_0_15px_rgba(74,222,128,0.1)]">+ 6 POINTS</div>
                     
                     {/* Skeleton Lines */}
                     <div className="mt-16 w-full space-y-5 opacity-50">
                        <div className="h-3 bg-slate-700 rounded-full w-full"></div>
                        <div className="h-3 bg-slate-700 rounded-full w-5/6"></div>
                        <div className="h-3 bg-slate-700 rounded-full w-4/6"></div>
                     </div>
                  </div>
                  
                  {/* Dashboard Main Content */}
                  <div className="w-3/4 bg-[#0f172a] p-12 flex flex-col relative overflow-hidden">
                     {/* Decorative background grid */}
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50"></div>
                     
                     <div className="relative z-10">
                       <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-800">
                          <div className="flex gap-3">
                            <div className="w-10 h-10 bg-indigo-500/20 rounded-xl border border-indigo-500/30"></div>
                            <div className="w-10 h-10 bg-purple-500/20 rounded-xl border border-purple-500/30"></div>
                          </div>
                          <div className="h-8 w-40 bg-slate-800 rounded-lg"></div>
                       </div>
                       
                       <h2 className="text-4xl font-bold text-white mb-3">Good afternoon, Rohan.</h2>
                       <p className="text-slate-400 mb-10 text-xl font-light">Welcome to your resume review.</p>
                       
                       <div className="relative bg-indigo-900/20 border border-indigo-500/30 p-8 rounded-2xl text-slate-300 text-lg shadow-[0_0_30px_rgba(99,102,241,0.05)] backdrop-blur-sm overflow-hidden group/card">
                          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
                          <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-[40px] group-hover/card:bg-purple-500/30 transition-colors duration-500"></div>
                          <p className="mb-4 text-white font-semibold text-xl">Your resume scored 49 out of 100.</p>
                          <p className="text-slate-400 leading-relaxed">This is a decent start, but there's a clear room for improvement. It scored low on some key criteria hiring managers and resume screening software look for. Let's dive into how you can improve your score by 30+ points.</p>
                       </div>
                       
                       <div className="mt-12 bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
                         <div className="flex justify-between text-xs font-bold text-slate-500 mb-4 tracking-widest">
                            <span>0</span>
                            <span className="text-indigo-400">YOUR RESUME</span>
                            <span className="text-green-400">TOP RESUMES</span>
                            <span>100</span>
                         </div>
                         <div className="h-4 w-full bg-slate-800 rounded-full relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-1000 ease-out w-full"></div>
                            {/* Marker line 1 */}
                            <div className="absolute top-0 bottom-0 w-2 bg-indigo-500 left-[49%] shadow-[0_0_10px_rgba(99,102,241,1)]"></div>
                            {/* Marker line 2 */}
                            <div className="absolute top-0 bottom-0 w-1 bg-white right-[20%] opacity-50"></div>
                         </div>
                       </div>
                     </div>
                  </div>
               </div>
             </div>
             {/* Laptop base */}
             <div className="relative bg-gradient-to-b from-slate-700 to-slate-900 h-10 w-[110%] ml-[-5%] rounded-b-2xl border-t border-slate-600 shadow-2xl z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-slate-600 rounded-b-xl shadow-inner"></div>
             </div>
           </div>
        </div>
      </section>

      {/* AI Scanner Section - Premium Redesign */}
      <section className="relative px-6 md:px-16 py-32 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 border-t border-slate-800/50 bg-[#020617] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="w-full md:w-5/12 flex justify-center lg:justify-end z-10">
             <div className="relative w-80 h-96 bg-gradient-to-b from-slate-800/80 to-[#0b1120] rounded-3xl border border-slate-700/50 p-8 flex flex-col items-center justify-end shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl group hover:-translate-y-3 transition-transform duration-700">
                 {/* Magical Glowing AI Elements */}
                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 
                 {/* Scanning beam effect */}
                 <div className="absolute top-10 left-10 right-10 h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)] animate-[bounce_3s_infinite]"></div>

                 {/* Floating UI Elements */}
                 <div className="absolute top-16 -left-6 bg-slate-800 border border-slate-700/50 rounded-xl p-3 shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 delay-100 flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,1)]"></div></div>
                    <div className="w-16 h-2 bg-slate-600 rounded"></div>
                 </div>
                 
                 <div className="absolute top-32 -right-8 bg-slate-800 border border-slate-700/50 rounded-xl p-3 shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500 delay-200">
                    <div className="w-20 h-2 bg-slate-600 rounded mb-2"></div>
                    <div className="w-12 h-2 bg-indigo-500 rounded shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                 </div>

                 {/* Server racks / Data representation */}
                 <div className="w-full space-y-4 mb-8">
                    <div className="h-6 bg-slate-700/50 rounded flex items-center px-4 overflow-hidden relative">
                       <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-500/20"></div>
                       <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-3"></div>
                       <div className="w-full h-1 bg-slate-600 rounded"></div>
                    </div>
                    <div className="h-6 bg-slate-700/50 rounded flex items-center px-4 overflow-hidden relative">
                       <div className="absolute top-0 left-0 w-2/3 h-full bg-purple-500/20"></div>
                       <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mr-3"></div>
                       <div className="w-full h-1 bg-slate-600 rounded"></div>
                    </div>
                 </div>

                 {/* Person silhouette representation */}
                 <div className="w-20 h-32 bg-gradient-to-t from-indigo-500 to-blue-400 rounded-t-full relative z-10 shadow-[0_0_30px_rgba(99,102,241,0.4)] flex justify-center pt-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-full border border-white/50"></div>
                 </div>
                 <div className="w-48 h-4 bg-blue-500/30 rounded-full shadow-[0_0_30px_10px_rgba(59,130,246,0.3)] mt-2 blur-sm"></div>
             </div>
          </div>
          
          <div className="w-full md:w-1/2 max-w-xl z-10">
             <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
               Powered by <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-sm">Artificial Intelligence</span>
             </h2>
             <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
               <p className="hover:text-slate-300 transition-colors">
                 Companies receive hundreds of resumes per job posting. Hiring managers lack the time to review each manually, relying on <strong className="text-indigo-300 font-medium">Applicant Tracking Systems (ATS)</strong> to filter candidates instantly.
               </p>
               <p className="hover:text-slate-300 transition-colors">
                 A poorly formatted resume will be instantly rejected by screening software, never reaching human eyes. Your layout and text parsing must be flawless.
               </p>
               <p className="hover:text-slate-300 transition-colors">
                 Our enterprise-grade scanner simulates exactly how ATS processes your document. We provide actionable, immediate feedback on key criteria recruiters actively look for.
               </p>
             </div>
          </div>
      </section>

      {/* Guidelines Section - Floating Glass Cards */}
      <section className="relative px-6 md:px-16 py-32 flex flex-col items-center bg-gradient-to-b from-[#020617] to-[#040b1e]">
         {/* Top CTA */}
         <div className="text-center mb-16 md:mb-24 z-10">
            <Link to="/signup" className="group relative inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_20px_40px_-5px_rgba(16,185,129,0.6)] hover:-translate-y-2 transition-all duration-300 overflow-hidden mb-16">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative flex items-center gap-2">Start the ATS Test <span className="group-hover:translate-x-2 transition-transform">»</span></span>
            </Link>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">How to make it <span className="text-green-400">ATS-compliant</span></h2>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-light">Essential rules to ensure your resume passes the bot filter.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full z-10">
            {/* Standard Titles */}
            <div className="group bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] transition-all duration-500 transform hover:-translate-y-2">
               <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:bg-indigo-500/40 transition-colors">
                  <span className="text-2xl text-indigo-400">📝</span>
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">Standard Titles</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light">Label sections clearly. Use <strong className="text-slate-200">"Professional Experience"</strong> instead of creative titles like "My Story" to ensure accurate parsing.</p>
            </div>

            {/* Fonts */}
            <div className="group bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 transform hover:-translate-y-2 lg:translate-y-8">
               <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:bg-blue-500/40 transition-colors">
                  <span className="text-2xl text-blue-400">Aa</span>
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">System Fonts</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light">Custom fonts convert letters to unreadable characters for ATS. Stick to safe choices: <span className="text-slate-200 bg-slate-800 px-2 py-1 rounded">Arial</span>, <span className="text-slate-200 bg-slate-800 px-2 py-1 rounded">Calibri</span>, or Garamond.</p>
            </div>

            {/* Layout */}
            <div className="group bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] transition-all duration-500 transform hover:-translate-y-2">
               <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:bg-purple-500/40 transition-colors">
                  <span className="text-2xl text-purple-400">📄</span>
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">Single-column Layouts</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light">Modern ATS tries to read left-to-right. Multi-column resumes break chronological reading patterns and mix up your data.</p>
            </div>

            {/* Formatting */}
            <div className="group bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 hover:border-pink-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-[0_0_40px_rgba(236,72,153,0.1)] transition-all duration-500 transform hover:-translate-y-2 lg:translate-y-8 lg:mt-0 mt-8">
               <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/30 group-hover:bg-pink-500/40 transition-colors">
                  <span className="text-2xl text-pink-400">🚫</span>
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white">No Tables or Graphics</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light">Tables and graphs are invisible to bots. Your text must be purely highlightable and readable from top to bottom.</p>
            </div>
         </div>
      </section>

      {/* Modern CTA Footer */}
      <section className="relative bg-[#020617] pt-20 pb-0 overflow-hidden">
         {/* Massive Background Gradient */}
         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-t from-indigo-900/40 via-purple-900/10 to-transparent blur-[100px] pointer-events-none"></div>
         
         <div className="relative border-t border-slate-800/80 bg-[#0f172a]/40 backdrop-blur-3xl rounded-t-[3rem] px-6 md:px-16 pt-32 pb-24 flex flex-col items-center text-center mt-20 mx-4 md:mx-10 z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-l border-r">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready for the ATS test?</h2>
            
            <div className="flex bg-slate-800/80 p-5 rounded-2xl border border-slate-700/50 max-w-3xl mb-14 items-start md:items-center text-left gap-5 shadow-inner">
               <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <p className="text-slate-300 text-lg leading-relaxed">
                  <strong className="text-white">Pro Tip:</strong> Our scanner simulates enterprise screening. If your resume passes here, it will be flawlessly processed by major ATS software worldwide.
               </p>
            </div>

            <Link to="/signup" className="group relative w-full sm:w-auto px-4 sm:px-12 py-4 sm:py-5 bg-white text-[#0f172a] rounded-full text-lg sm:text-2xl font-extrabold hover:text-indigo-600 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 duration-300 overflow-hidden mb-10 flex justify-center">
               <span className="relative z-10 flex items-center gap-2 sm:gap-3 whitespace-nowrap">Scan Resume Now <span className="group-hover:translate-x-2 transition-transform duration-300">→</span></span>
            </Link>
         </div>

         {/* Toolkit Section */}
      </section>

      <section className="relative px-6 md:px-16 py-32 bg-[#020617] border-t border-slate-800/50 flex flex-col items-center overflow-hidden z-20">
         {/* Background gradient */}
         <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

         <h2 className="text-3xl md:text-5xl font-serif text-white mb-20 tracking-wide text-center">The most complete resume toolkit</h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl w-full z-10 text-center">
            {/* Toolkit 1 */}
            <div className="flex flex-col items-center group">
               <h3 className="text-xl font-bold text-slate-200 mb-8 tracking-wide">Targeted Resume</h3>
               <div className="h-20 flex items-center justify-center mb-10 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-[20px] rounded-full group-hover:bg-cyan-400/30 transition-colors"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[4.5rem] w-[4.5rem] text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
               </div>
               <p className="text-[#8892b0] text-base leading-relaxed px-4 group-hover:text-slate-300 transition-colors">Try our resume keyword scanner which scans both your resume and the job description you're applying to (like an ATS would).</p>
            </div>

            {/* Toolkit 2 */}
            <div className="flex flex-col items-center group">
               <h3 className="text-xl font-bold text-slate-200 mb-8 tracking-wide">LinkedIn Review</h3>
               <div className="h-20 flex items-center justify-center mb-10 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-[20px] rounded-full group-hover:bg-cyan-400/30 transition-colors"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[4.5rem] w-[4.5rem] text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                    </svg>
                  </div>
               </div>
               <p className="text-[#8892b0] text-base leading-relaxed px-4 group-hover:text-slate-300 transition-colors">Get actionable insights on how to improve your LinkedIn profile by using our LinkedIn profile checker.</p>
            </div>

            {/* Toolkit 3 */}
            <div className="flex flex-col items-center group">
               <h3 className="text-xl font-bold text-slate-200 mb-8 tracking-wide">ATS Resume Templates</h3>
               <div className="h-20 flex items-center justify-center mb-10 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-[20px] rounded-full group-hover:bg-cyan-400/30 transition-colors"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[4.5rem] w-[4.5rem] text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
               </div>
               <p className="text-[#8892b0] text-base leading-relaxed px-4 group-hover:text-slate-300 transition-colors">Download ATS friendly resume templates that are perfectly readable and compatible with all ATS.</p>
            </div>
         </div>
      </section>

      {/* Full Premium Footer */}
      <footer className="bg-[#0b1120] border-t border-slate-800 px-6 md:px-16 pt-24 pb-16 relative overflow-hidden z-20">
         {/* Glow effect */}
         <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-3/4 h-[200px] bg-indigo-900/10 blur-[100px]"></div>

         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 relative z-10">
            {/* Brand */}
            <div className="lg:w-1/3">
               <div className="text-xl font-black tracking-widest uppercase text-white mb-6">
                  Resume Worded
               </div>
               <p className="text-[#8892b0] text-lg font-light">Get the job you deserve, faster.</p>
            </div>

            {/* Links Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
               {/* Column 1 */}
               <div className="flex flex-col gap-5">
                  <h4 className="text-white font-bold text-[1.05rem] mb-2">Improve your resume</h4>
                  <Link to="/signup" className="text-[#8892b0] hover:text-white transition-colors">Score my resume</Link>
                  <Link to="/signup" className="text-[#8892b0] hover:text-white transition-colors">Targeted resume</Link>
               </div>
               {/* Column 2 */}
               <div className="flex flex-col gap-5">
                  <h4 className="text-white font-bold text-[1.05rem] mb-2">Optimize your career</h4>
                  <Link to="/signup" className="text-[#8892b0] hover:text-white transition-colors">LinkedIn review</Link>
                  <Link to="/signup" className="text-[#8892b0] hover:text-white transition-colors">Optimize your LinkedIn profile</Link>
                  <Link to="/signup" className="text-[#8892b0] hover:text-white transition-colors">LinkedIn headline samples</Link>
               </div>
               {/* Column 3 */}
               <div className="flex flex-col gap-5">
                  <h4 className="text-white font-bold text-[1.05rem] mb-2">Get to know us</h4>
                  <Link to="/" className="text-[#8892b0] hover:text-white transition-colors">Help center</Link>
                  <Link to="/" className="text-[#8892b0] hover:text-white transition-colors">Get in touch</Link>
                  <Link to="/" className="text-[#8892b0] hover:text-white transition-colors">For businesses</Link>
               </div>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm">
            <p>© {new Date().getFullYear()} ResumeWorded Clone. Premium Edition.</p>
         </div>
      </footer>
      
      {/* Custom Styles for Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default LandingPage;
