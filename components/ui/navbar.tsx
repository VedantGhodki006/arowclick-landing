"use client";

import { Dock, DockCard, DockCardInner } from "@/components/ui/dock";
import ModernAnimatedButtonVariant1 from "@/components/ui/modern-animated-button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-0 right-0 z-50 flex items-center justify-between px-8 pointer-events-auto">
      {/* Logo Container */}
      <div className="flex-1 flex justify-start">
        <div className="flex-shrink-0 w-12">
          <Image src="/Logo.png" alt="Arowclick Logo" width={48} height={48} className="rounded-xl" />
        </div>
      </div>

      {/* Centered Dock */}
      <div className="flex-none flex justify-center items-center">
        <Dock className="relative top-0 mt-0 mb-0">
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
      </div>

      {/* CTA Button Container */}
      <div className="flex-1 flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hover:scale-105 transition-transform duration-300 flex-shrink-0"
        >
          <ModernAnimatedButtonVariant1 />
        </motion.div>
      </div>
    </nav>
  );
}
