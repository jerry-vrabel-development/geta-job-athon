import "../App.css";
import { motion } from "framer-motion";

const iframeUrl = 'https://ko-fi.com/getajobathon/?hidefeed=true&widget=true&embed=true&preview=true'

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

function Home() {
  return (
    <div>
      <motion.div
        className="home component"
        variants={routeVariants}
        initial="initial"
        animate="final"
      >
        <motion.h1 variants={childVariants} initial="initial" animate="final">Home Component</motion.h1>
      </motion.div>
      <section>
        <div className="card">
          <p className="">
            Who
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="">
            What
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="">
            Where
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="">
            Why
          </p>
        </div>
      </section>

      <section>
        <div className="card">
          <p className="">
            Donate
          </p>
          <iframe
            id='kofiframe'
            src={iframeUrl}
            height='512'
            title='get a job a thon'>
          </iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
