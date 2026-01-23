import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import ashokImage from "@/assets/Ashok.jpeg";
import buchiReddyImage from "@/assets/Buchi Reddy.jpeg";
import ajayKumarReddyImage from "@/assets/Ajay Kumar Reddy.jpeg";
import ramuImage from "@/assets/Ramu.jpeg";

const testimonials = [
  {
    id: 1,
    quote: "Shiva Agri Clinic played an important role in showcasing my flower farming practices to many fellow farmers. Through their efforts, my colour flower cultivation was shared as a practical example, creating awareness about the potential of flower crops. This exposure encouraged other farmers to explore flower farming as a profitable option. I am grateful to Shiva Agri Clinic for highlighting my work and helping spread knowledge that supports better farming practices and improved farmer income.",
    name: "Ashok",
    role: "Flower Farmer - Vikarabad District, Telangana",
    image: ashokImage,
  },
  {
    id: 2,
    quote: "Shiva Agri Clinic actively promoted my unique Gac fruit farming through video coverage, which gave my cultivation strong visibility among farmers and buyers. This promotion helped create awareness about the value and market potential of Gac fruit. With better marketing and increased interest, I was able to reach more people and improve my income. I appreciate Shiva Agri Clinic for supporting innovative crops and helping farmers benefit through knowledge, promotion, and market exposure.",
    name: "Buchi Reddy",
    role: "Fruit Farmer - Rangareddy District, Telangana",
    image: buchiReddyImage,
  },
  {
    id: 3,
    quote: "Shiva Agri Clinic gave me the opportunity to share my palm oil farming experience through their videos. By showcasing practical techniques, daily farm practices, and tips for higher yield, I was able to reach many fellow farmers. It feels rewarding to know that my knowledge is helping others improve their farming, manage crops better, and increase their income. I sincerely thank Shiva Agri Clinic for creating this platform that connects farmers and spreads valuable, practical guidance.",
    name: "Ajay Kumar Reddy",
    role: "Palm oil Farmer - Mahabubnagar District, Telangana",
    image: ajayKumarReddyImage,
  },
  {
    id: 4,
    quote: "Growing dragon fruit was a new experience for me, and I wasn't sure how to reach the market. Shiva Agri Clinic guided me not only in cultivation techniques but also in connecting directly with customers. This helped me sell my fruits at better prices and build a loyal customer base. I am also happy that my plants and knowledge could reach other farmers, encouraging them to start dragon fruit cultivation. Thanks to Shiva Agri Clinic, my farming has become more profitable, organized, and inspiring for others.",
    name: "Ramu",
    role: "Dragon Fruit Farmer - Rangareddy District, Telangana",
    image: ramuImage,
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
    <section id="testimonials" className="py-8 md:py-12 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <span className="text-accent font-semibold text-xs md:text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
            Hear From Our Farmers
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg relative overflow-hidden">
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
                  <div className="flex flex-col items-center">
                    {/* Client Image */}
                    <div className="mb-4">
                      <div className="w-28 h-32 md:w-36 md:h-40 rounded-xl md:rounded-2xl overflow-hidden border-2 border-accent/20 shadow-lg bg-muted mx-auto flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-contain"
                          loading="eager"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector('.fallback-initial')) {
                              const fallback = document.createElement('div');
                              fallback.className = 'fallback-initial w-full h-full flex items-center justify-center bg-accent/20 text-accent font-semibold text-lg md:text-xl';
                              fallback.textContent = testimonial.name.charAt(0);
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <p className="text-sm md:text-base lg:text-lg text-foreground mb-4 md:mb-5 italic leading-relaxed text-center">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Name and Role */}
                    <div className="text-center">
                      <h4 className="font-heading font-semibold text-foreground text-base md:text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6">
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
