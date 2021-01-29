import { useEffect, useState } from 'react';

const gsheetID = '14WygMRnGA3QWRDYvPOGTWGWNH68cUyOUE2VYumS0NUo';
const gsheetNum = '2';
const url = `https://spreadsheets.google.com/feeds/list/${gsheetID}/${gsheetNum}/public/values?alt=json`;

const useFetch = (deck) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetchData = async () => {
    setLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();

    const filterData = data.feed.entry.filter(
      (data) => data.gsx$deck.$t === deck
    );
    setData(filterData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data };
};

export default useFetch;
