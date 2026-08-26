"use client";
import * as React from "react";

import {
	motion,
	useMotionTemplate,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";

interface iISmoothScrollHeroProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight: number;
	/**
	 * Background image URL for desktop view
	 * @default "https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
	 */
	desktopImage: string;
	/**
	 * Background image URL for mobile view
	 * @default "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	 */
	mobileImage: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage: number;
	/**
	 * Opacity of the background image (0-1)
	 * @default 1
	 */
	imageOpacity?: number;
}

type iISmoothScrollHeroBackgroundProps = iISmoothScrollHeroProps;

const SmoothScrollHeroBackground: React.FC<
	iISmoothScrollHeroBackgroundProps
> = ({
	scrollHeight,
	desktopImage,
	mobileImage,
	initialClipPercentage,
	finalClipPercentage,
	imageOpacity = 1,
}) => {
	const {scrollY} = useScroll();
	const prefersReducedMotion = useReducedMotion();

	// Smooths out the raw, 1:1-with-scroll motion so the reveal glides
	// instead of tracking the scrollbar exactly. Skipped for users who
	// prefer reduced motion, since a spring adds extra, ongoing movement.
	const smoothScrollY = useSpring(scrollY, {
		stiffness: 90,
		damping: 25,
		mass: 0.5,
	});
	const progress = prefersReducedMotion ? scrollY : smoothScrollY;

	const clipStart = useTransform(
		progress,
		[0, scrollHeight],
		[initialClipPercentage, 0],
	);
	const clipEnd = useTransform(
		progress,
		[0, scrollHeight],
		[finalClipPercentage, 100],
	);

	const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

	const backgroundSize = useTransform(
		progress,
		[0, scrollHeight + 500],
		["170%", "100%"],
	);

	return (
		<motion.div
			className="sticky top-0 h-screen w-full bg-white"
			style={{
				clipPath,
				willChange: "transform, opacity",
			}}
		>
			{/* Mobile background */}
			<motion.div
				className="absolute inset-0 md:hidden"
				style={{
					backgroundImage: `url(${mobileImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					opacity: imageOpacity,
				}}
			/>
			{/* Desktop background */}
			<motion.div
				className="absolute inset-0 hidden md:block"
				style={{
					backgroundImage: `url(${desktopImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					opacity: imageOpacity,
				}}
			/>
		</motion.div>
	);
};

/**
 * A smooth scroll hero component with parallax background effect
 * @param props - Component props
 * @returns React component
 */
 const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
	scrollHeight = 1500,
	desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
	mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	initialClipPercentage = 25,
	finalClipPercentage = 75,
	imageOpacity = 1,
}) => {
	return (
		<div
			style={{height: `calc(${scrollHeight}px + 100vh)`}}
			className="relative w-full"
		>
			<SmoothScrollHeroBackground
				scrollHeight={scrollHeight}
				desktopImage={desktopImage}
				mobileImage={mobileImage}
				imageOpacity={imageOpacity}
				initialClipPercentage={initialClipPercentage}
				finalClipPercentage={finalClipPercentage}
			/>
		</div>
	);
};
export default SmoothScrollHero;
