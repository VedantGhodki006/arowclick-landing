"use client";

import { Dock, DockCard, DockCardInner, DockDivider } from "@/components/ui/dock";
import CanvasFractalGrid from "@/components/ui/canvas-fractal-grid";
import { PixelHeading } from "@/components/ui/pixel-heading-character";
import { TextureButton } from "@/components/ui/texture-button";
import { PixelParagraph } from "@/components/ui/pixel-paragraph-words";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans bg-white dark:bg-neutral-950 overflow-hidden selection:bg-neutral-200 dark:selection:bg-neutral-800">
      {/* Background Grid & Masks */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Interactive Fractal Grid Background */}
        <CanvasFractalGrid
          dotSize={2}
          dotSpacing={24}
          dotOpacity={0.20}
          waveIntensity={40}
          waveRadius={250}
          dotColor="rgba(13, 1, 81, 1)"
          glowColor="rgba(100, 100, 100, 1)"
          enableNoise={true}
          noiseOpacity={0.03}
        />
        
      
      </div>

      {/* Dock Component */}
      <Dock>
        <DockCard id="1">
          <DockCardInner label="Home" id="1" />
        </DockCard>
        <DockCard id="2">
          <DockCardInner label="About" id="2" />
        </DockCard>
        <DockCard id="3">
          <DockCardInner label="Industry" id="3" />
        </DockCard>
        <DockCard id="4">
          <DockCardInner label="Products" id="4" />
        </DockCard>
      </Dock>

      {/* Top Left Logo */}
      <div className="fixed top-6 left-8 z-50 pointer-events-auto">
        <span className="text-xl font-bold tracking-tight text-white">arowclick</span>
      </div>

      {/* Top Right Call to Action */}
      <div className="fixed top-6 right-8 z-50 group pointer-events-auto">
        {/* <TextureButton variant="glassyBlue" size="default" className="shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.6)] transition-all duration-300 ease-out hover:-translate-y-0.5">
          <PixelParagraph text="Request a Demo" pixelWords={["Request a Demo"]} />
        </TextureButton> */}
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center z-10 w-full pointer-events-auto">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-4xl mx-auto flex flex-col items-center cursor-pointer"
        >
          <PixelHeading
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black dark:text-white"
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
              className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-medium tracking-tight"
              text="Automate the web with human-level precision. Built for speed, engineered for scale."
              pixelWords={"Automate the web with human-level precision. Built for speed, engineered for scale.".split(" ")}
            />
            <PixelParagraph 
              as="p"
              className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-medium tracking-tight"
              text="Intelligence at every click. Revolutionizing how you automate the modern web."
              pixelWords={"Intelligence at every click. Revolutionizing how you automate the modern web.".split(" ")}
            />
          </motion.div>

          {/* Hero CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 group"
          >
           
          </motion.div>
        </motion.div>
      </main>
    </div> 
  );
}
