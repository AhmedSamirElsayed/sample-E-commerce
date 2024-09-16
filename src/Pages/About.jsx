const About = () => {
  return (
    <div className="container bg-light-subtle my-5 py-5">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold">About Us</h1>
        <hr className="my-4" />
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="fw-bold">Welcome to UNI Shopping!</h2>
          <p>
            At <strong>UNI Shopping</strong>, we believe that shopping should be
            an enjoyable experience, whether you are browsing from your couch or
            on the go. Our mission is to bring you high-quality, affordable
            products, with a seamless and user-friendly shopping experience.
          </p>
          <p>
            We started this journey with a simple goal in mind: to make quality
            products accessible to everyone, no matter where they are. With a
            diverse range of items, from the latest trends in fashion to
            cutting-edge electronics and timeless accessories, our store is your
            one-stop shop for everything you need.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQF8NKzCINtp4Q/article-cover_image-shrink_600_2000/0/1689398931729?e=2147483647&v=beta&t=XcNjpvrI953uWLnJKic4pBSkfwDcNAv8_goGOrlIa7s"
            alt="About Us"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div className="text-center mb-5">
        <h2 className="fw-bold">Why Shop With Us?</h2>
      </div>

      <div className="row mb-5 text-center ">
        {[
          {
            title: "Wide Selection of Products",
            description:
              "We offer an extensive collection of items, carefully curated to meet all of your needs.",
          },
          {
            title: "Quality You Can Trust",
            description:
              "Our team works diligently to source the best products from trusted manufacturers and suppliers.",
          },
          {
            title: "Affordable Prices",
            description:
              "We believe that everyone should have access to quality products without breaking the bank.",
          },
          {
            title: "Excellent Customer Service",
            description:
              "Your satisfaction is our priority. Our dedicated customer support team is always here to assist you.",
          },
          {
            title: "Fast & Reliable Shipping",
            description:
              "We work with reliable shipping partners to ensure your products are delivered on time.",
          },
        ].map((item, index) => (
          <div className="col-md-4 mb-4 " key={index}>
            <div className="p-3 border rounded bg-dark-subtle h-100">
              <h4 className="fw-bold">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Story</h2>
        <div className=" bg-light rounded">
          <p className="text-start">
            <strong>UNI Shopping</strong> was founded by a group of passionate
            entrepreneurs who shared a vision of making quality products
            available to everyone. Our journey began with a simple idea:
            combining the convenience of online shopping with top-notch customer
            service and unbeatable prices.
          </p>
          <p className="text-start">
            What began as a small venture has blossomed into a global brand,
            thanks to the trust and support of our customers. We’re committed to
            continuing this journey and always striving to improve and innovate.
          </p>
        </div>
      </div>

      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Values</h2>
        <ul className="list-unstyled">
          {[
            "Customer First: Everything we do starts and ends with you.",
            "Innovation: We constantly explore new ways to enhance your experience.",
            "Sustainability: We care about the environment, making responsible choices.",
            "Community: We believe in giving back. A portion of every purchase supports charitable causes.",
          ].map((value, index) => (
            <li key={index} className="mb-2">
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mb-5">
        <h2 className="fw-bold">Join Our Community</h2>
        <p>
          Become part of the <strong>UNI Shopping</strong> community! Follow us
          on social media for the latest news, product releases, and exclusive
          promotions.
        </p>
        <div>
          <a
            href="https://www.instagram.com"
            className="btn btn-outline-primary mx-2"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com"
            className="btn btn-outline-primary mx-2"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            className="btn btn-outline-primary mx-2"
          >
            Twitter
          </a>
        </div>
      </div>

      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p>
          Got a question or need support? Feel free to reach out to us anytime.
          We are always happy to help!
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@yourbrand.com">support@yourbrand.com</a>
          <br />
          <strong>Phone:</strong> +1 234 567 890
          <br />
          <strong>Address:</strong> 1234 Your Brand Street, City, Country
        </p>
      </div>

      <div className="text-center">
        <h2 className="fw-bold">Thank You for Choosing Us</h2>
        <p>
          Thank you for choosing <strong>UNI Shopping</strong>. We appreciate
          your support and trust, and we look forward to being a part of your
          shopping journey!
        </p>
      </div>
    </div>
  );
};

export default About;
