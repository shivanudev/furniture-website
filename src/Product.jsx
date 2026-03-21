import React from "react";
import { Search,PhoneCall, CreditCard, RotateCcw, ShieldCheck ,Facebook, Twitter, Instagram, Youtube  } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function ModernHero() {

    // -----------------------price categrioes-------------------
    const productImages = [
  "https://sheeshamhomes.com/wp-content/uploads/2025/11/SH0301-02-RICHMOND-SOFA-SET-311.jpg",
  "https://www.lujoluxuryliving.com/cdn/shop/files/Image_5.jpg?crop=center&height=1200&v=1747656940&width=1200",
  "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-92023247/brd-44261_furniture-meja-bufet-retro-minimalis-kayu-jati-dan-rotan-simple_full01.jpg",
  "https://rajasthalifurniture.in/cdn/shop/files/2-1.png?v=1708416137",
];

 const [activeImage, setActiveImage] = useState(productImages[0]);
    // -----------------------price categrioes-------------------

    // --------------------testimonials-----------------------


const reviews = [
  {
    name: "Bang Upin",
    role: "Interior Designer",
    bg: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-92023247/brd-44261_furniture-meja-bufet-retro-minimalis-kayu-jati-dan-rotan-simple_full01.jpg",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Thank you so much, my living room now looks more elegant and modern.",
  },
  {
    name: "Ibuk Sukijan",
    role: "Home Owner",
    bg: "https://livingshapes.in/cdn/shop/files/Restaurant_257ae21a-6d81-42f9-94d8-cf5c89c88adc.jpg?v=1768479711",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Beautiful craftsmanship and fast delivery. My home feels luxurious now.",
  },
  {
    name: "Mpok Ina",
    role: "Architect",
    bg: "https://img.freepik.com/premium-photo/stylish-vintage-interior-design-open-space-with-wooden-retro-cabinet-design-chair-maps-paddle-ship-cacti-plants-elegant-personal-accessories-modern-vintage-home-decor_431307-2365.jpg",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "Very comfortable and stylish. Highly recommended for modern interiors.",
  },
];

    // --------------------testimonials-----------------------
  // -------------------product detials-----------------
  const furnitureData = [
  {
    id: 1,
    category: "OFFICE SETUP / 01",
    title: "Luna Fresh Aura Office Furniture Set",
    description:
      "Elegant lounge-style office furniture designed for comfort and modern workspace aesthetics.",
    image:
      "https://image.made-in-china.com/2f0j00JlPfzktDHobe/Modern-Brown-Color-Foshan-Office-Executive-Desk-Office-Furniture.webp",
  },
  {
    id: 2,
    category: "OFFICE SETUP / 02",
    title: "Zen HyperFlow Mobility Office Furniture Set",
    description:
      "Smart modular office setup built for flexibility, collaboration, and productivity.",
    image:
      "https://www.stellarglobal.com/wp-content/uploads/2024/05/s1-8.webp",
  },
  {
    id: 3,
    category: "OFFICE SETUP / 03",
    title: "Elite Executive Workspace Set",
    description:
      "Premium executive desk and ergonomic seating designed for professional environments.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    id: 4,
    category: "OFFICE SETUP / 04",
    title: "Modern Collaborative Office Suite",
    description:
      "Contemporary open office furniture promoting teamwork and creative workspace flow.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/070/573/758/small/executive-office-with-cityscape-view-at-sunset-modern-workspace-leadership-ambience-and-corporate-success-photo.jpeg",
  },
];
  // -------------------product detials-----------------
  return (
    <>
     <section className="homeHero1">
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
  Explore Our Exclusive <br /> Furniture Collection
</h1>

<p>
  Shop high-quality furniture designed for comfort and sophistication.
  Whether you're furnishing your living room, bedroom, or office,
  our products blend modern design with long-lasting craftsmanship.
</p>
</div>

      
    </section>

{/* // -----------------------little part------------------ */}
<section className="serviceSection">
      <div className="serviceContainer">

        <div className="serviceItem">
          <PhoneCall className="serviceIcon" />
          <h4>Free Services</h4>
          <p>From cost savings to seamless support, we ensure a smooth experience.</p>
        </div>

        <div className="serviceItem">
          <CreditCard className="serviceIcon" />
          <h4>Payment Method</h4>
          <p>Secure and flexible payment options for your convenience.</p>
        </div>

        <div className="serviceItem">
          <RotateCcw className="serviceIcon" />
          <h4>Return Policy</h4>
          <p>Easy returns with a hassle-free refund guarantee.</p>
        </div>

        <div className="serviceItem">
          <ShieldCheck className="serviceIcon" />
          <h4>Warranty</h4>
          <p>Premium quality backed by reliable warranty coverage.</p>
        </div>

      </div>
    </section>
{/* // -----------------------little part------------------ */}

{/* --------------explore more-------------------------------- */}

 <section className="benefitsSection">
      {/* LEFT DESIGN AREA */}
      <div className="benefitsLeft">

        <div className="benefitsBg"></div>

        <img
          src="https://sheeshamhomes.com/wp-content/uploads/2025/11/SH0301-02-RICHMOND-SOFA-SET-311.jpg"
          alt="Blue Chair"
          className="chairTop"
        />

        <img
          src="https://images.unsplash.com/photo-1616627451515-cbc80e5ece35"
          alt="Grey Chair"
          className="chairCenter"
        />

        <img
          src="https://classy.co.in/wp-content/uploads/2024/11/Hepburn-Storage-Unit-1-1024x683.png"
          alt="Green Chair"
          className="chairBottom"
        />

      </div>

      {/* RIGHT CONTENT */}
      <div className="benefitsRight">
        <h2>
          Benefits You Get When <br />
          Using Our Service
        </h2>

        <p>
          From premium craftsmanship to seamless delivery and customer
          support, our furniture solutions are designed to elevate comfort,
          productivity, and timeless elegance in every space.
        </p>

        <button className="benefitsBtn">
          Learn More <span>→</span>
        </button>
      </div>
    </section>
{/* --------------explore more-------------------------------- */}

{/* ---------------price categories----------------- */}

<section className="productSection">
      <h2 className="sectionTitle">Our Products Categories</h2>

      <div className="categoryTabs">
        {/* <span>All</span>
        <span className="activeTab">Chair</span>
        <span>Table</span>
        <span>Bed</span>
        <span>Closet</span>
        <span>Sofa</span>
        <span>Cabinet</span> */}
      </div>

      <div className="productLayout">
        {/* LEFT SIDE */}
        <div className="leftSide">
          <div className="mainImageBox">
            <img src={activeImage} alt="Chair" />
            <div className="cartIcon">🛒</div>
          </div>

          <div className="thumbList">
            {productImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setActiveImage(img)}
                className={activeImage === img ? "activeThumb" : ""}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rightSide">
          <h3>Cactus in Pot and Armchair</h3>
          <div className="priceRating">
            <span className="price">$250.98</span>
            <span className="stars">★★★★★</span>
          </div>

          <p>
            Crafted with premium fabric and solid wood legs, this armchair
            brings elegance and comfort into your living space. Perfect for
            reading corners, bedrooms, and modern lounges.
          </p>

          <button className="viewBtn">
            View Details <span>→</span>
          </button>
        </div>
      </div>
    </section>
{/* ---------------price categories----------------- */}

{/* ------------product details---------------------- */}
  <div className="office-section">
      {furnitureData.map((item) => (
        <div className="office-card" key={item.id}>
          <img src={item.image} alt={item.title} />

          <div className="office-content">
            <span className="category">{item.category}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href="#">View Details</a>
          </div>
        </div>
      ))}
    </div>
{/* ------------product details---------------------- */}

{/* -----------------testimonials------------------------------- */}

   <section className="reviewSection">
      <span className="reviewTag">TESTIMONIALS</span>
      <h2>Our Client Reviews</h2>

      <div className="reviewGrid">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="reviewCard"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className="reviewOverlay">
              <img src={item.avatar} alt="avatar" />
              <h4>{item.name}</h4>
              <span>{item.role}</span>
              <p>"{item.text}"</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        ))}
      </div>
    </section>
{/* -----------------testimonials------------------------------- */}
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