import { api } from '../Api';

const faqApi = api.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.mutation<any, void>({
      query: () =>
        `${process.env.REACT_APP_ZENDESK_API_URL}/help_center/articles/embeddable_search.json?locale=en-us&per_page=3&query=faq`,
    }),
  }),
  overrideExisting: true,
});

export const { useGetArticlesMutation } = faqApi;
