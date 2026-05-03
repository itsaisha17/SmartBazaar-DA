import { useNavigate } from 'react-router-dom';
import eleco from '../../assets/elec.jpg'
import beauty from '../../assets/beuty.png'
import watch from '../../assets/watch.jpg'
import cloths from '../../assets/ano1.jpg'

export default function Products() {
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName.toLowerCase()}`);
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Best sellers</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Featured picks customers keep revisiting
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Product cards now use stronger hierarchy, richer backgrounds, and clearer destinations for browsing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <button
            type="button"
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 text-left backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-2xl"
            onClick={() => handleProductClick("Electronics")}
          >
            <img
              src={eleco}
              alt="Electronics"
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="space-y-3 p-6">
              <p className="text-sm font-medium text-emerald-300">Tech essentials</p>
              <h3 className="text-xl font-semibold text-white">Electronics</h3>
              <p className="text-sm leading-6 text-slate-300">Headphones, accessories, and smart everyday devices.</p>
            </div>
          </button>

          <button
            type="button"
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 text-left backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-2xl"
            onClick={() => navigate("/Add_cloth")}
          >
            <img
              src={cloths}
              alt="Clothes"
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="space-y-3 p-6">
              <p className="text-sm font-medium text-emerald-300">Fresh arrivals</p>
              <h3 className="text-xl font-semibold text-white">Clothing</h3>
              <p className="text-sm leading-6 text-slate-300">Modern fashion pieces curated for daily style.</p>
            </div>
          </button>

          <button
            type="button"
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 text-left backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-2xl"
            onClick={() => navigate("/Add")}
          >
            <img
              src={watch}
              alt="Watch"
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="space-y-3 p-6">
              <p className="text-sm font-medium text-emerald-300">Signature product</p>
              <h3 className="text-xl font-semibold text-white">Smart Watch</h3>
              <p className="text-sm leading-6 text-slate-300">Premium watch showcase with a focused detail view.</p>
            </div>
          </button>

          <button
            type="button"
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 text-left backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-2xl"
            onClick={() => handleProductClick("Cosmetics")}
          >
            <img
              src={beauty}
              alt="Cosmetics"
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="space-y-3 p-6">
              <p className="text-sm font-medium text-emerald-300">Self-care</p>
              <h3 className="text-xl font-semibold text-white">Beauty</h3>
              <p className="text-sm leading-6 text-slate-300">Popular skincare and beauty essentials in one place.</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
