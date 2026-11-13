// app/not-found.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { useDarkMode } from "@/lib/DarkModeContext";

interface LanguageQuote {
  native: string;
  quote: string;
  author: string;
  detail: string;
  language: string;
}

const QUOTES: LanguageQuote[] = [
  {
    native: "मानव जब जोर लगाता है, पत्थर पानी बन जाता है।",
    quote: "When man summons the courage of conviction, even stone softens into water.",
    author: "Ramdhari Singh Dinkar",
    detail: "Rashtrakavi • Hindi",
    language: "Hindi"
  },
  {
    native: "যদি তোর ডাক শুনে কেউ না আসে তবে একলা চলো রে।",
    quote: "If no one answers your call, walk on alone.",
    author: "Rabindranath Tagore",
    detail: "Nobel Laureate • Bengali",
    language: "Bengali"
  },
  {
    native: "கற்க கசடறக் கற்பவை கற்றபின் நிற்க அதற்குத் தக.",
    quote: "Learn thoroughly that which is worth learning, then let your life reflect that learning.",
    author: "Thiruvalluvar",
    detail: "Tirukkural • Classical Tamil",
    language: "Tamil"
  },
  {
    native: "யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்.",
    quote: "Of all the languages we have known, none is as sweet as Tamil.",
    author: "Mahakavi Subramania Bharati",
    detail: "Mahakavi • Modern Tamil",
    language: "Tamil"
  },
  {
    native: "বন্দে মাতরম্। সুজলাং সুফলাং মলয়জশীতলাম্।",
    quote: "In the melody of our mother tongues lives the soul of our heritage.",
    author: "Bankim Chandra Chatterjee",
    detail: "Anandamath • Bengali",
    language: "Bengali"
  },
  {
    native: "Mend your speech a little, lest you may mar your fortunes.",
    quote: "Speech is the mirror of the soul; speak with grace, for our words shape our reality.",
    author: "William Shakespeare",
    detail: "King Lear • English",
    language: "English"
  },
  {
    native: "हैं और भी दुनिया में सुख़नवर बहुत अच्छे, कहते हैं कि ग़ालिब का है अंदाज़-ए-बयां और।",
    quote: "There are countless gifted wordsmiths in the world, yet they say Ghalib&apos;s expression stands apart.",
    author: "Mirza Ghalib",
    detail: "Diwan-e-Ghalib • Urdu",
    language: "Urdu"
  }
];

export default function NotFound() {
  const { darkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

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

  const active = QUOTES[currentIndex];

  return (
    <div
      className={`min-h-screen flex flex-col justify-between px-6 py-8 transition-colors duration-500 ${
        darkMode ? "bg-[#14100c] text-[#f5ebe0]" : "bg-[#fdfbf9] text-[#241a12]"
      }`}
    >
      {/* Top Header with clean Go Back button */}
      <header className="max-w-3xl w-full mx-auto flex items-center justify-between">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            darkMode
              ? "text-orange-300 hover:text-orange-200"
              : "text-orange-700 hover:text-orange-900"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go back</span>
        </Link>

        <span
          className={`text-xs font-mono uppercase tracking-widest ${
            darkMode ? "text-orange-400/40" : "text-orange-900/30"
          }`}
        >
          404 &bull; Page Not Found
        </span>
      </header>

      {/* Main Minimalist Quote Display */}
      <main
        className="max-w-2xl w-full mx-auto my-auto py-12 text-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Language Badge */}
        <div className="mb-6">
          <span
            className={`text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full ${
              darkMode
                ? "bg-orange-500/10 text-orange-400"
                : "bg-orange-100 text-orange-800"
            }`}
          >
            {active.language}
          </span>
        </div>

        {/* Native Script Quote */}
        <p
          className={`text-2xl md:text-3xl lg:text-4xl font-serif font-normal leading-relaxed tracking-wide mb-6 ${
            darkMode ? "text-[#f8f1ea]" : "text-[#1c140d]"
          }`}
        >
          &ldquo;{active.native}&rdquo;
        </p>

        {/* English Reflection */}
        <p
          className={`text-base md:text-lg italic leading-relaxed max-w-xl mx-auto mb-8 font-light ${
            darkMode ? "text-orange-200/70" : "text-gray-600"
          }`}
        >
          &mdash; {active.quote}
        </p>

        {/* Author Attribution */}
        <div className="space-y-1 mb-10">
          <h2
            className={`text-base font-semibold tracking-wide ${
              darkMode ? "text-orange-300" : "text-orange-900"
            }`}
          >
            {active.author}
          </h2>
          <p
            className={`text-xs uppercase tracking-wider ${
              darkMode ? "text-orange-200/50" : "text-gray-400"
            }`}
          >
            {active.detail}
          </p>
        </div>

        {/* Subtle Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            title="Previous"
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "hover:bg-white/5 text-orange-200/50 hover:text-orange-200"
                : "hover:bg-black/5 text-gray-400 hover:text-gray-800"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleShuffle}
            title="Random Quote"
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "hover:bg-white/5 text-orange-200/50 hover:text-orange-200"
                : "hover:bg-black/5 text-gray-400 hover:text-gray-800"
            }`}
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            title="Next"
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "hover:bg-white/5 text-orange-200/50 hover:text-orange-200"
                : "hover:bg-black/5 text-gray-400 hover:text-gray-800"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Bottom Minimal Dots */}
      <footer className="max-w-3xl w-full mx-auto flex items-center justify-center gap-1.5 pb-2">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-6 bg-orange-500"
                : darkMode
                ? "w-1.5 bg-white/10 hover:bg-white/30"
                : "w-1.5 bg-black/10 hover:bg-black/30"
            }`}
            title={`Quote ${i + 1}`}
          />
        ))}
      </footer>
    </div>
  );
}
