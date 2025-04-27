'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Blog1() {
    const router = useRouter();

    return (
        <div className="p-8 flex flex-col items-center w-full h-screen  relative">
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
                    layoutId="blog1-part1"
                    className="text-6xl font-bold"
                    transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                >
                    New TypeScript
                </motion.span>
                <motion.span
                    layoutId="blog1-part2"
                    className="text-6xl font-bold"
                    transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                >
                    Enum Syntax
                </motion.span>
            </div>

            <div className="mt-8 max-w-2xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl"
                >
                    TypeScript 5.0 introduced a new, more concise syntax for enums that makes them more powerful and easier to use. This update brings significant improvements to how we can define and work with enumerated types in TypeScript. The new syntax allows for more flexible enum definitions, including computed values and better type inference. This means you can now create more complex enums while maintaining type safety and getting better IDE support. One of the most exciting features is the ability to use const assertions with enums, which can lead to better performance and more precise type checking. This is particularly useful in large-scale applications where type safety and performance are crucial.
                </motion.p>
            </div>
        </div>
    );
}
