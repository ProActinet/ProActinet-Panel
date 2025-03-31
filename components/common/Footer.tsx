import Link from "next/link";
import { Heart, Home, BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-900 to-pink-950 text-pink-100 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-800/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-pink-800/20 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-pink-400" />
              <h2 className="text-2xl font-bold text-white">ProActinet</h2>
            </div>
            <p className="text-pink-200/80 max-w-xs">
              Creating beautiful experiences that make people's lives better.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://github.com/ProActinet"
                className="text-pink-300 hover:text-white transition-colors duration-300 hover:scale-110 transform inline-block"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.instagram.com/deleteinstaenjoylife/"
                className="text-pink-300 hover:text-white transition-colors duration-300 hover:scale-110 transform inline-block"
              >
                <RiInstagramFill className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:marsal.test@200630.xyz"
                className="text-pink-300 hover:text-white transition-colors duration-300 hover:scale-110 transform inline-block"
              >
                <IoMail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="group flex items-center text-pink-200 hover:text-white transition-colors duration-300"
                >
                  <Home className="h-4 w-4 mr-2 group-hover:text-pink-400 transition-colors duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/introduction"
                  className="group flex items-center text-pink-200 hover:text-white transition-colors duration-300"
                >
                  <BookOpen className="h-4 w-4 mr-2 group-hover:text-pink-400 transition-colors duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Documentation
                  </span>
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/docs/introduction"
                  className="group flex items-center text-pink-300/70 hover:text-white transition-colors duration-300"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Introduction
                  </span>
                </Link>
              </li>
              <li className="pl-6">
                <Link
                  href="/docs/installation"
                  className="group flex items-center text-pink-300/70 hover:text-white transition-colors duration-300"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Installation
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="blogs.200630.xyz"
                  className="group flex items-center text-pink-200 hover:text-white transition-colors duration-300"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Blog
                  </span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtu.be/GC65GEMmGZc?si=NSwigrq1ZYDd9cVN"
                  className="group flex items-center text-pink-200 hover:text-white transition-colors duration-300"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Showcase
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center text-pink-200 hover:text-white transition-colors duration-300"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Support
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-pink-200/80 text-sm">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-pink-950/50 border-pink-800/50 focus:border-pink-500 text-white placeholder:text-pink-300/50 pr-10"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7 bg-pink-700 hover:bg-pink-600 transition-colors duration-300"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              <p className="text-pink-400/60 text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-pink-800/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-pink-300/70 text-sm">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-pink-300/70 text-sm hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-pink-300/70 text-sm hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-pink-300/70 text-sm hover:text-white transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
