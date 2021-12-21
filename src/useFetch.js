import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsPending(true);
      });
  }, [url]);

  return { data, isPending };
};

export default useFetch;
