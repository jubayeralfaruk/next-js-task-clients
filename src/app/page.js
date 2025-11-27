'use client'; 

import Categories from "@/components/Categories";
import Deals from "@/components/Deals";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="mx-3">
      <Hero />
      <NewProducts />
      <Categories />
      <Deals />
      <Testimonials />
    </div>
  );
}
