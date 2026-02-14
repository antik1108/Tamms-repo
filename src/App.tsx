
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Heart, Stars as StarsIcon, ChevronDown, Sparkles } from 'lucide-react';
import StarBackground from './components/StarBackground';
import StorySection from './components/StorySection';
import Lenis from 'lenis';

// Image URL from the prompt's provided context
// Image URL from the prompt's provided context
const MAIN_IMAGE = "/my_tammu.png";

const SECOND_IMAGE = "/second.png";
const THIRD_IMAGE = "/third.png";
const FOURTH_IMAGE = "/fourth.png";
const FIFTH_IMAGE = "/fifth.png";
const SIXTH_IMAGE = "/sixth.png";
const SEVENTH_IMAGE = "/seventh.png";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis();

    // Ensure page starts at top
    window.scrollTo(0, 0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black text-white selection:bg-stone-500/30 font-serif overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />

      {/* Persistent Background */}
      <StarBackground />

      {/* Main Content Sections */}
      <div className="relative z-10">

        {/* Page 1 */}
        <StorySection id="p1" center>
          <motion.div
            initial={{ opacity: 0, x: 100, y: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-12 px-6"
          >
            <div className="relative group">
              {/* Removed red glow effect */}
              <img
                src={MAIN_IMAGE}
                alt="Tamanna"
                className="relative w-72 md:w-[28rem] h-auto rounded-2xl grayscale brightness-90 shadow-2xl transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-4 text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-relaxed text-white drop-shadow-lg">
                Every single day,<br />
                I still can’t believe how lucky I am…
              </p>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-12 flex flex-col items-center gap-2 text-slate-500"
            >
              <span className="text-xs uppercase tracking-[0.3em]">Scroll Down</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </StorySection>

        {/* Page 2 - Left Image */}
        <StorySection id="p2" center>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={SECOND_IMAGE}
                alt="Second Memory"
                className="w-80 md:w-[30rem] h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
              {/* Desktop Star Position (Top) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="hidden md:flex justify-start gap-4 text-white/60"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <StarsIcon className="w-8 h-8" />
                </motion.div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-serif italic text-white">Look around you…</h2>
              <p className="text-xl md:text-2xl font-serif text-stone-300 leading-relaxed">
                all these stars, quietly existing beside these words.<br />
                <span className="text-white italic">Endless, distant, and beautiful —</span><br />
                just like the universe holding this moment for us.
              </p>

              {/* Mobile Star Position (Bottom) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex md:hidden justify-center gap-4 text-white/60 pt-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <StarsIcon className="w-8 h-8" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </StorySection>

        {/* Page 3 - Right Image */}
        <StorySection id="p3" center>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl px-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={THIRD_IMAGE}
                alt="Third Memory"
                className="w-52 md:w-80 h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
              <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white">
                Some of these stars feel close,<br />
                some feel impossibly far away.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                className="h-[1px] bg-white mx-auto md:mx-0"
              />
              <p className="text-xl md:text-2xl font-serif text-stone-300">
                And yet, we see them together,<br />
                glowing in the same sky.
              </p>
            </div>
          </div>
        </StorySection>

        {/* Page 4 - Left Image */}
        <StorySection id="p4" center className="bg-gradient-to-b from-transparent via-stone-900/10 to-transparent">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={FOURTH_IMAGE}
                alt="Fourth Memory"
                className="w-full md:w-[30rem] h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-10">
              <p className="text-lg uppercase tracking-[0.4em] text-white/50 font-serif">Distance</p>
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic">
                "Being far from you has taught me something strange —<br />
                distance doesn’t weaken love,<br />
                it proves how strong it has to be<br />
                just to survive."
              </p>
              <Sparkles className="w-6 h-6 text-white mx-auto md:mx-0 opacity-50" />
            </div>
          </div>
        </StorySection>

        {/* Page 5 - Right Image */}
        <StorySection id="p5" center>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={FIFTH_IMAGE}
                alt="Fifth Memory"
                className="w-full md:w-[30rem] h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
              <p className="text-xl md:text-2xl font-serif text-stone-300">
                Even when miles stand between us,<br />
                my heart somehow always knows where yours is.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50" />
                <Heart className="w-4 h-4 text-white" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50" />
              </div>
              <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                Across screens, across nights, across silence —<br />
                I still feel you with me.
              </p>
            </div>
          </div>
        </StorySection>

        {/* Page 6 - Left Image */}
        <StorySection id="p6" center>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={SIXTH_IMAGE}
                alt="Sixth Memory"
                className="w-64 md:w-80 h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-12">
              <div className="space-y-4">
                <div className="flex flex-col gap-6">
                  <span className="text-2xl font-light opacity-60">Out of all these stars,</span>
                  <span className="text-2xl font-light opacity-80">across all this space,</span>
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl md:text-5xl font-serif italic text-white"
                  >
                    the universe still chose<br />
                    you and me.
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </StorySection>

        {/* Page 7 - Right Image */}
        <StorySection id="p7" center>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl px-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={SEVENTH_IMAGE}
                alt="Seventh Memory"
                className="w-72 md:w-[30rem] h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
              <h1 className="text-5xl md:text-7xl font-serif italic text-white drop-shadow-sm">Tamm,</h1>
              <p className="text-2xl md:text-3xl font-serif text-stone-200 leading-relaxed">
                loving you from afar only made me certain —<br />
                <span className="font-serif italic text-white underline decoration-white/30 underline-offset-8">no distance could ever make me love you less.</span>
              </p>
            </div>
          </div>
        </StorySection>

        {/* Final Page */}
        <StorySection id="final" center className="pb-32">
          <div className="max-w-2xl px-8 text-center space-y-16">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-serif text-stone-300 leading-relaxed">
                I don’t just love you in moments,<br />
                I love you in waiting, in missing, in hoping.
              </p>
              <p className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                Until distance turns into a memory<br />
                and we turn into forever.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 pt-10"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-12" />
              <h3 className="text-2xl md:text-4xl font-serif italic text-white whitespace-nowrap">Happy Valentine’s Day <span className="not-italic">🤍</span></h3>
              <p className="text-lg text-stone-400 tracking-widest uppercase font-light">Always yours.</p>
            </motion.div>
          </div>
        </StorySection>

      </div>
    </div>
  );
};

export default App;
