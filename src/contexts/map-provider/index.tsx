"use client";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function MapProvider({
  children,
  apiKey,
}: {
  children: React.ReactNode;
  apiKey: string;
}) {
  return <APIProvider apiKey={apiKey}>{children}</APIProvider>;
}
