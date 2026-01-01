"use client";
import Link from "next/link";
import { DIcons } from "dicons";
import {
  Mail,
  Twitter,
  Instagram,
  MessageCircle,
  Phone,
  Dribbble,
  Facebook,
  Linkedin,
  Youtube,
  Heart,
} from "lucide-react";

import ThemeToogle from "@/components/ui/footer";

const navigation = {
  categories: [
    {
      id: "agency",
      name: "Agency",

      sections: [
        {
          id: "about",
          name: "About Us",
          items: [
            { name: "Who We Are", href: "#" },
            { name: "Our Process", href: "#" },
            { name: "Pricing", href: "#" },
          ],
        },
        {
          id: "services",
          name: "Services",
          items: [
            { name: "Web Design", href: "#" },
            { name: "Frontend Development", href: "#" },
            { name: "Motion & Interaction", href: "#" },
          ],
        },
        {
          id: "work",
          name: "Our Work",
          items: [
            { name: "Case Studies", href: "#" },
            { name: "Client Projects", href: "#" },
            { name: "Experiments", href: "#" },
          ],
        },
        {
          id: "resources",
          name: "Resources",
          items: [
            { name: "Components", href: "#" },
            { name: "Design Systems", href: "#" },
            { name: "Blog", href: "#" },
          ],
        },
        {
          id: "tools",
          name: "Tools",
          items: [
            { name: "UI Kits", href: "#" },
            { name: "Icon Library", href: "#" },
            { name: "Color Tools", href: "#" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Legal & Privacy", href: "#" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `;

export default function MainFooter() {
  return (
    <footer className="bg-zinc-950 border-ali/20 :px-4 mx-auto w-full border-b   border-t  px-2">
      <div className="relative mx-auto grid  max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex ">
        <Link href="/">
          <p className="font-bold text-2xl bg-transparent text-nowrap text-center text-primary/80 md:text-left">
            The CSS Shop
          </p>
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-primary/60 md:text-left">
          Welcome to TheCSSShop — a creative development agency focused on
          building high-impact digital experiences through modern web design,
          frontend development, motion, and interactive interfaces. By blending
          strategy, performance, and clean engineering, we craft visually
          striking, scalable products that help brands stand out and grow.
          TheCSSShop is led by Chiranjeev Singh Sandhu, a computer science
          engineer and frontend developer who drives the agency’s vision of
          building performance-focused, conversion-ready digital products.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white md:text-xs"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Email"
            href="mailto:contact@thecssshop.com"
            target="_blank"
            className={Underline}
          >
            <Mail className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Twitter"
            href="#"
            target="_blank"
            className={Underline}
          >
            <Twitter className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Instagram"
            href="#"
            target="_blank"
            className={Underline}
          >
            <Instagram className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Threads / Chat"
            href="#"
            target="_blank"
            className={Underline}
          >
            <MessageCircle className="h-5 w-5" />
          </Link>

          <Link
            aria-label="WhatsApp"
            href="#"
            target="_blank"
            className={Underline}
          >
            <Phone className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Dribbble"
            href="#"
            target="_blank"
            className={Underline}
          >
            <Dribbble className="h-5 w-5" />
          </Link>

          <Link
            aria-label="Facebook"
            href="#"
            target="_blank"
            className={Underline}
          >
            <Facebook className="h-5 w-5" />
          </Link>

          <Link
            aria-label="LinkedIn"
            href="#"
            target="_blank"
            className={Underline}
          >
            <Linkedin className="h-5 w-5" />
          </Link>

          <Link
            aria-label="YouTube"
            href="#"
            target="_blank"
            className={Underline}
          >
            <Youtube className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with </span>
          <Heart className="text-red-600 fill-red-500 mx-1 h-4 w-4 animate-pulse" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <Link
              aria-label="Logo"
              className="font-bold"
              href="#"
              target="_blank"
            >
              TheCSSShop®
            </Link>
          </span>
          -
          <span className="hover:text-ali dark:hover:text-red-600 cursor-pointer text-slate-600 dark:text-slate-400">
            <Link aria-label="Logo" className="" href="/">
              Chiranjeev Singh Sandhu
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
