
import Link from "next/link";

const featuredProducts = [
  {
    name: "Salmon Nigiri",
    slug: "salmon-nigiri",
    category: "SUSHI FAVORITES",
    description:
      "A classic sushi favorite featuring salmon served over seasoned sushi rice.",
    image: "/images/salmon-nigiri.jpg",
  },
  {
    name: "Tuna Nigiri",
    slug: "tuna-nigiri",
    category: "SUSHI FAVORITES",
    description:
      "A Japanese-inspired favorite featuring tuna served over seasoned sushi rice.",
    image: "/images/tuna-nigiri.jpg",
  },
  {
    name: "California Rolls",
    slug: "california-rolls",
    category: "CLASSIC ROLLS",
    description:
      "A familiar sushi roll favorite enjoyed by sushi lovers.",
    image: "/images/sushi.jpg",
  },
  {
    name: "Poke Bowls",
    slug: "poke-bowls",
    category: "COLORFUL FAVORITES",
    description:
      "Explore satisfying bowls with colorful ingredients and delicious combinations.",
    image: "/images/poke.jpg",
  },
];

const categories = [
  {
    name: "Sushi & Rolls",
    slug: "sushi-rolls",
    category: "JAPANESE FAVORITES",
    image: "/images/sushi.jpg",
  },
  {
    name: "Rice Bowls",
    slug: "rice-bowls",
    category: "ASIAN CLASSICS",
    image: "/images/rice-bowls.jpg",
  },
  {
    name: "Dumplings",
    slug: "dumplings",
    category: "A TASTE OF ASIA",
    image: "/images/dumplings.jpg",
  },
  {
    name: "Poke Bowls",
    slug: "poke-bowls",
    category: "FRESH FAVORITES",
    image: "/images/poke.jpg",
  },
  {
    name: "Noodles",
    slug: "noodles",
    category: "ASIAN COMFORT FOOD",
    image: "/images/noodles.jpg",
  },
  {
    name: "Asian Specialties",
    slug: "asian-specialties",
    category: "EXPLORE MORE",
    image: "/images/specialties.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#171717]">

      {/* HERO SECTION */}
      <section className="overflow-hidden bg-[#fff8f3]">
        <div className="mx-auto grid max-w-[1500px] items-center lg:grid-cols-[47%_53%]">

          <div className="px-6 py-16 md:px-12 lg:py-24">
            <p className="text-xs font-black tracking-[0.3em] text-red-600">
              DISCOVER JF SUSHI
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-[-0.055em] md:text-6xl xl:text-7xl">
              Incredible
              <br />
              <span className="text-[#e0000b]">
                Asian Food.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Explore our selection of sushi favorites,
              colorful poke bowls, rice bowls, dumplings,
              noodles, and other Asian-inspired specialties.
            </p>

            <a
              href="#featured"
              className="mt-9 inline-flex rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Explore Our Products ↓
            </a>
          </div>

          <div className="relative min-h-[340px] overflow-hidden lg:h-[570px]">
            <img
              src="/images/nigiri-hero.png"
              alt="Salmon and tuna nigiri with California rolls"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-[1500px] gap-6 px-6 py-9 text-center md:grid-cols-3 md:px-12">

          {[
            "Sushi Favorites",
            "Asian-Inspired Selection",
            "Grocery Retail Supply",
          ].map((item, index) => (
            <div
              key={item}
              className={`text-sm font-black tracking-wide ${
                index < 2
                  ? "md:border-r md:border-gray-200"
                  : ""
              }`}
            >
              <span className="mr-3 text-red-600">
                ✦
              </span>
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        id="featured"
        className="scroll-mt-24 bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">

          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[0.25em] text-red-600">
              CUSTOMER FAVORITES
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Featured Food
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Discover some of the delicious Asian-inspired
              selections featured at JF Sushi.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {featuredProducts.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.slug}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">

                  <p className="text-[11px] font-black tracking-[0.12em] text-red-600">
                    {product.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {product.description}
                  </p>

                  <p className="mt-6 text-sm font-black text-red-600">
                    View Product →
                  </p>

                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ALL FOOD CATEGORIES */}
      <section className="bg-[#fcf9f6] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-black tracking-[0.25em] text-red-600">
                EXPLORE THE SELECTION
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                All Food Categories
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-600">
              From Japanese-inspired favorites to
              comforting Asian classics, explore the
              different categories of food at JF Sushi.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (
              <Link
                href={`/products/${category.slug}`}
                key={category.slug}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="aspect-[5/3] overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">

                  <p className="text-xs font-black tracking-[0.15em] text-red-600">
                    {category.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    {category.name}
                  </h3>

                  <p className="mt-5 text-sm font-black text-red-600">
                    Explore Category →
                  </p>

                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-6 md:grid-cols-2 md:px-12">

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/poke.jpg"
              alt="Asian-inspired poke bowl"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <div>

            <p className="text-xs font-black tracking-[0.25em] text-red-600">
              MORE THAN GREAT FOOD
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              The Business
              <br />
              Behind the Food.
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              JF Sushi is an established Asian-inspired
              food business with experience in commercial
              production and grocery retail supply.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our work brings together food selections
              and commercial relationships with grocery
              retail partners.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Discover Our Story →
            </Link>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#181818] px-6 py-20 text-center text-white md:py-24">

        <p className="text-xs font-black tracking-[0.25em] text-red-400">
          EXPLORE JF SUSHI
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Incredible Asian Food.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-300">
          Discover our food selections and learn more
          about the company behind JF Sushi.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">

          <Link
            href="/about"
            className="rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-700"
          >
            About JF Sushi →
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/50 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Our Services →
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
