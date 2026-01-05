import Link from "next/link";
import ContactFormBlog from "@/elements/ContactFormBlog";

const ContactUs = () => {
    return (        
        <div className="page-content bg-light">
            <div className="contact-bnr bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-info style-1 text-start text-white">
                                <h2 className="title wow fadeInUp" data-wow-delay="0.1s">DISCOVER US</h2>
                                <p className="text wow fadeInUp" data-wow-delay="0.2s">
                                    <span className="text-decoration-underline">
                                        <Link href="#">Pixio is here to help you;</Link>
                                    </span> 
                                    <br /> 
                                    Our experts are available to answer any questions you might have. We’ve got the answers.</p>
                                <div className="contact-bottom wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="contact-left">
                                        <h3>Call Us</h3>
                                        <ul>
                                            <li>+8801746770324</li>
                                            <li>+8801746770324</li>
                                        </ul>
                                    </div>	
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-area1 style-1 m-r20 m-md-r0 wow fadeInUp" data-wow-delay="0.5s">
                                <ContactFormBlog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-inner-2 pt-0">
                <div className="map-iframe map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23083.864997377692!2d90.35678345!3d23.789229749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c035bbfc97%3A0x774dce56b1bd014d!2sMirpur!5e1!3m2!1sen!2sbd!4v1767622039083!5m2!1sen!2sbd"
                    style={{border:"0", width:"100%", minHeight:"100%", marginBottom: "-8px" }} allowFullScreen></iframe>
                </div>
            </div>

           
        </div>        
    );
};

export default ContactUs;