import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {LaunchResponseType, LaunchRequestType} from './types';

const API_URL = 'https://api.spacexdata.com/v4/launches';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    postLaunches: builder.mutation<LaunchResponseType, LaunchRequestType>({
      query: ({startDate, endDate}) => ({
        url: '/query',
        method: 'POST',
        body: {
          query: {
            static_fire_date_utc: {
              $gte: startDate,
              $lte: endDate,
            },
          },
          options: {
            limit: 50,
            sort: {
              static_fire_date_utc: 'asc',
            },
          },
        },
      }),
    }),
  }),
});

export const {usePostLaunchesMutation} = api;
