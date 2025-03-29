"use client";

import { useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setError(null);
    try {
      const response = await fetch("/api/hello", {
        method: "GET",
      });
      if (!response.ok) throw new Error("Error fetching data");
      const result = await response.json();
      setData(result);
      console.log("result", result);
    } catch (err: any) {
      setError(err.message);
    }
  };
  console.log("data fetched", data);

  return (
    <div>
      <h1>Data from Mock API</h1>
      <button onClick={fetchData}>Fetch Data</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
}
