import { RequestDocument, Variables } from 'graphql-request';
import { graphqlClient } from '../lib/graphql-client';

interface FetchWordPressQueryResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export async function fetchWordPressQuery<T = any>(
  query: RequestDocument,
  variables?: Variables
): Promise<FetchWordPressQueryResult<T>> {
  try {
    const data = await graphqlClient.request<T>(query, variables);
    return { data, error: null, loading: false };
  } catch (error: any) {
    return { data: null, error, loading: false };
  }
} 