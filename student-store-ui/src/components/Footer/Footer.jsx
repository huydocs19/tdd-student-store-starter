import * as React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="content">
            <div className="top">
            <div className="links">
                <div className="link-column">
                <h4>Categories</h4>
                <ul>
                    <li>All Categories</li>
                    <li>Clothing</li>
                    <li>Food</li>
                    <li>Accessories</li>
                    <li>Tech</li>
                </ul>
                </div>
                <div className="link-column">
                <h4>Company</h4>
                <ul>
                    <li>About Us</li>
                    <li>Find a Store</li>
                    <li>Terms</li>
                    <li>Sitemap</li>
                    <li>Careers</li>
                </ul>
                </div>
                <div className="link-column">
                <h4>Support</h4>
                <ul>
                    <li>Contact Us</li>
                    <li>Money Refund</li>
                    <li>Order Status</li>
                    <li>Shipping Info</li>
                    <li>Open Dispute</li>
                </ul>
                </div>
                <div className="link-column">
                <h4>Account</h4>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Account Setting</li>
                    <li>My Orders</li>
                </ul>
                </div>
                <div className="link-column">
                <h4>Socials</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>
                </div>
                <div className="link-column">
                <h4>Our App</h4>
                <ul>
                    <li>
                    <img src="/assets/app_store.svg" alt="app store"/>
                    </li>
                    <li>
                    <img src="/assets/google_play.svg" alt="google play store"/>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="bottom">
            <span className="payment-options">
                <img src="/assets/american_express.svg" alt="american express"/>
                <img src="/assets/mastercard.svg" alt="mastercard"/>
                <img src="/assets/paypal.svg" alt="paypal"/>
                <img src="/assets/visa.svg" alt="visa"/>
            </span>
            </div>
        </div>
    </footer>
  )
}