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

// WordPress media item type for reusability
export interface WordPressMediaItem {
  node: {
    mediaItemUrl: string;
  };
}