// Place avatar images at: /public/images/avatar1.jpg, /public/images/avatar2.jpg, /public/images/avatar3.jpg

import React from "react";

const testimonials = [
  {
    img: "/images/avatar1.jpg",
    name: "Alex Morgan",
    role: "Project Manager",
    text: "Civil Universe made it easy to find reliable contractors. The process was smooth and the results exceeded our expectations.",
  },
  {
    img: "/images/avatar2.jpg",
    name: "Priya Singh",
    role: "Homeowner",
    text: "I found the perfect business for my renovation. The platform is intuitive and the support team is fantastic!",
  },
  {
    img: "/images/avatar3.jpg",
    name: "Carlos Ramirez",
    role: "Business Owner",
    text: "Listing my business was simple and effective. I’ve connected with more clients than ever before.",
  },
];

const steps = [
  {
    title: "Search & Discover",
    desc: "Find trusted services and businesses tailored to your needs.",
  },
  {
    title: "Connect & Compare",
    desc: "Reach out, compare quotes, and choose the best fit.",
  },
  {
    title: "Get It Done",
    desc: "Enjoy seamless project completion with verified professionals.",
  },
];

const TestimonialsHowItWorks = () => (
  <div className="min-h-screen bg-background">
    {/* Testimonials Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-background rounded-lg shadow flex flex-col"
            >
              {/* Header row: avatar, name, role */}
              <div className="flex flex-row items-center mb-4">
                <img
                  src={t.img}
                  alt={`Avatar of ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-lg text-primary">{t.name}</span>
                  <span className="text-sm text-gray-400">{t.role}</span>
                </div>
              </div>
              {/* Testimonial body text */}
              <div className="text-charcoal text-left">{t.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* How It Works Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-primary mb-12 text-center">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center cursor-pointer"
              tabIndex={0}
              aria-label={`Step ${idx + 1}: ${step.title}`}
              onClick={() => console.log(`Step ${idx + 1}`)}
              onKeyPress={e => {
                if (e.key === "Enter" || e.key === " ") {
                  console.log(`Step ${idx + 1}`);
                }
              }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: "#F36B2A" }}
              >
                <span className="text-white text-2xl font-bold">{idx + 1}</span>
              </div>
              <div className="font-bold text-lg text-primary mb-2">{step.title}</div>
              <div className="text-charcoal text-sm">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default TestimonialsHowItWorks;