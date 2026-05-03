import eleco from '../../assets/elec.jpg'
import beauty from '../../assets/beuty.png'
import cloths from '../../assets/ano1.jpg'

export default function How() {
  const categories = [
    {
      title: 'Electronics',
      description: 'Explore latest gadgets, accessories, and home tech that fit everyday life.',
      image: eleco,
    },
    {
      title: 'Clothing',
      description: 'Browse trend-forward outfits with a cleaner, easier shopping experience.',
      image: cloths,
    },
    {
      title: 'Books',
      description: 'Find popular reads, personal growth picks, and gifting-friendly titles.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Beauty',
      description: 'Discover skincare, makeup, and self-care essentials from one storefront.',
      image: beauty,
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white px-6 py-10 shadow-2xl shadow-slate-900/10 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">Featured categories</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Shop popular categories faster
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            The layout now emphasizes discovery, clear imagery, and easier scanning across desktop and mobile.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{category.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-slate-900">
                  Explore now
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
