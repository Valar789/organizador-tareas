import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between text-md text-white font-semibold gap-4   p-2 bg-black">
      <Link href='/' className="text-lg font-bold">Task</Link>
      <div className="flex gap-3">
        <Link href="/">Pendientes</Link>
        <Link href="/done">Terminadas </Link>
      </div>
      <div></div>
    </div>
  );
}
