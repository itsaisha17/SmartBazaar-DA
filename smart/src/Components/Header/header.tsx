import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button
          type="button"
          className="flex items-center gap-3 text-left"
          onClick={() => navigate("/")}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white shadow-lg shadow-black/20">
            SB
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">SMART बाज़ार</p>
            <p className="text-sm text-slate-500">Smarter shopping for modern buyers</p>
          </div>
        </button>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-full border border-slate-200 px-4 py-2 transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => navigate("/Add")}
            className="rounded-full border border-slate-200 px-4 py-2 transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Watches
          </button>
          <button
            type="button"
            onClick={() => navigate("/Add_cloth")}
            className="rounded-full border border-slate-200 px-4 py-2 transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Clothing
          </button>
          <button
            type="button"
            onClick={() => navigate("/CartPage")}
            className="rounded-full border border-slate-200 px-4 py-2 transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Cart
          </button>
          <button
            type="button"
            onClick={() => navigate("/Reg")}
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            Register
          </button>
        </nav>
      </div>
    </header>
  );
}
