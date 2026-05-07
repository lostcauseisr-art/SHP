"use client";

import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  italic,
  lede,
  videoSrc,
  videoPoster,
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  lede?: string;
  videoSrc?: string;
  videoPoster?: string;
}) {
  const hasVideo = Boolean(videoSrc);

  const textBlock = (
    <div>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold"
        >
          <span className="w-6 h-px bg-gold" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`${eyebrow ? "mt-5" : ""} font-display font-light text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.02em] text-navy max-w-[20ch]`}
      >
        {title}
        {italic && <em className="text-gold-deep"> {italic}</em>}
      </motion.h1>
      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[1.05rem] lg:text-[1.15rem] leading-[1.65] text-ink max-w-[60ch]"
        >
          {lede}
        </motion.p>
      )}
    </div>
  );

  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20vh] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(201,162,77,.13) 0%, rgba(248,246,241,.55) 30%, rgba(255,255,255,0) 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        {hasVideo ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-12 lg:gap-20 items-center">
            {textBlock}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px]"
            >
              {/* Marco dorado externo */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[20px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,162,77,0.55) 0%, rgba(230,207,142,0.25) 35%, rgba(168,128,52,0.55) 100%)",
                  boxShadow:
                    "0 40px 90px -20px rgba(20,30,60,0.35), 0 0 0 1px rgba(201,162,77,0.25), 0 0 60px -10px rgba(201,162,77,0.4)",
                }}
              />
              <div
                className="relative aspect-[9/16] w-full overflow-hidden rounded-[14px] bg-navy"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(201,162,77,0.55), inset 0 0 0 4px rgba(248,246,241,0.95), inset 0 0 0 5px rgba(201,162,77,0.45)",
                }}
              >
                <video
                  src={videoSrc}
                  poster={videoPoster}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        ) : (
          textBlock
        )}
      </div>
    </section>
  );
}
