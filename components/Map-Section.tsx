import Image from "next/image"

export default function MapSection() {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] bg-gray-200">
      {/* Placeholder for the map image */}
      <Image
        src="/placeholder.svg?width=1920&height=700"
        alt="Map background"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="bg-green-700 bg-opacity-90 text-white p-8 sm:p-12 lg:p-16 max-w-md sm:max-w-lg">
          <h3 className="text-3xl sm:text-4xl font-bold mb-2">BINOX</h3>
          <p className="text-xl sm:text-2xl font-semibold mb-6">Contact info:</p>
          <div className="space-y-3 text-base sm:text-lg">
            <p>
              <a href="tel:+01-75-0660-605" className="hover:underline">
                +01-75-0660-605
              </a>
            </p>
            <p>
              <a href="mailto:hello@binox-consultant.com" className="hover:underline">
                hello@binox-consultant.com
              </a>
            </p>
            <p>140 Suits, Granville, saltcake tk street, N.J 3967097</p>
          </div>
        </div>
      </div>
    </section>
  )
}
