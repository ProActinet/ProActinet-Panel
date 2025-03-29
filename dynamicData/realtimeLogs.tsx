"use client";
import { useEffect, useState } from "react";

export default function RealtimeDisplay() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Determine the proper protocol based on the current location.
    let socket: WebSocket;
    try {
      const protocol = window.location.protocol === "https:" ? "wss" : "ws";
      // Build the WebSocket URL.
      const backendIp = process.env.NEXT_PUBLIC_BACKEND_IP || "192.168.0.1";
      const wsUrl = `${protocol}://${backendIp}/ws/frontend-logs/`;
      socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        console.log("Connected to WebSocket endpoint:", wsUrl);
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log("Received data:", data);
          // Append the new message to the state.
          setMessages((prevMessages) => [...prevMessages, data]);
        } catch (error) {
          console.error("Error parsing message:", error);
        }
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      socket.onclose = (event) => {
        console.log("WebSocket connection closed:", event);
      };
    } catch (error) {
      console.error("Error setting up WebSocket connection:", error);
    }
    // Clean up on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const severity: { [key: number]: { color: string; message: string } } = {
    3: { color: "border-yellow-500 text-yellow-400", message: "🟡 Low" },
    2: { color: "border-orange-500 text-orange-400", message: "🟠 Moderate" },
    1: { color: "border-red-400 text-red-400", message: "⚠️ Threat Imminent" },
  };

  return (
    <div className="p-5 font-sans">
      <div className="flex flex-col gap-4">
        {messages.map((msg, index) => {
          const msgSeverity = msg.alert?.severity;
          const severityConfig = severity[msgSeverity];
          return (
            <div key={index} className="messageCard bg-[#513741]">
              <div className="severityInfo">
                {severityConfig ? (
                  <span
                    className="severityBadge"
                    style={
                      msg.alert?.severity === 3
                        ? { borderColor: "yellow", color: "yellow" }
                        : msg.alert?.severity === 2
                        ? { borderColor: "orange", color: "orange" }
                        : msg.alert?.severity === 1
                        ? { borderColor: "red", color: "red" }
                        : {}
                    }
                  >
                    {severityConfig.message}
                  </span>
                ) : (
                  "N/A"
                )}
              </div>
              <div className="signature">
                {msg.alert?.signature || "No signature"}
              </div>
              <div className="timestamp">Timestamp: {msg.timestamp || ""}</div>
              <style jsx>{`
                .messageCard {
                  background: linear-gradient(
                    to bottom right,
                    #341f37,
                    #513741,
                    #341f37
                  );
                  color: white;
                  border: 1px solid #4b5563;
                  border-radius: 12px;
                  padding: 16px;
                }
                .severityInfo {
                  font-size: 14px;
                  margin-bottom: 4px;
                }
                .severityBadge {
                  padding: 4px;
                  border: 1px solid;
                  border-radius: 12px;
                }
                .signature {
                  margin-bottom: 8px;
                  font-size: 18px;
                  padding: 16px 0;
                  font-weight: 600;
                }
                .timestamp {
                  font-size: 14px;
                }
              `}</style>
            </div>
          );
        })}
      </div>
    </div>
  );
}
