// app/not-found.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Radio,
  Briefcase,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Quote as QuoteIcon,
  Sparkles,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useDarkMode } from "@/lib/DarkModeContext";

interface LanguageQuote {
  quote: string;
  native: string;
  author: string;
  role: string;
  language: string;
  image: string;
  context: string;
}

const QUOTES: LanguageQuote[] = [
  {
    author: "Ramdhari Singh Dinkar",
    role: "Rashtrakavi • Hindi Literature",
    language: "Hindi (हिंदी)",
    native: "मानव जब जोर लगाता है, पत्थर पानी बन जाता है।",
    quote: "When a human summons the courage of conviction, even cold stone softens into living water.",
    context: "On resilience and perseverance (Rashmirathi)",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop&q=80"
  },
  {
    author: "Rabindranath Tagore",
    role: "Nobel Laureate • Bengali Polymath",
    language: "Bengali (বাংলা)",
    native: "যদি তোর ডাক শুনে কেউ না আসে তবে একলা চলো রে।",
    quote: "If no one answers your call, walk on alone; let your words illuminate the darkest path.",
    context: "On courage and independent thought",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80"
  },
  {
    author: "Thiruvalluvar",
    role: "Classical Tamil Philosopher • Tirukkural",
    language: "Tamil (தமிழ்)",
    native: "கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக.",
    quote: "Learn thoroughly that which is worth learning; then let your actions steadfastly mirror your learning.",
    context: "On authentic knowledge and wisdom",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80"
  },
  {
    author: "Mahakavi Subramania Bharati",
    role: "Patriot & Modern Tamil Pioneer",
    language: "Tamil (தமிழ்)",
    native: "யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்.",
    quote: "Of all the languages we have traversed, none sings as sweetly to the soul as the tongue of Tamil.",
    context: "On pride in the melody of mother tongues",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80"
  },
  {
    author: "Bankim Chandra Chatterjee",
    role: "Novelist & Composer of Vande Mataram",
    language: "Bengali (বাংলা)",
    native: "বন্দে মাতরম্। সুজলাং সুফলাং মলয়জশীতলাম্।",
    quote: "Language is the sacred bond that weaves hearts together; through our voices, the motherland speaks.",
    context: "On cultural identity and literature",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80"
  },
  {
    author: "William Shakespeare",
    role: "The Bard of Avon • English Dramatist",
    language: "English",
    native: "Mend your speech a little, lest you may mar your fortunes.",
    quote: "Our words give wings to thought; speak with grace and care, for speech is the mirror of character.",
    context: "On eloquence and the power of expression",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80"
  },
  {
    author: "Mirza Ghalib",
    role: "Legendary Urdu & Persian Poet",
    language: "Urdu (اردو)",
    native: "हैं और भी दुनिया में सुख़नवर बहुत अच्छे, कहते हैं कि ग़ालिब का है अंदाज़-ए-बयां और।",
    quote: "There are countless gifted masters of verse in the world, yet they say Ghalib possesses an expression all his own.",
    context: "On uniqueness of voice and expression",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80"
  }
];

