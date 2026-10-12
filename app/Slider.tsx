const items = [
  "AI Chatbot Development",
  "Web Development",
  "Branding Design",
  "Python Automation",
  "API Integration",
  "UI/UX Design",
  "AI Automation",
  "Clothing Branding",
];

export default function Slider() {
  // The list is shown twice so the scrolling loop has no gap.
  // The second copy is hidden from screen readers to avoid reading it twice.
  const loop = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-black text-white py-2 border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee gap-10">
        {loop.map((item, index) => (
          <span
            key={index}
            aria-hidden={index >= items.length ? true : undefined}
            className="text-sm md:text-base font-medium tracking-wide"
          >
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
}