"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const sections = [
  { href: "#introduction", label: "Introduction", idx: "01" },
  { href: "#features", label: "Features", idx: "02" },
  { href: "#process", label: "Process", idx: "03" },
  { href: "#team", label: "Team", idx: "04" },
  { href: "#contact", label: "Contact", idx: "05" },
];

export function Navigation() {
  const innerRef = useRef<HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Scroll-blur effect on the inner nav
  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const updateNav = () => {
      const y = window.scrollY;
      const opacity = Math.min((y / 64) * 100, 90);
      const blur = Math.min(y / 20, 10);
      const blurValue = `blur(${blur}px)`;
      inner.style.background = `color-mix(in oklab, var(--background) ${opacity}%, transparent)`;
      inner.style.backdropFilter = blurValue;
      inner.style.setProperty("-webkit-backdrop-filter", blurValue);
    };

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  // Drawer behaviors: Escape closes; resizing past mobile breakpoint closes; body lock
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-locked");
    } else {
      document.body.classList.remove("nav-locked");
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
      document.body.classList.remove("nav-locked");
    };
  }, [drawerOpen]);

  return (
    <>
      <header className="nav">
        <nav className="inner" ref={innerRef}>
          <Logo />
          <div className="nav-links">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="nav-link">
                {s.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <a
              href="https://app.huddlesurety.co/"
              className="btn btn-ghost btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
            <Link href="#contact" className="btn btn-default btn-lg">
              Get Started
            </Link>
          </div>
          <button
            type="button"
            className={`nav-toggle${drawerOpen ? " is-open" : ""}`}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="navDrawer"
            onClick={() => setDrawerOpen((o) => !o)}
          >
            <span className="bars" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>
        <div
          id="navDrawer"
          className={`nav-drawer${drawerOpen ? " is-open" : ""}`}
          aria-hidden={!drawerOpen}
        >
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="nav-drawer-link"
              onClick={() => setDrawerOpen(false)}
            >
              <span>{s.label}</span>
              <span className="idx">{s.idx}</span>
            </Link>
          ))}
          <div className="drawer-actions">
            <a
              href="https://app.huddlesurety.co/"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setDrawerOpen(false)}
            >
              Sign In
            </a>
            <Link
              href="#contact"
              className="btn btn-default"
              onClick={() => setDrawerOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <div className="nav-spacer" />
    </>
  );
}
