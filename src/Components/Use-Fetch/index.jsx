import { useState, useEffect } from "react";

function useFetch(url, options = {} ) {
  const [data, setData] = useState();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      console.log(result)
      setData(result);
      setPending(false);
    } catch (e) {
      setError(e.message || "Something Got Wrong");
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
export default useFetch;
