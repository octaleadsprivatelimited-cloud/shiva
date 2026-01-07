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
    <section id="testimonials" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Hear From Our Farmers
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/10" />
            
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
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
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
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    index === currentIndex ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
