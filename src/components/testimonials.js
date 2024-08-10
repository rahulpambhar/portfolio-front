import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    const apiUrl = process.env.REACT_APP_API_URL;
    const urlObj = new URL(apiUrl);
    urlObj.pathname = urlObj?.pathname?.replace('/portfolio', '');
    urlObj?.toString();


    const testimonialGroups = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        testimonialGroups.push(testimonials.slice(i, i + 3));
    }

    useEffect(() => {
        const getTestimonials = async () => {
            try {
                const response = await axios.get(`${apiUrl}/getTestimonials`)
                setTestimonials(response?.data?.data)
            } catch (error) {
                console.log('error::: ', error);
            }
        }

        getTestimonials()
    }, [])

    return (
        <div className="container pt-5" style={{ maxWidth: '1150px', marginTop: '50px', marginBottom: '100px' , }} id="testmonial">

            <section className="section text-center" >
                <p className="section-subtitle">What Think Client About Me ?</p>
                <h6 className="section-title mb-6">Testimonial</h6>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={false}
                    autoPlay={false}
                    interval={3000}
                    emulateTouch={false}
                    showArrows={true}
                    showIndicators={true}
                    swipeable={false}
                >
                    {testimonialGroups.map((group, index) => (
                        <div className="row" key={index}>
                            {group.map((testimonial, idx) => (
                                <div className="col-lg-4 mb-5 mb-lg-0 text-center" key={idx}>
                                    <div>
                                        <div className="rounded-5 shadow-3-soft p-4" style={{ backgroundColor: "rgb(224, 223, 247)" }}>
                                            <div className="border-top border-dark mx-auto" style={{ width: '100px' }}></div>
                                            <p className="text-muted mt-4 mb-2">{testimonial.position}</p>
                                            <p className="h5 mb-4" style={{ color: '#344e41' }}>{testimonial.clientName}</p>
                                            <p className="pb-4 mb-4" style={{ height: '170px', overflowY: 'auto' }}>{testimonial.massage}</p>
                                        </div>
                                        <img src={`${urlObj}` + testimonial?.image} className="w-100 border border-dark rounded shadow-3-soft mt-n5" style={{ maxWidth: '150px' }} alt={testimonial.name} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </section>
        </div>
    )
}

export default Testimonials