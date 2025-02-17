import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[var(--medium-purple)] p-[15px] flex justify-between items-center">
      {/* Brand Section */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          {/* Logo text */}
          <span className="text-[var(--bright-white)] text-2xl no-underline">
            Chi'Va
          </span>
        </Link>
        {/* Subtext (Investor Relations) */}
        <span className="text-[var(--bright-white)]">Investor Relations</span>
        {/* Navbar Toggle (hidden by default) */}
        <span
          className="hidden text-2xl text-[var(--primary-accent-color)] cursor-pointer"
          id="js-navbar-toggle"
        >
          &#9776;
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-5">
        <Link
          href="/"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          About
        </Link>
        <Link
          href="/investor"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          Investors
        </Link>
        <Link
          href="/pitch"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          Pitch
        </Link>
        <Link
          href="/team"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          Team
        </Link>
        <Link
          href="/contact"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          Contact
        </Link>
        <Link
          href="/updates"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          Updates
        </Link>
        <Link
          href="https://updates.chivaemdr.com/default-guide/progress-traction/chiva-building-a-foundation-of-compliance-and-trust"
          className="text-[var(--text-color)] text-lg no-underline"
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
}
