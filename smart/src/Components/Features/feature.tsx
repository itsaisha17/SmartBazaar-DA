export default function Feature() {
  const features = [
    {
      title: 'Curated Collections',
      text: 'Highlight best-selling items with stronger visual grouping and faster product discovery.',
    },
    {
      title: 'Responsive Layout',
      text: 'The interface adapts more smoothly across mobile, tablet, and wide desktop screens.',
    },
    {
      title: 'Clear Shopping Flow',
      text: 'Users can move from landing page to product views, cart, and registration with less friction.',
    },
    {
      title: 'Modern Visual System',
      text: 'Glassmorphism panels, softer shadows, and better spacing give the site a more premium feel.',
    },
    {
      title: 'Engaging Motion',
      text: 'Subtle hover transforms and animated sections add energy without making the UI noisy.',
    },
    {
      title: 'Conversion Focus',
      text: 'Calls to action are more prominent, helping visitors quickly decide where to go next.',
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-white px-6 py-10 shadow-2xl shadow-slate-900/10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">Why it feels better</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A stronger product experience from first glance to checkout
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            This section now communicates practical value instead of placeholder platform copy, making the storefront feel more intentional.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                {feature.title}
              </div>
              <p className="text-sm leading-7 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
