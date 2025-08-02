"use client";

import { useEffect } from "react";

interface IpInfo {
  country?: string;
  country_name?: string;
  city?: string;
  region?: string;
  ip?: string;
  error?: string | boolean;
  [key: string]: any;
}

export default function IpInfoLogger() {
  useEffect(() => {
    const fetchIpInfo = async () => {
      try {
        const response = await fetch("/api/ip-info");
        const data: IpInfo = await response.json();
        
        if (data.error) {
          const errorMessage = typeof data.error === 'string' ? data.error : 'Unknown error occurred';
          console.error("Error fetching IP info:", errorMessage);
          return;
        }
        
        console.log("Country:", data.country_name);
        console.log("Country Code:", data.country);
        console.log("Full IP Info:", data);
      } catch (error) {
        console.error("Failed to fetch IP info:", error);
      }
    };

    fetchIpInfo();
  }, []);

  return null; // This component doesn't render anything visible
} 