
import { motion } from "framer-motion";
import  star from "../assets/chi6star.png"

function Star() {
  return (
    <motion.div className="logo"
    animate={{ opacity: 1, scale: .8, rotate: 360 }}
    transition={{
        duration: 3,
        delay: 0.3,
    }}
    initial={{ opacity: 0, scale: .1 }}
    whileHover={{ scale: .5 }}
    >
<img src={star} alt="Jerry Vrabel Development" />
    </motion.div>
  ); 
}

export default Star;
