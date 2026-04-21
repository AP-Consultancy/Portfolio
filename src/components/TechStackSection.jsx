import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 20px;
  background: #f8fafc;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  color: #1e293b;
  max-width: 900px;
  margin: 0 auto 16px;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const Highlight = styled.span`
  color: #f97316;
`;

const Subtitle = styled.p`
  max-width: 750px;
  margin: 0 auto 50px;
  color: #64748b;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 28px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 14px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
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
  color: #334155;
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