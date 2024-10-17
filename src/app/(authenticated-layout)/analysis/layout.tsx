import { AnalysisProvider } from "@/contexts/analysis-context";
import MapProvider from "@/contexts/map-provider";
import { UpstreamDataProvider } from "@/contexts/upstream-data-context";

export default async function AnalysisLayout({ children }: ChildrenProps) {
  return (
    <AnalysisProvider>
      <UpstreamDataProvider>
        <MapProvider apiKey={process.env.NEXT_GAPI_KEY!}>
          {children}
        </MapProvider>
      </UpstreamDataProvider>
    </AnalysisProvider>
  );
}
