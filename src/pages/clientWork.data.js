function toTitleCaseFromFilename(filename) {
  const base = filename.replace(/\.[^/.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function fileFromPath(p) {
  const parts = String(p).split(/[\\/]/);
  return parts[parts.length - 1] ?? p;
}

// Auto-import every image from /public/Card at build time.
// If you add new images in `public/Card/`, they will show up automatically.
const imageModules = import.meta.glob("../../public/Card/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const discoveredImages = Object.entries(imageModules)
  .map(([path, url]) => ({
    path,
    url,
    filename: fileFromPath(path),
  }))
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));

/**
 * Edit content here (captions, chips, etc.)
 * Key is the image filename inside `public/Card/`.
 */
export const clientWorkOverrides = {
  "Acuity.png": {
    client: "Acuity",
    title: "Customer Journey Data Modeling",
    description:
      "Designed a scalable model to capture end-to-end customer interactions across multiple touchpoints.",
    chips: ["Python", "LangChain", "SQL", "AWS", "CI/CD", "Vector DB"],
  },
  "hdfc.png": {
    client: "HDFC",
    title: "Digital Experience Optimization",
    description:
      "Improved content structure and delivery performance for smoother, faster digital journeys.",
    chips: ["Kubernetes", "Terraform", "Datadog", "Grafana"],
  },
  "telus.png": {
    client: "Telus",
    title: "Multi-client Ticketing Platform",
    description:
      "Built and optimized a support platform to track issues reliably across multiple clients.",
    chips: ["React", "Node.js", "PostgreSQL", "SSO"],
  },
  "propic.png": {
    client: "Propic",
    title: "AI Automation for Real Estate",
    description:
      "Shipped AI-driven workflow automation for enquiries, follow-ups, and operations.",
    chips: [".NET", "Angular", "Azure", "OpenAI"],
  },
  "astrazeneca.png": {
    client: "AstraZeneca",
    title: "Scalability & Operational Efficiency",
    description:
      "Reduced bottlenecks and improved response times with scalable platform and data flow enhancements.",
    chips: ["Azure", "Microservices", "Service Mesh", "Entra ID"],
  },
};

export const clientWorkPageCopy = {
  title: "Client work",
  subtitle:
    "A curated set of projects—built for performance, scale, and clean user experience.",
};

export const clientWorkCards = discoveredImages.map((img) => {
  const override = clientWorkOverrides[img.filename];
  const inferredName = toTitleCaseFromFilename(img.filename);
  return {
    key: img.filename,
    imageUrl: img.url,
    imageFilename: img.filename,
    client: override?.client ?? inferredName,
    title: override?.title ?? inferredName,
    description:
      override?.description ??
      "Add a short caption in `src/pages/clientWork.data.js` to describe what you shipped.",
    chips: override?.chips ?? [],
  };
});

