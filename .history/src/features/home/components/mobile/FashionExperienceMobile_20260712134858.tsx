// features/home/components/FashionExperienceMobile.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ExperienceData,
  ExperienceMoment,
} from "@/features/home/data/fashionExperienceData";

export default function FashionExperienceMobile({
  data,
}: {
  data: ExperienceData;
}) {
  const [stack, setStack] = useState<ExperienceMoment[]>(data.moments);

  const handleSwipeAway = () => {
    setStack((prev) => {
      const updated = [...prev];
      const popped = updated.shift();
      if (popped) updated.push(popped); // Loops deck infinitely
      return updated;
    });
  };

  return (
    <section className="relative h-[100vh] w-full bg-background-secondary flex flex-col justify-between overflow-hidden px-5 py-12 md:hidden select-none">
      {/* Dynamic Native Application Mini Header Layout */}
      <div className="w-full pt-4">
        <span className="text-accent font-sans font-medium tracking-[0.2em] text-[10px] uppercase block mb-2">
          {data.tagline}
        </span>
        <h2 className="font-serif text-3xl text-text-primary font-bold tracking-tight leading-[1.15] max-w-xs">
          {data.headerTitle}
        </h2>
      </div>

      {/* Swipeable Active Stack Deck Sandbox Frame */}
      <div className="relative flex-1 w-full flex items-center justify-center my-6">
        <div className="relative w-full aspect-[4/5] max-h-[60vh]">
          <AnimatePresence mode="popLayout">
            {stack
              .slice(0, 2)
              .reverse()
              .map((moment, idx, currentArr) => {
                // The top card is always the last element rendered inside this sliced pair
                const isTopCard = idx === currentArr.length - 1;
                return (
                  <SwipeCard
                    key={moment.title}
                    moment={moment}
                    isTopCard={isTopCard}
                    onSwipe={handleSwipeAway}
                  />
                );
              })}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Gestural Visual Context Indicator Layout */}
      <div className="w-full pb-2 flex justify-between items-center">
        <p className="font-sans text-text-secondary text-xs font-light tracking-wide">
          Swipe Card Left / Right to Browse
        </p>
        <div className="flex gap-1.5">
          {data.moments.map((m, index) => {
            const isActive = stack[0].title === m.title;
            return (
              <motion.div
                key={index}
                animate={{
                  width: isActive ? 16 : 6,
                  backgroundColor: isActive
                    ? "#163B65"
                    : "rgba(22, 59, 101, 0.2)",
                }}
                className="h-1.5 rounded-full"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Individual Stack Element Frame Logic handles gestural touch physics constraints cleanly */
function SwipeCard({
  moment,
  isTopCard,
  onSwipe,
}: {
  moment: ExperienceMoment;
  isTopCard: boolean;
  onSwipe: () => void;
}) {
  const dragX = useMotionValue(0);
  const rotateValue = useTransform(dragX, [-200, 200], [-8, 8]);
  const opacityValue = useTransform(
    dragX,
    [-200, -150, 0, 150, 200],
    [0.5, 1, 1, 1, 0.5],
  );

  const handleDragEnd = (_: any, info: any) => {
    if (Math.abs(info.offset.x) > 120) {
      onSwipe();
    }
  };

  return (
    <motion.div
      style={{
        x: isTopCard ? dragX : 0,
        rotate: isTopCard ? rotateValue : 0,
        opacity: isTopCard ? opacityValue : 0.95,
        scale: isTopCard ? 1 : 0.96,
        y: isTopCard ? 0 : 10,
        zIndex: isTopCard ? 10 : 1,
      }}
      animate={
        !isTopCard
          ? { scale: 0.96, y: 10, opacity: 0.95 }
          : { scale: 1, y: 0, opacity: 1 }
      }
      exit={{
        x: dragX.get() > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3 },
      }}
      drag={isTopCard ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={isTopCard ? { scale: 0.99 } : {}}
      className="absolute inset-0 w-full h-full bg-background-main border border-border-main/5 shadow-xl flex flex-col justify-between p-4 cursor-grab active:cursor-grabbing origin-bottom"
    >
      {/* Immersive Photo Frame Fill */}
      <div className="relative w-full h-[70%] overflow-hidden bg-background-secondary">
        <Image
          src={moment.image}
          alt={moment.title}
          fill
          sizes="(max-w-768px) 90vw"
          priority={isTopCard}
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Editorial Content Frame Area */}
      <div className="pt-4 pb-2 flex-1 flex flex-col justify-center">
        <h3 className="font-serif text-xl text-text-primary font-bold leading-tight mb-1">
          {moment.title}
        </h3>
        <p className="font-sans text-text-secondary text-xs leading-relaxed line-clamp-2">
          {moment.subtitle}
        </p>
      </div>
    </motion.div>
  );
}
