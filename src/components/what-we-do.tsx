import { Check } from "lucide-react";
import Image from "next/image";

export default function WhatWeDo() {
  const benefits = [
    "Maximizes direct sales channel investments",
    "Supplements internal marketing and sales teams",
    "Grows the brand awareness of our ISP partners",
    "Increases sales close rates",
    "Expands the customer base of our ISP partners",
  ];

  return (
    <section id="what-we-do" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">What We Do</h2>
          <p className="text-xl text-primary/80 dark:text-secondary/80 mb-12 text-center max-w-3xl mx-auto">
            Delivering exceptional sales performance for ISPs nationwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <p className="text-lg mb-8 leading-relaxed">
                Indigo Fibers takes care of distributed residential & small
                business sales for ISPs so they can focus on other critical
                aspects of their business. Our approach is simple, and effective
                and delivers the following value to our ISP partners.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 rounded-full bg-primary/20 dark:bg-secondary/20 p-1">
                      <Check className="h-5 w-5 text-primary dark:text-secondary" />
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/sales-professional.png"
                      alt="Enthusiastic sales professional with laptop"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center 20%",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-[#ffc602]/90 dark:bg-[#ffc602]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20 max-w-xs border border-white/20"
                style={{ borderRadius: "8px" }}
              >
                <p className="text-[#211f60] font-medium dark:text-[#211f60]">
                  With our proven experience, we handle the complexities of
                  internet sales while you concentrate on your core business
                  priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
