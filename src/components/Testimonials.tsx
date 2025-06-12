import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

// Define Testimonial type
type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

// Testimonials data
const testimonials: Testimonial[] = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Codence instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using Codence in our classrooms.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Codence has completely transformed how I manage students and track their progress.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this platform into our school's workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning lessons and tracking outcomes has never been easier. Codence makes everything flow.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The AI tutor feature is top-notch. My students are actually excited to learn again.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting Codence has streamlined our teaching efforts and helped us focus more on students.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With Codence, we track learning, assignments, and feedback in one seamless dashboard.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its thoughtful UI and powerful features support our school’s diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

// Slicing into columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Column Component
const TestimonialsColumn = ({
  className,
  testimonials,
}: {
  className?: string;
  testimonials: Testimonial[];
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]",
      className
    )}
  >
    {testimonials.map(({ text, imageSrc, name, username }) => (
      <div
        key={username}
        className="bg-white/80 border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
        <div className="flex items-center gap-3 mt-4">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-left">
            <div className="font-medium text-gray-900 text-sm">{name}</div>
            <div className="text-gray-500 text-sm">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Main Component
export const Testimonials = () => {
  return (
    <section className="bg-[#F8FBFF] py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <div className="mb-12">
          <div className="inline-block bg-[#D0E3FF] text-sm text-gray-800 px-4 py-1 rounded-full font-medium tracking-tight">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-gray-900 tracking-tight">
            What Our Users Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            From intuitive design to intelligent tools — Codence has become an essential part of classrooms and institutions around the world.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex" />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};
