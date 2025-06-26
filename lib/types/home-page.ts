// Home page data types
export interface HomePageData {
  page: {
    title: string;
    homePageHeroSection: {
      heroTitle: string;
      heroDescription: string;
      heroImage: {
        node: {
          sourceUrl: string;
        };
      };
    };
    homePageClientsSection: {
      clientLogos: {
        node: {
          sourceUrl: string;
        };
      }[];
    };
    homePageTestimonialsSection: {
      testimonials: {
        name: string;
        feedback: string;
        image: {
          node: {
            sourceUrl: string;
          };
        };
      }[];
    };
  };
}

// Individual component prop types for better reusability
export interface HeroSectionData {
  heroTitle: string;
  heroDescription: string;
  heroImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export interface ClientLogo {
  node: {
    sourceUrl: string;
  };
}

export interface Testimonial {
  name: string;
  feedback: string;
  image: {
    node: {
      sourceUrl: string;
    };
  };
}