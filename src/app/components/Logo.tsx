import { motion } from "framer-motion";

interface LogoProps {
  size:
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3l"
    | "text-4xl"
    | "text-5xl";
  theme: "light" | "dark";
}

export default function Logo({ size, theme }: LogoProps) {
  const containerDiv =
    size +
    " w-fit m-1 p-1 flex items-center rounded-lg transition-all duration-300 cursor-pointer " +
    (theme === "dark"
      ? "border-solid border-2 border-white bg-black"
      : "border-solid border-2 border-black bg-white");

  const devSpan =
    "px-2 py-1 font-bold transition-all duration-300 " +
    (theme === "dark" ? "bg-white text-black" : "bg-black text-white");

  const lenSpan =
    "px-2 py-1 font-bold transition-all duration-300 " +
    (theme === "dark" ? "bg-black text-white" : "bg-white text-black");

  return (
    <motion.div
      layout
      className={containerDiv}
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      <motion.span
        layout
        className={devSpan}
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        DEV
      </motion.span>
      <motion.span
        layout
        className={lenSpan}
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        LENS
      </motion.span>
    </motion.div>
  );
}
