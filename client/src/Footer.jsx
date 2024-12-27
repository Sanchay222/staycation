import React from 'react';

const Footer = () => {
  return (
    <footer className="text-grey-400 py-8 mt-auto w-full">
        <div className="w-full ">
      <hr style={{ border: "1px solid #ccc", marginTop:"30px", marginBottom:"30px"}} />
    </div>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Staycation</h3>
            <p className="text-sm">Your go-to platform for booking amazing stays and vacations. Find your next getaway with ease.</p>
            <div className="flex gap-4 text-gray-400">
              <a href="mailto:info@staycation.com" className="hover:underline">info@staycation.com</a>
              <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
            </div>
          </div>

          {/* Customer Support Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Customer Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/help" className="hover:underline">Help Center</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/affiliates" className="hover:underline">Affiliates</a></li>
              <li><a href="/partners" className="hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex gap-4 text-gray-400">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M22 12l-9 9-9-9 9-9 9 9z" />
                </svg>
                Facebook
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 1C5.373 1 0 5.373 0 12s5.373 11 12 11 12-5.373 12-11S18.627 1 12 1zm0 20.25c-4.618 0-8.25-3.632-8.25-8.25S7.382 4.75 12 4.75 20.25 8.382 20.25 12 16.618 21.25 12 21.25zm0-15.5c-2.37 0-4.25 1.88-4.25 4.25s1.88 4.25 4.25 4.25 4.25-1.88 4.25-4.25-1.88-4.25-4.25-4.25z"/>
                </svg>
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M22 5.9a8.7 8.7 0 01-2.5.7A4.3 4.3 0 0021.4 4c-.8 1.1-2 1.8-3.3 2.1a4.2 4.2 0 00-7.1 3.8 12.1 12.1 0 01-8.8-4.5 4.2 4.2 0 001.3 5.6 4.1 4.1 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.3 4.3 0 01-1.9.1c.5 1.5 2 2.7 3.7 2.8a8.5 8.5 0 01-5.2 1.8c-.4 0-.8 0-1.2-.1a12 12 0 006.7 2c8.1 0 12.5-6.7 12.5-12.5l-.1-.6A9.6 9.6 0 0022 5.9z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; 2024 Staycation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

