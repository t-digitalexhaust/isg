"use client";

import StackedCards from "./stacked-cards";

export default function PartnerWithUs() {
  const benefits = [
    {
      title: "Immediate Market Presence",
      points: [
        "We hit the ground running with our energized sales professionals in your local and regional markets",
        "Establish a strong presence in your target communities from day one",
        "No ramp-up period or culture-building delays; all of our marketing and sales teams are trained on your product and value propositions so they are ready to move on day 1.",
      ],
    },
    {
      title: "Proven Scalability",
      points: [
        "Expand or contract sales efforts based on your changing needs",
        "Replicate success across multiple markets seamlessly",
        "Adapt quickly to seasonal demands and market opportunities",
      ],
    },
    {
      title: "Decades of Expertise",
      points: [
        "Leverage Indigo Solutions' 25 years of specialized marketing and sales experience",
        "Benefit from our refined processes in recruiting, hiring, and training",
        "Access data-driven coaching systems that deliver measurable results",
      ],
    },
    {
      title: "Maximize Investment and Decrease Risk",
      points: [
        "Lower the investment in hiring marketing and sales professionals and leave that to us.",
        "No need to worry about personnel turnover in your marketing and sales teams",
        "Rather than investing in marketing and sales headcount, you can invest in other parts of your business",
      ],
    },
  ];

  const stackedItems = benefits.map((benefit) => ({
    title: benefit.title,
    content: (
      <ul className="list-disc pl-6 space-y-2">
        {benefit.points.map((point, idx) => (
          <li key={idx} className="text-base">
            {point}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <section
      id="partner-with-us"
      className="py-20"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Partner With Us
          </h2>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto text-[#211f60]/80 dark:text-[#ffc602]/80">
            Why Outsource Your Marketing & Sales Teams?
          </p>

          <p className="text-lg mb-12 leading-relaxed max-w-4xl mx-auto text-center">
            Building and maintaining internal marketing and sales teams is
            costly, time-consuming, and diverts focus from your core business
            operations. Indigo Solutions Group eliminates these challenges.
          </p>

          <h3 className="text-2xl font-semibold mb-8 text-center">
            When You Partner With Indigo Solutions Group Your ISP Will Gain:
          </h3>

          <div className="mb-12 max-w-3xl mx-auto">
            <StackedCards items={stackedItems} />
          </div>

          <p className="text-lg mb-8 font-medium text-center max-w-4xl mx-auto">
            Let us handle the complexities of marketing and sales while you
            concentrate on providing exceptional service to the customers we
            bring you.
          </p>

          <div
            className="p-8 rounded-lg mb-10 max-w-4xl mx-auto border"
            style={{
              backgroundColor: "rgba(33, 31, 96, 0.05)",
              backdropFilter: "blur(8px)",
              borderColor: "rgba(33, 31, 96, 0.1)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Ready to elevate your sales performance without the overhead?
            </h3>
            <div className="flex justify-center">
              <button
                className="glass-button h-11 px-8 rounded-md font-semibold"
                onClick={() => {
                  // This would typically open a contact form or modal
                  alert(
                    "Contact form would open here. This would be integrated with Monday.com"
                  );
                }}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
