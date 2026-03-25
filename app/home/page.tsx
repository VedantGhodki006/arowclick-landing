"use client";

import Navbar from "@/components/ui/navbar";
import CanvasFractalGrid from "@/components/ui/canvas-fractal-grid";
import { PixelHeading } from "@/components/ui/pixel-heading-character";
import { TextureButton } from "@/components/ui/texture-button";
import { PixelParagraph } from "@/components/ui/pixel-paragraph-words";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import HoverVideoPlayer from "@/components/ui/hover-video-player";
import { WavyLine } from "@/components/ui/wavy-line";
import Threads from "@/components/Threads";
import ModernAnimatedButtonVariant1 from "@/components/ui/modern-animated-button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans bg-[#D2E574] overflow-x-clip selection:bg-[#F19C79] selection:text-[#2d3a1f]">
      {/* Background Grid & Masks */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Interactive Fractal Grid Background */}
        <CanvasFractalGrid
          dotSize={1}
          dotSpacing={12}
          dotOpacity={0.25}
          waveIntensity={200}
          waveRadius={200}
          dotColor="rgba(0, 0, 0, 1)"
          glowColor="rgba(0, 0, 0, 1)"
          enableNoise={true}
          noiseOpacity={0.03}
        />


      </div>

      {/* Navbar with Logo, Dock, and CTA */}
      <Navbar />

      {/* Wavy Line Separator */}
      <div className="absolute top-24 left-0 w-full z-40 pointer-events-auto">
        <WavyLine className="w-full opacity-40" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-32 md:pt-64 pb-32 px-6 text-center z-10 w-full pointer-events-auto relative">
        {/* Threads Background */}
        <div className="absolute top-[-150px] sm:top-[-50px] left-0 w-full h-[600px] sm:h-[800px] z-[-1] opacity-30 sm:opacity-40 pointer-events-auto overflow-hidden">
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} color={[0.35, 0.42, 0.29]} />
        </div>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-4xl mx-auto flex flex-col items-center cursor-pointer"
        >
          <PixelHeading
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#2d3a1f]"
            mode="wave"
            autoPlay={true}
            cycleInterval={600}
            staggerDelay={140}
          >
            Your Personal Automation Agent
          </PixelHeading>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-center gap-1.5 max-w-3xl"
          >
            <PixelParagraph
              as="p"
              className="text-lg md:text-xl text-[#5a6b4a] font-medium tracking-tight"
              text="Automate the web with human-level precision. Built for speed, engineered for scale."
              pixelWords={"Automate the web with human-level precision. Built for speed, engineered for scale.".split(" ")}
            />
            <PixelParagraph
              as="p"
              className="text-lg md:text-xl text-[#5a6b4a] font-medium tracking-tight"
              text="Intelligence at every click. Revolutionizing how you automate the modern web."
              pixelWords={"Intelligence at every click. Revolutionizing how you automate the modern web.".split(" ")}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 z-20 hover:scale-105 transition-transform duration-300"
          >
            <ModernAnimatedButtonVariant1 />
          </motion.div>

          {/* Hero Video Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-64 sm:mt-40 w-full max-w-5xl group relative"
          >
            <HoverVideoPlayer
              videoSrc="/video.mp4"
              playOnScroll={true}
              className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CBDFBD] transition-all duration-700 ease-out scale-[0.5] data-[active=true]:scale-150"
              enableControls={true}
              loop={true}
              muted={true}
            />
          </motion.div>
        </motion.div>
      </main>
    </div> 
  );
}
