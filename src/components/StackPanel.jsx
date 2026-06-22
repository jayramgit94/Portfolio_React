import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { site } from "../data/site";

const iconByTone = {
  react: SiReact,
  js: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  node: SiNodedotjs,
  mongo: SiMongodb,
  git: SiGit,
  github: SiGithub,
  cpp: SiCplusplus,
};

function StackIcon({ tone }) {
  const Icon = iconByTone[tone];
  if (!Icon) {
    return <span className="stack-pill__glyph" aria-hidden="true">◆</span>;
  }
  return <Icon className="stack-pill__icon" aria-hidden="true" />;
}

function StackPanel({ inView = true }) {
  return (
    <div className="stack-panel">
      <div className="stack-panel__chrome" aria-hidden="true">
        <span className="stack-panel__dot stack-panel__dot--red" />
        <span className="stack-panel__dot stack-panel__dot--yellow" />
        <span className="stack-panel__dot stack-panel__dot--green" />
        <span className="stack-panel__title">Stack · workspace</span>
        <span className="stack-panel__status">Active</span>
      </div>

      <div className="stack-panel__body">
        {site.stackGroups.map((group, groupIndex) => (
          <motion.div
            key={group.id}
            className="stack-group"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.15 + groupIndex * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="stack-group__label">{group.label}</p>
            <ul className="stack-group__pills">
              {group.items.map((item, pillIndex) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.35,
                    delay: 0.2 + groupIndex * 0.06 + pillIndex * 0.03,
                  }}
                >
                  <span className={`stack-pill stack-pill--${item.tone}`}>
                    <StackIcon tone={item.tone} />
                    <span>{item.name}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default StackPanel;
