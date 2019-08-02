import { useState, useEffect } from "react";

const useHttp = (refer, size, page) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (size || page) {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/${refer}apikey=KaFxpLURz5nzNGaP7AFXPYVICtQZYU5y&size=${size}&page=${page}`
      )
        .then(res => {
          setLoading(false);
          return res.json();
        })
        .then(data => setData(data));
    } else {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/${refer}apikey=KaFxpLURz5nzNGaP7AFXPYVICtQZYU5y`
      )
        .then(res => {
          setLoading(false);
          return res.json();
        })
        .then(data => setData(data));
    }
  }, [refer, size, page]);
  return [data, loading];
};

export default useHttp;
