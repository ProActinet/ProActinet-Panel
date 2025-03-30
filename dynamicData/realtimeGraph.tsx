"use client";
import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import useAuthStore from "@/store/authstore";
import { getUsageData } from "@/utils/usageData";
import "./styles.css";

const RealtimeGraph = () => {
  const user = useAuthStore((state) => state.user);
  const [data, setData] = useState<{ timestamps: string[] }[] | null>(null);
  const [error, setError] = useState("");
  const [keys, setKeys] = useState<number[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ Track loading state

  // ✅ Only fetch data after user is fetched
  useEffect(() => {
    if (user) {
      const handleFetch = async () => {
        try {
          const result = await getUsageData(user.username, user.email);
          setData(result);
          setError("");
        } catch (err) {
          setError("Failed to fetch usage data.");
        } finally {
          setIsLoading(false); // ✅ Set loading to false after fetching
        }
      };

      handleFetch();
    }
  }, [user]); // 👈 Fetch only after user is available

  // ✅ Convert timestamps and generate series only when data changes
  useEffect(() => {
    if (data && data.length > 0 && data[0].timestamps) {
      const convertToIST = (utc: string): string => {
        const date = new Date(utc);
        const istOffset = 5.5 * 60; // IST offset in minutes
        const istDate = new Date(date.getTime() + istOffset * 60000);

        const hours = istDate.getHours().toString().padStart(2, "0");
        return `${hours}:00`;
      };

      const generateSeries = (timestamps: string[]): Record<string, number> => {
        const series: Record<string, number> = {};

        timestamps.forEach((timestamp) => {
          const hourKey = convertToIST(timestamp);

          if (series[hourKey]) {
            series[hourKey]++;
          } else {
            series[hourKey] = 1;
          }
        });

        // Sort the keys in ascending order
        return Object.fromEntries(
          Object.entries(series).sort(([a], [b]) => a.localeCompare(b))
        );
      };

      const series = generateSeries(data[0].timestamps);

      // ✅ Convert keys to numbers
      const keysAsNumbers = Object.keys(series).map((key) => {
        const [hour] = key.split(":");
        return parseInt(hour, 10); // 👈 Convert to number
      });

      setKeys(keysAsNumbers);
      setValues(Object.values(series));
    }
  }, [data]);

  // ✅ Show loading while user data or usage data is being fetched
  if (!user || isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <LineChart
      sx={{
        height: 300,
        width: 500,
        stroke: "#ff2e82",
        fill: "#ff2e82",
      }}
      xAxis={[{ data: keys }]}
      colors={["#FF0000"]}
      series={[
        {
          data: values,
        },
      ]}
      width={500}
      height={300}
    />
  );
};

export default RealtimeGraph;
