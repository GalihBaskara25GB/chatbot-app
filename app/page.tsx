import { BrandPopover } from "@/components/BrandPopover";
import Chat from "@/components/Chat";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-neutral-900 h-full">
      <div className="fixed top-0 w-full h-20 max-h-20 bg-neutral-900">
        <div className="flex flex-row items-center justify-between h-20 px-5">
          <BrandPopover />
          <p className="hidden sm:block py-1 rounded-full font-bold text-neutral-300 bg-slate-700 px-5">Chatbruh</p>
          <p className="text-neutral-300">
            with &#10084; by 
            <Link
              href={`https://galihbaskara.codes`}
              title="Built by: Galih"
              className="text-white"
              target="new">
              &nbsp;Galih
            </Link>
          </p>
        </div>
      </div>
      <Chat />
    </main>
  );
}
