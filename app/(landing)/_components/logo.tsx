import React from "react";
import Image from "next/image";
import { cn } from "@/utils/utils";

type Props = {};

// Use local/system fonts as fallback when Google Fonts fails
const fontClassName = "font-semibold font-sans";

const Logo = (props: Props) => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.png" height={40} width={40} alt="logo" />
      <p className={cn(fontClassName)}>Infinote</p>
    </div>
  );
};

export default Logo;
