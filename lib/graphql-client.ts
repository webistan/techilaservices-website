import { GraphQLClient } from 'graphql-request';

// WordPress GraphQL endpoint
const WP_GRAPHQL_ENDPOINT = 'https://techilaservices.com/graphql';

export const graphqlClient = new GraphQLClient(WP_GRAPHQL_ENDPOINT); 