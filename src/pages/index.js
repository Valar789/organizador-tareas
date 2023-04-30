import Rows from "@/components/Rows";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const titlesPriority = [
    { title: "Alta prioridad", color: "bg-red-500" },
    { title: "Media Proridad", color: "bg-orange-500" },
    { title: "Baja Prioridad", color: "bg-green-500" },
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
      </main>
    </>
  );
}
