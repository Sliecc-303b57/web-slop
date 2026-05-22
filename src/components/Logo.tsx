import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-mark">
        {/* Drop /public/assets/huddle-logo.png to enable. Falls back gracefully. */}
        <img src="/assets/huddle-logo.png" alt="" />
      </span>
      <span className="logo-text">Huddle</span>
    </Link>
  );
}
