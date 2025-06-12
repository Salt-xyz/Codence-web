import React from 'react';
import Image from 'next/image';

import feature1 from '@/assets/features.jpg';
import feature2 from '@/assets/features.jpg';
import feature3 from '@/assets/features.jpg';
import feature4 from '@/assets/features.jpg';
import feature5 from '@/assets/features.jpg';

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Why Schools Are Choosing Codence
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Built to transform the way schools operate, Codence empowers teachers with intelligent tools, supports institutions with automation, and uplifts every student through personalized, AI-driven learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <Image
              src={feature1}
              alt="Smart PDF Tutor"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Smart PDF-to-Tutor</h3>
            <p className="text-gray-600 mt-2">
              Learn from any document using AI. Ask questions, get summaries, and master topics instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <Image
              src={feature2}
              alt="Unified Dashboards"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Unified Dashboards</h3>
            <p className="text-gray-600 mt-2">
              A clean dashboard for students, parents, and teachers—track progress and stay aligned.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <Image
              src={feature3}
              alt="AI Lesson Plans"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">AI-Powered Lesson Plans</h3>
            <p className="text-gray-600 mt-2">
              Teachers receive AI-generated lesson plans tailored to each class's pace and progress.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-left hover:shadow-md transition">
            <Image
              src={feature4}
              alt="Personalized Growth Paths"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Personalized Growth Paths</h3>
            <p className="text-gray-600 mt-2">
              Each student follows an adaptive path built by Codence&rsquo;s intelligent recommendation engine.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm text-left sm:col-span-2 lg:col-span-1 mx-auto hover:shadow-md transition">
            <Image
              src={feature5}
              alt="Secure & Scalable"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Secure & Scalable</h3>
            <p className="text-gray-600 mt-2">
              Codence runs securely at scale—whether you have 30 or 30,000 students across institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
