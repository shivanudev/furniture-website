import React from "react";
import { Truck, CreditCard, Percent, RotateCcw,Heart, Star,Facebook, Twitter, Instagram, Youtube  } from "lucide-react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Home() {


   const [menuOpen, setMenuOpen] = useState(false);
// --------------------------product name----------------------------
const products = [
  {
    title: "Barrel Chair Etta Avenue",
    image: "https://i.pinimg.com/736x/3c/09/9f/3c099f65e98116409f3732fbb9f2702f.jpg",
   
    price: "$200",
  },
  {
    title: "Golden Living Room Chair Set",
    image: "https://media.designcafe.com/wp-content/uploads/2022/08/25190515/interior-design-cost-in-bangalore.jpg",
    
    price: "$300",
  },
  {
    title: "Luxury Bedroom Set",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdnP-FLb9wZxxzJ4dJ6lX-U-ojyJv0s3VuPUIT4058yaJVA78S8VXYK4tp3L8LaRUEDx4JyRi2XzYvpFP5LFrM1vSehTBIUKoZtfFyNDB3Xr9TPxx7at8njXeoQ7w-rQXQHsXC4AzZiD042w7jmOBdJSD_1d1zs2VAAvvDuJO3g3OKz87m8sds9f6lU4s/s1600/bed-set-999.webp",
    price: "$1500",
  },
  {
    title: "Century Modern Wooden Sofa",
    image: "https://m.media-amazon.com/images/I/61cEjmXGHUL._AC_UF894,1000_QL80_.jpg",
    price: "$450",
  },
  {
    title: "Modern Velvet Accent Chair",
    image: "https://oakandpineonline.co.uk/wp-content/uploads/2023/04/interior-design.jpg",
   
    price: "$200",
  },
  {
    title: "Rose Gold Designer Coffee Table",
    image: "https://lineafurniture.com/wp-content/uploads/2025/02/bloom-coffee-table-7-500x500.webp",
   
    price: "$200",
  },
];
// --------------------------product name----------------------------

// -------------------testimonials-----------------------------------------

const testimonials = [
  {
    name: "Emily Brown",
    role: "Senior Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The quality of the furniture exceeded my expectations. The craftsmanship and attention to detail are simply outstanding. My living space feels completely transformed!",
  },
  {
    name: "Michael Johnson",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Absolutely love the elegant design and premium finish. The delivery was smooth and the customer service team was very helpful throughout.",
  },
  {
    name: "Sophia Williams",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Stylish, durable and comfortable! I’ve received so many compliments from guests. Highly recommended for anyone upgrading their home décor.",
  },
];


const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

// -------------------testimonials-----------------------------------------

// ---------------slider----------------------------
  const images = [
    "https://www.minotti.com/media/immagini/47689_n_BEZIER_01.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmLx2OFR1Y4ng5MYF-ZIpY88d0hbVeCoMQA&s",
    "https://www.lujoluxuryliving.com/cdn/shop/files/Image_5.jpg?crop=center&height=1200&v=1747656940&width=1200",
    "https://www.vigfurniture.com/media/wysiwyg/vig-1-new_[Yolonda].jpg",
    "https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UF894,1000_QL80_.jpg",
  ];
