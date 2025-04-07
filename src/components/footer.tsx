import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-[#0f172a] text-primary-foreground dark:text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ISG.TV</h3>
            <p className="text-primary-foreground/80 dark:text-gray-300">
              Indigo Solutions Group provides outsourced Sales and Marketing
              services for ISPs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#who-we-are"
                  className="text-primary-foreground/80 dark:text-gray-300 hover:text-primary-foreground dark:hover:text-white transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="#what-we-do"
                  className="text-primary-foreground/80 dark:text-gray-300 hover:text-primary-foreground dark:hover:text-white transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="#work-with-us"
                  className="text-primary-foreground/80 dark:text-gray-300 hover:text-primary-foreground dark:hover:text-white transition-colors"
                >
                  Work With Us
                </Link>
              </li>
              <li>
                <Link
                  href="#partner-with-us"
                  className="text-primary-foreground/80 dark:text-gray-300 hover:text-primary-foreground dark:hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-primary-foreground/80 dark:text-gray-300">
              <p>Email: info@isg.tv</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 dark:border-gray-700 mt-8 pt-8 text-center text-primary-foreground/60 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Indigo Solutions Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
