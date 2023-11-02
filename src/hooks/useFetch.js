import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const { data: responseData } = await axios.get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      setData(responseData.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
