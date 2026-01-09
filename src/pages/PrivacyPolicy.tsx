import { Layout } from "@/components/layout";
import heroImage from "@/assets/hero-farmland.jpg";

const PrivacyPolicy = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-white/90">Last updated: January 2025</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-card p-8 rounded-2xl border border-border space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                At Shiva Agri Clinic, we collect information to provide better services to our farmers. This includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personal information (name, email, phone number) when you contact us</li>
                <li>Farm details and location for providing tailored agricultural advice</li>
                <li>Usage data when you visit our website</li>
                <li>Soil testing samples and related data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide personalized agricultural consultation services</li>
                <li>Send relevant farming tips and updates via our YouTube and Instagram channels</li>
                <li>Improve our services and develop new solutions</li>
                <li>Communicate about new products, services, and events</li>
                <li>Generate anonymized reports for agricultural research</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our services, conducting our business, or serving our farmers, so long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">5. Cookies</h2>
              <p className="text-muted-foreground">
                Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings, though this may affect some functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-foreground font-medium mt-2">
                Email: info@shivaagriclinic.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;