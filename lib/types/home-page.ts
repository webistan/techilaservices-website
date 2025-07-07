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

    homePageWorkProcess: {
      sectionHeading: string;
      processLink: string;
      processDetails: {
        fieldGroupName: string;
        proccessTitle: string;
        processExcerpt: string;
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
      selectTestimonialPost: {
        edges: {
          node: {
            id: string;
            ourClientTestimonials: {
              testimonials: {
                authorName: string;
                designation: string;
                rating: string;
                testimonial: string;
              }
            }
          }
        }
      }[];
    };
    homePageFAQSection: {
      sectionTitle: string;
      faqs: {
        question: string;
        answer: string;
      }[];
    };
  };
}