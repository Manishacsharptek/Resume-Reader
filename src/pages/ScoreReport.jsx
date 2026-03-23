import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ScoreReport = () => {
  const location = useLocation();
  const uploadedFile = location.state?.uploadedFile || "Resume.pdf";
  
  // Dynamic Score Data passed from /upload
  const scoreData = location.state?.scoreData || {
    score: 12,
    fixes: [
      {
         title: "Resume likely not read correctly",
         description: "We couldn't read all your resume's sections or bullet points. Change your resume template or use one of these alternatives so it's more readable by resume screeners.",
         category: "STYLE",
         icon: "style"
      },
      {
         title: "Quantify impact",
         description: "Add more numbers to quantify your accomplishments",
         category: "IMPACT",
         icon: "impact"
      },
      {
         title: "Change your resume layout",
         description: "Your resume should use bullet points, not paragraphs",
         category: "BREVITY",
         icon: "brevity"
      }
    ],
    goods: [
       { title: "Page density", description: "Your page layout looks right." },
       { title: "Dates are in the right format", description: "Your dates are in the right format." },
       { title: "Spelling", description: "No clear spelling errors found on your resume." }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f4f6fc] flex flex-col font-sans selection:bg-indigo-500 selection:text-white md:overflow-hidden overflow-auto">
      {/* Top Navbar */}
      <nav className="w-full h-14 bg-[#18113f] text-white flex items-center justify-between px-4 sm:px-6 z-50 shadow-md shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs sm:text-sm font-black tracking-wider sm:tracking-[0.2em] uppercase hover:text-indigo-300 transition-colors whitespace-nowrap">
            Resume Worded
          </Link>
          <span className="text-slate-500 font-light">|</span>
          <span className="text-[0.8rem] font-bold tracking-widest text-slate-300">SCORE MY RESUME</span>
        </div>
        <div className="flex items-center gap-6 text-[0.85rem] font-medium hidden sm:flex">
          <div className="flex items-center gap-1 cursor-pointer hover:text-slate-300 transition-colors">
            Career Coaches
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </div>
          <div className="flex items-center gap-4 cursor-pointer hover:text-slate-300 transition-colors mr-2">
            More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -ml-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold h-14 px-6 flex items-center justify-center gap-2 transition-colors shadow-inner">
            Re-score Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[1rem] w-[1rem]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden overflow-visible custom-scrollbar">
        
        {/* Center Main Column */}
        <div className="w-full md:flex-[1.5] lg:flex-[1.8] xl:flex-[2] bg-[#f4f6fc] z-10 md:overflow-y-auto overflow-hidden custom-scrollbar h-auto md:h-[calc(100vh-56px)] order-1 relative">
           <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 pt-10 pb-24">
              <div className="flex gap-3 mb-10">
                <button className="w-9 h-9 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:shadow-md transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.1rem] w-[1.1rem]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </button>
                <button className="w-9 h-9 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:shadow-md transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.1rem] w-[1.1rem]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                </button>
              </div>

              <h2 className="text-2xl sm:text-[1.8rem] font-bold text-[#1e1b4b] mb-4 tracking-wide">Good morning, Manisha.</h2>
              <p className="text-[1.1rem] text-slate-500 mb-12 font-light">Welcome to your resume review.</p>

              {/* Score Card */}
              <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-slate-100/50 p-8 sm:p-12 mb-20">
                 <h3 className="text-xl sm:text-[1.2rem] font-bold text-[#334155] mb-6">Your resume scored <span className="text-red-500 font-black">{scoreData.score}</span> out of 100.</h3>
                 <p className="text-slate-500 leading-relaxed font-light text-[1rem] sm:text-[1.05rem] mb-14">
                   It seems like your resume scored poorly on key checks that hiring managers and resume screening software scan your resume for. But don't worry! With a few simple changes to your resume, you can increase your score by 40+ points. We'll go through them in this report.
                 </p>

                 {/* Progress Slider */}
                 <div className="relative mb-8 px-2 max-w-2xl">
                    <div className="flex justify-between text-[0.7rem] font-extrabold tracking-widest text-[#334155] mb-4 absolute -top-9 w-full left-0">
                       <span className="tracking-[0.1em] uppercase">YOUR RESUME</span>
                       <div className="flex flex-col items-center absolute right-[12%]">
                          <span className="tracking-[0.1em] text-slate-500">TOP</span>
                          <span className="tracking-[0.1em] text-slate-500">RESUMES</span>
                       </div>
                    </div>
                    
                    <div className="h-4 w-full bg-gradient-to-r from-red-600 via-orange-400 to-[#65a30d] rounded-sm relative mt-12 overflow-visible">
                       {/* The Triangle Indicator */}
                       <div className="absolute top-[0px] transform -translate-x-1/2 -translate-y-full flex flex-col items-center transition-all duration-1000 ease-out z-10" style={{ left: `${Math.max(scoreData.score, 2)}%` }}>
                          <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#3b21c4]"></div>
                       </div>
                       <div className="absolute top-[1.5rem] left-[1px] transform -translate-x-1/2 font-bold text-lg text-slate-700">
                          0
                       </div>

                       {/* Dotted threshold indicator */}
                       <div className="absolute top-[-15px] right-[12%] w-[2px] h-[50px] border-l-[3px] border-dotted border-[#4f20e3]"></div>
                    </div>

                    <div className="absolute top-[1.5rem] right-[-1rem] font-bold text-lg text-slate-700">
                       100
                    </div>
                 </div>

                 {/* Info Box */}
                 <div className="bg-[#fffdf2]/90 border-l-[6px] border-[#eab308]/60 p-6 sm:p-8 rounded-r-xl mt-24 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600 absolute top-8 sm:top-9 left-6" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4z" /></svg>
                    <p className="text-[#64748b] text-[1.05rem] leading-[1.8] pl-8 font-light">
                      Your score is benchmarked against 1m+ resumes at your career level, and is based on 20+ key recruiter checks. The higher your resume score, the stronger your resume is and the more interviews you are likely to get.
                    </p>
                 </div>
              </div>

              {/* Section: Steps to increase score */}
              <div className="mb-20">
                 <h2 className="text-2xl font-bold text-[#1e1b4b] mb-4 tracking-wide">Steps to increase your score</h2>
                 <p className="text-[1.1rem] text-slate-500 mb-8 font-light leading-relaxed">Here are some recruiter checks that are bringing your score down. Click into each to learn where you went wrong and how to improve your score.</p>
                 
                 <div className="space-y-5">
                    {scoreData.fixes && scoreData.fixes.length > 0 ? scoreData.fixes.map((fix, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden flex cursor-pointer group hover:shadow-md transition-shadow">
                       <div className="w-[4px] bg-[#fb5447] shrink-0"></div>
                       <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                          <div className="flex-1">
                             <h4 className="flex items-center gap-3 text-lg font-bold text-[#334155] mb-2">
                               <div className="flex items-center justify-center w-5 h-5">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.1rem] w-[1.1rem] text-[#fb5447]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                               </div>
                               {fix.title}
                             </h4>
                             <p className="text-slate-500 font-light text-[0.95rem] leading-relaxed ml-8">{fix.description}</p>
                          </div>
                          <div className="flex items-center gap-6 shrink-0 justify-between md:justify-end w-full md:w-auto ml-8 md:ml-0 mt-4 md:mt-0">
                             <div className="flex items-center gap-2 text-slate-500 font-bold text-[0.7rem] tracking-widest uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" /></svg>
                                {fix.category || 'IMPACT'}
                             </div>
                             <button className="bg-[#4f20e3] hover:bg-[#3d16b5] text-white font-bold py-2.5 px-5 rounded-md text-[0.85rem] tracking-wide transition-colors whitespace-nowrap">FIX ➔</button>
                          </div>
                       </div>
                    </div>
                    )) : (
                       <p className="text-slate-500 italic p-6">No major issues found! Great job.</p>
                    )}
                 </div>
                 
                 <div className="mt-8 flex justify-center">
                    <button className="bg-white text-[#4f20e3] font-bold text-[0.8rem] tracking-widest uppercase px-6 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded transition-all flex items-center gap-2">
                       SHOW MORE 
                       <div className="bg-[#4f20e3] text-white text-[0.6rem] flex items-center justify-center w-[14px] h-[14px] rounded-sm ml-1 mb-[1px]">＋</div>
                    </button>
                 </div>
              </div>

              {/* Section: What you did well */}
              <div className="pt-8 border-t border-slate-200">
                 <h2 className="text-2xl font-bold text-[#1e1b4b] mb-4 tracking-wide">What you did well</h2>
                 <p className="text-[1.1rem] text-slate-500 mb-8 font-light leading-relaxed">We ran 20+ checks on your resume. Here's a rundown of three key areas you did well in - well done.</p>
                 
                 <div className="bg-white rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-100 p-8 sm:p-10 space-y-6">
                    {scoreData.goods && scoreData.goods.length > 0 ? scoreData.goods.map((good, index) => (
                    <div key={index} className="flex items-start gap-4">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10b981] mt-[-2px] shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                       <p className="text-slate-500 font-light text-[1.05rem]"><span className="text-slate-700 font-normal">{good.title}</span>: {good.description}</p>
                    </div>
                    )) : (
                       <p className="text-slate-500 italic">Try expanding your resume to show more verifiable positive attributes.</p>
                    )}
                 </div>
              </div>

           </div>
        </div>

        {/* Right Preview Column */}
        <div className="w-full md:flex-1 bg-[#1e293b] flex flex-col h-[700px] md:h-[calc(100vh-56px)] border-t md:border-t-0 md:border-l border-slate-700 relative shadow-2xl z-0 order-3">
          
          {/* Top internal nav */}
          <div className="w-full bg-[#182033] h-[3.25rem] flex items-center justify-between px-6 border-b border-slate-800/80 shrink-0 shadow-sm z-10">
             <button className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded hover:bg-emerald-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="text-[0.65rem] font-bold tracking-widest text-emerald-50 whitespace-nowrap">GET PRO <span className="bg-amber-400 text-amber-900 px-1 py-0.5 ml-1 rounded-[3px]">75% OFF</span></span>
             </button>

             <div className="flex h-full overflow-x-auto no-scrollbar">
                <button className="flex items-center justify-center gap-2 px-5 h-full hover:bg-white/[0.03] border-l border-white/5 transition-colors group">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 group-hover:text-slate-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   <span className="text-[0.65rem] font-bold tracking-widest text-slate-300 group-hover:text-white transition-colors">RESUME REWRITER</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-5 h-full hover:bg-white/[0.03] border-l border-white/5 transition-colors group">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 00-.98.804l-.841 4.205C7.94 7.6 7.6 7.939 7.191 8.179l-4.205.84a1 1 0 000 1.962l4.205.84c.41.082.748.419.988 1.17l.841 4.205a1 1 0 001.96 0l.841-4.205c.24-.75.578-1.088.988-1.17l4.205-.84a1 1 0 000-1.962l-4.205-.84c-.41-.082-.748-.419-.988-1.17L10.98 2.804A1 1 0 0010 2z" clipRule="evenodd" /></svg>
                   <span className="text-[0.65rem] font-bold tracking-widest text-slate-300 group-hover:text-white transition-colors">MAGIC WRITE</span>
                </button>
             </div>
          </div>

          {/* Actual Resume Visualizer */}
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] p-10 flex justify-center items-start shadow-inner">
             {/* The Resume Sheet */}
             <div className="bg-white w-full max-w-[800px] min-h-[1056px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-6 sm:px-14 py-10 sm:py-16 font-serif text-slate-800 scale-[0.8] sm:scale-95 transform-origin-top transition-transform hover:scale-100 duration-500 border border-slate-200">
                {/* Parse UI state wrapper */}
                <div className="text-center w-full mb-10 text-slate-400 font-sans tracking-widest text-xs uppercase border-b border-dashed border-slate-300 pb-2">
                   Parsed from: {uploadedFile}
                </div>

                <h1 className="text-center font-bold text-3xl mb-8 tracking-wide">Rahul Sharma</h1>
                
                <div className="text-center text-[0.8rem] mb-12 text-slate-600 leading-relaxed font-sans flex justify-center gap-4">
                   <span>Phone: +91 9876543210</span> | 
                   <span>Email: rahul.sharma@example.com</span> | 
                   <span>Location: New Delhi, India</span>
                </div>

                <div className="mb-8">
                   <h2 className="text-lg font-bold border-b-2 border-slate-300 pb-1 mb-3">Career Objective</h2>
                   <p className="text-[0.9rem] leading-relaxed text-slate-700">
                     Enthusiastic frontend developer with a passion for building responsive and user-friendly web applications. Eager to bring my creative problem solving and analytical thinking to a fast-paced team environment.
                   </p>
                </div>

                <div className="mb-8">
                   <h2 className="text-lg font-bold border-b-2 border-slate-300 pb-1 mb-3">Education</h2>
                   <div className="flex justify-between items-baseline mb-1">
                      <p className="text-[1rem] font-bold text-slate-800">
                        B.Tech in Computer Science
                      </p>
                      <p className="text-[0.8rem] text-slate-600 italic font-sans font-medium">May 2018 - May 2022</p>
                   </div>
                   <p className="text-[0.85rem] text-slate-600 italic">XYZ University</p>
                </div>

                <div className="mb-8">
                   <h2 className="text-lg font-bold border-b-2 border-slate-300 pb-1 mb-3">Skills</h2>
                   <p className="text-[0.9rem] leading-relaxed text-slate-700">
                     <span className="font-bold">Languages:</span> JavaScript, TypeScript, Python, HTML/CSS<br/>
                     <span className="font-bold">Libraries:</span> React.js, Tailwind CSS, Redux, Node.js<br/>
                     <span className="font-bold">Tools:</span> Git, GitHub, VS Code, Webpack
                   </p>
                </div>

                <div className="mb-8">
                   <h2 className="text-lg font-bold border-b-2 border-slate-300 pb-1 mb-3">Projects</h2>
                   <div className="mb-5">
                     <p className="text-[1rem] font-bold text-slate-800 mb-1 flex items-center justify-between">Personal Portfolio Website <span className="text-[0.7rem] font-normal italic font-sans text-slate-500">Jan 2022 - Mar 2022</span></p>
                     <p className="text-[0.85rem] text-slate-600 mb-2 italic">A highly responsive portfolio using HTML, CSS, React.js</p>
                     <ul className="list-disc pl-5 text-[0.85rem] text-slate-700 space-y-1.5">
                       <li>Integrated an optimized build process reducing load times by 20%.</li>
                       <li>Implemented elegant scroll animations using Framer Motion.</li>
                     </ul>
                   </div>
                   <div className="mb-4">
                     <p className="text-[1rem] font-bold text-slate-800 mb-1 flex items-center justify-between">Task Management / Todo App <span className="text-[0.7rem] font-normal italic font-sans text-slate-500">Aug 2021 - Dec 2021</span></p>
                     <p className="text-[0.85rem] text-slate-600 mb-2 italic">Full stack task management application built using MERN.</p>
                     <ul className="list-disc pl-5 text-[0.85rem] text-slate-700 space-y-1.5">
                       <li>Built a robust REST API allowing seamless CRUD operations.</li>
                       <li>Employed custom React hooks to manage global layout states securely.</li>
                     </ul>
                   </div>
                </div>

                <div className="mb-8">
                   <h2 className="text-lg font-bold border-b-2 border-slate-300 pb-1 mb-3">Experience</h2>
                   <div className="mb-3">
                      <p className="text-[1rem] font-bold text-slate-800 flex justify-between">
                        Frontend Developer Intern <span className="text-[0.8rem] font-normal italic font-sans text-slate-500">Jun 2022 - Sep 2022</span>
                      </p>
                      <p className="text-[0.9rem] italic text-slate-600">ABC Tech</p>
                      <ul className="list-disc pl-5 text-[0.85rem] text-slate-700 space-y-1.5 mt-2">
                        <li>Collaborated alongside senior engineers to deploy new onboarding pages.</li>
                        <li>Handled over 30 bug tickets drastically improving platform stability.</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* Floating Chat Bubble */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#3b82f6] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(59,130,246,0.6)] hover:scale-110 hover:bg-[#2563eb] transition-all z-50 animate-bounce cursor-pointer border-4 border-white/20">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
         </svg>
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
        
        .transform-origin-top { transform-origin: top center; }
      `}} />
    </div>
  );
};

export default ScoreReport;
