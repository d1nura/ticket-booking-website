import { useState, useEffect } from "react";

const useHttp = (refer, size, page) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("rendering..");

    if (size || page) {
      setTimeout(() => {
        fetch(
          `https://app.ticketmaster.com/discovery/v2/${refer}apikey=KaFxpLURz5nzNGaP7AFXPYVICtQZYU5y&size=${size}&page=${page}`
          // { mode: "no-cors" }
        )
          .then(res => {
            setLoading(false);
            return res.json();
          })
          // .then(data => setData(data));
          .then(data => {
            setTimeout(() => {
              setData(data);
            }, 1000);
          });
      }, 1000);
    } else {
      // setTimeout(() => {
      fetch(
        `https://app.ticketmaster.com/discovery/v2/${refer}apikey=KaFxpLURz5nzNGaP7AFXPYVICtQZYU5y`
      )
        .then(res => {
          // setTimeout(() => {
          //   setLoading(false);
          // }, 1000);
          setLoading(false);
          return res.json();
        })
        .then(data => {
          setData(data);
          // setTimeout(() => {
          //   setData(data);
          // }, 1000);
        });
      // }, 1000);
    }
  }, [refer, size, page]);
  return [data, loading];
};

export default useHttp;
