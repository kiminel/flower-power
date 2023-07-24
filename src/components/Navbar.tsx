import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";

const Navbar = () => {
  return (
    <motion.div
      initial={{ height: "0px" }}
      animate={{ height: "85px" }}
      transition={{ delay: animationStart, duration: 0.5 }}
      className="w-full flex items-center justify-around top-0 z-100"
    >
      <img
        src="/logo-slogan.png"
        alt="Flower Power Spa Logo and Slogan"
        className="h-16 w-auto"
      />
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          delayChildren: animationStart + 0.5,
          duration: 0.5,
        }}
        className="flex gap-20px items-center <md:hidden"
      >
        <motion.a
          href="/"
          variants={reveal}
          className="cursor-pointer hover:bg-fill no-underline text-current"
        >
          Home
        </motion.a>
        <motion.a
          href="/"
          variants={reveal}
          className="cursor-pointer hover:bg-fill no-underline text-current"
        >
          Packages
        </motion.a>
        <motion.a
          href="/"
          variants={reveal}
          className="cursor-pointer hover:bg-fill no-underline text-current"
        >
          About
        </motion.a>
        <motion.a
          href="/"
          variants={reveal}
          className="cursor-pointer hover:bg-fill no-underline text-current"
        >
          Contact
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
