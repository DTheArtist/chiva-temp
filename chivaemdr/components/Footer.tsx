import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Updates Section */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Updates:</h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link href="https://chivaculture.hashnode.dev/" prefetch target="_blank" className="hover:text-cyan-300">
                ▶ Company
              </Link>
            </li>
            <li>
              <Link href="https://chivainsights.hashnode.dev/" prefetch target="_blank" className="hover:text-cyan-300">
                ▶ Customers
              </Link>
            </li>
            <li>
              <Link href="https://chivavision.hashnode.dev/" prefetch target="_blank" className="hover:text-cyan-300">
                ▶ Investors
              </Link>
            </li>
            <li>
              <Link href="https://chivacommunity.hashnode.dev/" prefetch target="_blank" className="hover:text-cyan-300">
                ▶ Community
              </Link>
            </li>
            <li>
              <Link href="https://updates.chivaemdr.com" prefetch target="_blank" className="hover:text-cyan-300">
                ▶ Platform Documentation
              </Link>
            </li>
          </ul>
        </div>

        {/* Featured Section */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-400 mb-3">Featured:</h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link href="https://chivaapp.com/" prefetch target="_blank" className="hover:text-indigo-300">
                ▶ Chi'Va Platform
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/chivaemdr/" prefetch target="_blank" className="hover:text-indigo-300">
                ▶ Chi&apos;Va Connection
              </Link>
            </li>
            <li>
              <Link href="/updates" prefetch target="_blank" className="hover:text-indigo-300">
                ▶ Chi&apos;Va News
              </Link>
            </li>
          </ul>
        </div>

        {/* Disclaimer Section */}
        <div>
          <h3 className="text-lg font-semibold text-violet-400 mb-3">Disclaimer:</h3>
          <p className="text-slate-400 text-xs leading-relaxed font-mulish">
            *Chi&apos;Va does not provide medical advice. Chi'Va content is not intended to be a substitute for professional 
            medical advice, clinical therapy, psychotherapy, diagnosis, or treatment. Always seek the advice of a professional 
            with any questions you have regarding a medical or mental health condition.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center border-t border-slate-700 pt-6">
        <p className="text-slate-400 text-sm">
          &copy; 2025 Chi'Va by Quantum Innovation Advisors, a product of Energy Plane. All rights reserved. Updated for 2025.
        </p>
      </div>
    </footer>
  );
}
