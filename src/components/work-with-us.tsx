"use client";

import StackedCards from "./stacked-cards";

export default function WorkWithUs() {
  const benefits = [
    {
      title:
        "High-Speed Fiber Internet is a Thriving Industry With Unlimited Opportunity",
      points: [
        "Enter a booming market with increasing demand for fast, reliable internet",
        "Tap into untapped markets where fiber access is still expanding",
        "Position yourself at the forefront of digital infrastructure development",
      ],
    },
    {
      title: "Exceptional Earning Potential",
      points: [
        "Benefit from uncapped commission structures on a premium service",
        "Earn performance bonuses and competitive incentives",
        "Control your income through your performance",
      ],
    },
    {
      title: "Sell a Product Everyone Needs",
      points: [
        "Provide technology that transforms small business, remote work, online learning, entertainment, and gaming",
        "Offer solutions customers actively seek out",
        "Deliver genuine value that makes a difference in people's daily lives",
      ],
    },
    {
      title: "Clear Path for Advancement",
      points: [
        "Develop transferable sales, technical, and problem-solving expertise",
        "Access opportunities for leadership and management roles",
        "Grow with a company that promotes from within",
      ],
    },
    {
      title: "Secure Your Future",
      points: [
        "Build stability in an industry with continuous growth",
        "Meet the escalating demand for high-speed connectivity",
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
    <section id="work-with-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Work With Us</h2>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto text-[#211f60]/80 dark:text-[#ffc602]/80">
            Transform Your Career While Transforming Communities
          </p>

          <p className="text-lg mb-12 leading-relaxed max-w-4xl mx-auto text-center">
            Selling high-speed internet with Indigo Solutions Group isn't just a
            job—it's your gateway to an exciting career in one of America's
            fastest-growing industries. As you help connect communities
            nationwide with essential technology, you'll build valuable skills
            and earn industry-leading commissions.
          </p>

          <h3 className="text-2xl font-semibold mb-8 text-center">
            Why Choose a Career with Us?
          </h3>

          <div className="mb-12 max-w-3xl mx-auto">
            <StackedCards items={stackedItems} />
          </div>

          <div
            className="p-8 rounded-lg mb-10 max-w-4xl mx-auto border"
            style={{
              backgroundColor: "rgba(33, 31, 96, 0.05)",
              backdropFilter: "blur(8px)",
              borderColor: "rgba(33, 31, 96, 0.1)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Make Your Mark While Making Your Future
            </h3>
            <p className="text-lg mb-6 text-center">
              At Indigo Solutions Group, you'll build a rewarding career while
              empowering communities with essential technology; all while
              earning top commissions in the industry.
            </p>
            <div className="flex justify-center">
              <button
                className="glass-button h-11 px-8 rounded-md font-semibold"
                onClick={() => {
                  const interviewForm =
                    document.getElementById("interview-form");
                  if (interviewForm) interviewForm.classList.remove("hidden");
                }}
              >
                Schedule Your Interview Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
