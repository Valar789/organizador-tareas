import Rows from "@/components/Rows";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const titlesPriority = [
    { title: "Alta prioridad", color: "bg-rose-600" },
    { title: "Media prioridad", color: "bg-orange-500" },
    { title: "Baja prioridad", color: "bg-green-500" },
  ];

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <div className="grid grid-rows-3 h-screen w-full z-10 ">
          {titlesPriority.map((element) => (
            <Rows
              key={element.title}
              title={element.title}
              color={element.color}
            />
          ))}
        </div>
        <a className="fixed hidden sm:block bottom-3 left-1 text-xs z-10 text-white" target="_blank" href="https://luis-miguel-zuleta-orozco.vercel.app/">@Luis Miguel Zuleta</a>
      </main>
    </>
  );
}
