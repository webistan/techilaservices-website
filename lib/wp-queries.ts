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
    
    homePageOurReachSection {
      sectionHeading
      reachSectionStats {
        reachStats
        reachTitle
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

export const GET_MENU_ITEMS = gql`
  query GetMenuItems($parentId: ID!) {
    menuItems(where: {parentId: $parentId}) {
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

