import { useEffect, useRef, useState } from "react";

function Cursor() {

  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState("default");
  const cursorStateRef = useRef("default");
  // default | hovering

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const clickable = e.target.closest(
        "a, button, [role='button'], .nav-logo",
      );

      const nextState = clickable ? "hovering" : "default";
      if (nextState !== cursorStateRef.current) {
        cursorStateRef.current = nextState;
        setCursorState(nextState);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    let raf;
    const animate = () => {
      // Main cursor — fast follow
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      // Trail — slower follow for depth
      trailPos.current.x += (mouse.current.x - trailPos.current.x) * 0.06;
      trailPos.current.y += (mouse.current.y - trailPos.current.y) * 0.06;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Trailing blur dot */}
      <div ref={trailRef} className="cursor-trail" />

      {/* Main cursor ring */}
      <div ref={cursorRef} className={`custom-cursor ${cursorState}`} />
    </>
  );
}

export default Cursor;
