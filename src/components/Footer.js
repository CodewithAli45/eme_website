import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-800 bg-slate-950 text-slate-400 py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 overflow-hidden rounded bg-white p-1">
                <img src="/eme_logo.png" alt="EME Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-base font-bold text-white tracking-wide">
                Electro-Mech Engineers
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              A premier Engineering, Procurement, and Construction (EPC) company delivering state-of-the-art turnkey solutions for industrial development across Eastern India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition-colors p-2 rounded-full bg-slate-900 border border-slate-800">
                <BsFacebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors p-2 rounded-full bg-slate-900 border border-slate-800">
                <BsTwitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors p-2 rounded-full bg-slate-900 border border-slate-800">
                <BsInstagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors p-2 rounded-full bg-slate-900 border border-slate-800">
                <BsLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-display text-white font-bold tracking-wide uppercase text-sm mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/ongoing-project" className="hover:text-amber-400 transition-colors">Ongoing Projects</Link>
              </li>
              <li>
                <Link href="/completed-project" className="hover:text-amber-400 transition-colors">Completed Projects</Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-amber-400 transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Resources */}
          <div>
            <h3 className="font-display text-white font-bold tracking-wide uppercase text-sm mb-6">
              Resources
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">Licensing &amp; Certification</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">EPC Compliance</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div>
            <h3 className="font-display text-white font-bold tracking-wide uppercase text-sm mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm leading-relaxed text-slate-300">
              <li>
                <strong className="block text-white text-xs uppercase tracking-wider mb-1">Registered Office:</strong>
                Electro-Mech Engineers, Jain Ice Factory Compound, Main Road, Chas, Bokaro, Jharkhand, India
              </li>
              <li>
                <strong className="block text-white text-xs uppercase tracking-wider mb-1">Corporate Office:</strong>
                KB - 8, City Center, Sector - 4, Bokaro Steel City, Jharkhand, India
              </li>
              <li className="pt-2 border-t border-slate-900">
                <span className="block"><strong className="text-white">Phone:</strong> +91 9334212890</span>
                <span className="block"><strong className="text-white">Email:</strong> electro_mech@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 mt-12 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Electro-Mech Engineers. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Site Managed by:</span>
            <span className="font-medium text-amber-500 italic">Ali Murtaza</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
