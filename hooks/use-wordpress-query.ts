
import { useEffect, useState } from 'react';
import { RequestDocument, Variables } from 'graphql-request';
import { graphqlClient } from '../lib/graphql-client';

interface UseWordPressQueryResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export function useWordPressQuery<T = any>(query: RequestDocument, variables?: Variables): UseWordPressQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    setData(null);

    graphqlClient.request<T>(query, variables)
      .then((response) => {
        if (isMounted) {
          setData(response);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [query, JSON.stringify(variables)]);

  return { data, error, loading };
} 