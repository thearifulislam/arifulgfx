import {
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiPhotopea,
} from "react-icons/si";
import { motion } from "framer-motion";

const tools = [
  {
    name: "Figma",
    icon: SiFigma,
    description: "Primary design tool for interface design and prototyping",
    color: "#1ABCFE"
  },
  {
    name: "Adobe XD",
    icon: SiAdobexd,
    description: "Used for user experience design and interactive prototypes",
    color: "#FF61F6"
  },
  {
    name: "Photoshop",
    icon: SiAdobephotoshop,
    description: "Image editing and manipulation for design assets",
    color: "#31A8FF"
  },
  {
    name: "Illustrator",
    icon: SiAdobeillustrator,
    description: "Vector graphics and illustration for brand elements",
    color: "#FF9A00"
  },
  {
    name: "Photopea",
    icon: SiPhotopea,
    description: "Used for editing and manipulating images and graphics",
    color: "#18A497"
  },
  {
    name: "Adobe Indesign",
    icon: SiAdobeindesign,
    description: "Used for typography, layout, and page layout for print and digital media",
    color: "#FF3366"
  },
];

const toolStyle = `
  .tools-section {
    padding: 8rem 0;
    background: #fafafa;
    position: relative;
    overflow: hidden;
  }

  .tools-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 0% 0%, rgba(24, 164, 151, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 100% 100%, rgba(255, 51, 102, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    color: #111;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .section-title strong {
    font-weight: 700;
    background: linear-gradient(135deg, #18A497, #FF3366);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .section-description {
    font-size: 1.125rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .tool-card {
    background: #fff;
    border-radius: 24px;
    padding: 2rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .tool-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }

  .tool-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 16px;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .tool-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #111;
    margin-bottom: 0.75rem;
  }

  .tool-description {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    .tools-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .tools-grid {
      grid-template-columns: 1fr;
    }
    
    .tools-section {
      padding: 4rem 0;
    }
  }
`;

if (typeof window !== "undefined") {
  const styleId = "tools-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = toolStyle;
    document.head.appendChild(style);
  }
}

const ToolsSection = () => {
  return (
    <section className="tools-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            Crafting with <strong>Modern Tools</strong>
          </h2>
          <p className="section-description">
            Leveraging industry-standard design tools to bring creative visions to life with precision and innovation.
          </p>
        </header>

        <motion.div 
          className="tools-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="tool-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="tool-icon"
                style={{ 
                  background: `${tool.color}15`,
                  color: tool.color
                }}
              >
                <tool.icon size={32} />
              </div>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-description">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
