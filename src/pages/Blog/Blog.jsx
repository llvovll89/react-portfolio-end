import React from 'react'
import './Blog.css'
import { projects } from '../../assets/db/dummydata'

export const Blog = () => {
  return (
    <>
        <section className='blog'>
            <div className="blog-content">
                {projects.map((item) => (
                    <div className="blog-boxs">
                        <div className="blog-card">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="blog-overlay">
                            <h4>{item.category}</h4>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}
