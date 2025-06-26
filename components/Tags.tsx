export default function TagsSection({post}: {post: {categories?: {nodes?: {name: string}[]}}}) {
    return (
        <div className="mt-12 pt-8 border-t border-neutral-200">
        <h3 className="text-sm font-semibold uppercase text-neutral-600 mb-3">Categories:</h3>
        <div className="flex flex-wrap gap-2">
          {post.categories?.nodes?.map((cat: any, index: number) => (
            <span key={index} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">
              {cat.name}
            </span>
          ))}
        </div>
      </div>
    )
}