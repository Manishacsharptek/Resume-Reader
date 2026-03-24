import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../services/api';

const ScoreReport = () => {
  const location = useLocation();
  const resumeText = location.state?.resumeText || "";

  // AI Insights state
  const [aiLoading, setAiLoading] = useState(true);
  const [aiData, setAiData] = useState(null);

  const getFallbackAiData = () => ({
    aiSuggestions: [
      {
        title: "Add Quantified Achievements",
        suggestion: "Replace vague duties with numbers. E.g. 'Managed a team' → 'Led a team of 8, delivering a 30% improvement in sprint velocity'. Recruiters look for measurable proof of impact.",
        impact: "High"
      },
      {
        title: "Missing ATS Keywords",
        suggestion: "Your resume likely lacks keywords from job descriptions. Add terms like 'cross-functional collaboration', 'stakeholder management', and role-specific tech skills to pass automated screening.",
        impact: "High"
      },
      {
        title: "Rewrite Your Career Summary",
        suggestion: "A powerful summary is 2-3 lines: who you are, your top achievement, and what you bring to the role. Start with a strong adjective + years of experience + your biggest win.",
        impact: "High"
      },
      {
        title: "Upgrade Action Verbs",
        suggestion: "Weak openers like 'Responsible for' and 'Helped with' reduce impact. Replace with: Architected, Spearheaded, Engineered, Delivered, Optimized, or Deployed.",
        impact: "Medium"
      },
      {
        title: "Tighten Your Formatting",
        suggestion: "Keep resume to 1 page (under 5 years XP) or 2 pages max. Use consistent bullet point style, standard fonts (Calibri/Arial 10-11pt), and leave adequate white space.",
        impact: "Medium"
      },
    ],
    aiMeta: { isLive: false, wordCount: 0, count: 5 }
  });

  useEffect(() => {
    if (!resumeText) {
      // No resume text — still show professional fallback tips
      setAiData(getFallbackAiData());
      setAiLoading(false);
      return;
    }
    const fetchAi = async () => {
      try {
        const res = await api.post('/api/resume/ai-insights', { rawText: resumeText });
        const data = res.data;
        setAiData(data.success && data.data ? data.data : getFallbackAiData());
      } catch {
        setAiData(getFallbackAiData());
      } finally {
        setAiLoading(false);
      }
    };
    fetchAi();
  }, [resumeText]);

  const scoreData = location.state?.scoreData || {
    overallScore: 0,
    profile: { name: "User", email: "Not found", phone: "Not found", skills: [] },
    scores: { impact: 0, brevity: 0, style: 0, skills: 0 },
    fixes: [], goods: [], recommendations: []
  };

  const name = scoreData.profile?.name || "User";
  const score = scoreData.overallScore || 0;

  // Score colour
  const scoreColor = score >= 70 ? '#10b981' : score >= 45 ? '#f59e0b' : '#ef4444';

  return (
    <div className="min-h-screen bg-[#f0f2f9] flex flex-col font-sans selection:bg-indigo-500 selection:text-white">

      {/* ── Navbar ── */}
      <nav className="w-full h-14 bg-[#18113f] text-white flex items-center justify-between px-4 sm:px-6 z-50 shadow-md shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs sm:text-sm font-black tracking-wider sm:tracking-[0.2em] uppercase hover:text-indigo-300 transition-colors whitespace-nowrap">
            Resume Worded
          </Link>
          <span className="text-slate-500 font-light">|</span>
          <span className="text-[0.8rem] font-bold tracking-widest text-slate-300">SCORE MY RESUME</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[0.85rem] font-medium">
          <Link to="/upload" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold h-14 px-6 flex items-center justify-center gap-2 transition-colors">
            Re-score Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </nav>

      {/* ── Two-Column Main Layout ── */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

        {/* ══════════════════════════════════
            LEFT COLUMN — Score + Fixes + Goods
            ══════════════════════════════════ */}
        <div className="w-full lg:w-[55%] bg-[#f0f2f9] overflow-y-auto custom-scrollbar h-auto lg:h-[calc(100vh-56px)]">
          <div className="max-w-2xl mx-auto px-5 sm:px-10 pt-10 pb-24">

            {/* Greeting */}
            <h2 className="text-2xl sm:text-[1.8rem] font-bold text-[#1e1b4b] mb-1 tracking-wide">
              Good morning, {name.split(' ')[0]}.
            </h2>
            <p className="text-[1.05rem] text-slate-500 mb-10 font-light">Welcome to your resume review.</p>

            {/* ── Score Card ── */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-slate-100 p-8 sm:p-10 mb-10">
              {/* Big score circle + label */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke={scoreColor} strokeWidth="3.5"
                      strokeDasharray={`${score} ${100 - score}`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dasharray 1.2s ease-out' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black" style={{ color: scoreColor }}>{score}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">
                    Your resume scored <span style={{ color: scoreColor }}>{score}</span> out of 100
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    {score >= 70
                      ? "Great start! A few improvements can push you to the top."
                      : "With a few changes you can increase your score by 40+ points."}
                  </p>
                </div>
              </div>

              {/* Gradient bar */}
              <div className="relative mb-4 mt-6">
                <div className="flex justify-between text-[0.65rem] font-bold tracking-widest text-slate-400 mb-2 uppercase">
                  <span>Your Resume</span>
                  <span className="mr-[12%]">Top Resumes</span>
                </div>
                <div className="h-3 w-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 rounded-full relative overflow-visible">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full shadow-md transition-all duration-1000"
                    style={{ left: `calc(${Math.max(score, 2)}% - 8px)` }}
                  />
                  <div className="absolute top-[-18px] right-[12%] w-[2px] h-[30px] border-l-2 border-dotted border-indigo-400" />
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mt-1">
                  <span>0</span><span>100</span>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-6">
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  💡 Your score is benchmarked against <strong className="text-slate-700">1M+ resumes</strong> at your career level based on 20+ recruiter checks.
                </p>
              </div>
            </div>

            {/* ── Steps to increase score ── */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-[#1e1b4b] mb-2 tracking-wide">Steps to increase your score</h2>
              <p className="text-slate-500 text-sm mb-6 font-light leading-relaxed">Here are the checks bringing your score down.</p>
              <div className="space-y-4">
                {scoreData.fixes && scoreData.fixes.length > 0 ? scoreData.fixes.map((fix, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden flex group hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-1 bg-red-500 shrink-0" />
                    <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                      <div className="flex-1">
                        <h4 className="flex items-center gap-2 text-base font-bold text-[#334155] mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                          {fix.title}
                        </h4>
                        <p className="text-slate-400 text-sm font-light leading-relaxed pl-6">{fix.description}</p>
                      </div>
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg text-xs tracking-wide transition-colors whitespace-nowrap shrink-0">FIX ➔</button>
                    </div>
                  </div>
                )) : (
                  <div className="bg-white rounded-xl border border-emerald-100 p-6 text-center">
                    <p className="text-emerald-600 font-medium">🎉 No major issues found! Great job.</p>
                  </div>
                )}
              </div>
            </div>

            {/* ── What you did well ── */}
            <div>
              <h2 className="text-xl font-bold text-[#1e1b4b] mb-2 tracking-wide">What you did well</h2>
              <p className="text-slate-500 text-sm mb-6 font-light">Here are key areas you performed well in.</p>
              <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 space-y-5">
                {scoreData.goods && scoreData.goods.length > 0 ? scoreData.goods.map((good, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-slate-500 text-sm font-light"><span className="text-slate-700 font-semibold">{good.title}</span>: {good.description}</p>
                  </div>
                )) : (
                  <p className="text-slate-400 italic text-sm">Expand your resume to show more verifiable positive attributes.</p>
                )}
              </div>
            </div>

            {/* ── Uploaded Resume Preview ── */}
            {(name !== "User" || resumeText) && (
              <div className="mt-10">
                <h2 className="text-xl font-bold text-[#1e1b4b] mb-2 tracking-wide">Your Resume</h2>
                <p className="text-slate-500 text-sm mb-6 font-light">Parsed from your uploaded file.</p>

                <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                  {/* Colour accent stripe */}
                  <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  <div className="px-8 sm:px-12 py-10 font-serif text-slate-800">

                    {/* Name */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#1e1b4b] mb-2 tracking-wide">{name}</h1>

                    {/* Contact */}
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-slate-500 font-sans mb-5">
                      {scoreData.profile?.email && scoreData.profile.email !== "Not found" && (
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                          {scoreData.profile.email}
                        </span>
                      )}
                      {scoreData.profile?.phone && scoreData.profile.phone !== "Not found" && (
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                          {scoreData.profile.phone}
                        </span>
                      )}
                    </div>

                    <div className="border-t border-dashed border-slate-200 mb-5" />

                    {/* Skills */}
                    {scoreData.profile?.skills && scoreData.profile.skills.length > 0 && (
                      <div className="mb-5">
                        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 font-sans mb-2">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {scoreData.profile.skills.map((skill, idx) => (
                            <span key={idx} className="bg-indigo-50 text-indigo-700 text-[0.7rem] font-semibold px-2.5 py-1 rounded-full font-sans border border-indigo-100">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="border-t border-dashed border-slate-200 mt-5 mb-5" />
                      </div>
                    )}

                    {/* Raw resume text */}
                    {resumeText ? (
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 font-sans mb-3">Resume Content</p>
                        <pre className="text-[0.78rem] text-slate-600 font-sans leading-relaxed whitespace-pre-wrap break-words max-h-[480px] overflow-y-auto custom-scrollbar">
                          {resumeText.trim()}
                        </pre>
                      </div>
                    ) : (
                      <p className="text-slate-400 italic text-sm font-sans text-center py-3">
                        Full resume text could not be extracted from this PDF.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ══════════════════════════════════
            RIGHT COLUMN — Gemini AI Insights
            ══════════════════════════════════ */}
        <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#1a1445] via-[#1e1b4b] to-[#26226b] overflow-y-auto custom-scrollbar h-auto lg:h-[calc(100vh-56px)] border-t lg:border-t-0 lg:border-l border-indigo-900/40">

          {/* Ambient glow */}
          <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 px-6 sm:px-10 pt-10 pb-24">

            {/* Panel header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-wide">AI Expert Insights</h2>
                <p className="text-indigo-400/70 text-[0.7rem] tracking-widest uppercase">Powered by Gemini</p>
              </div>
            </div>

            {/* ── LOADING STATE ── */}
            {aiLoading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
                {/* Spinner */}
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-indigo-800" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-indigo-400 border-r-indigo-300 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-300 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Gemini AI is analyzing your resume…</p>
                  <p className="text-indigo-400/70 text-sm mt-1 font-light">Identifying improvements, missing keywords & ATS tips</p>
                </div>
                {/* Bouncing dots */}
                <div className="flex gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                {/* Skeleton shimmer cards */}
                <div className="w-full mt-6 space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white/5 rounded-xl p-5 animate-pulse">
                      <div className="h-3 bg-indigo-700/50 rounded w-2/3 mb-3" />
                      <div className="h-2 bg-indigo-800/50 rounded w-full mb-2" />
                      <div className="h-2 bg-indigo-800/50 rounded w-4/5" />
                    </div>
                  ))}
                </div>
              </div>

            ) : (
              /* ── RESULTS STATE ── */
              <div className="animate-ai-reveal">

                {/* Live / Fallback badge */}
                <div className="flex items-center justify-between mb-4">
                  {aiData?.aiMeta?.isLive ? (
                    <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span className="text-emerald-300 text-[0.65rem] font-bold tracking-widest uppercase">Live Gemini Analysis</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-3 py-1.5 rounded-full">
                      <span className="text-indigo-300 text-lg">✨</span>
                      <span className="text-indigo-300 text-[0.65rem] font-bold tracking-widest uppercase">AI Expert Tips</span>
                    </div>
                  )}
                  {aiData?.aiMeta?.isLive && (
                    <p className="text-indigo-400/60 text-[0.65rem]">
                      ✓ {aiData.aiMeta.wordCount} words · {aiData.aiMeta.count} improvements
                    </p>
                  )}
                </div>

                <p className="text-indigo-200/70 text-sm mb-8 font-light leading-relaxed">
                  {aiData?.aiMeta?.isLive
                    ? `Gemini reviewed your full resume and found ${aiData.aiMeta.count || 'several'} ways to improve it:`
                    : "Here are expert-recommended improvements to boost your resume's effectiveness:"}
                </p>

                {/* Suggestion cards */}
                <div className="space-y-4">
                  {aiData?.aiSuggestions && aiData.aiSuggestions.length > 0
                    ? aiData.aiSuggestions.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
                        style={{ animationDelay: `${idx * 80}ms` }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-indigo-100 group-hover:text-white transition-colors text-[0.95rem] leading-snug pr-2">{item.title}</h4>
                          <span className={`text-[0.55rem] font-bold tracking-widest px-2 py-0.5 rounded-full uppercase shrink-0 ${
                            item.impact === 'High'
                              ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/30'
                              : item.impact === 'Medium'
                              ? 'bg-amber-500/25 text-amber-300 border border-amber-500/30'
                              : 'bg-slate-500/25 text-slate-300 border border-slate-500/30'
                          }`}>
                            {item.impact}
                          </span>
                        </div>
                        <p className="text-indigo-200/65 text-sm font-light leading-relaxed">{item.suggestion}</p>
                      </div>
                    ))
                    : <p className="text-indigo-300/50 italic text-sm">No insights available. Try re-uploading your resume.</p>
                  }
                </div>



              </div>
            )}
          </div>
        </div>

      </div>

      {/* Floating chat bubble */}
      <button className="fixed bottom-6 right-6 w-13 h-13 w-[52px] h-[52px] bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(99,102,241,0.5)] hover:scale-110 hover:bg-indigo-400 transition-all z-50 border-2 border-white/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(99,102,241,0.3); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(99,102,241,0.5); }

        @keyframes ai-reveal {
          0%   { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-ai-reveal {
          animation: ai-reveal 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
};

export default ScoreReport;
