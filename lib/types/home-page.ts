export interface HomePageData {
  post: {
    id: string;
    homePageOurClients: {
      sectionTitle: string;
      clientLogo: {
        clientLogoImage: {
          node: {
            mediaItemUrl: string;
          };
        };
      }[];
    };
    ourClientHomePage: any;
    homePageHeroSection: {
      heroPostLink: string;
      heroPostShortDesc: string;
      heroPostTitle: string;
      heroStats: {
        statsNumber: string;
        statsText: string;
        icon: {
          node: {
            mediaItemUrl: string;
          };
        };
      }[];
    };
    homePageOurReachSection: {
      sectionHeading: string;
      reachSectionStats: {
        reachStats: string;
        reachTitle: string;
      }[];
    };
    homePageSuccessSection: {
      sectionTitle: string;
      successStats: {
        successRating: string;
        successText: string;
      }[];
    };
    servicesShowOnHomePage: {
      selectServices: {
        edges: {
          node: {
            slug: string;
            id?: string;
            title?: string;
          };
        }[];
      };
    };
    homePageAboutUs: {
      aboutUsLink: string;
      aboutUsTitle: string;
      sectionExcerpt: string;
      testimonials: {
        name: string;
        rating: string;
        title: string;
        content: string;
      }[];
    };
  };
}

// Additional helper types for better type safety
export interface HeroSectionData {
  heroPostLink: string;
  heroPostShortDesc: string;
  heroPostTitle: string;
  heroStats: HeroStat[];
}

export interface HeroStat {
  statsNumber: string;
  statsText: string;
  icon: {
    node: {
      mediaItemUrl: string;
    };
  };
}

export interface ClientsData {
  sectionTitle: string;
  clientLogo: ClientLogo[];
}

export interface ClientLogo {
  clientLogoImage: {
    node: {
      mediaItemUrl: string;
    };
  };
}

export interface OurReachSectionData {
  sectionHeading: string;
  reachSectionStats: ReachSectionStat[];
}

export interface ReachSectionStat {
  reachStats: string;
  reachTitle: string;
}

export interface SuccessSectionData {
  sectionTitle: string;
  successStats: SuccessStat[];
}

export interface SuccessStat {
  successRating: string;
  successText: string;
}

export interface ServicesShowOnHomePageData {
  selectServices: {
    edges: {
      node: {
        slug: string;
        id?: string;
        title?: string;
      };
    }[];
  };
}

export interface AboutUsSectionData {
  aboutUsLink: string;
  aboutUsTitle: string;
  sectionExcerpt: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  name: string;
  rating: string;
  title: string;
  content: string;
}

// WordPress media item type for reusability
export interface WordPressMediaItem {
  node: {
    mediaItemUrl: string;
  };
}