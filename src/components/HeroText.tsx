import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";

const HeroText = () => {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-2vw <md:text-24px font-bold mb-30px pt-50px"
      >
        <span>Restore • Nurture • Blossom</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight"
      >
        Welcome to Flower Power Spa, where the harmonious dance of strength and
        gentleness awaits you. Step into a world of tranquility and
        rejuvenation, where the blooming essence of nature intertwines with the
        power of inner strength. At Flower Power, we believe in the delicate
        balance between resilience and tenderness, as we curate an oasis of
        relaxation that nurtures both your body and soul. Indulge in our array
        of invigorating treatments, thoughtfully designed to revitalize your
        spirit, while our expert therapists cater to your every need with the
        utmost care. Embrace the fusion of power and grace at Flower Power Spa,
        and embark on a journey of wellness like no other. Discover the true
        meaning of harmony as you immerse yourself in an experience that
        celebrates the beauty of both strength and gentleness. Welcome to a
        sanctuary where you bloom with vitality, and your inner power finds its
        peaceful center.
      </motion.span>
    </motion.div>
  );
};

export default HeroText;
