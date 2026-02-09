import { useMemo } from 'react';
import { parseQueryParams, type ParsedQueryParams } from '@/utils/queryParams';

export function useQueryParams(): ParsedQueryParams {
  return useMemo(() => {
    return parseQueryParams(window.location.search);
  }, []);
}
