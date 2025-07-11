import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { fetchWordPressQuery } from "../../lib/fetch-wordpress-query";
import { GET_PRODUCTS } from "../../lib/wp-queries";

interface ProductsPageProps {
  searchParams?: { after?: string };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const PAGE_SIZE = 6;
  const after = searchParams?.after || null;
  const { data, error } = await fetchWordPressQuery<any>(GET_PRODUCTS, { first: PAGE_SIZE, after });
  const products = data?.products?.edges || [];
  const pageInfo = data?.products?.pageInfo;

  function formatDate(dateString?: string) {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";
    // Format: 'February 13, 2023'
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      <Header />
      <div className="bg-white text-neutral-800 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 md:mb-16 text-center">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">Products</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Our Product Catalog
            </h1>
          </header>
          {error ? (
            <div className="text-center py-10 text-red-500">Failed to load products.</div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {products.map((edge: any) => {
                  const product = edge.node;
                  return (
                    <Link
                      href={`/products/${product.slug}`}
                      key={product.id}
                      className="group block"
                    >
                      <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-4">
                        <Image
                          src={product.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
                          alt={product.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-neutral-600 transition-colors" dangerouslySetInnerHTML={{ __html: product.title }} />
                        <div className="text-sm text-neutral-500 mb-2" dangerouslySetInnerHTML={{ __html: product.excerpt }} />
                        {/* Author and Date Section - Styled as per screenshot */}
                        <div className="flex items-center gap-3 mt-2">
                          {product.author?.node?.avatar?.url && (
                            <Image
                              src={product.author.node.avatar.url}
                              alt={product.author.node.name || "Author"}
                              width={40}
                              height={40}
                              className="rounded-full object-cover"
                            />
                          )}
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-base text-[#6B7A90]">by</span>
                              <span className="font-semibold text-base text-[#1A3365]">{product.author?.node?.name || "Unknown"}</span>
                            </div>
                            {product.date && (
                              <span className="block text-sm text-[#A0AEC0] mt-0.5">{formatDate(product.date)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center gap-4 mt-12">
                <Link
                  href={pageInfo?.hasPreviousPage ? `/products` : "#"}
                  className="px-4 py-2 rounded bg-neutral-100 text-neutral-800 font-medium disabled:opacity-50"
                  aria-disabled={!pageInfo?.hasPreviousPage}
                  tabIndex={!pageInfo?.hasPreviousPage ? -1 : 0}
                >
                  Previous
                </Link>
                <Link
                  href={pageInfo?.hasNextPage ? `/products?after=${encodeURIComponent(pageInfo.endCursor)}` : "#"}
                  className="px-4 py-2 rounded bg-neutral-100 text-neutral-800 font-medium disabled:opacity-50"
                  aria-disabled={!pageInfo?.hasNextPage}
                  tabIndex={!pageInfo?.hasNextPage ? -1 : 0}
                >
                  Next
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
} 