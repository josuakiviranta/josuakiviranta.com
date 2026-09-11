import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

/* Two offices, one map. Basemap is CARTO light_nolabels (no country names
   at all); the only labels are ITALY and FINLAND, drawn here. Default view
   frames both countries (2026-09-11). */
/* Pontassieve is where Josua lives and works: solid pin. Helsinki is the
   invoicing address: hollow ring, same size. */
const OFFICES = [
  { name: "Pontassieve", lat: 43.7785, lng: 11.4321, primary: true },
  { name: "Helsinki", lat: 60.1699, lng: 24.9384, primary: false },
];

const COUNTRY_LABELS = [
  { text: "ITALY", lat: 41.6, lng: 13.8 },
  { text: "FINLAND", lat: 65.4, lng: 27.4 },
];

/* Helsinki and Florence are labelled at every zoom, above their pins.
   Pontassieve is ~14 km east of Florence and only shows once the zoom can
   separate the two; it sits to the right of the pin. */
const CITY_LABELS: {
  text: string;
  lat: number;
  lng: number;
  minZoom: number;
  side: "above" | "right";
}[] = [
  { text: "Helsinki", lat: 60.1699, lng: 24.9384, minZoom: 0, side: "above" },
  { text: "Florence", lat: 43.7696, lng: 11.2558, minZoom: 0, side: "above" },
  { text: "Pontassieve", lat: 43.7785, lng: 11.4321, minZoom: 9, side: "right" },
];

const LABEL_OFFSET: Record<"above" | "right", string> = {
  above: "translate(-50%, calc(-100% - 14px))",
  right: "translate(14px, -50%)",
};

export default function OfficeMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: any;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      map = L.map(containerRef.current, {
        zoomControl: true,
        attributionControl: true,
      });
      // Default view: Italy and Finland both in frame at any viewport width.
      // Integer zoom only: fractional zoom shows raster tile seams. Small
      // padding so a ~380px-tall frame still lands on zoom 3, not 2.
      map.fitBounds(L.latLngBounds([36.0, 2.0], [70.5, 33.0]), {
        padding: [6, 6],
      });

      // CARTO raster basemaps require an API key (watermarked without one).
      // Key lives in NEXT_PUBLIC_CARTO_KEY (.env.local locally, Vercel env
      // in production); free tier 5M tiles/month.
      const cartoKey = process.env.NEXT_PUBLIC_CARTO_KEY ?? "";
      L.tileLayer(
        `https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?key=${cartoKey}`,
        {
          subdomains: "abcd",
          attribution: "© OpenStreetMap contributors © CARTO",
          maxZoom: 19,
        }
      ).addTo(map);

      const pin = (primary: boolean) =>
        L.divIcon({
          className: "",
          html: primary
            ? '<div style="width:18px;height:18px;background:#e6eaef;border:2px solid #12161b;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.4);cursor:pointer;"></div>'
            : '<div style="width:18px;height:18px;background:transparent;border:2px solid #12161b;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.25);cursor:pointer;"></div>',
          iconAnchor: [11, 11],
        });
      for (const o of OFFICES) {
        L.marker([o.lat, o.lng], { icon: pin(o.primary), title: o.name })
          .addTo(map)
          .on("click", () => {
            window.open(
              `https://www.google.com/maps?q=${o.lat},${o.lng}`,
              "_blank",
              "noopener,noreferrer"
            );
          });
      }

      const cityLayer = L.layerGroup().addTo(map);
      const cityMarkers = CITY_LABELS.map((c) => ({
        minZoom: c.minZoom,
        marker: L.marker([c.lat, c.lng], {
          interactive: false,
          keyboard: false,
          icon: L.divIcon({
            className: "",
            html: `<div style="transform:${LABEL_OFFSET[c.side]};white-space:nowrap;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:11px;font-weight:500;color:#12161b;opacity:0.85;">${c.text}</div>`,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
          }),
        }),
      }));
      const syncCityLabels = () => {
        const z = map.getZoom();
        for (const { minZoom, marker } of cityMarkers) {
          if (z >= minZoom) cityLayer.addLayer(marker);
          else cityLayer.removeLayer(marker);
        }
      };
      map.on("zoomend", syncCityLabels);
      syncCityLabels();

      for (const c of COUNTRY_LABELS) {
        L.marker([c.lat, c.lng], {
          interactive: false,
          keyboard: false,
          icon: L.divIcon({
            className: "",
            html: `<div style="transform:translate(-50%,-50%);white-space:nowrap;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:12px;font-weight:700;letter-spacing:0.2em;color:#12161b;opacity:0.85;">${c.text}</div>`,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
          }),
        }).addTo(map);
      }
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "#1e242c" }}
    />
  );
}
