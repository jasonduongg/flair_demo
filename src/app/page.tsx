'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogList() {
  return (
    <div className="p-8 bg-red-100 h-[200vh]">
      <h1 className="text-5xl font-bold mb-12">BLOG</h1>

      <div className="flex flex-col space-y-6">
        <Link href="/blog1" className="text-2xl text-blue-600 hover:text-blue-800">
          <motion.span layoutId="blog1-part1" className="inline-block">NEW TYPESCRIPT</motion.span>{' '}
          <motion.span layoutId="blog1-part2" className="inline-block">ENUM SYNTAX</motion.span>
        </Link>
        <Link href="/blog2" className="text-2xl text-blue-600 hover:text-blue-800">
          <motion.span layoutId="blog2-part1" className="inline-block">REACT HOOKS</motion.span>{' '}
          <motion.span layoutId="blog2-part2" className="inline-block">BEST PRACTICES</motion.span>
        </Link>
        <Link href="/blog3" className="text-2xl text-blue-600 hover:text-blue-800">
          <motion.span layoutId="blog3-part1" className="inline-block">NEXT.JS 14</motion.span>{' '}
          <motion.span layoutId="blog3-part2" className="inline-block">NEW FEATURES</motion.span>
        </Link>
        <Link href="/blog4" className="text-2xl text-blue-600 hover:text-blue-800">
          <motion.span layoutId="blog4-part1" className="inline-block">CSS GRID</motion.span>{' '}
          <motion.span layoutId="blog4-part2" className="inline-block">MASTERY GUIDE</motion.span>
        </Link>
      </div>
    </div>
  );
}
