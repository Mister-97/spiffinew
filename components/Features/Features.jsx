import React, { useEffect } from "react";
import styled from "styled-components";
import Feature from "./Feature";
import Scroll from "react-scroll";
import { useRouter } from "next/router";

const scroller = Scroll.animateScroll;
const Features = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.about) {
      scroller.scrollTo(1000);
    } else if (router.query.process) {
      scroller.scrollTo(1500);
    }
  }, [router.query]);

  return (
    <section id="features">
      <TryOut>
        <div>
          <div>
            <h3>
              Stay Fresh, Stay Spiffi
              <img className="kissing" src="/homepage/kissing.png" alt="Kissing emoji" />
            </h3>
            <p>
              Spiffi is a high-quality cleaning service bringing a spiffy
              touch to homes and businesses across Chicagoland. We don’t
              just clean—we elevate your space, leaving it fresh, spotless,
              and effortlessly stylish. Our team takes pride in attention to
              detail, ensuring that every home and office we service looks as
              pristine and polished as it should.
            </p>
            <a href="/book-now">Try Us Out</a>
          </div>
        </div>
        <img src="/homepage/magic.png" alt="Magic cleaning" />
      </TryOut>
      
      <Feature img="/homepage/proven-process.jpeg">
        <div id="about">
          <h2>Our Proven Process</h2>
          <ul>
            <li><strong>Clean and Sanitize –</strong> We sanitize frequently touched surfaces.</li>
            <li><strong>Professional Staff –</strong> Trained residential housekeepers ensure a high-quality clean.</li>
            <li><strong>24-Hour Warranty –</strong> If you're unhappy, call us within 24 hours, and we’ll fix it.</li>
            <li><strong>No Contracts –</strong> One benefit of choosing Spiffi is that contracts are never an option.</li>
          </ul>
          <a href="/services">Our Cleaning Process</a>
        </div>
      </Feature>
      
      <Feature reverse img="/homepage/brand-new.png">
        <div style={{ textAlign: "right" }}>
          <h2>With a little magic, make your home feel brand new again</h2>
          <p>
            Your home is more than just a home; it’s where memories are made and moments are treasured.
            Spiffi strives to remove stress from your day so you can enjoy life. With a little magic,
            your home will feel brand new again.
          </p>
          <a href="/services">Our Services</a>
        </div>
      </Feature>
      
      <Feature img="/homepage/guarantee.png">
        <div>
          <h2>Our Worry-Free Guarantee</h2>
          <p>
            When you entrust your space to the Spiffi® team, you can relax
            knowing that your home is in good hands. We ensure consistently
            flawless results from friendly, dependable professionals. If you are
            dissatisfied with our service, contact us within 24 hours, and we will make it right.
          </p>
        </div>
      </Feature>
    </section>
  );
};

export default Features;

const TryOut = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 6vw;
  a {
    color: #229ff9;
    text-align: center;
  }
  img {
    width: 50vw;
    @media (max-width: 800px) {
      width: 70vw;
    }
  }
  div {
    position: relative;
    flex: 1;
    div {
      box-shadow: -15px 15px 9px -7px rgba(0, 0, 0, 0.25);
      width: 40vw;
      h3 {
        text-align: center;
        margin-bottom: 50px;
        @media (max-width: 900px) {
          margin-bottom: 20px;
        }
      }
      display: flex;
      flex-direction: column;
      p {
        text-align: center;
        font-family: "Arial";
        font-weight: 400;
        color: #7c7c7c;
      }
      position: absolute;
      top: 10%;
      left: 55%;
      background: white;
      padding: 80px 40px;
      max-width: 500px;
      @media (max-width: 900px) {
        width: 100vw;
        left: 40%;
        top: 10%;
        padding: 12px;
      }
    }
  }
`;
