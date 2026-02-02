export const mockStats = [
    { label: "km² Coverage Capacity", value: "500,000" },
    { label: "Spectral Bands", value: "256" },
    { label: "Gold Detection Limit", value: "<10 ppm" },
    { label: "Operational Autonomy", value: "24/7" },
  ];
  
  export const mockFeed = [
    { time: "09:12:05", msg: "Uplink established: ORBITAL NODE-01", status: "ok" },
    { time: "09:12:22", msg: "Hyperspectral sweep completed: GRID A-17", status: "ok" },
    { time: "09:13:10", msg: "Anomaly detected: Fe/Au signature (confidence 0.91)", status: "warn" },
    { time: "09:14:02", msg: "Tasking drone swarm: JANAH units -> waypoint 24.7136N", status: "ok" },
    { time: "09:15:20", msg: "Telemetry synced: ATHAR rover battery 82%", status: "ok" },
  ];
  
  export const mockTestimonial = {
    quote:
      "Qassas has transformed our exploration workflow. We moved from months of uncertainty to actionable targets in days.",
    name: "— [Name], [Title], [Mining Company]",
  };
  