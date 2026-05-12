import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { colors } from "../style";

const Section = styled.section`
  padding: 80px 20px;
  background: ${colors.techPanel};
  text-align: center;

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      padding: 52px max(16px, env(safe-area-inset-left, 0px)) 44px
        max(16px, env(safe-area-inset-right, 0px));
    `}
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  color: ${colors.text};
  max-width: 900px;
  margin: 0 auto 16px;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const Highlight = styled.span`
  color: ${colors.accent};
`;

const Subtitle = styled.p`
  max-width: 750px;
  margin: 0 auto 50px;
  color: ${colors.textMuted};
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 28px;
  max-width: 1000px;
  margin: 0 auto;

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      gap: 18px;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    `}
`;

const Card = styled(motion.div)`
  background: ${colors.bgSection};
  border: 1px solid ${colors.borderSubtle};
  border-radius: 14px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 43, 43, 0.35);
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const Label = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.textMuted};
`;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function TechStackSection({ data }) {
  return (
    <Section>
      <Title>
        Hire Dedicated Remote Developers{" "}
        {/* <Highlight>Skilled</Highlight> in Web & Mobile App Development */}
      </Title>

      <Subtitle>
        Boost your business with experienced developers skilled in modern and
        classic technologies. Build scalable apps tailored to your needs.
      </Subtitle>

      <Grid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {data.map((item, i) => (
          <Card key={i} variants={itemVariants}>
            <Icon src={item.icon} alt={item.label} />
            <Label>{item.label}</Label>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export const techData = [
    { label: "Android", icon: "/icons/android.png" },
    { label: "iOS", icon: "/icons/apple-logo.png" },
    { label: "Langchain", icon: "/icons/langchain-color.png" },
    { label: "React", icon: "/icons/react-js-icon.png" },
    { label: "Flutter", icon: "/icons/flutter.png" },
    { label: "Ruby", icon: "/icons/ruby.png" },
    { label: "Angular", icon: "/icons/angular.png" },
    { label: "Javascript", icon: "/icons/javascript.png" },

    { label: "Java", icon: "/icons/java.png" },
    { label: ".NET", icon: "/icons/NET-Framework-Logo.jpg" },
    { label: "Adobe", icon: "/icons/adobe-experience-manager-aem-icon.png" },
    { label: "AWS", icon: "/icons/AWS.png" },
    { label: "Azure", icon: "/icons/Azure devops.png" },
  
    { label: "PowerBI", icon: "/icons/Power_BI_(4).png" },
    { label: "Node.js", icon: "/icons/Node.js.png" },
    { label: "SQL", icon: "/icons/SQL.png" },
    { label: "Snowflake", icon: "/icons/snowflake-color.png" },
    { label: "Python", icon: "/icons/Python-logo-notext.svg.png" },
  ];