export default function NotFound() {
  const { darkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!isRotating) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isRotating]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  const handleShuffle = () => {
    setCurrentIndex((prev) => {
      let next = Math.floor(Math.random() * QUOTES.length);
      if (next === prev) next = (prev + 1) % QUOTES.length;
      return next;
    });
  };

  const activeQuote = QUOTES[currentIndex];

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-500 ${
        darkMode ? "bg-[#1a1410] text-[#f5ebe0]" : "bg-[#FFF9F5] text-[#2d2218]"
      }`}
    >
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div className="max-w-4xl w-full mx-auto text-center space-y-10">
          {/* 404 Hero Banner */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>404 • Page Wandered Off</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                खो गए? Lost your way?
              </span>
            </h1>
            <p
              className={`max-w-xl mx-auto text-sm md:text-base ${
                darkMode ? "text-orange-200/70" : "text-gray-600"
              }`}
            >
              The page you are looking for has taken a detour. While our language
              bridge reconnects, here is timeless wisdom from master wordsmiths.
            </p>
          </div>

          {/* Rotating Quote Card */}
          <div
            className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 shadow-lg text-left ${
              darkMode
                ? "bg-[#241c16]/80 border-orange-900/40 shadow-black/30"
                : "bg-white border-orange-200/70 shadow-orange-900/5"
            }`}
            onMouseEnter={() => setIsRotating(false)}
            onMouseLeave={() => setIsRotating(true)}
          >
            {/* Top Bar of Card */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-orange-500/10">
              <div className="flex items-center gap-2">
                <QuoteIcon className="w-5 h-5 text-orange-500" />
                <span className="text-xs uppercase tracking-wider font-semibold text-orange-600 dark:text-orange-400">
                  {activeQuote.language}
                </span>
                <span
                  className={`text-xs ${
                    darkMode ? "text-orange-200/50" : "text-gray-400"
                  }`}
                >
                  • {activeQuote.context}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleShuffle}
                  title="Random Quote"
                  className={`p-2 rounded-lg border transition-colors ${
                    darkMode
                      ? "border-orange-800/40 text-orange-300 hover:bg-orange-900/20"
                      : "border-orange-200 text-orange-700 hover:bg-orange-50"
                  }`}
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePrev}
                  title="Previous Quote"
                  className={`p-2 rounded-lg border transition-colors ${
                    darkMode
                      ? "border-orange-800/40 text-orange-300 hover:bg-orange-900/20"
                      : "border-orange-200 text-orange-700 hover:bg-orange-50"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  title="Next Quote"
                  className={`p-2 rounded-lg border transition-colors ${
                    darkMode
                      ? "border-orange-800/40 text-orange-300 hover:bg-orange-900/20"
                      : "border-orange-200 text-orange-700 hover:bg-orange-50"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Native Script Quote */}
            <p
              className={`text-lg md:text-xl font-medium leading-relaxed mb-3 ${
                darkMode ? "text-orange-100" : "text-gray-900"
              }`}
            >
              &ldquo;{activeQuote.native}&rdquo;
            </p>

            {/* English Meaning / Literary Reflection */}
            <p
              className={`text-sm md:text-base italic leading-relaxed mb-6 ${
                darkMode ? "text-orange-200/80" : "text-gray-600"
              }`}
            >
              &mdash; &apos;{activeQuote.quote}&apos;
            </p>

            {/* Author Profile */}
            <div className="flex items-center justify-between pt-4 border-t border-orange-500/10">
              <div className="flex items-center gap-3">
                <img
                  src={activeQuote.image}
                  alt={activeQuote.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-500/40"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                    {activeQuote.author}
                  </h3>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-orange-200/60" : "text-gray-500"
                    }`}
                  >
                    {activeQuote.role}
                  </p>
                </div>
              </div>

              {/* Progress Indicator Dots */}
              <div className="hidden sm:flex items-center gap-1.5">
                {QUOTES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentIndex
                        ? "w-6 bg-orange-500"
                        : darkMode
                        ? "w-1.5 bg-orange-900/50 hover:bg-orange-700/50"
                        : "w-1.5 bg-orange-200 hover:bg-orange-300"
                    }`}
                    title={`Quote ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Helpful Navigation Actions */}
          <div className="space-y-4">
            <p
              className={`text-xs uppercase tracking-wider font-semibold ${
                darkMode ? "text-orange-200/50" : "text-gray-400"
              }`}
            >
              Popular Destinations on VartaLang
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm bg-linear-to-r from-orange-500 to-red-600 text-white shadow-md hover:from-orange-600 hover:to-red-700 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </Link>

              <Link
                href="/learn"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  darkMode
                    ? "bg-[#241c16] border-orange-800/40 text-orange-200 hover:bg-orange-900/20"
                    : "bg-white border-orange-200 text-gray-700 hover:bg-orange-50"
                }`}
              >
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span>Explore Languages</span>
              </Link>

              <Link
                href="/radio"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  darkMode
                    ? "bg-[#241c16] border-orange-800/40 text-orange-200 hover:bg-orange-900/20"
                    : "bg-white border-orange-200 text-gray-700 hover:bg-orange-50"
                }`}
              >
                <Radio className="w-4 h-4 text-orange-500" />
                <span>Gauraiyya Radio</span>
              </Link>

              <Link
                href="/jobs"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
                  darkMode
                    ? "bg-[#241c16] border-orange-800/40 text-orange-200 hover:bg-orange-900/20"
                    : "bg-white border-orange-200 text-gray-700 hover:bg-orange-50"
                }`}
              >
                <Briefcase className="w-4 h-4 text-orange-500" />
                <span>Language Jobs</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
