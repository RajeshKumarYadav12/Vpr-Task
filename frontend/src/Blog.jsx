import React from "react";
import "./css/Blog.css";

const Blog = () => {
  return (
    <main className="blog-page">

      {/* ================= HERO SECTION ================= */}
      <section className="blog-hero">
        <p className="blog-hero-tag">
          ✨ Welcome to Professional Blogging
        </p>

        <h1 className="blog-hero-title">
          Discover Stories That <span>Inspire & Inform</span>
        </h1>

        <p className="blog-hero-desc">
          Dive into a world of professional insights, industry trends,
          and thought-provoking content crafted by experts in their fields.
        </p>
      </section>


      {/* ================= STATS SECTION ================= */}
      <section className="blog-stats">

        <div className="blog-stat-box">
          <h2>500+</h2>
          <p>Published Articles</p>
        </div>

        <div className="blog-stat-box">
          <h2>50K+</h2>
          <p>Monthly Readers</p>
        </div>

        <div className="blog-stat-box">
          <h2>25+</h2>
          <p>Expert Writers</p>
        </div>

      </section>


      {/* ================= WHY SECTION ================= */}
      <section className="blog-why">
        <h2>Why Choose Vaid PR Blogs?</h2>

        <p className="blog-why-desc">
          We're committed to delivering high-quality content that drives
          professional growth and industry insights.
        </p>

        <div className="blog-why-grid">

          <div className="blog-why-card">
            <h3>Expert Content</h3>
            <p>
              Articles written by industry professionals with
              years of experience and practical knowledge.
            </p>
          </div>

          <div className="blog-why-card">
            <h3>Latest Trends</h3>
            <p>
              Stay ahead with insights on emerging trends,
              innovations, and industry developments.
            </p>
          </div>

          <div className="blog-why-card">
            <h3>Community Driven</h3>
            <p>
              Join a growing community of professionals
              sharing ideas, learning, and collaborating.
            </p>
          </div>

        </div>
      </section>


      {/* ================= BLOG LINKS SECTION ================= */}
      <section className="blog-links-section">

        <div className="blog-links-grid">

          <div>
            <h3>Vaid PR Blogs</h3>
            <p>
              Professional insights and industry expertise
              delivered directly to your inbox.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Categories</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Categories</h4>
            <ul>
              <li>Technology</li>
              <li>Business</li>
              <li>Marketing</li>
              <li>Leadership</li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Newsletter</li>
              <li>RSS Feed</li>
            </ul>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Blog;
