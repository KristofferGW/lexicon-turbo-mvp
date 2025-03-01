export default function BgColorComponent({ children, bgColor = "lexicon" }) {
  return <div className={`bg-${bgColor}`}>{children}</div>;
}
