import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import farmerConsultation from "@/assets/farmer-consultation.jpg";

const testimonials = [
  {
    id: 1,
    quote: "Shiva Agri Clinic has transformed the way I farm. Their expert advice on pest management helped me reduce crop losses by 70%. I highly recommend their services to every farmer.",
    name: "Ramesh Kumar",
    role: "Cotton Farmer, Maharashtra",
    image: farmerConsultation,
  },
  {
    id: 2,
    quote: "The soil testing service opened my eyes to what my land really needed. After following their fertilizer recommendations, my wheat yield increased by 40% in just one season.",
    name: "Lakshmi Devi",
    role: "Wheat Farmer, Punjab",
    image: farmerConsultation,
  },
  {
    id: 3,
    quote: "Shiva Kumar and his team provided excellent guidance on organic farming practices. Now my produce fetches premium prices in the market, and I am proud to grow chemical-free crops.",
    name: "Venkatesh Reddy",
    role: "Organic Farmer, Andhra Pradesh",
    image: farmerConsultation,
  },
  {
    id: 4,
    quote: "The smart farming solutions recommended by Shiva Agri Clinic have modernized my entire operation. From weather alerts to pest predictions, everything is now at my fingertips.",
    name: "Suresh Patil",
    role: "Sugarcane Farmer, Karnataka",
    image: farmerConsultation,
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
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 md:border-4 border-accent/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
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
