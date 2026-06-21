import { motion } from "framer-motion";

function ScreenshotFrame({
  src,
  alt,
  caption,
  layoutId,
  className = "",
  eager = false,
  label = "Preview",
}) {
  const Img = layoutId ? motion.img : "img";
  const imgProps = {
    src,
    alt,
    loading: eager ? "eager" : "lazy",
    decoding: "async",
    className: "screenshot-frame__img",
    ...(layoutId ? { layoutId } : {}),
  };

  return (
    <figure className={`screenshot-frame ${className}`.trim()}>
      <div className="screenshot-frame__chrome" aria-hidden="true">
        <span className="screenshot-frame__dot screenshot-frame__dot--red" />
        <span className="screenshot-frame__dot screenshot-frame__dot--yellow" />
        <span className="screenshot-frame__dot screenshot-frame__dot--green" />
        <span className="screenshot-frame__label">{label}</span>
      </div>
      <div className="screenshot-frame__canvas">
        <div className="screenshot-frame__grid" aria-hidden="true" />
        <Img {...imgProps} />
      </div>
      {caption ? (
        <figcaption className="screenshot-frame__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export default ScreenshotFrame;
