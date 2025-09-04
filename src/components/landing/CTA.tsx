import Link from "@docusaurus/Link";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)),url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg')] bg-cover bg-center">
          <div className="flex flex-col gap-8 p-4 text-center">
            <h2 className="text-primary-foreground text-5xl font-bold">
              Start exploring the docs.
            </h2>
            <p className="text-primary-foreground text-lg">
              Read the Introduction to get oriented, then dive into guides, tutorials, and references.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Link to="/docs/intro">
                <Button size="lg" variant="default">
                  Read Introduction
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="secondary">
                  Visit Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };
