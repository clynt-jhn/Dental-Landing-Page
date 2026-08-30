import { motion } from 'framer-motion'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative h-[560px] w-full overflow-hidden md:h-[600px] lg:h-screen">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://framerusercontent.com/assets/0vt8Hcr8IW8bYIct3dtgjR1vI.mp4"
        poster="https://framerusercontent.com/images/w3X7Oz0OMUgxJYpLXLq9HcUzK8.jpeg?width=3840&height=2160"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative flex h-full items-end justify-center px-4 pb-10 pt-[92px] md:items-center md:px-7 md:pt-[100px] md:pb-0 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full max-w-[1120px] flex-col items-start gap-5 md:gap-7"
        >
          <h1 className="max-w-[340px] text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-white md:max-w-[620px] md:text-[52px] lg:max-w-[700px] lg:text-[64px]">
            Brightening <span className="font-serif italic font-medium">smiles</span> in Midtown
            East Manhattan
          </h1>
          <p className="max-w-[300px] text-lg font-semibold leading-[1.62] tracking-[-0.005em] text-white/[0.94] md:max-w-[400px] lg:max-w-[430px] lg:text-[19px]">
            Your health and your time are valuable.
          </p>
          <div className="flex w-full flex-wrap items-center gap-[18px] pt-2">
            <Button to="/contact" variant="primary">
              Request an appointment
            </Button>
            <Button href="tel:+12128380842" variant="outline">
              (212) 838-0842
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
