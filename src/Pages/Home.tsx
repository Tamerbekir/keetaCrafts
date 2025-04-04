import "../index.css";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to Reesie Pieces Crafts!</h1>
        <p>Handcrafted Crochet & Unique Crafts</p>
      </div>

      <div className="section">
        <h2>About Us</h2>
        <p>
          Welcome to Reesie Pieces Crafts, where creativity comes to life
          through handmade treasures! We specialize in a variety of crafts, with
          a special focus on adorable and unique crochet items like animals,
          characters, and even food. But that's not all - we also offer
          beautiful diamond art, hand-painted pieces, and custom pottery
          painting. Each item is made with love and attention to detail. Browse
          our galleries below to see some examples of our work, and feel free to
          reach out with your custom order requests!
        </p>
      </div>

      <div className="section">
        <h2>Crochet Creations</h2>
        <div className="gallery">
          <img src="placeholder.jpg" alt="Crochet Item 1" />
          <img src="placeholder.jpg" alt="Crochet Item 2" />
          <img src="placeholder.jpg" alt="Crochet Item 3" />
        </div>
      </div>

      <div className="section">
        <h2>Other Crafts</h2>
        <div className="gallery">
          <img src="placeholder.jpg" alt="Diamond Art 1" />
          <img src="placeholder.jpg" alt="Painting 1" />
          <img src="placeholder.jpg" alt="Pottery Painting 1" />
        </div>
      </div>

      <div className="section">
        <h2>Order Request</h2>
        <div className="contact-form">
          <form action="#" method="post">
            {" "}
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
            <label for="message">Order Details / Inquiry:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Send Request</button>
          </form>
        </div>
      </div>

      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: [Your Email Address Here]</p>
      </div>
    </div>
  );
}
