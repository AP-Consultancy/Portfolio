import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  StoriesSection,
  StoriesInner,
  StoriesBody,
  StoriesLeft,
  StoriesTitle,
  Tabs,
  Tab,
  StoriesLink,
  Stats,
  StatNumber,
  StatLabel,
  ProductsUsed,
  ProductList,
  ProductItem,
  StoriesRight,
  StoryCard,
} from "../style";

const ease = [0.22, 1, 0.36, 1];

/**
 * @param {object} props
 * @param {string} props.title - Full-width headline
 * @param {string[]} props.tabs - Tab labels; length must match slides
 * @param {Array<{ stats: { value: string, label: string }[], products: { label: string, dotColor?: string }[], story: { brand: string, caption: string } }>} props.slides - One entry per tab
 * @param {{ href: string, label: string }} [props.storiesLink]
 * @param {string} [props.stackSectionTitle] - Label above the stack list (default: "What we shipped")
 * @param {number} [props.autoRotateMs] - Auto-advance tabs; omit to disable
 */
export function CustomerStoriesSection({
  title,
  tabs,
  slides,
  storiesLink,
  stackSectionTitle = "What we shipped",
  autoRotateMs = 9000,
}) {
  const [activeTab, setActiveTab] = useState(tabs[0] ?? "");

  const tabIdx = Math.max(0, tabs.indexOf(activeTab));
  const slide = slides[tabIdx] ?? slides[0];

  const nextTab = () =>
    setActiveTab(tabs[(tabIdx + 1 + tabs.length) % tabs.length]);
  const prevTab = () =>
    setActiveTab(tabs[(tabIdx - 1 + tabs.length) % tabs.length]);

  const handleWheel = (e) => {
    const threshold = 28;
    const dx = e.deltaX;
    const shiftDx = e.shiftKey ? e.deltaY : 0;
    const effectiveDx = Math.abs(dx) > Math.abs(shiftDx) ? dx : shiftDx;
    if (effectiveDx > threshold) nextTab();
    if (effectiveDx < -threshold) prevTab();
  };

  const [touchStartX, setTouchStartX] = useState(null);
  const onTouchStart = (e) =>
    setTouchStartX(e.touches?.[0]?.clientX ?? null);
  const onTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX;
    if (touchStartX == null || endX == null) return;
    const dx = endX - touchStartX;
    if (dx > 40) prevTab();
    if (dx < -40) nextTab();
    setTouchStartX(null);
  };

  useEffect(() => {
    if (!autoRotateMs || tabs.length < 2) return undefined;
    const id = window.setInterval(() => {
      setActiveTab((t) => tabs[(tabs.indexOf(t) + 1) % tabs.length]);
    }, autoRotateMs);
    return () => window.clearInterval(id);
  }, [autoRotateMs, tabs]);

  if (!slide) return null;

  return (
    <StoriesSection>
      <StoriesInner
        onWheel={handleWheel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <StoriesTitle>{title}</StoriesTitle>

        <StoriesBody>
          <StoriesLeft>
            <Tabs>
              {tabs.map((t) => (
                <Tab
                  key={t}
                  type="button"
                  data-active={t === activeTab}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </Tab>
              ))}
              {storiesLink ? (
                <StoriesLink
                  href={storiesLink.href}
                  onClick={(e) => {
                    if (storiesLink.href === "#") e.preventDefault();
                  }}
                >
                  {storiesLink.label}
                </StoriesLink>
              ) : null}
            </Tabs>

            <AnimatePresence mode="wait">
              <Motion.div
                key={`stats-${activeTab}`}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.9, ease }}
              >
                <Stats>
                  {slide.stats.map((s, i) => (
                    <div key={`${activeTab}-stat-${i}`}>
                      <StatNumber>{s.value}</StatNumber>
                      <StatLabel>{s.label}</StatLabel>
                    </div>
                  ))}
                </Stats>

            <ProductsUsed>
              <div className="title">{stackSectionTitle}</div>
              <ProductList>
                {slide.products.map((p) => (
                  <ProductItem key={p.label}>
                    <span
                      className="dot"
                      style={{ "--c": p.dotColor ?? "#60a5fa" }}
                    />
                    {p.label}
                  </ProductItem>
                ))}
              </ProductList>
            </ProductsUsed>
              </Motion.div>
            </AnimatePresence>

          </StoriesLeft>

          <StoriesRight>
            <AnimatePresence mode="wait">
              <StoryCard
                key={`story-${activeTab}`}
                bg={slide.story.image}
                initial={{ opacity: 0, x: 64 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -64 }}
                transition={{ duration: 0.9, ease }}
              >
                <div className="brand">
                  <span className="brandMark" />
                  {slide.story.brand}
                </div>
                <div className="bookmark">≡</div>
                <div className="caption">{slide.story.caption}</div>
              </StoryCard>
            </AnimatePresence>
          </StoriesRight>
        </StoriesBody>
      </StoriesInner>
    </StoriesSection>
  );
}

/** Dummy portfolio data — replace with real client metrics and copy when ready. */
export const defaultClientShowcaseData = {
  title: "A few teams we’ve built and shipped product with",
  tabs: ["Acme Labs", "Northwind", "Globex"],
  storiesLink: { href: "#", label: "View all client work →" },
  slides: [
    {
      stats: [
        {
          value: "12 weeks",
          label: "from kickoff to production MVP (dummy)",
        },
        {
          value: "40%",
          label: "estimated ops cost reduction post-migration (dummy)",
        },
      ],
      products: [
        { label: "React / TypeScript", dotColor: "#60a5fa" },
        { label: "Node.js on AWS", dotColor: "#22c55e" },
        { label: "GitHub Actions CI/CD", dotColor: "#f59e0b" },
      ],
      story: {
        brand: "",
        caption:
          "",
        image: "/UplevylyCard.png",
      },
    },
    {
      stats: [
        {
          value: "3 regions",
          label: "multi-region rollout for lower latency (dummy)",
        },
        {
          value: "99.95%",
          label: "uptime target in the first quarter after launch (dummy)",
        },
      ],
      products: [
        { label: "Kubernetes", dotColor: "#60a5fa" },
        { label: "Terraform", dotColor: "#22c55e" },
        { label: "Datadog / Grafana", dotColor: "#f59e0b" },
      ],
      story: {
        brand: "northwind",
        caption:
          "Growth-stage platform: observability and safer releases across squads (dummy).",
        image: "/PropicCard.png",
      },
    },
    {
      stats: [
        {
          value: "50k+",
          label: "internal users on the modernized admin suite (dummy)",
        },
        {
          value: "SOC 2",
          label: "readiness track we supported alongside their security team (dummy)",
        },
      ],
      products: [
        { label: "Azure / Entra ID", dotColor: "#60a5fa" },
        { label: ".NET / microservices", dotColor: "#22c55e" },
        { label: "Service mesh rollout", dotColor: "#f59e0b" },
      ],
      story: {
        brand: "globex",
        caption:
          "Enterprise modernization: phased cutover with zero big-bang downtime (dummy).",
        image: "/UplevylyCard.png",
      },
    },
  ],
};
