import { Layout } from "@/components/layout";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import heroImage from "@/assets/farmer-consultation.jpg";
import founderImage from "@/assets/founder.jpg";
import { useTeamMembers } from "@/hooks/useCmsFirestore";

const teamMembers = [
  {
    name: "G. Shiva Kumar",
    role: "Founder & Chief Agricultural Consultant",
    image: "👨‍🌾",
    bio: "Founded by G. Shiva Kumar, National Youth Awardee (Government of India), Shiva Agri Clinic is a farmer-focused agricultural education platform dedicated to empowering farmers with practical knowledge.",
    social: {
      youtube: "https://youtube.com/@shivaagriclinic?si=tOPmSbMB-e4gMwIt",
      instagram: "https://www.instagram.com/shiva_agriclinic/",
    },
  },
  {
    name: "Dr. Priya Sharma",
    role: "Senior Soil Scientist",
    image: "👩‍🔬",
    bio: "PhD in Soil Science with expertise in soil health management and sustainable agriculture practices.",
  },
  {
    name: "Rajesh Patel",
    role: "Pest Management Expert",
    image: "👨‍🔬",
    bio: "Specialist in Integrated Pest Management (IPM) with 10+ years of field experience across diverse crops.",
  },
  {
    name: "Dr. Anita Reddy",
    role: "Organic Farming Specialist",
    image: "👩‍🌾",
    bio: "Expert in organic certification processes and sustainable farming methodologies.",
  },
  {
    name: "Vikram Singh",
    role: "Crop Advisory Lead",
    image: "👨‍💼",
    bio: "Agricultural engineer specializing in crop planning and yield optimization strategies.",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Field Operations Manager",
    image: "👩‍💼",
    bio: "Coordinates on-ground operations and ensures seamless delivery of services to farmers.",
  },
];

const Team = () => {
  const { data: fsTeam = [] } = useTeamMembers();
  const members = fsTeam.length > 0 ? fsTeam : teamMembers;

  const founder = members.find((m) => m.role.toLowerCase().includes("founder")) || members[0];
  const others = members.filter((m) => m.id !== founder.id && m.name !== founder.name);

  const getFounderImage = (f: typeof founder) => {
    if (f.image && (f.image.startsWith("http") || f.image.startsWith("data:"))) {
      return f.image;
    }
    if (f.name.includes("Shiva Kumar")) {
      return founderImage;
    }
    return null;
  };

  const renderMemberAvatar = (image: string) => {
    if (image && (image.startsWith("http") || image.startsWith("data:"))) {
      return (
        <div className="flex justify-center mb-4">
          <img src={image} alt="" className="w-20 h-20 rounded-full object-cover border-2 border-accent shrink-0" />
        </div>
      );
    }
    return <div className="text-6xl mb-4">{image || "👨‍🌾"}</div>;
  };

  const fImage = getFounderImage(founder);

  return (
    <Layout>
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the dedicated experts behind Shiva Agri Clinic's success in transforming Indian agriculture.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Founder Highlight */}
          {founder && (
            <div className="mb-16 bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-primary flex items-center justify-center overflow-hidden min-h-[300px]">
                  {fImage ? (
                    <img 
                      src={fImage} 
                      alt={founder.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-8xl flex items-center justify-center p-12 bg-accent/10 w-full h-full rounded-2xl">
                      {founder.image || "👨‍🌾"}
                    </div>
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Founder</span>
                  <h2 className="text-3xl font-heading font-bold mb-2">{founder.name}</h2>
                  <p className="text-accent font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground mb-6">{founder.bio}</p>
                  {founder.social && (
                    <div className="flex gap-3">
                      {founder.social.youtube && (
                        <a
                          href={founder.social.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Youtube className="w-5 h-5" />
                        </a>
                      )}
                      {founder.social.instagram && (
                        <a
                          href={founder.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {founder.social.linkedin && (
                        <a
                          href={founder.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Team Grid */}
          {others.length > 0 && (
            <>
              <h2 className="text-2xl font-heading font-bold text-center mb-10">Our Expert Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((member) => (
                  <div key={member.name} className="bg-card rounded-2xl border border-border p-6 text-center hover:border-accent transition-colors">
                    {renderMemberAvatar(member.image)}
                    <h3 className="text-xl font-heading font-semibold mb-1">{member.name}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Team;