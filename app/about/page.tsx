
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Food That Inspires",
    description:
      "We celebrate the variety of Asian-inspired cuisine through colorful, appealing food selections.",
  },
  {
    number: "02",
    title: "Quality & Care",
    description:
      "We believe thoughtful preparation and presentation are important parts of a great food experience.",
  },
  {
    number: "03",
    title: "Built for Partnerships",
    description:
      "Our business serves the grocery retail market, with a focus on supporting lasting commercial relationships.",
  },
];

const offerings = [
  {
    title: "Sushi & Rolls",
    slug: "sushi-rolls",
    image: "/images/sushi.jpg",
    description:
      "Explore Japanese-inspired favorites, from sushi rolls to nigiri.",
  },
  {
    title: "Poke Bowls",
    slug: "poke-bowls",
    image: "/images/poke.jpg",
    description:
      "Discover colorful bowls with delicious combinations of ingredients.",
  },
  {
    title: "Asian Favorites",
    slug: "asian-specialties",
    image: "/images/dumplings.jpg",
    description:
      "Enjoy a wider selection of Asian-inspired food favorites.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">

      {/* HERO */}
      <section className="overflow-hidden bg-[#fff8f3]">
        <div className="mx-auto grid max-w-[1500px] items-center lg:grid-cols-[47%_53%]">

          <div className="px-6 py-16 md:px-12 lg:py-24">

            <p className="text-xs font-black tracking-[0.3em] text-red-600">
              GET TO KNOW JF SUSHI
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-[-0.055em] md:text-6xl xl:text-7xl">
              Incredible Food.
              <br />
              <span className="text-[#e0000b]">
                Bigger Possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              At JF Sushi, we bring Asian-inspired food
              favorites to the grocery retail market,
              combining appealing products with a
              commitment to building lasting relationships.
            </p>

            <a
              href="#our-story"
              className="mt-9 inline-flex rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Discover Our Story ↓
            </a>

          </div>

          <div className="relative min-h-[340px] overflow-hidden lg:h-[560px]">
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
            "Asian-Inspired Food",
            "Grocery Retail Supply",
            "Business Partnerships",
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

      {/* OUR STORY */}
      <section
        id="our-story"
        className="scroll-mt-24 bg-white py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-6 md:grid-cols-2 md:px-12 lg:gap-20">

          <div className="relative">
            <img
              src="/images/sushi.jpg"
              alt="JF Sushi food selection"
              loading="lazy"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-lg"
            />

            <div className="absolute -bottom-5 right-5 rounded-2xl bg-[#e0000b] px-7 py-5 text-white shadow-lg">
              <p className="text-lg font-black">
                JF SUSHI
              </p>
              <p className="mt-1 text-xs font-semibold">
                Incredible Asian Food
              </p>
            </div>
          </div>

          <div>

            <p className="text-xs font-black tracking-[0.25em] text-red-600">
              WHO WE ARE
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Our Story
              <span className="text-red-600">.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600">
              JF Sushi is an established Asian-inspired food
              business serving the grocery retail market.
              Our product focus includes sushi favorites
              and a wider selection of Asian cuisine.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              With large-scale production capabilities and
              existing grocery-chain relationships, we
              work to make appealing Asian-inspired food
              available through retail channels.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              We aim to bring together food quality,
              presentation, and dependable business
              relationships as we continue to grow.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-full border border-red-600 px-8 py-4 text-sm font-bold text-red-600 transition hover:bg-red-50"
            >
              Explore Our Products →
            </Link>

          </div>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-[#fcf9f6] py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">

          <div className="max-w-2xl">

            <p className="text-xs font-black tracking-[0.25em] text-red-600">
              WHAT MATTERS TO US
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              What Drives Us
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach brings together a passion for
              food, thoughtful presentation, and a focus
              on business relationships.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <p className="text-4xl font-black text-red-600">
                  {value.number}
                </p>

                <h3 className="mt-7 text-2xl font-black">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOOD SHOWCASE */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-black tracking-[0.25em] text-red-600">
                OUR FOOD
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Made to Be Enjoyed.
              </h2>
            </div>

            <p className="max-w-md leading-8 text-gray-600">
              From classic sushi favorites to colorful
              Asian-inspired selections, discover the
              food behind JF Sushi.
            </p>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">

            {offerings.map((item) => (
              <Link
                href={`/products/${item.slug}`}
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <p className="mt-6 text-sm font-black text-red-600">
                    Discover More →
                  </p>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* BUSINESS CAPABILITIES */}
      <section className="overflow-hidden bg-[#181818] text-white">
        <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-24">

          <div>

            <p className="text-xs font-black tracking-[0.25em] text-red-400">
              BEYOND THE FOOD
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Built for
              <br />
              <span className="text-red-500">
                Retail Partnerships.
              </span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-gray-300">
              JF Sushi brings experience in large-scale
              food production and supplying grocery retail
              partners. We recognize the importance of
              reliable business relationships and food
              that appeals to customers.
            </p>

            <Link
              href="/services"
              className="mt-9 inline-flex rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Explore Our Services →
            </Link>

          </div>

          <div className="grid gap-5">

            {[
              {
                title: "Large-Scale Production",
                text: "Experience supporting food production at commercial scale.",
              },
              {
                title: "Grocery Retail Supply",
                text: "Existing relationships with major grocery chains.",
              },
              {
                title: "Long-Term Relationships",
                text: "A focus on building and maintaining commercial partnerships.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >

                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-300">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#fff8f3] px-6 py-20 text-center md:py-24">

        <p className="text-xs font-black tracking-[0.25em] text-red-600">
          EXPLORE JF SUSHI
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Discover Incredible Asian Food.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
          Explore our food selections and discover
          what makes JF Sushi unique.
        </p>

        <Link
          href="/products"
          className="mt-9 inline-flex rounded-full bg-[#e0000b] px-9 py-4 text-sm font-bold text-white transition hover:bg-red-800"
        >
          Explore Our Products →
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] px-6 py-10 text-white">

        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-5 md:flex-row">

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
