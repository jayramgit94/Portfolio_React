import { useEffect, useRef, useState } from "react";
import { mediaQuery } from "../utils/breakpoints";

function Cursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState("default");
  const cursorStateRef = useRef("default");
  // default | hovering

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopWide = window.matchMedia(mediaQuery.desktopMin);

    if (!finePointer.matches || !desktopWide.matches || reducedMotion.matches) {
      return undefined;
    }

    const onPointerMove = (e) => {
      if (e.pointerType !== "mouse") return;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onPointerOver = (e) => {
      const clickable = e.target.closest(
        "a, button, [role='button'], .nav-logo",
      );

      const nextState = clickable ? "hovering" : "default";
      if (nextState !== cursorStateRef.current) {
        cursorStateRef.current = nextState;
        setCursorState(nextState);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });

    let raf;
    const animate = () => {
      // Main cursor — fast follow
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div ref={cursorRef} className={`custom-cursor ${cursorState}`} />
    </>
  );
}

export default Cursor;
