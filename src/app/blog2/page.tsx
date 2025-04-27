'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Blog2() {
    const router = useRouter();

    return (
        <div className="p-8 flex flex-col items-center w-full h-screen relative">
            <motion.button
                onClick={() => router.back()}
                className="absolute top-4 left-4 px-4 py-2  rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                ← Back
            </motion.button>
            <div className="flex flex-col items-center gap-2">
                <motion.span
                    layoutId="blog2-part1"
                    className="text-6xl font-bold"
                    transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                >
                    REACT HOOKS
                </motion.span>
                <motion.span
                    layoutId="blog2-part2"
                    className="text-6xl font-bold"
                    transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                >
                    BEST PRACTICES
                </motion.span>
            </div>

            <p className="mt-8 text-xl">This is the content of Blog 2.</p>
        </div>
    );
} 