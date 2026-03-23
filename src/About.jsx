import React, { useState } from "react";
import { Sofa, Tag, Truck,Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function About() {

 const [menuOpen, setMenuOpen] = useState(false);
  const products = [
  {
    title: "Contemporary Living Room Sofa Arrangement",
    image:
      "https://images.unsplash.com/photo-1663811396925-26657973aa68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Rustic Wooden Storage Cabinet Collection",
    image:
      "https://plus.unsplash.com/premium_photo-1661963335534-cfa2e8a0e7e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Minimal Scandinavian Shelf & Console Unit",
    image:
      "https://images.unsplash.com/photo-1711122842414-e73b0a0eecc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMzfHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Modern Lounge Chair & Side Table Setup",
    image:
      "https://plus.unsplash.com/premium_photo-1732721753361-8849c5cc8f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Elegant Wooden Console Table Design",
    image:
      "https://images.unsplash.com/photo-1697530152990-2c47d3cf7d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU3fHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Artisan Decorative Sideboard with Neutral Decor",
    image:
      "https://plus.unsplash.com/premium_photo-1764695809500-369078213e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY3fHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D",
  },
];

  return (
    <>
    <section className="homeHero">
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
  <h1>
    Crafted for Comfort <br /> Designed for Living
  </h1>

  <p>
    We design furniture that balances aesthetics and functionality,
    bringing warmth, style, and durability into every room of your home.
  </p>
</div>

      
    </section>

    {/* ------------------about the product------------------- */}
     <section className="aboutLuxurySection">
      <div className="aboutLuxuryContainer">

        {/* LEFT IMAGE AREA */}
        <div className="aboutLuxuryImages">
          <img
            className="aboutMainImage"
            src="https://images.unsplash.com/photo-1618220985423-db5473de7fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGZ1cm5pdHVyZSUyMGltYWdlc3MlMjBicm93bnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Main Furniture"
          />
{/* 
          <img
            className="aboutSmallImage topImage"
            src="https://images.unsplash.com/photo-1584798448292-5e7ba13a0826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk3fHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D"
            alt="Interior"
          /> */}

              {/* <img
                className="aboutSmallImage bottomImage"
                src="https://plus.unsplash.com/premium_photo-1732721753209-ba32e50818dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDMzfHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D"
                alt="Sofa"
              /> */}
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutLuxuryContent">
          <span className="aboutLuxuryTag">About Us</span>

         <h2>
  Crafted for Comfort <br />
  Designed for Living
</h2>

<p>
  At HyperErgo, we specialize in premium furniture collections that
  combine exceptional craftsmanship with modern aesthetics. Each piece
  is thoughtfully designed to deliver long-lasting durability,
  superior comfort, and timeless elegance for every home and workspace.
</p>

<p>
  From contemporary living room setups to refined office environments,
  our furniture reflects quality materials, precise detailing, and a
  commitment to enhancing everyday living through purposeful design.
</p>

         
        </div>
      </div>
    </section>
    {/* ------------------about the product------------------- */}

    {/* // ------------------------------next portion----------------------------- */}
      <section className="furnitureSection">
      <div className="furnitureHeader">
        <span className="furnitureTag">OUR FURNITURE COLLECTION</span>

        <div className="headerRow">
          <h2>Keep Inspired & Motivated</h2>

          <p>
            Discover thoughtfully crafted furniture solutions designed to
            enhance comfort, productivity, and timeless elegance in every
            living and workspace environment.
          </p>
        </div>
      </div>

      <div className="furnitureGrid">
        {products.map((item, index) => (
          <div className="furnitureCard" key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <span className="viewLink">View Details →</span>
          </div>
        ))}
      </div>
    </section>
{/* // ------------------------------next portion----------------------------- */}

{/* -----------------------nxt part-------------------------------- */}
   <section className="qualitySectionWrap">
      <div className="qualitySectionContainer">
        
        {/* LEFT CONTENT */}
        <div className="qualityLeft">
          <h2>
            The Best Quality <br /> Furniture Store In Town
          </h2>

          <p className="qualityDesc">
            Discover premium craftsmanship and timeless furniture designs
            created to enhance your living spaces with comfort, durability,
            and elegance.
          </p>

          <div className="qualityFeatures">
            <div className="qualityItem">
              <Sofa size={20} />
              <div>
                <h4>Huge Selection</h4>
                <p>Explore a wide range of modern and classic furniture collections.</p>
              </div>
            </div>

            <div className="qualityItem">
              <Tag size={20} />
              <div>
                <h4>Low Price Everyday</h4>
                <p>Premium quality furniture at competitive everyday prices.</p>
              </div>
            </div>

            <div className="qualityItem">
              <Truck size={20} />
              <div>
                <h4>Same Day Delivery</h4>
                <p>Fast and reliable delivery service to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="qualityRight">
          <img
            src="https://images.unsplash.com/photo-1584798448292-5e7ba13a0826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk3fHxvZmZpY2UlMjBmdXJuaXR1cmUlMjBpbWFnZXNzJTIwYnJvd258ZW58MHx8MHx8fDA%3D"
            alt="Furniture"
          />
        </div>

      </div>
    </section>
{/* -----------------------nxt part-------------------------------- */}
{/* -------------------last part------------------------------ */}

  <section className="newsSection">
      {/* LEFT IMAGE */}
      <div className="newsLeft">
        <img
          src="https://plus.unsplash.com/premium_photo-1720884611740-f5e807d7c77e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZSUyMGZ1cm5pdHVyZSUyMGltYWdlc3MlMjBicm93bnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Furniture Sofa"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="newsRight">
        <span className="newsTag">SUBSCRIBE TO OUR NEWSLETTER</span>

        <h2>
          See The Latest Collection & <br />
          Get Special Offer
        </h2>

        <div className="newsForm">
          <input type="email" placeholder="Email address *" />
          <button>SUBSCRIBE</button>
        </div>

        <p className="newsSmall">
          Get updates on premium furniture launches, exclusive deals,
          and modern home inspirations.
        </p>
      </div>
    </section>
{/* -------------------last part------------------------------ */}
<br></br><br></br>
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
