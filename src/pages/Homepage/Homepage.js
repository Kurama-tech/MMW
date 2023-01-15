import React, { Component, useEffect, useState } from 'react'
import $ from 'jquery'
import SlideShow from './Slideshow'
import AboutBack from '../../assets/images/about-home.png';
import MosqueImg from "../../assets/images/about-us-image.jpg"
import AbtLine from "../../assets/images/design-border.png";

import BeliefImg from "../../assets/images/service.png"
import KnowledgeImg from "../../assets/images/knowledge.png"
import CommunityImg from "../../assets/images/spirituality.png"

import ShaRozaImg from "../../assets/images/shanemathroza.jpg"
import FarahMubarak from "../../assets/images/farahmubarak.jpeg"
import DemoImg from "../../assets/images/demo.jpg"

import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhoneFlip, faEnvelopeOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Homepage() {
    const [showButton, setShowButton] = useState(false);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    useEffect(() => {

    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };


    return (
        <div className='homepage'>
            <SlideShow />

            <div className='about-section'>
                <img src={AboutBack} className="about-img" />
                <div className='container px-0'>
                    <div className='abt-sec-wrap'>
                        <div className='row'>
                            <div className='col-md-6 col-lg-6 col-sm-12'>
                                <div className='abt-img-cont'>
                                    <img src={MosqueImg} />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-6">
                                <div className="abt-desc" >
                                    <div className="sec-tl">
                                        {/* <span className="theme-clr">Our History</span> */}
                                        <h2 className='mt-sm-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0'>About Imam Mahdi (AS)</h2>
                                        <img decoding="async" src={AbtLine} alt="" />
                                    </div>
                                    <p>Belief in the Promised Mahdi (AS) is from the necessity of religion whose information has been relayed by the Last Prophet of Allah (SWT) - Hazrat Muhammad Mustafa (SAS) in several traditions. That Promised Mahdi sent by Allah has already appeared and departed the world in 910AH. A large number of Muslims in every generation since have investigated and accepted the claim of Hazrat Syed Muhammad Jaunpuri (AS) as the Promised Mahdi who invited People towards Allah making religion exclusive for His Worship.
                                        His declaration was - "My religion is the Book of Allah and the following of Muhammad, the Messenger of Allah (SAS)". Those who follow Imam Mahdi (AS) are known as Mehdavis.</p>
                                    <button className="btn-primary btn-large mt-3">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pillars-islam'>
                <div className='fixed-bg'></div>
                <div className='container max-cont'>
                    <div className='text-center mb-5 pt-5'>
                        <h2>Pillars of Islam</h2>
                        <img className='' src={AbtLine} alt="" />
                    </div>
                    <div className='pillar-box'>
                        <ul>
                            <li>
                                <div className='plr-singlebox'>
                                    {/* <i className='imgeach'>Shahadah</i> */}
                                    <div className='borderbox'>
                                        <div className='centered-text'>
                                            <h5 className='main-txt'>Shahadah</h5>
                                            <h5 className='txt-clr'>(Faith)</h5>
                                        </div>

                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className='plr-singlebox'>
                                    <div className='borderbox'>
                                        <div className='centered-text'>
                                            <h5 className='main-txt'>Salah</h5>
                                            <h5 className='txt-clr'>(Prayer)</h5>
                                        </div>

                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className='plr-singlebox'>
                                    <div className='borderbox'>
                                        <div className='centered-text'>
                                            <h5 className='main-txt'>Sawm</h5>
                                            <h5 className='txt-clr'>(Fasting)</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='plr-singlebox'>
                                    <div className='borderbox'>
                                        <div className='centered-text'>
                                            <h5 className='main-txt'>Zakat</h5>
                                            <h5 className='txt-clr'>(Almsgiving)</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='plr-singlebox'>
                                    <div className='borderbox'>
                                        <div className='centered-text'>
                                            <h5 className='main-txt'>Hajj</h5>
                                            <h5 className='txt-clr'>(Pilgrimage)</h5>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='our-vision-section'>
                <div className='container'>
                    <h2 className='col-12 text-center'>Our Vision</h2>
                    <div className='col-12 text-center'>
                        <img className='' src={AbtLine} alt="" />
                    </div>

                    <div className='row mt-2'>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='vision-card my-3'>
                                <div className='img-box'>
                                    <img src={BeliefImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='vision-title'>Beleif</h5>
                                    <div className='vision-desc'>We belive Syed Muhhamad Jaunpuri is the Promised Mehdi. Through this club we want to strengthen our Imaan through learning and practising true Islamic beliefs.
                                        We belive Syed Muhhamad Jaunpuri is the Promised Mehdi. Through this club we want to strengthen our Imaan through learning and practising true Islamic beliefs.
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='vision-card my-3'>
                                <div className='img-box'>
                                    <img src={KnowledgeImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='vision-title'>Knowledge</h5>
                                    <div className='vision-desc'>We belive Syed Muhhamad Jaunpuri is the Promised Mehdi. Through this club we want to strengthen our Imaan through learning and practising true Islamic beliefs.</div>
                                </div>

                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='vision-card my-3'>
                                <div className='img-box'>
                                    <img src={CommunityImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='vision-title'>Community</h5>
                                    <div className='vision-desc'>We belive Syed Muhhamad Jaunpuri is the Promised Mehdi. Through this club we want to strengthen our Imaan through learning and practising true Islamic beliefs.</div>
                                </div>

                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <button className="btn-primary btn-large mt-3">Read More</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Resource Section */}
            <div className=' resources-section'>
                <div className='container'>
                    <h2 className='col-12 text-center'>Our Resources</h2>
                    <div className='col-12 text-center'>
                        <img className='' src={AbtLine} alt="" />
                    </div>

                    <div className='row mt-2'>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='resource-card my-3'>
                                <div className='img-box'>
                                    <img src={BeliefImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='resource-card-title'>Ziyarat</h5>

                                </div>

                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='resource-card my-3'>
                                <div className='img-box'>
                                    <img src={BeliefImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='resource-card-title'>E-Books</h5>

                                </div>

                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='resource-card my-3'>
                                <div className='img-box'>
                                    <img src={BeliefImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='resource-card-title'>Audios</h5>

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='resource-card my-3'>
                                <div className='img-box'>
                                    <img src={BeliefImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='resource-card-title'>Videos</h5>

                                </div>

                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='resource-card my-3'>
                                <div className='img-box'>
                                    <img src={BeliefImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='resource-card-title'>Quran</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-4 col-6'>
                            <div className='resource-card my-3'>
                                <div className='img-box'>
                                    <img src={BeliefImg} className="img" />
                                </div>
                                <div>
                                    <h5 className='resource-card-title'>Biography</h5>

                                </div>

                            </div>
                        </div>

                        <div className='col-12 text-center'>
                            <button className="btn-primary btn-large mt-3">Read More</button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Events Section */}
            <div className='events-section'>
                <div className='container'>
                    <h2 className='col-12 text-center'>Events</h2>
                    <div className='col-12 text-center'>
                        <img className='' src={AbtLine} alt="" />
                    </div>

                    <div className='row mt-2'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex'>
                            <div className='event-card my-3'>
                                <div className='row'>
                                    <div className='col-sm-auto col-12 d-flex justify-content-center'>
                                        <div className='date-section mb-3 mb-sm-0'>
                                            <div className="date">
                                                <span className="binds"></span>
                                                <span className="month">August</span>
                                                <h1 className="day">28</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm col-12 d-flex justify-content-center'>
                                        <div className='event-details-section'>
                                            <h6 className='event-title'>Mehdavia Awards Ceremony</h6>
                                            <div className='event-desc'>Arranged by Youth Community Muslim mehdavia Arranged by Youth Community Muslim mehdavia</div>
                                            <div className='event-btn'>
                                                <button className="btn-primary btn-small mt-3">Event Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex'>
                            <div className='event-card my-3'>
                                <div className='row'>
                                    <div className='col-sm-auto col-12 d-flex justify-content-center'>
                                        <div className='date-section mb-3 mb-sm-0'>
                                            <div className="date">
                                                <span className="binds"></span>
                                                <span className="month">August</span>
                                                <h1 className="day">28</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm col-12 d-flex justify-content-center'>
                                        <div className='event-details-section'>
                                            <h6 className='event-title'>Mehdavia Awards Ceremony</h6>
                                            <div className='event-desc'>Arranged by Youth Community Muslim mehdavia Arranged by Youth Community Muslim mehdavia
                                                Arranged by Youth Community Muslim mehdavia Arranged by Youth Community Muslim mehdavia
                                                Arranged by Youth Community Muslim mehdavia Arranged by Youth Community Muslim mehdavia
                                            </div>
                                            <div className='event-btn'>
                                                <button className="btn-primary btn-small mt-3">Event Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-12 d-flex'>
                            <div className='event-card my-3'>
                                <div className='row'>
                                    <div className='col-sm-auto col-12 d-flex justify-content-center'>
                                        <div className='date-section mb-3 mb-sm-0'>
                                            <div className="date">
                                                <span className="binds"></span>
                                                <span className="month">August</span>
                                                <h1 className="day">28</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm col-12 d-flex justify-content-center'>
                                        <div className='event-details-section'>
                                            <h6 className='event-title'>Mehdavia Awards Ceremony</h6>
                                            <div className='event-desc'>Arranged by Youth Community Muslim mehdavia Arranged by Youth Community Muslim mehdavia</div>
                                            <div className='event-btn'>
                                                <button className="btn-primary btn-small mt-3">Event Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-12 text-center'>
                            <button className="btn-primary btn-large mt-3">More Events</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Blogs Section */}
            <div className=' blog-section'>
                <div className='container'>
                    <h2 className='col-12 text-center'>Latest Blogs</h2>
                    <div className='col-12 text-center'>
                        <img className='' src={AbtLine} alt="" />
                    </div>

                    <div className='row mt-2'>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='blog-card my-3'>
                                <div className='img-box'>
                                    <img src={FarahMubarak} className="img" />
                                </div>
                                <div className='content'>
                                    <div className='date'>Dec 8th, 2022</div>
                                    <h5 className='blog-card-title'>Hazrat Syed Muhammad Jaunpuri (AS)</h5>
                                    <div className='blog-details'>
                                        His declaration was - "My religion is the Book of Allah and the following of Muhammad, the Messenger of Allah (SAS)". Those who follow Imam Mahdi (AS) are known as Mehdavis.
                                        His declaration was - "My religion is the Book of Allah and the following of Muhammad, the Messenger of Allah (SAS)". Those who follow Imam Mahdi (AS) are known as Mehdavis.
                                        His declaration was - "My religion is the Book of Allah and the following of Muhammad, the Messenger of Allah (SAS)". Those who follow Imam Mahdi (AS) are known as Mehdavis.
                                        His declaration was - "My religion is the Book of Allah and the following of Muhammad, the Messenger of Allah (SAS)". Those who follow Imam Mahdi (AS) are known as Mehdavis.

                                        His declaration was - "My religion is the Book of Allah and the following of Muhammad, the Messenger of Allah (SAS)". Those who follow Imam Mahdi (AS) are known as Mehdavis.
                                        His declaration was - "My religion is the Book of Allah and the following of Muhammad, the Messenger of Allah (SAS)". Those who follow Imam Mahdi (AS) are known as Mehdavis.

                                    </div>

                                    <div className='more-btn'>
                                        <button className="btn-secondary btn-small mt-3">Read More</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='blog-card my-3'>
                                <div className='img-box'>
                                    <img src={ShaRozaImg} className="img" />
                                </div>
                                <div className='content'>
                                    <div className='date'>Dec 8th, 2022</div>
                                    <h5 className='blog-card-title'>Hz. Bandagi Miyan Shah-e-Nemath Rz. </h5>
                                    <div className='blog-details'>
                                        Hz. Bandagi Miyan Shah-e-Nemath Rz. was the third khalifa of Mehdi -e-Maod AHS
                                    </div>
                                    <div className='more-btn'>
                                        <button className="btn-secondary btn-small mt-3">Read More</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='blog-card my-3'>
                                <div className='img-box'>
                                    <img src={ShaRozaImg} className="img" />
                                </div>
                                <div className='content'>
                                    <div className='date'>Dec 8th, 2022</div>
                                    <h5 className='blog-card-title'>Hz. Bandagi Miyan Shah-e-Nemath Rz. </h5>
                                    <div className='blog-details'>
                                        Hz. Bandagi Miyan Shah-e-Nemath Rz. was the third khalifa of Mehdi -e-Maod AHS
                                        Hz. Bandagi Miyan Shah-e-Nemath Rz. was the third khalifa of Mehdi -e-Maod AHS
                                    </div>
                                    <div className='more-btn'>
                                        <button className="btn-secondary btn-small mt-3">Read More</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='col-12 text-center'>
                            <button className="btn-primary btn-large mt-3">Explore Blogs</button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Video Gallery */}

            <div className='video-gal-section'>
                <div className='container'>
                    <h2 className='col-12 text-center'>Video Gallery</h2>
                    <div className='col-12 text-center'>
                        <img className='' src={AbtLine} alt="" />
                    </div>

                    <div className='row mt-2'>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='video-card my-3'>
                                <iframe className='iframe'
                                    src="https://www.youtube.com/embed/O5hShUO6wxs">
                                </iframe>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='video-card my-3'>
                                <iframe className='iframe'
                                    src="https://www.youtube.com/embed/O5hShUO6wxs">
                                </iframe>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 d-flex'>
                            <div className='video-card my-3'>
                                <iframe className='iframe'
                                    src="https://www.youtube.com/embed/O5hShUO6wxs">
                                </iframe>
                            </div>
                        </div>

                        <div className='col-12 text-center'>
                            <button className="btn-primary btn-large mt-3">Explore Videos</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Iamges Gallery */}
            <div className=' image-gallery-section'>
                <div className='container'>
                    <h2 className='col-12 text-center'>Image Gallery</h2>
                    <div className='col-12 text-center'>
                        <img className='' src={AbtLine} alt="" />
                    </div>

                    <div className='row mt-2'>
                        <div className=' col-12 d-flex slideshoe'>
                        </div>
                        <div className='slideshoe'>
                            <Slider {...settings}>
                                <div className='img-cont'>
                                    <img src={FarahMubarak} className="image-slides" />
                                </div>
                                <div className='img-cont'>
                                    <img src={MosqueImg} className="image-slides" />

                                </div>
                                <div className='img-cont'>
                                    <img src={ShaRozaImg} className="image-slides" />

                                </div>
                                <div className='img-cont'>
                                    <img src={FarahMubarak} className="image-slides" />

                                </div>
                                <div className='img-cont'>
                                    <img src={DemoImg} className="image-slides" />

                                </div>
                                <div className='img-cont'>
                                    <img src={FarahMubarak} className="image-slides" />

                                </div>

                            </Slider>
                        </div>



                        <div className='col-12 text-center'>
                            <button className="btn-primary btn-large mt-3">Explore Images</button>
                        </div>
                    </div>

                </div>
            </div>


            <div>
                <footer className="footer-section">
                    <div className="container">
                        <div className="footer-cta pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        {/* <i className="fas fa-map-marker-alt"></i> */}
                                        <FontAwesomeIcon icon={faLocationDot} className="single-icon" />
                                        <div className="cta-text">
                                            <h4>Find us</h4>
                                            <span>Nizami Chowk cross, Channapatna</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        {/* <i className="fas fa-phone"></i> */}
                                        <FontAwesomeIcon icon={faPhoneFlip} className="single-icon" />
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>0000000000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="far fa-envelope-open"></i>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} className="single-icon" />
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>abc@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        {/* <div className="footer-logo">
                                            <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></a>
                                        </div> */}
                                        <div className="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                                elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        {/* <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i>
                                                <FontAwesomeIcon icon={fafa} className="single-icon" />
                                                </a>
                                            <a href="#"><i class="fa-brands fa-twitter twitter-bg"></i>
                                                <FontAwesomeIcon icon={faLocationDot} /></a>
                                            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div className="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" />
                                                    <button>
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                    </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                    <div className="copyright-text">
                                        <p>Copyright &copy; 2023, All Right Reserved Millat-e-Mehdavia</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {showButton && (
                <button onClick={scrollToTop} className="gotopbtn">
                    >
                </button>
            )}



        </div>
    )

}

export default Homepage;