const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Message */}
        <div>
          <h3 className="text-xl font-semibold text-green-700">Gauri Boutique</h3>
          <p className="mt-2 text-sm">
            Handcrafted elegance woven for the modern soul. Discover timeless ethnic wear with a contemporary twist.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-md font-semibold mb-3">Connect With Us</h4>
          <p className="text-sm">Email: hello@gauriboutique.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-700">
              <i className="fab fa-instagram"></i> {/* If using Font Awesome */}
            </a>
            <a href="#" className="hover:text-green-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-green-700">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Gauri Boutique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
