import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const secretSauceApi = createApi({
  reducerPath: "secretSauceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://size-calculator-api.sspinc.io/",
    prepareHeaders: (headers) => {
      const token = process.env.REACT_APP_SECRET_SAUCE_API;
      const username = process.env.REACT_APP_SECRET_SAUCE_USERNAME;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", "Basic " + btoa(`${username}:${token}`));
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBrands: builder.query<
      Record<string, any>,
      { name_prefix?: string; limit?: number; next?: string }
    >({
      /// create movie type
      query: (arg) => {
        const { limit = 20, name_prefix, next } = arg;
        let url_query;
        if (name_prefix) {
          url_query = `brands?limit=${limit}&name_prefix=${name_prefix}`;
        } else if (next) {
          url_query = `brands?next=${next}&limit=${limit}'`;
        } else {
          url_query = `brands?limit=${limit}'`;
        }
        return {
          url: url_query,
        };
      },
    }),
    getCategories: builder.query<Record<string, any>, string>({
      query: (brandId) => {
        return `categories?brand_id=${brandId}`;
      },
    }),
    getMeasurements: builder.query<
      Record<string, any>,
      { brandId: string; categoryId: string; measurement: string }
    >({
      query: (arg) => {
        const { brandId, categoryId, measurement } = arg;
        return {
          url: `sizes?brand_id=${brandId}&category_id=${categoryId}&measurement=${parseFloat(
            measurement
          )}`,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetMeasurementsQuery,
} = secretSauceApi;
