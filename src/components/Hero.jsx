import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useAuth } from "../contexts/AuthContext";

const Hero = () => {
  const { isLoggedIn, user, isAdmin } = useAuth();

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          {/* Welcome message for logged-in users */}
          {isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-4'
            >
              <p className='text-[#915EFF] text-[18px] font-medium'>
                Welcome back, {user?.name || user?.email?.split('@')[0]}!
                {isAdmin && " (Admin)"}
              </p>
            </motion.div>
          )}
          
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Lhyann</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create original characters with <br className='sm:block hidden' />
            rich stories and captivating visuals
          </p>
          
          {/* Additional message for users */}
          {isLoggedIn && user?.type === "user" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className='mt-4 text-secondary text-[16px]'
            >
              Your credentials are saved for future commission requests.
            </motion.p>
          )}
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
