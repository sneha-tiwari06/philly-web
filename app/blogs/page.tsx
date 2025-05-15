"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, IMAGE_BASE_URL } from '../utils/config';
interface Blog {
    _id: string;    
    blogName: string;
    imgName: string;
    blogDate: Date;
    blogLink: string;
    blogDesc: string;
    showOnHomepage: boolean;
    attached_document: string;   
  }
const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs`);
        setBlogs(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  

  return (
    <>
      <main>
        <div className="w-100 emptyBox"></div>
        <div className="w-100 breadcrumb-wrapper bg-primary">
          <div className="container-lg">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active">Blogs</li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="w-100 position-relative overflow-hidden padding pt-5 section-tours">
          <div className="container-lg">
            <div className="sec-title">
              <span className="h6 sec-title__tagline">writing room</span>
              <h2 className="h1 mb-0">Philly City <span className="text-third">Blogs</span></h2>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">Error: {error}</p>}

            <div className="row g-4">
              {blogs.map((blog) => (
                <div className="col-lg-4 col-sm-6 package-card" key={blog._id}>
                  <div className="package-card__inner">
                    <div className="package-card__img">
                      <Link href={`/blogs/${blog.blogLink}`}>
                        <img
                          src={`${IMAGE_BASE_URL}${blog.attached_document}`}
                          alt={blog.blogName}
                          style={{ height: "250px", width: "100%", objectFit: "cover" }}
                        />
                      </Link>
                    </div>
                    <div className="package-card__content">
                      <h3 className="package-card__title">
                        <Link href={`/blogs/${blog.blogLink}`}>{blog.blogName}</Link>
                      </h3>
                      <p className="text-truncate_two-lines">
                        {(blog.blogDesc).toString().replace(/<[^>]+>/g, '').slice(0, 100)}...
                      </p>
                      <div className="package-card__content__btn">
                        <div className="viewmore w-auto mt-0">
                          <Link href={`/blogs/${blog.blogLink}`} className="button">
                            View Detail <i className="fa fa-angles-right icon-circular sm"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Blogs;
