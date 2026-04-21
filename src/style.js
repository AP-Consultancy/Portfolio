import styled from "styled-components";
import { motion } from "framer-motion";

export const colors = {
  bgHero: "#F8F3FF",
  bgSection: "#F0E6FF",
  bgFooter: "#9B8AA8",
  text: "#000000",
  accent: "#D54DB4",
};

export const Wrapper = styled.div`
  font-family: "Montserrat", system-ui, sans-serif;
  background: ${colors.bgSection};
  color: ${colors.text};
  overflow-x: hidden;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  --hero-pad-x: clamp(1.25rem, 4vw, 4rem);

  padding: clamp(1.25rem, 4vw, 2.5rem) var(--hero-pad-x)
    clamp(1.25rem, 4vw, 2.75rem);
  min-height: 90vh;
  background: ${colors.bgHero};
  display: flex;

  @media (max-width: 640px) {
    min-height: auto;
    padding: 1.1rem 1.05rem 1.4rem;
  }
`;

export const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.25rem, 4vw, 2.25rem);
  align-items: center;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.08fr);
    gap: clamp(1.25rem, 2.2vw, 2rem);
  }
`;

export const HeroLogoStrip = styled.div`
  margin-top: clamp(0rem, 0vw, 0rem);
  margin-inline: calc(-1 * var(--hero-pad-x));
`;

export const HeroLogoMarquee = styled.div`
  --strip-gap: clamp(5rem, 2.5vw, 2.25rem);
  --logo-h: clamp(34px, 3.8vw, 44px);

  position: relative;
  overflow: hidden;
  border-radius: 0;
  padding: clamp(0.65rem, 1.2vw, 0.9rem) 0;
  background: rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: clamp(36px, 7vw, 96px);
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      90deg,
      ${colors.bgHero} 0%,
      rgba(248, 243, 255, 0) 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      270deg,
      ${colors.bgHero} 0%,
      rgba(248, 243, 255, 0) 100%
    );
  }
`;

export const HeroLogoTrack = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
  animation: hero-logo-marquee 26s linear infinite;

  @keyframes hero-logo-marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HeroLogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--strip-gap);
  padding-right: var(--strip-gap);
`;

export const HeroLogoItem = styled.div`
  flex: 0 0 auto;
  height: var(--logo-h);
  display: grid;
  place-items: center;

  img {
    display: block;
    height: 100%;
    width: auto;
    opacity: 0.92;
  }
`;

export const HeroCopy = styled.div`
  text-align: left;
  font-family: "Orbitron", "Montserrat", system-ui, sans-serif;

  .line1,
  .line2 {
    display: block;
    font-size: clamp(1.65rem, 3.5vw, 2.65rem);
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.12;
    color: ${colors.text};
  }

  .line3 {
    display: block;
    margin-top: 0.45rem;
    font-size: clamp(2.35rem, 5.2vw, 2.75rem);
    font-weight: 800;
    letter-spacing: 0.03em;
    line-height: 1.05;
    background: linear-gradient(
      90deg,
      #8b7fd8 0%,
      #a855c8 38%,
      #d946b8 72%,
      #e91e8c 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

/* Balanced floating collage: diagonal flow TL → BR, intentional offsets + z-index */
export const LogoCollage = styled.div`
  --collage-pad: clamp(6px, 1.8vw, 14px);
  --card-w: 36%;
  --shadow-back: 0 10px 28px rgba(25, 15, 45, 0.12);
  --shadow-mid: 0 14px 36px rgba(25, 15, 45, 0.16);
  --shadow-main: 0 20px 48px rgba(25, 15, 45, 0.22);

  position: relative;
  width: 100%;
  max-width: min(520px, 100%);
  margin: 0 auto;
  padding: var(--collage-pad);
  box-sizing: border-box;
  min-height: clamp(300px, 78vw, 420px);
  isolation: isolate;

  @media (min-width: 480px) {
    --card-w: 34%;
    min-height: clamp(320px, 56vw, 440px);
  }

  @media (min-width: 960px) {
    max-width: 540px;
    margin: 0 0 0 auto;
    min-height: clamp(340px, 38vw, 430px);
  }
`;

// export const HeroCollageMotion = styled(motion.div)`
//   position: relative;
//   width: 100%;
//   max-width: min(520px, 100%);
//   margin: 0 auto;

//   @media (min-width: 960px) {
//     max-width: 540px;
//     margin: 0 0 0 auto;
//   }
// `;

