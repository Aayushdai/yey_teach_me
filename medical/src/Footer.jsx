import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '40px 20px', fontSize: '0.9rem', color: '#333' }}>
      <div className="footer-top" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '30px' }}>
        {/* Brand and Newsletter */}
        <div className="footer-brand" style={{ flex: '1 1 200px', marginBottom: '20px' }}>
          <h2>Tarkari Bazar</h2>
          <p>Fresh fruits delivered fast, wherever you are.</p>
          <form>
            <input
              type="email"
              placeholder="Join our newsletter"
              style={{ padding: '8px', width: '70%' }}
            />
            <button type="submit" style={{ padding: '8px 12px', marginLeft: '5px' }}>Subscribe</button>
          </form>
        </div>
        
        {/* Quick Links */}
        <div className="footer-links" style={{ flex: '1 1 150px', marginBottom: '20px' }}>
          <h4>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        
        <div className="footer-links" style={{ flex: '1 1 150px', marginBottom: '20px' }}>
          <h4>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-links" style={{ flex: '1 1 150px', marginBottom: '20px' }}>
          <h4>Shop</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/fresh-fruits">Fresh Fruits</a></li>
            <li><a href="/bundles">Bundles & Gifts</a></li>
            <li><a href="/seasonal">Seasonal Picks</a></li>
          </ul>
        </div>
        
        {/* Contact & Social */}
        <div className="footer-contact" style={{ flex: '1 1 200px', marginBottom: '20px' }}>
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@yourfruit.com">support@yourfruit.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234-567-890</a></p>
          <div className="social" style={{ marginTop: '10px' }}>
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Legal */}
      <div className="footer-bottom" style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>
          © {new Date().getFullYear()} Tarkari Bazar. All rights reserved. {' '}
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
