import {
  Wrapper,
  HeroSection,
  HeroInner,
  HeroCopy,
  HeroLogoStrip,
  HeroLogoMarquee,
  HeroLogoTrack,
  HeroLogoGroup,
  HeroLogoItem,
  LogoCollage,
  HeroCollageMotion,
  LogoCard,
  CaseSection,
  CaseInner,
  CaseHeading,
  Content,
  TextBlock,
  PropicCard,
  PropicSkyline,
  PropicTitle,
  PropicI,
  PropicDots,
  PropicBar,
  BottomSection,
} from "./style";
import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  CustomerStoriesSection,
  defaultClientShowcaseData,
} from "./components/CustomerStoriesSection";
import TechStackSection, { techData } from "./components/TechStackSection";
import logoUrls from "virtual:logo-manifest";


const App = () => {
  const [caseIdx, setCaseIdx] = useState(0);
  const [heroCollageKey, setHeroCollageKey] = useState(0);

  const totalCases = 3;

  const nextCase = () => setCaseIdx((v) => (v + 1) % totalCases);
  const prevCase = () => setCaseIdx((v) => (v - 1 + totalCases) % totalCases);

  useEffect(() => {
    const id = window.setInterval(() => {
      nextCase();
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  const cases = [
    {
      title: "Propic",
      growth: "Operational overhead by 30% while maintaining 99.9% uptime.",
      tools: "AWS/Azure, GitHub CI/CD, Datadog/New Relic",
      tagline: "Powering Propic's AI innovation with our seamless SaaS platform.",
    },
    {
      title: "Nimbus",
      growth: "Deployment time cut from 45 min to 8 min with safer rollbacks.",
      tools: "Kubernetes, Terraform, GitHub Actions, Grafana/Prometheus",
      tagline:
        "Accelerating releases with a platform built for reliability and speed.",
    },
    {
      title: "Atlas",
      growth: "Incident response improved by 40% with unified observability.",
      tools: "OpenTelemetry, Argo CD, Sentry, Cloudflare/WAF",
      tagline: "Making infra visible, secure, and effortless to operate.",
    },
  ];

  // Trackpad “swipe right” is usually a horizontal wheel gesture (deltaX).
  // We also support touch swipe right for mobile.
  const handleWheel = (e) => {
    const threshold = 28;
    const dx = e.deltaX;
    // Some devices send horizontal intent as shift+wheel (deltaY).
    const shiftDx = e.shiftKey ? e.deltaY : 0;
    const effectiveDx = Math.abs(dx) > Math.abs(shiftDx) ? dx : shiftDx;
    if (effectiveDx > threshold) nextCase(); // swipe left → next
    if (effectiveDx < -threshold) prevCase(); // swipe right → previous
  };

  const [touchStartX, setTouchStartX] = useState(null);
  const onTouchStart = (e) => setTouchStartX(e.touches?.[0]?.clientX ?? null);
  const onTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX;
    if (touchStartX == null || endX == null) return;
    const dx = endX - touchStartX;
    if (dx > 40) prevCase(); // swipe right
    if (dx < -40) nextCase(); // swipe left
    setTouchStartX(null);
  };

  const replayHeroCollage = () => setHeroCollageKey((k) => k + 1);

  const handleHeroWheel = (e) => {
    const threshold = 28;
    const dx = e.deltaX;
    const shiftDx = e.shiftKey ? e.deltaY : 0;
    const effectiveDx = Math.abs(dx) > Math.abs(shiftDx) ? dx : shiftDx;
    if (effectiveDx < -threshold) replayHeroCollage();
  };

  const [heroTouchStartX, setHeroTouchStartX] = useState(null);
  const onHeroTouchStart = (e) =>
    setHeroTouchStartX(e.touches?.[0]?.clientX ?? null);
  const onHeroTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX;
    if (heroTouchStartX == null || endX == null) return;
    const dx = endX - heroTouchStartX;
    if (dx > 40) replayHeroCollage();
    setHeroTouchStartX(null);
  };

  const heroEase = [0.22, 1, 0.36, 1];

  const hasStripLogos = Array.isArray(logoUrls) && logoUrls.length > 0;

  return (
    <Wrapper>
      <HeroSection>
        <HeroInner
          onWheel={handleHeroWheel}
          onTouchStart={onHeroTouchStart}
          onTouchEnd={onHeroTouchEnd}
        >
          <Motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: heroEase }}
          >
            <HeroCopy>
              <span className="line1">Engineered for scale.</span>
              <span className="line2">Trusted by millions of</span>
              <span className="line3">Growing Enterprises.</span>
            </HeroCopy>
          </Motion.div>

          <HeroCollageMotion
            key={heroCollageKey}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.05, ease: heroEase }}
          >
            <LogoCollage>
              <LogoCard className="card-1">
                <img src="/salesforce.png" alt="Salesforce" />
              </LogoCard>
              <LogoCard className="card-2">
                <img src="/uplevyl.png" alt="Uplevyl" />
              </LogoCard>
              <LogoCard className="card-3">
                <img src="/nike.png" alt="Nike" />
              </LogoCard>
              <LogoCard className="card-4">
                <img src="/astrazeneca.png" alt="AstraZeneca" />
              </LogoCard>
            </LogoCollage>
          </HeroCollageMotion>
        </HeroInner>

        {hasStripLogos ? (
          <HeroLogoStrip aria-hidden>
            <HeroLogoMarquee>
              <HeroLogoTrack>
                <HeroLogoGroup>
                  {logoUrls.map((src, idx) => (
                    <HeroLogoItem key={`${src}-${idx}`}>
                      <img src={src} alt="" loading="lazy" draggable={false} />
                    </HeroLogoItem>
                  ))}
                </HeroLogoGroup>
                <HeroLogoGroup aria-hidden>
                  {logoUrls.map((src, idx) => (
                    <HeroLogoItem key={`${src}-${idx}-dup`}>
                      <img src={src} alt="" loading="lazy" draggable={false} />
                    </HeroLogoItem>
                  ))}
                </HeroLogoGroup>
              </HeroLogoTrack>
            </HeroLogoMarquee>
          </HeroLogoStrip>
        ) : null}
      </HeroSection>

      {/* <CaseSection>
        <CaseInner>
          <Motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
          >
            <CaseHeading>
              <span className="sub">
                Turning complex infrastructure into seamless
              </span>
              <span className="emph">Digital Growth.</span>
            </CaseHeading>
          </Motion.div>

          <Content>
            <AnimatePresence mode="wait">
              <Motion.div
                key={`case-left-${caseIdx}`}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <TextBlock>
                  <p>
                    <span className="label">Case-</span> {cases[caseIdx].title}
                  </p>
                  <p>
                    <span className="label">Growth-</span>{" "}
                    {cases[caseIdx].growth}
                  </p>
                  <p>
                    <span className="label">Tool Used-</span>{" "}
                    {cases[caseIdx].tools}
                  </p>
                </TextBlock>
              </Motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <PropicCard
                key={`case-right-${caseIdx}`}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                initial={{ opacity: 0, x: 64 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -64 }}
                viewport={{ once: false, amount: 0.25 }}
                onWheel={handleWheel}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <PropicSkyline aria-hidden>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </PropicSkyline>
                <PropicTitle>
                  prop
                  <PropicI>
                    <PropicDots>
                      <i />
                      <i />
                      <i />
                    </PropicDots>
                    i
                  </PropicI>
                  c
                </PropicTitle>
                <PropicBar>
                  <p>{cases[caseIdx].tagline}</p>
                </PropicBar>
              </PropicCard>
            </AnimatePresence>
          </Content>
        </CaseInner>
      </CaseSection> */}

      <CustomerStoriesSection {...defaultClientShowcaseData} />
      <TechStackSection data={techData} />;
    </Wrapper>
  );
};

export default App;
