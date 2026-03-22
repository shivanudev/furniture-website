import React from "react";
import { Sofa, Tag, Truck,Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {


  const products = [
  {
    title: "Contemporary Living Room Sofa Arrangement",
    image:
      "https://blog.sothebysrealty.ae/hubfs/Imported_Blog_Media/2853d531-b1b3-4964-9908-d1de16713688-4-Oct-12-2025-10-00-52-3824-AM.jpg",
  },
  {
    title: "Rustic Wooden Storage Cabinet Collection",
    image:
      "https://dukaan.b-cdn.net/700x700/webp/projecteagle/images/7a72ffe8-e943-435b-9b76-0fe083919ca1.jpg",
  },
   {
    title: "Minimal Scandinavian Shelf & Console Unit",
    image:
      "https://frequip.com/wp-content/uploads/2024/11/Best-Furniture-Brands-In-India.jpg",
  },
  {
    title: "Modern Lounge Chair & Side Table Setup",
    image:
      "https://www.shutterstock.com/image-photo/raw-textures-natural-elements-create-600nw-2704495723.jpg",
  },
  {
    title: "Elegant Wooden Console Table Design",
    image:
      "https://images.bergerpaints.com/s3fs-public/2024-04/beautiful-painted-furniture-1024x536_0.jpg?VersionId=RkdM5s0Sqhi1ZhRJc.DiBwHX1fzF7LLE&format=webp&width=3840&quality=75",
  },
  {
    title: "Artisan Decorative Sideboard with Neutral Decor",
    image:
      "https://thumbs.dreamstime.com/b/stylish-interior-design-wooden-commode-stool-dried-flowers-vase-unique-decoration-carpet-mock-up-poster-frame-elegant-209596488.jpg",
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

        <ul className="homeHero-navLinks">
            <Link to="/"><li>Home</li></Link>
       <Link to="/about"><li>About</li></Link>
       <Link to="/product"><li>Product</li></Link>
       <Link to="/contact"><li>Contact</li></Link>
        </ul>

        <div className="whatsapp-btn">
  <a
    href="https://wa.me/923000000000"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp />
    <span>WhatsApp</span>
  </a>
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
            src="https://shinewoodart.com/cdn/shop/files/Brown.jpg?v=1767898707"
            alt="Main Furniture"
          />

          <img
            className="aboutSmallImage topImage"
            src="https://assets-news.housing.com/news/wp-content/uploads/2023/02/08055421/wooden-furniture-design3.png"
            alt="Interior"
          />

          <img
            className="aboutSmallImage bottomImage"
            src="https://www.vrainteriors.com/wp-content/uploads/2024/02/Modern-Living-Room-Furniture-Ideas-Hero-scaled-1.jpg"
            alt="Sofa"
          />
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
            src="https://www.lujoluxuryliving.com/cdn/shop/files/Image_5.jpg?crop=center&height=1200&v=1747656940&width=1200"
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
          src="https://urbangalleria.com/cdn/shop/files/furniture.png?v=1758695655"
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
