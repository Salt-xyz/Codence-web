import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/Logo.png'

export const Footer = () => {
  return (
    <footer className="bg-[#F8FBFF] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo and Info */}
        <div className="flex items-center gap-3">
          {/* Replace with your logo */}
          <Image src={Logo} alt="Logo" width={150} />
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <Link href="/about" className="hover:text-blue-600 transition">
            About Us
          </Link>
          <Link href="/features" className="hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/privacy" className="hover:text-blue-600 transition">
            Privacy Policy
          </Link>
        </nav>

        {/* Social icons (simple placeholders) */}
        <div className="flex gap-5 text-gray-600">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.93 4.93 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.917 4.917 0 001.523 6.573 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.105c-.396 0-.787-.023-1.17-.067a13.933 13.933 0 007.557 2.209c9.054 0 14.004-7.503 14.004-14.004 0-.213-.004-.425-.014-.636a10.012 10.012 0 002.466-2.548l.002-.003z" />
            </svg>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.244l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.597 1.324-1.326V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.849-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667h-3.554V9h3.414v1.561h.05c.476-.9 1.637-1.849 3.37-1.849 3.604 0 4.271 2.373 4.271 5.457v6.283zM5.337 7.433a2.065 2.065 0 110-4.131 2.065 2.065 0 010 4.131zM6.911 20.452H3.763V9h3.148v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.271V1.729C24 .771 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Codence. All rights reserved.
      </div>
    </footer>
  );
};
