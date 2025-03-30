export async function getUsageData(username: string, email: string) {
  const endpoint = `https://${process.env.NEXT_PUBLIC_BACKEND_IP}/recents/api/timestamps/`;
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching usage data:", error);
    throw error;
  }
}
