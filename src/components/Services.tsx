import React from 'react'

const Services = () => {
  return (
    <section className="py-20 bg-[#F8FBFF]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          From tailored digital platforms to intelligent tools — Codence builds reliable, scalable solutions for the modern education space and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">Website Development</h3>
            <p className="text-gray-600 mt-2">Custom-built, responsive, and optimized websites for institutions, edtech products, and startups.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
            <p className="text-gray-600 mt-2">Seamless cross-platform mobile apps built for performance and great user experience.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">AI-Powered Solutions</h3>
            <p className="text-gray-600 mt-2">From chatbots to learning models — integrate custom AI features into your education workflow.</p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800">Ongoing Support</h3>
            <p className="text-gray-600 mt-2">Continuous updates, hosting, and reliable tech support to keep your systems running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
