import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function OfficeMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: any;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      map = L.map(containerRef.current, {
        center: [43.7785, 11.4321],
        zoom: 15,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          attribution: "© OpenStreetMap contributors © CARTO",
          maxZoom: 19,
        }
      ).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: '<div style="width:18px;height:18px;background:#344128;border:2px solid #F4EDDD;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.4);cursor:pointer;"></div>',
        iconAnchor: [11, 11],
      });
      const marker = L.marker([43.7785, 11.4321], { icon }).addTo(map);
      marker.on("click", () => {
        window.open(
          "https://www.google.com/maps?q=43.7785,11.4321",
          "_blank",
          "noopener,noreferrer"
        );
      });
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}
