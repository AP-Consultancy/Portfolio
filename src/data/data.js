const projectsData = [
  {
    key: "Acuity.png",
    title: "Acuity Analytics",
    subhead: "Unified analytics platform enabling faster, trusted financial insights.",
    challenge:
      "Financial data lived across multiple sources, slowing reporting and making it hard for teams to trust a single version of truth.",
    solution:
      "Unified ingestion and modeling into a consistent analytics layer, enabling faster insights with reliable, governed dashboards.",
    keyHighlights: [
      "Built scalable customer-journey and finance-ready datasets",
      "Automated refresh and data quality checks for consistent reporting",
      "Enabled campaign and engagement analytics with structured models",
      "Improved stakeholder visibility with curated dashboards",
    ],
    technologies: ["Python", "AWS", "Snowflake", "SQL", "Power BI", "Airflow"],
  },
  {
    key: "hdfc.png",
    title: "HDFC Bank",
    subhead: "Digital-first loan onboarding with seamless workflows and validation.",
    challenge:
      "Manual and fragmented application flows slowed approvals, increased operational overhead, and led to user drop-offs.",
    solution:
      "Implemented AEM Forms–based digital workflows with validation, e-sign, and backend integrations to streamline onboarding end-to-end.",
    keyHighlights: [
      "Dynamic AEM Forms with prefill and validation",
      "End-to-end digital onboarding with reduced manual steps",
      "Backend integrations for verification and processing",
      "Automated document generation and e-sign workflows",
      "Role-based routing for agents, underwriters, and approvers",
      "Improved UX to increase completion rates",
    ],
    technologies: [
      "Adobe Experience Manager (AEM Forms)",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Oracle DB",
    ],
  },
  {
    key: "telus.png",
    title: "Telus",
    subhead: "Scalable workflow systems for high-performance customer operations.",
    challenge:
      "Support and workflow systems needed to scale reliably across multiple clients while maintaining fast response times.",
    solution:
      "Delivered a more resilient ticketing/workflow foundation with optimized performance and streamlined user operations.",
    keyHighlights: [
      "Multi-client workflow support for customer operations",
      "Improved responsiveness under higher concurrency",
      "Streamlined issue tracking and status visibility",
      "Hardened integration points for reliability",
    ],
    technologies: ["React", "Node.js", "JavaScript", "PostgreSQL", "APIs", "SSO"],
  },
  {
    key: "propic.png",
    title: "Propic",
    subhead: "AI-driven automation to streamline real estate workflows.",
    challenge:
      "Real estate teams were spending time on repetitive follow-ups and lacked automation across key operational workflows.",
    solution:
      "Added automation and AI-assisted capabilities across backend services and interactive UIs to reduce manual intervention.",
    keyHighlights: [
      "Automated inbound enquiries and follow-ups",
      "Improved operational efficiency for property managers",
      "Integrated AI-driven features into product flows",
      "Enhanced UX for faster task completion",
    ],
    technologies: [".NET", "Angular", "Azure", "OpenAI"],
  },
  {
    key: "astrazeneca.png",
    title: "AstraZeneca",
    subhead: "Optimized enterprise systems for scalable healthcare operations.",
    challenge:
      "Large-scale operational and healthcare data required more efficient flows and better scalability to reduce bottlenecks.",
    solution:
      "Optimized data handling and service architecture to improve throughput, reduce response times, and support growth safely.",
    keyHighlights: [
      "Improved high-volume data flow efficiency",
      "Reduced bottlenecks and improved response times",
      "Supported scalable operations across teams",
      "Strengthened access patterns for enterprise environments",
    ],
    technologies: ["Azure", ".NET", "Microservices", "Entra ID", "Service mesh"],
  },
  {
    key: "salesforce.png",
    title: "Salesforce",
    subhead: "Customized CRM automation for efficient sales operations.",
    challenge:
      "Enterprise CRM teams needed tailored automation and cleaner workflows to reduce manual work and improve consistency.",
    solution:
      "Implemented customized CRM automation, integrations, and workflow improvements to streamline sales operations.",
    keyHighlights: [
      "Automation-first workflows for sales operations",
      "Custom components and integrations",
      "Improved data consistency across systems",
      "Reduced manual reporting and operational overhead",
    ],
    technologies: ["Apex", "LWC", "Flows", "REST APIs"],
  },
  {
    key: "uplevyl.png",
    title: "Uplevyl",
    subhead: "Personalized engagement with scalable analytics-driven experiences.",
    challenge:
      "Growth required better engagement tracking and personalized experiences without sacrificing performance.",
    solution:
      "Built user-journey instrumentation and analytics-first experiences with scalable cloud-backed delivery.",
    keyHighlights: [
      "Personalized engagement flows",
      "Analytics tracking for product signals",
      "Improved performance and reliability",
      "Scalable architecture for growth",
    ],
    technologies: ["React", "Firebase", "Node.js", "AWS"],
  },
  {
    key: "Tailoredbrands.png",
    title: "Tailored Brands",
    subhead: "Omnichannel retail systems with scalable backend services.",
    challenge:
      "Omnichannel operations needed better inventory visibility and systems that could scale across peak demand.",
    solution:
      "Delivered scalable services and search-driven experiences with stronger sync between channels.",
    keyHighlights: [
      "Improved inventory sync across channels",
      "Search and discovery improvements",
      "Scalable backend services for high traffic",
      "More consistent customer experience",
    ],
    technologies: ["Java", "Spring Boot", "AWS", "Elasticsearch"],
  },
  {
    key: "bathfitter.png",
    title: "Bath Fitter",
    subhead: "Digitized scheduling with real-time workflow visibility.",
    challenge:
      "Scheduling and order workflows were fragmented, leading to delays and limited real-time visibility for teams.",
    solution:
      "Digitized scheduling and tracking with automated workflows and real-time status updates.",
    keyHighlights: [
      "Workflow automation for scheduling and tracking",
      "Real-time updates for field and operations teams",
      "Improved delivery predictability",
      "Reduced manual coordination overhead",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    key: "agilty insights.png",
    title: "Agility Insights",
    subhead: "Centralized BI platform for faster, consistent decision-making.",
    challenge:
      "Business reporting was slowed by siloed data and inconsistent definitions across teams.",
    solution:
      "Built a centralized BI foundation with reliable modeling and dashboards for faster decision-making.",
    keyHighlights: [
      "Unified warehouse-ready datasets",
      "Improved KPI consistency across reports",
      "Faster dashboards with optimized queries",
      "Better stakeholder visibility with curated views",
    ],
    technologies: ["SQL", "Python", "AWS Redshift", "Tableau"],
  },
  {
    key: "rocket learning.png",
    title: "Rocket Learning",
    subhead: "Scalable mobile-first edtech platform with analytics insights.",
    challenge:
      "Scaling a mobile-first learning experience required reliable infrastructure, analytics, and support for growth.",
    solution:
      "Delivered a scalable edtech platform with analytics instrumentation and cloud-backed performance improvements.",
    keyHighlights: [
      "Mobile-first delivery with scalable backend services",
      "Analytics for engagement and learning outcomes",
      "Improved reliability under growing usage",
      "Faster iteration with structured release workflows",
    ],
    technologies: ["React Native", "Node.js", "Firebase", "AWS"],
  },
];

export default projectsData;