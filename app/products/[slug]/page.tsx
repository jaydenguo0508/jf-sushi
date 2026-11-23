
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

const products = {
  "salmon-nigiri": {
    name: "Salmon Nigiri",
    category: "SUSHI FAVORITES",
    image: "/images/nigiri-hero.png",
    position: "35% center",
    description:
      "Beautiful salmon paired with sushi rice. A classic Japanese-inspired favorite known for its elegant presentation and delicious flavor.",
    highlights: [
      "Classic Japanese-style nigiri",
      "Salmon served over sushi rice",
      "Beautiful presentation",
    ],
  },

  "tuna-nigiri": {
    name: "Tuna Nigiri",
    category: "SUSHI FAVORITES",
    image: "/images/nigiri-hero.png",
    position: "45% center",
    description:
      "Rich, vibrant tuna served over sushi rice. A timeless Japanese-inspired favorite with a distinctive flavor.",
    highlights: [
      "Classic Japanese-style nigiri",
      "Tuna served over sushi rice",
      "Rich flavor and presentation",
    ],
  },

  "california-rolls": {
    name: "California Rolls",
    category: "CLASSIC ROLLS",
    image: "/images/sushi.jpg",
    position: "center",
    description:
      "A classic sushi roll featuring imitation crab, avocado, and rice. A delicious and familiar favorite.",
    highlights: [
      "Classic sushi roll",
      "Imitation crab and avocado",
      "Delicious, familiar flavors",
    ],
  },

  "poke-bowls": {
    name: "Poke Bowls",
    category: "FRESH FAVORITES",
    image: "/images/poke.jpg",
    position: "center",
    description:
      "Colorful poke bowls featuring rice, seafood, and a variety of delicious toppings. A vibrant and satisfying favorite.",
    highlights: [
      "Colorful ingredients",
      "Rice and seafood",
      "Vibrant presentation",
    ],
  },

  "sushi-rolls": {
    name: "Sushi & Rolls",
    category: "JAPANESE FAVORITES",
    image: "/images/sushi.jpg",
    position: "center",
    description:
      "Explore a variety of sushi rolls, nigiri, and Japanese-inspired favorites. Discover colorful combinations and classic flavors.",
    highlights: [
      "Sushi rolls and nigiri",
      "Japanese-inspired favorites",
      "A variety of delicious selections",
    ],
  },

  "rice-bowls": {
    name: "Rice Bowls",
    category: "ASIAN CLASSICS",
    image: "/images/rice-bowls.jpg",
    position: "center",
    description:
      "Discover satisfying rice bowls featuring flavorful ingredients and colorful combinations inspired by Asian cuisine.",
    highlights: [
      "Comforting rice-based dishes",
      "Colorful ingredient combinations",
      "Asian-inspired flavors",
    ],
  },

  dumplings: {
    name: "Dumplings",
    category: "A TASTE OF ASIA",
    image: "/images/dumplings.jpg",
    position: "center",
    description:
      "Enjoy delicious Asian-inspired dumplings, a comforting favorite known for their satisfying fillings and bite-sized presentation.",
    highlights: [
      "Asian-inspired dumplings",
      "Comforting, satisfying flavors",
      "Perfect bite-sized favorites",
    ],
  },

  noodles: {
    name: "Noodles",
    category: "ASIAN COMFORT FOOD",
    image: "/images/noodles.jpg",
    position: "center",
    description:
      "Explore delicious noodle dishes inspired by flavors from across Asia. A comforting food favorite with endless possibilities.",
    highlights: [
      "Asian-inspired noodle dishes",
      "Comforting flavors",
      "A variety of noodle favorites",
    ],
  },

  "asian-specialties": {
    name: "Asian Specialties",
    category: "EXPLORE MORE",
    image: "/images/specialties.jpg",
    position: "center",
    description:
      "Discover more delicious Asian-inspired specialties, bringing together a variety of flavors and exciting food selections.",
    highlights: [
      "Asian-inspired food selections",
      "A variety of delicious flavors",
      "More favorites to discover",
    ],
  },
};

type ProductSlug = keyof typeof products;

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

// Generate all nine product routes.
export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

// Suspense supports rendering the dynamic product content.
export default function ProductDetailPage({
  params,
}: ProductPageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-white">
          <div className="text-center">
            <p className="text-sm font-black tracking-[0.25em] text-red-600">
              JF SUSHI
            </p>

            <h1 className="mt-4 text-2xl font-black text-gray-900">
              Loading product...
            </h1>
          </div>
        </main>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(products, slug)) {
    notFound();
  }

  const product = products[slug as ProductSlug];

  const relatedProducts = Object.entries(products)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#171717]">

      {/* BREADCRUMBS */}
      <div className="mx-auto max-w-[1500px] px-6 pt-8 text-sm text-gray-500 md:px-12">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>

        <span className="mx-2">/</span>

        <Link href="/products" className="hover:text-red-600">
          Products
        </Link>

        <span className="mx-2">/</span>

        <span className="font-semibold text-gray-900">
          {product.name}
        </span>
      </div>

      {/* PRODUCT HERO */}
      <section className="mx-auto grid max-w-[1500px] items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-12 md:py-20">

        {/* PRODUCT IMAGE */}
        <div className="overflow-hidden rounded-3xl bg-[#faf8f6] shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            style={{
              objectPosition: product.position,
            }}
            className="aspect-[5/4] h-full w-full object-cover"
          />
        </div>

        {/* PRODUCT INFORMATION */}
        <div>
          <p className="text-xs font-black tracking-[0.3em] text-red-600">
            {product.category}
          </p>

          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-6xl">
            {product.name}
            <span className="text-red-600">.</span>
          </h1>

          <p className="mt-7 text-lg leading-9 text-gray-600">
            {product.description}
          </p>

          {/* PRODUCT HIGHLIGHTS */}
          <div className="mt-9 border-t border-gray-200 pt-7">
            <h2 className="text-lg font-black">
              Product Highlights
            </h2>

            <ul className="mt-5 space-y-4">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 font-bold text-red-600">
                    ✓
                  </span>

                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/products"
            className="mt-10 inline-flex rounded-full bg-[#e0000b] px-8 py-4 text-sm font-bold text-white transition hover:bg-red-800"
          >
            ← Explore More Products
          </Link>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-[#fcf8f4] py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">

          <div className="text-center">
            <p className="text-xs font-black tracking-[0.25em] text-red-600">
              DISCOVER MORE
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              You May Also Like
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
              Discover more delicious Asian-inspired favorites
              from JF Sushi.
            </p>
          </div>

          {/* RELATED PRODUCT CARDS */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {relatedProducts.map(([key, item]) => (
              <Link
                href={`/products/${key}`}
                key={key}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      objectPosition: item.position,
                    }}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm font-black text-red-600">
                    View Product →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex rounded-full border border-red-600 px-8 py-4 text-sm font-bold text-red-600 transition hover:bg-red-50"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] px-6 py-10 text-white">
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
