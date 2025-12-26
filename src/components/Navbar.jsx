import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Top Picks", path: "/top-picks" },
    { label: "Podcasts", path: "/podcasts" },
    { label: "Events", path: "/events" },
    { label: "Newsletter", path: "/newsletter" },
    { label: "Stories", path: "/stories" },
    { label: "Services", path: "/services" },
  ];

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full bg-white relative z-50 font-times">
      {/* Site Title */}
      <div className="flex justify-center py-4 sm:py-6">
        <Link to="/" className="text-center w-full flex justify-center">
          <div className="border-2 border-blue-900 overflow-hidden w-fit max-w-full">
            <div className="flex flex-nowrap">
              <div className="bg-blue-900 px-3 sm:px-6 py-2 sm:py-4">
                <h1 className="text-white text-2xl sm:text-6xl lg:text-7xl font-bold uppercase whitespace-nowrap">
                  Industries
                </h1>
              </div>
              <div className="bg-white px-3 sm:px-6 py-2 sm:py-4">
                <h1 className="text-blue-900 text-2xl sm:text-6xl lg:text-7xl font-bold uppercase whitespace-nowrap">
                  Times
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="bg-blue-900 py-2 md:hidden w-full">
        <div className="flex items-center justify-start px-4">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="p-2"
          >
            {mobileOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="w-full sm:max-w-7xl sm:mx-auto sm:px-6 lg:px-20 px-4">
        <nav
          className="hidden md:flex justify-center space-x-16 text-base lg:text-lg font-bold uppercase tracking-wide py-2 border-t border-b border-gray-800"
          role="navigation"
        >
          {navItems.map(({ label, path }, i) => (
            <Link
              key={i}
              to={path}
              className="hover:text-blue-900 cursor-pointer transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-2/5 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col px-6 pt-16 shadow-lg`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 left-4 p-2 bg-blue-900 rounded-full"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="mt-12 flex flex-col space-y-6">
          {navItems.map(({ label, path }, i) => (
            <Link
              key={i}
              to={path}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-extrabold hover:text-blue-900"
              tabIndex={0}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
