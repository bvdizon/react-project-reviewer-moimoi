import { useEffect, useState } from 'react';

const gsheetID = '14WygMRnGA3QWRDYvPOGTWGWNH68cUyOUE2VYumS0NUo';
const gsheetNum = '1';
const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;

const useFetchDecks = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetchData = async () => {
    setLoading(true);

    const resp = await fetch(url);
    const data = await resp.json();

    const categories = [
      ...new Set(data.feed.entry.map((data) => data.gsx$deck.$t)),
    ];
    setData(categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};

export default useFetchDecks;
