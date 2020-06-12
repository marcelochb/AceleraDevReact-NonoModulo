import { useState, useEffect } from "react";
import { apiCategories, urlLogin } from '../constants';

export const useFetch = async ({ typeOfFetchData }) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [baseUrl] = useState(typeOfFetchData === 'Login'
    ? urlLogin
    : apiCategories)

  useEffect(() => {
    const loadStories = async () => {
      try {

        const response = await fetch(baseUrl);
        const data = await response.json();
        setResult(data);
        setLoading(false)
      } catch (error) {
        setLoading(false)

      }
    };
    loadStories();
  }, [baseUrl]);


  return await {
    getFetch: {
      result
    }
  };
};