// export const LogoCard = styled(motion.div)`
//   position: absolute;
//   width: var(--card-w);
//   aspect-ratio: 4 / 5;
//   border-radius: clamp(18px, 4vw, 26px);
//   overflow: hidden;
//   background: #fff;
//   transition: box-shadow 0.28s ease, transform 0.28s ease;
//   will-change: transform;

//   img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   /* card-1 — left, slightly lower than main (diagonal start) */
//   &.card-1 {
//     top: clamp(22%, 20vw, 30%);
//     left: var(--collage-pad);
//     z-index: 4;
//     box-shadow: var(--shadow-mid);
//     transform: rotate(-1.75deg);
//   }

//   /* card-2 — main hero, centered & elevated (highest z) */
//   &.card-2 {
//     top: clamp(5%, 3vw, 9%);
//     left: 50%;
//     z-index: 6;
//     background: #ffd4cc;
//     box-shadow: var(--shadow-main);
//     transform: translateX(-50%) rotate(0.75deg);
//   }

//   /* card-3 — bottom center, behind others */
//   &.card-3 {
//     bottom: var(--collage-pad);
//     left: 50%;
//     top: auto;
//     z-index: 1;
//     background: #1a2744;
//     box-shadow: var(--shadow-back);
//     transform: translateX(-50%) rotate(-1.25deg);
//   }

//   /*
//    * card-4 — right, partially past edge (~72% in-frame = >40% visible).
//    * Diagonal flow toward BR; kept deliberately modest overlap with main.
//    */
//   &.card-4 {
//     top: clamp(24%, 22vw, 32%);
//     right: var(--collage-pad);
//     z-index: 3;
//     box-shadow: var(--shadow-mid);
//     transform: translateX(28%) rotate(1.75deg);
//   }

//   &.card-1:hover,
//   &.card-2:hover,
//   &.card-3:hover,
//   &.card-4:hover {
//     box-shadow: 0 22px 52px rgba(25, 15, 45, 0.26);
//   }

//   &.card-1:hover {
//     transform: rotate(-1.75deg) scale(1.02);
//   }
//   &.card-2:hover {
//     transform: translateX(-50%) rotate(0.75deg) scale(1.02);
//   }
//   &.card-3:hover {
//     transform: translateX(-50%) rotate(-1.25deg) scale(1.02);
//   }
//   &.card-4:hover {
//     transform: translateX(28%) rotate(1.75deg) scale(1.02);
//   }

//   @media (max-width: 479px) {
//     --card-w: 38%;
//   }
// `;

export const CaseSection = styled.section`
  position: relative;
  z-index: 1;
  background: ${colors.bgSection};
  border-radius: clamp(40px, 8vw, 72px) clamp(40px, 8vw, 72px) 0 0;
  padding: clamp(3.5rem, 7vw, 5.75rem) clamp(1.25rem, 4vw, 4rem)
    clamp(4rem, 8vw, 6rem);
  margin-top: clamp(-2rem, -3vw, -1.25rem);
  box-shadow: 0 -12px 48px rgba(80, 50, 120, 0.08);
`;

export const CaseInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CaseHeading = styled.div`
  text-align: left;
  margin-bottom: clamp(2rem, 4vw, 3rem);

  .sub {
    display: block;
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 500;
    line-height: 1.35;
    color: ${colors.text};
    max-width: 28ch;
  }

  .emph {
    display: block;
    margin-top: 0.5rem;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: ${colors.text};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: clamp(2.5rem, 5vw, 4rem);
    align-items: stretch;
  }
`;

export const TextBlock = styled.div`
  text-align: left;
  max-width: 420px;

  p {
    margin: 0 0 1.5rem;
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    font-weight: 400;
    line-height: 1.65;
    color: ${colors.text};
  }

  .label {
    font-weight: 700;
    font-size: 1.05em;
  }
`;

export const PropicCard = styled(motion.div)`
  position: relative;
  border-radius: clamp(28px, 4vw, 48px);
  overflow: hidden;
  min-height: 280px;
  background: linear-gradient(
    165deg,
    #4a9ae8 0%,
    #5a6fd8 28%,
    #7b4ec4 62%,
    #9a5cb8 100%
  );
  box-shadow: 0 24px 50px rgba(60, 40, 120, 0.28);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.12) 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse 90% 60% at 50% 100%,
        rgba(30, 40, 80, 0.35) 0%,
        transparent 65%
      );
    pointer-events: none;
  }
`;

