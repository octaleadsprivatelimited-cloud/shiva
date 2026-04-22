import { useState } from "react";
import { Layout } from "@/components/layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import { useSiteSettings } from "@/hooks/useCmsFirestore";
import { defaultSiteSettings } from "@/lib/defaultSiteSettings";
import { toast } from "sonner";

const Contact = () => {
  const { data: settings = defaultSiteSettings } = useSiteSettings();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = `${firstName} ${lastName}`.trim();
    if (!name || !email.trim() || !message.trim()) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setSubmitting(true);
    try {
      const db = getDb();
      if (!db) {
        toast.error(
          "Contact form is unavailable: Firebase is not configured. Add VITE_FIREBASE_* variables in Vercel and redeploy.",
        );
        setSubmitting(false);
        return;
      }
      const payload: Record<string, unknown> = {
        name,
        email: email.trim(),
        message: message.trim(),
        read: false,
        createdAt: Timestamp.now(),
      };
      if (phone.trim()) payload.phone = phone.trim();
      if (subject.trim()) payload.subject = subject.trim();
      await addDoc(collection(db, "inquiries"), payload);
      toast.success("Message sent. We will get back to you soon.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not send message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description={`Get in touch with Shiva Agri Clinic for expert agricultural consultation. Phone: ${settings.phone}`}
        keywords="contact Shiva Agri Clinic, agricultural consultation, farming advice, crop advisory contact, agricultural experts India"
      />
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with our agricultural experts for personalized consultation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative p-8 rounded-2xl shadow-lg border border-border overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${heroImage})`,
                  filter: "hue-rotate(80deg) saturate(2) brightness(0.85) contrast(1.1)",
                  opacity: 0.25,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.2) 100%)",
                }}
              />
              <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />

              <div className="relative z-10">
                <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4" onSubmit={(e) => void handleSubmit(e)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name *"
                      className="bg-background/90 backdrop-blur-sm border-border/50"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <Input
                      placeholder="Last Name *"
                      className="bg-background/90 backdrop-blur-sm border-border/50"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    className="bg-background/90 backdrop-blur-sm border-border/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-background/90 backdrop-blur-sm border-border/50"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    placeholder="Subject"
                    className="bg-background/90 backdrop-blur-sm border-border/50"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <Textarea
                    placeholder="Your Message *"
                    rows={5}
                    className="bg-background/90 backdrop-blur-sm border-border/50"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Button variant="hero" size="lg" className="w-full" type="submit" disabled={submitting}>
                    <Send className="w-4 h-4 mr-2" /> {submitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">{settings.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">{settings.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">{settings.location}</p>
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={settings.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={settings.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={settings.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={settings.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
