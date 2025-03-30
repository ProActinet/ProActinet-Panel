"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import useAuthStore from "@/store/authstore";
import { getUsageData } from "@/utils/usageData";
import "./styles.css";

const RealtimeGraph = () => {
  const [keys, setKeys] = useState<number[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const authUser = useAuthStore((state) => state.user);

  // ✅ Memoize user properties to avoid re-renders
  const user = useMemo(
    () => ({
      username: authUser?.user?.username || "",
      email: authUser?.user?.email || "",
    }),
    [authUser]
  );

  // ✅ Stable callback with memoized dependencies
  const fetchDataSequentially = useCallback(async () => {
    if (!user.username || !user.email) {
      console.warn("User not available");
      setIsLoading(false);
      return;
    }

    try {
      const result = await getUsageData(user.username, user.email);

      if (result && result.length > 0 && result[0].timestamps) {
        const convertToIST = (utc: string): string => {
          const date = new Date(utc);
          const istOffset = 5.5 * 60;
          const istDate = new Date(date.getTime() + istOffset * 60000);
          return `${istDate.getHours().toString().padStart(2, "0")}:00`;
        };

        const generateSeries = (
          timestamps: string[]
        ): Record<string, number> => {
          const series: Record<string, number> = {};

          timestamps.forEach((timestamp) => {
            const hourKey = convertToIST(timestamp);
            series[hourKey] = (series[hourKey] || 0) + 1;
          });

          return Object.fromEntries(
            Object.entries(series).sort(([a], [b]) => a.localeCompare(b))
          );
        };

        const series = generateSeries(result[0].timestamps);

        const keysAsNumbers = Object.keys(series).map((key) =>
          parseInt(key.split(":")[0], 10)
        );

        setKeys(keysAsNumbers);
        setValues(Object.values(series));
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  }, [user]); // ✅ Stable dependency

  // ✅ Trigger only once on initial render
  useEffect(() => {
    fetchDataSequentially();
  }, [fetchDataSequentially]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <LineChart
      sx={{ height: 300, width: 500, stroke: "#ff2e82", fill: "#ff2e82" }}
      xAxis={[{ data: keys }]}
      colors={["#FF0000"]}
      series={[{ data: values }]}
      width={500}
      height={300}
    />
  );
};

export default RealtimeGraph;
