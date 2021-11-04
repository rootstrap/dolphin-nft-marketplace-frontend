import { useEffect, useState } from 'react';
import { useGetArticlesMutation } from 'infrastructure/services/faq/FaqService';

export const useFaq = () => {
  const [getArticles, { isLoading }] = useGetArticlesMutation();
  const [faqs, setFaqs] = useState([]);

  const loadData = async () => {
    const data: any = await getArticles();
    setFaqs(data.data.results);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    isLoading,
    faqs,
  };
};
