import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Shiva Agri Clinic played an important role in showcasing my flower farming practices to many fellow farmers. Through their efforts, my colour flower cultivation was shared as a practical example, creating awareness about the potential of flower crops. This exposure encouraged other farmers to explore flower farming as a profitable option. I am grateful to Shiva Agri Clinic for highlighting my work and helping spread knowledge that supports better farming practices and improved farmer income.",
    name: "Ashok",
    role: "Flower Farmer - Vikarabad District, Telangana",
  },
  {
    id: 2,
    quote: "Shiva Agri Clinic actively promoted my unique Gac fruit farming through video coverage, which gave my cultivation strong visibility among farmers and buyers. This promotion helped create awareness about the value and market potential of Gac fruit. With better marketing and increased interest, I was able to reach more people and improve my income. I appreciate Shiva Agri Clinic for supporting innovative crops and helping farmers benefit through knowledge, promotion, and market exposure.",
    name: "Buchi Reddy",
    role: "Fruit Farmer - Rangareddy District, Telangana",
  },
  {
    id: 3,
    quote: "Shiva Agri Clinic gave me the opportunity to share my palm oil farming experience through their videos. By showcasing practical techniques, daily farm practices, and tips for higher yield, I was able to reach many fellow farmers. It feels rewarding to know that my knowledge is helping others improve their farming, manage crops better, and increase their income. I sincerely thank Shiva Agri Clinic for creating this platform that connects farmers and spreads valuable, practical guidance.",
    name: "Ajay Kumar Reddy",
    role: "Palm oil Farmer - Mahabubnagar District, Telangana",
  },
  {
    id: 4,
    quote: "Growing dragon fruit was a new experience for me, and I wasn't sure how to reach the market. Shiva Agri Clinic guided me not only in cultivation techniques but also in connecting directly with customers. This helped me sell my fruits at better prices and build a loyal customer base. I am also happy that my plants and knowledge could reach other farmers, encouraging them to start dragon fruit cultivation. Thanks to Shiva Agri Clinic, my farming has become more profitable, organized, and inspiring for others.",
    name: "Ramu",
    role: "Dragon Fruit Farmer - Rangareddy District, Telangana",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Hear From Our Farmers
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 shadow-lg relative overflow-hidden">
            <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-16 md:h-16 text-accent/10" />
            
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500",
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8"
                )}
              >
                {index === currentIndex && (
                  <div className="text-center">
                    <p className="text-sm md:text-lg lg:text-xl text-foreground mb-4 md:mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="flex gap-1.5 md:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all",
                    index === currentIndex ? "bg-accent w-6 md:w-8" : "bg-border hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
