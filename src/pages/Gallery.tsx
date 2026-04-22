import { Layout } from "@/components/layout";
import { defaultGalleryHero, defaultGalleryItems } from "@/data/galleryData";
import { useGalleryItems } from "@/hooks/useCmsFirestore";

type GridItem = {
  key: string;
  title: string;
  category: string;
  image: string;
  type: "image" | "video";
  videoUrl?: string;
};

const Gallery = () => {
  const { data: fsItems = [] } = useGalleryItems();

  const display: GridItem[] =
    fsItems.length > 0
      ? fsItems.map((row) => ({
          key: row.id,
          title: row.title,
          category: row.category,
          image: row.imageUrl,
          type: row.type,
          videoUrl: row.videoUrl ?? undefined,
        }))
      : defaultGalleryItems.map((row) => ({
          key: String(row.id),
          title: row.title,
          category: row.category,
          image: row.image,
          type: "image" as const,
        }));

  return (
    <Layout>
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${defaultGalleryHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our work across farms in India - from field visits to success stories.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {display.map((item) => (
              <div key={item.key} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                {item.type === "video" && item.videoUrl ? (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full h-full items-center justify-center bg-secondary text-sm font-medium text-primary hover:bg-secondary/80"
                  >
                    {item.title} — open video
                  </a>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">{item.category}</span>
                      <h3 className="text-primary-foreground font-semibold mt-2">{item.title}</h3>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