// ---------------slider----------------------------
  return (
    <>
     <section className="homeHero3">
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

      <div className="homeHero-content">
        <p className="subheading">HOME OFFICE FURNITURE</p>
        <h1>Stay productive and get more done!</h1>

        <button className="cta-btn">
          Shop Collection →
        </button>
      </div>
    </section>


{/* // -----------------------product categories-------------------- */}
   <section className="categories">
      <h2 className="section-title">PRODUCT CATEGORIES</h2>
      <p className="section-subtitle">
       Create spaces that feel warm, welcoming, and uniquely yours. Our furniture collections are crafted to bring comfort, style, and durability together — helping you design a home that reflects your personality and lifestyle.
      </p>

      <div className="grid">

        {/* Top Left */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Home Accessories"
          />
          <div className="overlay-box">
            <h3>Home Accessories</h3>
            <p>Starts from $20</p>
            <button>View Collection</button>
          </div>
        </div>

        {/* Right Tall */}
        <div className="card tall">
          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            alt="Luxurious Product"
          />
          <div className="overlay-box">
            <h3>Luxurious Product</h3>
            <p>Starts from $80</p>
            <button>View Collection</button>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/61u+uVp2M1L.jpg"
            alt="Modern Furniture"
          />
          <div className="overlay-box">
            <h3>Modern Furniture</h3>
            <p>Starts from $40</p>
            <button>View Collection</button>
          </div>
        </div>

      </div>
    </section>

    
{/* // -----------------------product categories-------------------- */}

{/* ---------------------------------------half portion--------------- */}
 <section className="features">
      <div className="feature-card">
        <Truck size={32} />
        <h4>Free Shipping</h4>
        <p>Capped at $230 per order</p>
      </div>

      <div className="feature-card">
        <CreditCard size={32} />
        <h4>Safe Payments</h4>
        <p>With our secure payment gateway</p>
      </div>

      <div className="feature-card">
        <Percent size={32} />
        <h4>Discount</h4>
        <p>On every order over $90</p>
      </div>

      <div className="feature-card">
        <RotateCcw size={32} />
        <h4>Money Return</h4>
        <p>Back guarantee in 7 days</p>
      </div>
    </section>
{/* ---------------------------------------half portion--------------- */}

{/* ----------------------tranding product--------------------------- */}
  <section className="trending">
      <h2 className="section-title"> Trending Product</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="wishlist">
                <Heart size={18} />
              </div>
            </div>

            <h4>{item.title}</h4>

            <div className="price">
              {item.oldPrice && (
                <span className="old-price">{item.oldPrice}</span>
              )}
              <span className="new-price">{item.price}</span>
            </div>

            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#d9a066" color="#d9a066" />
              ))}
            </div>

            <button className="shop-btn">Shop Now</button>
          </div>
        ))}
      </div>
    </section>
{/* ----------------------tranding product--------------------------- */}


{/* ------------------who we are------------------------- */}
 <section className="who">
      <div className="who-left">
        <h2>Who We Are</h2>

        <p>
          We are passionate about creating furniture that blends comfort,
          craftsmanship, and contemporary design. Every piece in our
          collection is thoughtfully crafted to elevate modern living
          spaces — from cozy homes to stylish offices.
        </p>

        <p>
          With a strong focus on premium materials and timeless aesthetics,
          our furniture is designed to bring elegance, durability, and
          functionality into every environment.
        </p>

        <button className="read-btn">Read More</button>
      </div>

      <div className="who-right">
        <img
          src="https://horgans.com.au/cdn/shop/collections/Horgans_28_10_2037283.jpg?v=1756346319&width=2400"
          alt="Modern Furniture Office"
        />
      </div>
    </section>
{/* ------------------who we are------------------------- */}

{/* --------------------testimonials------------------------ */}

 <section className="testimonial">
      <div className="testimonial-left">
        <h1 className="tag">Testimonial</h1>
        <br></br>
        <h2>How Do Customers Feel?</h2>
        <p className="description">
        Designed with precision and built for comfort, our collections consistently exceed expectations. Customers value the quality materials, attention to detail, and seamless experience from purchase to delivery.
        </p>

        <div className="testimonial-card">
          <div className="profile">
            <img src={current.image} alt={current.name} />
            <div>
              <h4>{current.name}</h4>
              <p>{current.role}</p>
            </div>
          </div>

          <p className="review">{current.text}</p>

          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#d9a066" color="#d9a066" />
            ))}
          </div>
        </div>
      </div>

      <div className="testimonial-right">
        <img
          src="https://www.pavilionbroadway.co.uk/media/catalog/category/furniture_1_2.jpg"
          alt="Chair"
        />
      </div>
    </section>
{/* --------------------testimonials------------------------ */}

{/* ------------------get in touch-------------------------------- */}
  <section className="contact">
      <div className="contact-left">
        <img
          src="https://www.minotti.com/media/immagini/50142_z_01BEZIER.jpg"
          alt="Modern Office Furniture"
        />
      </div>

      <div className="contact-right">
        <h2>Get in Touch</h2>

        <p>
          Whether you’re looking for the perfect chair or have questions
          about our furniture collections, we’re here to help. Our team is
          just a message away and ready to assist you.
        </p>

        <p>
          Reach out to us for personalized support, product
          recommendations, or bulk inquiries. Let’s connect and
          transform your space together.
        </p>

        <button className="contact-btn">Contact Us</button>
      </div>
    </section>
{/* ------------------get in touch-------------------------------- */}
{/* ------------animation slider-------------------------------------- */}

 <section className="marquee-section">
      <div className="marquee">
        <div className="track">
          {[...images, ...images].map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt="Furniture" />
            </div>
          ))}
        </div>
      </div>
    </section>
{/* ------------animation slider-------------------------------------- */}
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
