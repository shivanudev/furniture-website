import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function ContactPage() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className="contact-page">

      {/* HERO SECTION */}
     <section className="homeHero2">
      <div className="homeHero-overlay"></div>

      {/* Navbar */}
     <nav className="homeHero-navbar">

  <div className="homeHero-logo">
    <div className="homeHero-logoBox">J</div>
    <span className="homeHero-logoText">JAGANNATH</span>
  </div>

  {/* HAMBURGER */}
  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? "✖" : "☰"}
  </div>

  {/* 🔥 IMPORTANT WRAPPER */}
  <div className={`nav-container ${menuOpen ? "active" : ""}`}>
    
    <ul className="homeHero-navLinks">
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/product"><li>Product</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
    </ul>

    <div className="whatsapp-btn">
      <a href="https://wa.me/923000000000">
        WhatsApp
      </a>
    </div>

  </div>

</nav>

      {/* Hero Content */}
     <div className="homeHero-content">
 <h1>Need Help? Contact Our Experts</h1>
  <p>
    Have questions about our furniture collections or need assistance
    with your order? Our team is ready to help you create the perfect
    space with comfort, style, and quality craftsmanship.
  </p>
</div>
      
    </section>

      {/* CONTACT SECTION */}
      <section className="contact-content">
        <div className="left">
          <h2>Request Free Consultation</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="right">
          <h2>Get In Touch</h2>

          <div className="info">
            <p><strong>Address:</strong> 123 Business Street, New York</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> info@digitalagency.com</p>
            <p><strong>Working Hours:</strong> Mon - Fri / 9AM - 6PM</p>
          </div>
        </div>
      </section>

    </div>

 {/* --------------------footer-------------------------------------------- */}
 <footer className="footer">
       <div className="footer-top">
         {/* Logo Section */}
         <div className="footer-logo">
           <div className="logo-box">J</div>
           <span>JAGANNATH</span>
 
           <div className="social-icons">
             <Facebook size={18} />
             <Twitter size={18} />
             <Instagram size={18} />
             <Youtube size={18} />
           </div>
         </div>
 
         {/* About */}
         <div className="footer-column">
           <h4>Pages</h4>
           <p>About Us</p>
           <p>Contact Us</p>
           <p>Careers</p>
           <p>Customer Support</p>
         </div>
 
         {/* Categories */}
         <div className="footer-column">
           <h4>Categories</h4>
           <p>Table</p>
           <p>Chairs</p>
           <p>Cabinets</p>
           <p>Laptop Stands</p>
         </div>
 
         {/* Information */}
         <div className="footer-column">
           <h4>Information</h4>
           <p>FAQs</p>
           <p>Refund Policy</p>
           <p>Privacy Policy</p>
           <p>Terms & Conditions</p>
         </div>
       </div>
 
       <div className="footer-bottom">
         Copyright © 2026 Office Furniture Store
       </div>
     </footer>
 {/* --------------------footer-------------------------------------------- */}
</>
  );
}
