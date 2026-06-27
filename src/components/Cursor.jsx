import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const ring    = useRef({ x: 0, y: 0 });
  const mouse   = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    const hoverEls = document.querySelectorAll("a, button, .card-hover, .skill-card, .stack-card");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => ringRef.current?.classList.add("hov"));
      el.addEventListener("mouseleave", () => ringRef.current?.classList.remove("hov"));
    });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot  hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