export const PropicSkyline = styled.div`
  position: absolute;
  bottom: 22%;
  left: 0;
  right: 0;
  height: 42%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4%;
  padding: 0 8%;
  opacity: 0.85;
  pointer-events: none;

  span {
    display: block;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 4px 4px 0 0;
    width: 12%;
    min-height: 35%;
  }

  span:nth-child(1) {
    height: 55%;
  }
  span:nth-child(2) {
    height: 80%;
    width: 14%;
  }
  span:nth-child(3) {
    height: 65%;
  }
  span:nth-child(4) {
    height: 95%;
    width: 16%;
  }
  span:nth-child(5) {
    height: 70%;
  }
`;

export const PropicTitle = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: clamp(2rem, 5vw, 2.75rem) 1.5rem 0.5rem;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #0a0a0a;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0;
`;

export const PropicI = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 1px;
`;

export const PropicDots = styled.span`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 4px);
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  justify-content: center;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: block;
  }

  i:nth-child(1) {
    background: #3ddc84;
  }
  i:nth-child(2) {
    background: #ff9f43;
  }
  i:nth-child(3) {
    background: #e040fb;
  }
`;

export const PropicBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: clamp(1rem, 2.5vw, 1.35rem) clamp(1.25rem, 3vw, 1.75rem);
  background: rgba(15, 12, 28, 0.62);
  backdrop-filter: blur(6px);

  p {
    margin: 0;
    font-size: clamp(0.85rem, 1.4vw, 0.95rem);
    font-weight: 500;
    line-height: 1.5;
    color: #ffffff;
    text-align: center;
  }
`;

export const BottomSection = styled.section`
  position: relative;
  z-index: 2;
  background: ${colors.bgFooter};
  border-radius: clamp(36px, 7vw, 64px) clamp(36px, 7vw, 64px) 0 0;
  min-height: clamp(100px, 18vw, 160px);
  margin-top: clamp(-1.5rem, -2.5vw, -0.75rem);
  box-shadow: 0 -10px 40px rgba(40, 25, 55, 0.12);
`;

export const StoriesSection = styled.section`
  background: #ffffff;
  padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.25rem, 4vw, 4rem);
`;

export const StoriesInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 3vw, 2rem);
`;

export const StoriesBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: end;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.45fr);
  }

  @media (max-width: 640px) {
    align-items: start;
  }
`;

export const StoriesLeft = styled.div`
  text-align: left;
  max-width: 460px;

  @media (max-width: 640px) {
    max-width: none;
    width: 100%;
  }
`;

export const Eyebrow = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #6f5fdc;
  margin-bottom: 0.9rem;
`;

export const StoriesTitle = styled.h2`
  margin: 0;
  width: 100%;
  font-size: clamp(1.35rem, 4.2vw, 3.05rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #0b1220;

  @media (min-width: 640px) {
    white-space: nowrap;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin: 0.25rem 0 2rem;
  flex-wrap: wrap;
`;

export const Tab = styled.button`
  appearance: none;
  border: 0;
  background: ${(p) => (p["data-active"] ? "#6f5fdc" : "transparent")};
  color: ${(p) => (p["data-active"] ? "#ffffff" : "#0b1220")};
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease, color 120ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const StoriesLink = styled.a`
  color: #6f5fdc;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  margin-left: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const PageShell = styled.div`
  font-family: "Montserrat", system-ui, sans-serif;
  min-height: 100vh;
  background: radial-gradient(
      900px 420px at 20% 10%,
      rgba(111, 95, 220, 0.18),
      rgba(255, 255, 255, 0) 55%
    ),
    radial-gradient(
      840px 460px at 80% 0%,
      rgba(34, 197, 94, 0.12),
      rgba(255, 255, 255, 0) 56%
    ),
    linear-gradient(180deg, #ffffff, #f8fafc);
  padding: clamp(1.1rem, 3vw, 2.2rem);
`;

export const PageHeader = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0.25rem 0 1.2rem;
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  color: #0b1220;
  text-decoration: none;
  opacity: 0.9;
  margin-bottom: 1rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(10px);
  transition: transform 140ms ease, opacity 140ms ease, background 140ms ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 1;
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: clamp(1.8rem, 4.4vw, 3.2rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  font-weight: 900;
  color: #0b1220;
`;

export const PageSub = styled.p`
  margin: 0.65rem 0 0;
  max-width: 62ch;
  font-size: 1.05rem;
  line-height: 1.45;
  color: #475569;
`;

export const ClientGrid = styled.div`
  max-width: 1180px;
  margin: 1.25rem auto 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.05rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
  }

  @media (min-width: 1040px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`;

export const ClientCard = styled.div`
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(10px);
  transform: translateZ(0);
`;

export const ClientCardMedia = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  background: radial-gradient(
      600px 240px at 20% 20%,
      rgba(111, 95, 220, 0.25),
      rgba(255, 255, 255, 0) 55%
    ),
    radial-gradient(
      520px 260px at 85% 30%,
      rgba(34, 197, 94, 0.18),
      rgba(255, 255, 255, 0) 58%
    ),
    linear-gradient(135deg, #0b1220, #111827);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(1.05) contrast(1.03);
    transform: translateZ(0);
  }

  .mediaOverlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.05),
      rgba(15, 23, 42, 0.55)
    );
    pointer-events: none;
  }

  .mediaCaption {
    position: absolute;
    left: 1rem;
    bottom: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(15, 23, 42, 0.1);
    backdrop-filter: blur(12px);
    font-weight: 900;
    color: #0b1220;
    letter-spacing: -0.02em;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 4px;
    background: #6f5fdc;
    box-shadow: 0 12px 30px rgba(111, 95, 220, 0.32);
  }
