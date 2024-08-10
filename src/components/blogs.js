import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const apiUrl = process.env.REACT_APP_API_URL;
    const urlObj = new URL(apiUrl);

    urlObj.pathname = urlObj?.pathname?.replace('/portfolio', '');

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get(`${apiUrl}/getBlogs`)
                setBlogs(response?.data?.data)
            } catch (error) {
                console.log('error::: ', error);
            }
        }

        getBlogs()
    }, [])
    return (
        <section className="section" id="blog">
            <div className="container text-center">
                <p className="section-subtitle">Recent Posts?</p>
                <h6 className="section-title mb-6">Blog</h6>
                {
                    blogs.length > 0 ? blogs?.map((blog, index) => {
                        return <div key={blog?.id}>
                            <div className="blog-card">
                                <div className="blog-card-header">
                                <img src={`${urlObj}` + blog?.image} className="blog-card-img"
                                    alt="file not found" style={{ height: '450px', objectFit: 'cover' }} />
                                </div>
                                <div className="blog-card-body">
                                    <h5 className="blog-card-title">{blog?.title}</h5>
                                    <p className="blog-card-caption">
                                        <a href="#">By: {blog?.blogger}</a>
                                    </p>
                                    <p>{blog?.description}</p>
                                </div>
                            </div>
                        </div>
                    })
                        : <h1>No Blog Found</h1>
                }
            </div>
        </section>
    )
}

export default Blogs