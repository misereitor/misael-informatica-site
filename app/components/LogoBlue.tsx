import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <Image
        src="/logo.png"
        width={981}
        height={1032}
        alt="Mísael Informática Logo"
        className="h-10 w-10 mr-3"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-ansage font-black text-[#1b4770] tracking-wide leading-none">
          MÍSAEL
        </h1>
        <p className="text-pp font-humanst font-medium tracking-wider text-[#152244]">
          INFORMÁTICA
        </p>
      </div>
    </motion.div>
  );
}