`;

export const ClientCardBody = styled.div`
  padding: 1rem 1.05rem 1.15rem;
`;

export const ClientCardTitle = styled.h3`
  margin: 0;
  font-size: 1.08rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #0b1220;
  line-height: 1.15;
`;

export const ClientCardDesc = styled.p`
  margin: 0.55rem 0 0;
  font-size: 0.95rem;
  line-height: 1.45;
  color: #475569;
`;

export const ClientCardChips = styled.div`
  margin-top: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Chip = styled.span`
  font-size: 0.82rem;
  font-weight: 800;
  color: rgba(11, 18, 32, 0.85);
  background: rgba(111, 95, 220, 0.1);
  border: 1px solid rgba(111, 95, 220, 0.18);
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.35rem;
  margin-top: 0.25rem;
`;

export const StatNumber = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #0b1220;
  letter-spacing: -0.02em;
`;

export const StatLabel = styled.div`
  margin-top: 0.35rem;
  font-size: 0.92rem;
  color: #4b5565;
  line-height: 1.35;
  max-width: 30ch;
`;

export const ProductsUsed = styled.div`
  margin-top: 1.75rem;

  .title {
    font-size: 0.95rem;
    font-weight: 800;
    color: #0b1220;
    margin-bottom: 0.75rem;
  }
`;

export const ProductList = styled.div`
  display: grid;
  gap: 0.55rem;
  font-size: 0.95rem;
  color: #334155;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 4px;
    background: var(--c, #60a5fa);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
  }
`;

export const StoriesRight = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 960px) {
    justify-content: flex-end;
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const StoryCard = styled(motion.div)`
  position: relative;
  width: min(740px, 100%);
  height: clamp(300px, 30vw, 400px);
  border-radius: 13px;
  overflow: hidden;
//   box-shadow: 0 22px 60px rgba(15, 23, 42, 0.25);

  background: url(${(p) => p.bg}) center/cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    // background: radial-gradient(
    //     ellipse 80% 70% at 50% 20%,
    //     rgba(253, 253, 253, 0.18) 0%,
    //     transparent 55%
    //   ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.35) 100%);
  }

  .brand {
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-transform: lowercase;
  }

  .brandMark {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .bookmark {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    backdrop-filter: blur(6px);
    font-weight: 900;
  }

  .caption {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 22px;
    z-index: 2;
    color: #fff;
    font-weight: 800;
    font-size: clamp(1.05rem, 2.1vw, 1.35rem);
    line-height: 1.25;
    max-width: 44ch;
    text-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 640px) {
    height: clamp(220px, 62vw, 320px);
    border-radius: 16px;
    background-position: top center;

    .caption {
      left: 16px;
      right: 16px;
      bottom: 16px;
      max-width: 100%;
    }
  }
`;


export const HeroCollageMotion = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 520px;
  height: clamp(320px, 40vw, 420px);
  margin: 0 auto;

  @media (min-width: 960px) {
    margin-left: auto;
  }
`;

export const LogoCard = styled.div`
  position: absolute;
  width: clamp(140px, 18vw, 190px);
  height: clamp(140px, 18vw, 190px);
  border-radius: 22px;
  overflow: hidden;
  background: white;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.14);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* smoother visual feel */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
  }

  /* Position variants */
  &.card-1 {
    top: 50px;
    left: 40px;
    z-index: 2;
  }

  &.card-2 {
    top: 22px;
    right: 65px;
    z-index: 3;
    transform: rotate(0deg);
  }

  &.card-3 {
    bottom: 0;
    left: 110px;
    z-index: 1;
    transform: rotate(0deg);
  }

  &.card-4 {
    bottom: 40px;
    right: 0;
    z-index: 0;
    opacity: 0.85;
  }
`;
