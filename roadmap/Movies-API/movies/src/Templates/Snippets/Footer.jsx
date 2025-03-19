import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light text-muted pt-4">
            <div className="container">
                <div className="row border-bottom pb-3">
                    <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                        <a href="#" className="text-reset me-3">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-reset me-3">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-reset me-3">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-reset me-3">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-3">
                        <h6 className="fw-bold">Company Name</h6>
                        <p>Short description about the company and what it offers.</p>
                    </div>

                    <div className="col-md-3">
                        <h6 className="fw-bold">Products</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-reset">React</a></li>
                            <li><a href="#" className="text-reset">Vue</a></li>
                            <li><a href="#" className="text-reset">Angular</a></li>
                            <li><a href="#" className="text-reset">Laravel</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="fw-bold">Useful Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-reset">Pricing</a></li>
                            <li><a href="#" className="text-reset">Settings</a></li>
                            <li><a href="#" className="text-reset">Orders</a></li>
                            <li><a href="#" className="text-reset">Help</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="fw-bold">Contact</h6>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-home me-2"></i> New York, NY 10012, US</li>
                            <li><i className="fas fa-envelope me-2"></i> info@example.com</li>
                            <li><i className="fas fa-phone me-2"></i> +01 234 567 88</li>
                            <li><i className="fas fa-print me-2"></i> +01 234 567 89</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 bg-dark text-light mt-4">
                © {new Date().getFullYear()} Copyright:
                <a href="https://yourwebsite.com" className="text-reset fw-bold"> YourWebsite.com</a>
            </div>
        </footer>
    );
};

export default Footer;
