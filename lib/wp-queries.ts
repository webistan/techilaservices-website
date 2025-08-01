// WordPress GraphQL queries for use with graphql-request

import { gql } from 'graphql-request';

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id  
          title
          excerpt
          date
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;


export const GET_BLOG_PAGE_BY_SLUG = gql`
    query GetBlogPageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        id
        date
        title(format: RENDERED)
        featuredImage {
          node {
            filePath
            sourceUrl(size: LARGE)
          }
        }
        contentTypeName
        content(format: RENDERED)
       
        newServiceSection {
          bottomBannerStats
          leftContent
          serviceExpert
          topBanner {
            node {
              sourceUrl(size: LARGE)
            }
          }
          bottomBanner {
            node {
              sourceUrl(size: LARGE)
            }
          } ourProcess {
          title
          desc
          steps {
            title
            content
          }
        }
          whyChooseUs {
        subHeading
        title
        points {
          content
          title
        }
        chooseusImage {
          node {
            mediaItemUrl
          }
        }
      }
            servicesPageFaq {
        faqAnswer
        faqQuestion
      }

          rightSectionImage {
            node {
              filePath(size: LARGE)
              mediaItemUrl
            }
          }
        }
      }
    }
`;




export const GET_CASE_STUDIES = gql`
  query GetCaseStudies($first: Int = 10) {
    caseStudies(first: $first) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const GET_SERVICES = gql`
  query GetServices($first: Int = 10) {
    services(first: $first) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 10) {
    teamMembers(first: $first) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        customFields {
          position
          linkedinUrl
        }
      }
    }
  }
`;

export const GET_PARTNERS = gql`
  query GetPartners($first: Int = 10) {
    partners(first: $first) {
      nodes {
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_CONTACT_INFO = gql`
  query GetContactInfo {
    page(id: "contact", idType: URI) {
      title
      content
      customFields {
        phone
        email
        address
        mapEmbed
      }
    }
  }
`;

export const GET_HOME_PAGE_DATA = gql`
  query NewQuery {
  post(id: "49017", idType: DATABASE_ID) {
    id
    homePageHeroSection {
      heroPostLink
      heroPostShortDesc
      heroPostTitle
      heroStats {
        statsNumber
        statsText
        icon {
          node {
            mediaItemUrl
          }
        }
      }
    }


homePageWorkProcess {
          sectionHeading
          processLink
          processDetails {
            fieldGroupName
            proccessTitle
            processExcerpt
          }
          
        }


    ourClientHomePage {
      homePageClients {
        nodes {
          homePageOurClients {
            sectionTitle
            clientLogo {
              clientLogoImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    } 
    homePageOurClients {
      sectionTitle
      clientLogo {
        clientLogoImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
    
    homePageSuccessSection {
      sectionTitle
      successStats {
        successRating
        successText
      }
    }
    servicesShowOnHomePage {
      selectServices {
        edges {
          node {
            slug
            ... on Page {
              id
              title
            }
          }
        }
      }
    }

      homePageFaq {
          fieldGroupName
          faqPost {
            edges {
              node {
                slug
                faq {
                  faq {
                    faqAnswer
                    faqQuestion
                    fieldGroupName
                  }
                  fieldGroupName
                }
              }
            }
          }
        }



    homePageAboutUs {
      aboutUsLink
      aboutUsTitle
      sectionExcerpt
      selectTestimonialPost {
        edges {
          node {
            id
            ourClientTestimonials {
              testimonials {
                authorName
                designation
                rating
                testimonial
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GET_MENU_ITEMS_BY_LOCATION = gql`
  query GetMenuItems($location: MenuLocationEnum!) {
    menuItems(where: {location: $location}) {
      edges {
        node {
          id
          label
          childItems {
            edges {
              node {
                id
                label
                childItems {
                  edges {
                    node {
                      id
                      label
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    } 
  }
`;

export const GET_CASE_STUDIES_NEW = gql`
  query GetCaseStudies($first: Int = 6, $after: String) {
    nProjects(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id
          slug
          title(format: RENDERED)
          featuredImage {
            node {
              filePath(size: LARGE)
              sourceUrl(size: LARGE)
            }
          }
          nProjectCategories {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CASE_STUDY_BY_SLUG = gql`
  query GetCaseStudyBySlug($slug: ID!) {
    nProject(id: $slug, idType: SLUG) {
      content(format: RENDERED)
      title(format: RENDERED)
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
      caseStudiesFields {
        industry
        startDate
        client
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts($first: Int = 6, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          id
          title(format: RENDERED)
          slug
          date
          excerpt(format: RENDERED)
          featuredImage {
            node {
              sourceUrl(size: MEDIUM_LARGE)
            }
          }
          author {
            node {
              name
              avatar {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!) {
    productBy(slug: $slug) {
      id
      content(format: RENDERED)
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
      title(format: RENDERED)
    }
  }
`;

export const GET_OURTEAM_SLUG = gql`
  query GET_OURTEAM_SLUG($slug: String!) {
    webNewCustomFieldBy(slug: $slug) {
      id
      meetOurTeam {
        meetOurTeam {
          bio
          designation
          linkdinUrl
          teamMemberName
          teamMemberImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
        }
      }
    }
  }
`;

export const GET_STATS = gql`
  query GET_STATS {
    post(id: "49017", idType: DATABASE_ID) {
      id
      homePageOurReachSection {
        sectionHeading
        reachSectionStats {
          reachStats
          reachTitle
        }
      }
    }
  }
`;

export const GET_CASE_STUDIES_WIDGET = gql`
  query GET_STATS {
    post(id: "49017", idType: DATABASE_ID) {
      id
      caseStudiesWidget {
        caseStudies {
          edges {
            node {
              id
              slug
              ... on NProject {
                id
                title(format: RAW)
                featuredImage {
                  node {
                    sourceUrl(size: LARGE)
                  }
                }
                excerpt(format: RENDERED)
                caseStudiesFields {
                  caseStudyExcerpt
                }
              }
            }
          }
        }
      }
    }
  }
`;

