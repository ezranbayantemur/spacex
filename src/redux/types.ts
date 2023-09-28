import type {Launch} from '@types';

export interface LaunchRequestType {
  startDate: string;
  endDate: string;
}

export interface LaunchResponseType {
  docs: Launch[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
