import { zendeskEndpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const faqApi = api.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.mutation<any, void>({
      query: () =>
        `${zendeskEndpoints.baseUrl}help_center/articles/embeddable_search.json?locale=en-us&per_page=3&query=faq`,
    }),
  }),
  overrideExisting: true,
});

export const { useGetArticlesMutation } = faqApi;
