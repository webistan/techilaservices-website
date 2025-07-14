import Image from "next/image";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { fetchWordPressQuery } from "../../../lib/fetch-wordpress-query";
import { GET_PRODUCT_BY_SLUG } from "../../../lib/wp-queries";
import ServiceTopBanner from "@/components/ServiceTopBanner";

function formatDate(dateString?: string) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "-";
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  // Get ordinal suffix
  const j = day % 10, k = day % 100;
  let dayStr = day +
    (j === 1 && k !== 11 ? "st" :
     j === 2 && k !== 12 ? "nd" :
     j === 3 && k !== 13 ? "rd" : "th");
  return `${dayStr} ${month} ${year}`;
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Fetch dynamic product data on the server
  const { data, error } = await fetchWordPressQuery<any>(GET_PRODUCT_BY_SLUG, { slug: params.slug });
  const product = data?.productBy;

  return (
    <>
      <Header />
      {/* Top horizontal menu */}
      <nav className="w-full bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8 py-3">
          <a href="/about-us" className="text-neutral-700 hover:text-orange-500 font-medium transition-colors">About Us</a>
          <a href="/products" className="text-neutral-700 hover:text-orange-500 font-medium transition-colors">Products</a>
          <a href="/case-studies" className="text-neutral-700 hover:text-orange-500 font-medium transition-colors">Case Studies</a>
          <a href="/blogs" className="text-neutral-700 hover:text-orange-500 font-medium transition-colors">Blogs</a>
        </div>
      </nav>
      <div className="bg-white text-neutral-800 min-h-screen">
        <header className="">
          <div className="w-full px-[20px] box-border">
            <div className="relative w-full h-[320px] md:h-[380px] lg:h-[400px]">
              <Image
                src={product?.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
                alt={product?.title || "Product image"}
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </header>
        {/* Add bold title just below banner, reduce gap */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
         
        </div>
        <main className="pt-2 md:pt-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              {/* Sidebar / Meta Info */}
              <aside className="md:col-span-1 space-y-8 pt-2 text-sm">
                <div>
                  <h3 className="font-medium text-neutral-500 mb-1">Latest Release</h3>
                  <p className="border-l-2 border-black pl-4 font-bold text-base">v1.0.0</p>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-500 mb-1">Listed On</h3>
                  <p className="border-l-2 border-black pl-4 font-bold text-base">01st Jan 2024</p>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-500 mb-1">Languages</h3>
                  <p className="border-l-2 border-black pl-4 font-bold text-base">English, Hindi</p>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-500 mb-1">Supported Features</h3>
                  <p className="border-l-2 border-black pl-4 font-bold text-base">Feature A, Feature B, Feature C</p>
                </div>
              </aside>

              {/* Content Area */}
              <div className="md:col-span-3 space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-8 mb-4">
            {error ? 'Failed to load' : product?.title || 'Product Title'}
          </h1>
                <section>
                  <div className="text-neutral-700 text-base leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: product?.content || "" }} />
                </section>
              </div>
             
            </div>
          </div>
        </main>
        <ServiceTopBanner />
      </div>
      <Footer />
    </>
  );
} 