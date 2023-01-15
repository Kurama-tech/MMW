import React, { Component } from 'react'
import Slider from "react-slick";
import DemoImg from '../../assets/images/land.jpg'
import GalaxyImg from "../../assets/images/galaxy.jpeg"


function SlideShow() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500
    };
    return (
        <div className='homepageslideshow'>    
            {/* <div>
                <Slider {...settings}>
                   <div>
                    <img src={DemoImg} className="image-slides"  />
                   </div>
                    <div>
                        <img src={DemoImg} className="image-slides" />
                        <span className='text-centered'>
                            Allah does Not burden a soul beyond its capacity.
                        </span>
                    </div>
                    <div>
                        <img src={DemoImg} className="image-slides" />
                        <div className='text-centereds'>
                            Hi how are you.
                        </div>
                    </div>
                    <div>
                        <img src={DemoImg} className="image-slides" />
                        <div className='text-centered'>
                           I am fine.
                        </div>
                    </div>
                    <div>
                        <img src={DemoImg} className="image-slides" />
                        <div className='text-centered'>
                            What about you.
                        </div>
                    </div>
                    <div>
                        <img src={DemoImg} className="image-slides" />
                        <div className='text-centered'>
                            How about your family.
                        </div>
                    </div>
                
                    
                </Slider>
            </div> */}
           

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="6000">
                        <img src={DemoImg} className="image-slides " alt="..." />
                            <div className="carousel-caption ">
                            <span className='text-centered'>
                                Allah does Not burden a soul beyond its capacity.
                            </span>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000">
                        <img src={GalaxyImg} className="image-slides" alt="..." />
                            <div className="carousel-caption ">
                            <span className='text-centered'>
                                Allah does Not burden a soul beyond its capacity ddcdcdc.
                            </span>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000">
                        <img src={DemoImg} className="image-slides" alt="..." />
                            <div className="carousel-caption ">
                            <span className='text-centered'>
                                Allah does Not burden a soul beyond its capacity jhgfd.
                            </span>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000">
                        <img src={GalaxyImg} className="image-slides" alt="..." />
                        <div className="carousel-caption ">
                            <span className='text-centered'>
                                Allah does Not burden a soul beyond its capacity ddcdcdc.
                            </span>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )

}

export default SlideShow;