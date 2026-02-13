"use client";
import Button from "@/components/ui/Button";
import InputBox from "@/components/ui/InputBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex  flex-col gap-4 justify-center items-center">
      <Image
        src="/mainLogo.png"
        alt="logo"
        width={100}
        height={100}
        draggable={false}
      />
      <InputBox label={"Name"} type={"Text"} placeholder={"Enter Full Name"} />
      <Button text={"Button"} disabled={false} loading={false} />
    </div>
  );
}
