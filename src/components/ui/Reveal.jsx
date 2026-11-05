import { m } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  ...rest
}) {
  return (
    <m.div
      data-motion="reveal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      variants={fadeUp}
      custom={delay / 1000}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </m.div>
  );
}