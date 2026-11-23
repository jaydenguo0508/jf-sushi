
import Link from "next/link";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JF Sushi",
  url: "https://jf-sushi.vercel.app",
  description:
    "JF Sushi is an established Asian-inspired food business offering sushi, poke bowls, and other food selections for grocery retail and wholesale partners.",
};

const products = [
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

const services = [
  {
    number: "01",
    title: "Food Production",
    description:
      "Commercial-scale production of Asian-inspired food selections.",
  },
  {
    number: "02",
    title: "Grocery Retail Supply",
    description:
      "Supplying food products to established grocery retail partners.",
  },
  {
    number: "03",
    title: "Business Partnerships",
    description:
      "Building lasting relationships with businesses and retailers.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#171717]">
      {/* GOOGLE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO SECTION */}
      <section className="overflow-hidden bg-[#fffaf6]">
        <div className="mx-auto grid max-w-[1600px] items-center lg:grid-cols-[43%_57%]">
          {/* HERO TEXT */}
          <div className="px-6 py-14 sm:px-8 md:px-12 lg:py-24">
            <p className="text-xs font-black tracking-[0.3em] text-[#e0000b]">
              WELCOME TO JF SUSHI
            </p>

            <h1 className="mt-6 text-[clamp(3rem,7vw,6rem)] font-black leading-[0.98] tracking-[-0.065em]">
              Incredible
              <br />
              <span className="text-[#e0000b]">
                Asian Food.
              </span>
            </h1>

            <p className="mt-7 max-w-[490px] text-base leading-8 text-[#4b4b4b] md:text-lg">
              Discover delicious Asian-inspired favorites,
              from salmon and tuna nigiri to sushi rolls,
              poke bowls, and more.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-[#e0000b] px-7 py-4 text-sm font-bold text-white transition hover:bg-red-800"
              >
                Explore Our Food →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-gray-800 bg-white px-7 py-4 text-sm font-bold transition hover:bg-gray-100"
              >
                Discover Our Story
              </Link>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:h-[610px]">
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
        <div className="mx-auto grid max-w-[1500px] gap-5 px-6 py-9 text-center sm:grid-cols-3 sm:gap-0 md:px-12">
          {[
            "Asian-Inspired Food",
            "Grocery Retail Supply",
            "Business Partnerships",
          ].map((item, index) => (
            <div
              key={item}
              className={`text-sm font-black tracking-wide ${
                index < 2
                  ? "sm:border-r sm:border-gray-200"
                  : ""
              }`}
            >
              <span className="mr-2 text-red-600">
                ✦
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        id="products"
        className="scroll-mt-24 bg-[#fcf9f6] py-16 md:py-20"
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black tracking-[0.3em] text-red-600">
                DISCOVER OUR SELECTION
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Explore Our Food
              </h2>
            </div>

            <p className="max-w-[460px] leading-7 text-gray-600">
              Discover colorful favorites inspired by
              the incredible variety of Asian cuisine.
            </p>
          </div>

          {/* FOOD CARDS */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.slug}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[1.4/1] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-black tracking-wide text-red-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-base font-black leading-tight lg:text-lg">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-xs font-bold text-red-600">
                    View Product →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex rounded-full border border-[#e0000b] px-7 py-3 text-sm font-bold text-[#e0000b] transition hover:bg-red-50"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        id="about"
        className="scroll-mt-24 bg-white py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:px-12">
          <img
            src="/images/poke.jpg"
            alt="Colorful Asian-inspired poke bowl"
            loading="lazy"
            className="h-[300px] w-full rounded-2xl object-cover sm:h-[380px] md:h-[440px]"
          />

          <div>
            <p className="text-xs font-black tracking-[0.25em] text-red-600">
              GET TO KNOW US
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              About JF Sushi
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              JF Sushi is an established Asian-inspired
              food business serving the grocery retail market.
              Our offerings bring together sushi favorites
              and a wider selection of Asian cuisine.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              With large-scale production experience and
              existing grocery-chain relationships, we focus
              on making appealing food available through
              retail channels.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Discover Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="scroll-mt-24 bg-[#faf8f6] py-16 md:py-20"
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black tracking-[0.25em] text-red-600">
                WHAT WE DO
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Our Services
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-600">
              From commercial food production to
              grocery retail supply, explore the
              business behind JF Sushi.
            </p>
          </div>

          {/* SERVICES CARDS */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                href="/services"
                key={service.number}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-4xl font-black text-red-600">
                  {service.number}
                </p>

                <h3 className="mt-7 text-2xl font-black">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {service.description}
                </p>

                <p className="mt-7 text-sm font-black text-red-600">
                  Learn More →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-[#e0000b] px-9 py-4 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#181818] px-6 py-20 text-center text-white">
        <p className="text-xs font-black tracking-[0.25em] text-red-400">
          DISCOVER JF SUSHI
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Incredible Asian Food.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-300">
          Explore our food selections and learn more
          about the business behind JF Sushi.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Explore Our Products →
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
      <footer className="bg-[#111111] py-10 text-white">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-5 px-6 text-center md:flex-row md:px-12">
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
