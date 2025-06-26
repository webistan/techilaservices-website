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
  query GetHomePageData {
    page(id: "123", idType: DATABASE_ID) {
      title
      homePageHeroSection {
        heroTitle
        heroDescription
        heroImage {
          node {
            sourceUrl
          }
        }
      }
      homePageClientsSection {
        clientLogos {
          node {
            sourceUrl
          }
        }
      }
      homePageTestimonialsSection {
        testimonials {
          name
          feedback
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;