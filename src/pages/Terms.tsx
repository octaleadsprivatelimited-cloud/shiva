import { Layout } from "@/components/layout";
import heroImage from "@/assets/hero-farmland.jpg";

const Terms = () => (
  <Layout>
    <section className="relative pt-32 pb-20 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Terms of Service</h1>
        <p className="text-xl text-white/90">Last updated: January 2025</p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-card p-8 rounded-2xl border border-border space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Shiva Agri Clinic's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                Shiva Agri Clinic provides agricultural consulting services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Crop advisory and planning</li>
                <li>Pest and disease management consulting</li>
                <li>Soil testing and analysis</li>
                <li>Organic farming guidance</li>
                <li>Agricultural products and equipment recommendations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate information about your farm and requirements</li>
                <li>Use our recommendations responsibly and in accordance with local regulations</li>
                <li>Not misuse or redistribute our proprietary information</li>
                <li>Respect intellectual property rights of our content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">4. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                While we strive to provide accurate and helpful agricultural advice, farming outcomes depend on numerous factors beyond our control including weather, soil conditions, and implementation. Our services are provided "as is" without warranties of guaranteed results.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Shiva Agri Clinic shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on our website, including text, images, videos, and educational materials, is the property of Shiva Agri Clinic. You may not reproduce, distribute, or use this content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">7. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment for services is due as agreed upon engagement. Prices are subject to change with prior notice. Refunds, if applicable, will be processed as per our refund policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">8. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved in the courts of Hyderabad, Telangana.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at:
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

export default Terms;