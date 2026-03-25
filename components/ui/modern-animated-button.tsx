export default function ModernAnimatedButtonVariant1() {
  return (
    <>
      <style>
        {`
        /* Define custom properties with @property */
        @property --r2 {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        @property --x {
          syntax: "<length>";
          inherits: false;
          initial-value: 20px;
        }

        /* Animated button styles */

        .rotation-animation {
          animation: rotationKeyFrames -.64s linear 3s infinite, translationKeyFrames -.64s linear 3s infinite
        }

        /* Keyframes for rotation */
        @keyframes rotationKeyFrames {
          0% {
            --r2: 0deg;
          }
          32.8228% {
            --r2: 0deg;
          }
          50% {
            --r2: 180deg;
          }
          82.8228% {
            --r2: 180deg;
          }
          100% {
            --r2: 360deg;
          }
        }

        /* Keyframes for x movement */
        @keyframes translationKeyFrames {
          0% {
            --x: 20px;
          }
          32.8228% {
            --x: 220px;
          }
          50% {
            --x: 220px;
          }
          82.8228% {
            --x: 20px;
          }
          100% {
            --x: 20px;
          }
        }
      `}
      </style>
      <button
        className="rotation-animation conic-gradient transform-gpu cursor-pointer rounded-full p-[2px] shadow-[0_0_20px_0_rgba(241,156,121,0.3)] transition-all hover:shadow-[0_0_20px_3px_rgba(241,156,121,0.4)]"
        style={{
          background:
            "conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 21px, transparent 0, #F19C79 20%, transparent 25%), #2d3a1f",
        }}
        type="button"
      >
        <span className="pointer-events-none flex h-10 flex-nowrap items-center gap-3 rounded-full bg-[#2d3a1f] px-5 py-2 font-medium text-[#F6F4D2] text-base tracking-tighter">
          <span className="font-pixel-square">Contact Us</span>
        </span>
      </button>
    </>
  );
}
