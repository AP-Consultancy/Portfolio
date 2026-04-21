import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BackLink,
  ClientCard,
  ClientCardBody,
  ClientCardChips,
  ClientCardDesc,
  ClientCardMedia,
  ClientCardTitle,
  ClientGrid,
  Chip,
  PageHeader,
  PageShell,
  PageSub,
  PageTitle,
} from "../style";
import { clientWorkCards, clientWorkPageCopy } from "./clientWork.data";

const ease = [0.22, 1, 0.36, 1];

export default function ClientWorkPage() {
  return (
    <PageShell>
      <PageHeader>
        <BackLink as={Link} to="/">
          ← Back to home
        </BackLink>
        <PageTitle>{clientWorkPageCopy.title}</PageTitle>
        <PageSub>
          {clientWorkPageCopy.subtitle}
        </PageSub>
      </PageHeader>

      <AnimatePresence>
        <ClientGrid
          as={Motion.div}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.12 },
            },
          }}
        >
          {clientWorkCards.map((it) => (
            <ClientCard
              as={Motion.article}
              key={it.key}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease }}
            >
              <ClientCardMedia>
                <Motion.img
                  src={it.imageUrl}
                  alt={it.client}
                  loading="lazy"
                  initial={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, ease }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="mediaOverlay" aria-hidden />
                <div className="mediaCaption">
                  <span className="dot" />
                  {it.client}
                </div>
              </ClientCardMedia>

              <ClientCardBody>
                <ClientCardTitle>{it.title}</ClientCardTitle>
                <ClientCardDesc>{it.description}</ClientCardDesc>

                {it.chips?.length ? (
                  <ClientCardChips>
                    {it.chips.slice(0, 6).map((label) => (
                      <Chip key={`${it.key}-${label}`}>{label}</Chip>
                    ))}
                  </ClientCardChips>
                ) : null}
              </ClientCardBody>
            </ClientCard>
          ))}
        </ClientGrid>
      </AnimatePresence>
    </PageShell>
  );
}

