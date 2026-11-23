
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Large-Scale Food Production",
    description:
      "JF Sushi has experience producing Asian-inspired food at commercial scale, supporting the needs of grocery retail partners.",
    image: "/images/sushi.jpg",
    label: "FOOD PRODUCTION",
  },
  {
    number: "02",
    title: "Grocery Retail Supply",
    description:
      "Our business supplies major grocery chains, bringing sushi and Asian-inspired food selections to retail customers.",
    image: "/images/nigiri-hero.png",
    label: "RETAIL SUPPLY",
  },
  {
    number: "03",
    title: "Business Partnerships",
    description:
      "We value dependable commercial relationships and opportunities to work with retail partners over the long term.",
    image: "/images/poke.jpg",
    label: "WORKING TOGETHER",
  },
];

const strengths = [
  {
    title: "Established Experience",
    text: "Experience serving grocery retail partners and supporting commercial food operations.",
  },
  {
    title: "Product Variety",
    text: "A selection of Asian-inspired foods, from sushi favorites to rice bowls and other specialties.",
  },
  {
    title: "Retail Focus",
    text: "An understanding of the importance of consistency and dependable relationships in grocery retail.",
  },
];

const featuredProducts = [
  {
    name: "Sushi & Rolls",
    slug: "sushi-rolls",
    image: "/images/sushi.jpg",
  },
  {
    name: "Poke Bowls",
    slug: "poke-bowls",
    image: "/images/poke.jpg",
  },
  {
    name: "Asian Specialties",
    slug: "asian-specialties",
    image: "/images/specialties.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#171717]">
      {/* HERO */}
      <section className="overflow-hidden bg-[#fff8f3]">
        <div className="mx-auto grid max-w-[1500px] items-center lg:grid-cols-[47%_53%]">
          <div className="px-6 py-16 md:px-12 lg:py-24">
            <p className="text-xs font-black tracking-[0.3em] text-red-600">
              WHAT WE DO
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-[-0.055em] md:text-6xl xl:text-7xl">
              Great Food.
              <br />
              <span className="text-[#e0000b]">
                Strong Partnerships.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              From commercial food production to grocery
              retail supply, JF Sushi combines appealing
              Asian-inspired food with a focus on dependable
              business relationships.
            </p>

            <a
              href="#our-services"
              className="mt-9 inline-flex rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Explore Our Services ↓
            </a>
          </div>

          <div className="relative min-h-[340px] overflow-hidden lg:h-[570px]">
            <img
              src="/images/nigiri-hero.png"
              alt="Salmon and tuna nigiri sushi"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-[1500px] gap-6 px-6 py-9 text-center md:grid-cols-3 md:px-12">
          {[
            "Food Production",
            "Grocery Retail Supply",
            "Commercial Partnerships",
          ].map((item, index) => (
            <div
              key={item}
              className={`text-sm font-black tracking-wide ${
                index < 2
                  ? "md:border-r md:border-gray-200"
                  : ""
              }`}
            >
              <span className="mr-3 text-red-600">✦</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* OUR SERVICES */}
      <section
        id="our-services"
        className="scroll-mt-24 bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <p className="text-xs font-black tracking-[0.25em] text-red-600">
            OUR CAPABILITIES
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            What We Offer
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            Explore the core areas of JF Sushi's commercial
            food business.
          </p>

          <div className="mt-12 space-y-10">
            {services.map((service, index) => (
              <article
                key={service.number}
                className="grid items-center gap-10 overflow-hidden rounded-3xl border border-gray-100 bg-[#fcf9f6] md:grid-cols-2"
              >
                <div
                  className={`overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-[5/4] h-full w-full object-cover"
                  />
                </div>

                <div className="px-7 pb-10 md:px-12 md:py-12">
                  <p className="text-sm font-black tracking-[0.2em] text-red-600">
                    {service.number} / {service.label}
                  </p>

                  <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight md:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-6 max-w-lg leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    href="/about"
                    className="mt-8 inline-flex text-sm font-black text-red-600 hover:text-red-800"
                  >
                    Learn About JF Sushi →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS STRENGTHS */}
      <section className="bg-[#fcf9f6] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[0.25em] text-red-600">
              WHY JF SUSHI
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Built on Experience.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach combines commercial food
              experience, product variety, and
              retail-focused relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <p className="text-4xl font-black text-red-600">
                  0{index + 1}
                </p>

                <h3 className="mt-7 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD SHOWCASE */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black tracking-[0.25em] text-red-600">
                OUR PRODUCTS
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Food Worth Discovering.
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex font-black text-red-600 hover:text-red-800"
            >
              View All Products →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.slug}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm font-black text-red-600">
                    Explore Product →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#181818] px-6 py-20 text-center text-white md:py-24">
        <p className="text-xs font-black tracking-[0.25em] text-red-400">
          JF SUSHI
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Incredible Asian Food.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-300">
          Learn more about our company and explore the food
          behind JF Sushi.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-700"
          >
            About JF Sushi →
          </Link>

          <Link
            href="/products"
            className="rounded-full border border-white/50 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Explore Our Food →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-5 text-center md:flex-row">
          <Link href="/" className="text-2xl font-black">
            JF<span className="text-red-500">SUSHI</span>
          </Link>

          <p className="text-sm text-gray-300">
            Incredible Asian Food.
          </p>

          <p className="text-xs text-gray-400">
            © 2026 JF Sushi. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
