import { API_BASE_URL, IMAGE_BASE_URL } from "@/app/utils/config";
import axios from "axios";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Blog {
  _id: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  blogName: string;
  imgName: string;
  blogDate: Date;
  blogLink: string;
  blogDesc: string;
  showOnHomepage: boolean;
  attached_document: string;
}

async function getBlogDetail(slug: string): Promise<Blog | null> {
  try {
    const res = await axios.get<Blog>(`${API_BASE_URL}/blogs/${slug}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch blog detail:", error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const blog = await getBlogDetail(slug);
  if (!blog) return notFound();

  return (
    <>
      <main>
        <div className="w-100 emptyBox"></div>
        <div className="w-100 breadcrumb-wrapper bg-primary">
          <div className="container-lg">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="breadcrumb-item active">{blog.blogName}</li>
              </ol>
            </nav>
          </div>
        </div>
        <section className="w-100 position-relative overflow-hidden padding section-events">
          <div className="container-lg">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-8 blogs-archive">
                <div className="inner pe-lg-5">
                  <div className="sec-title">
                    <h1 className="h1">{blog.blogName}</h1>
                    <ul className="list-inline blog-posting-detail fw-bold">
                      <li className="list-inline-item">
                        Posted on:{" "}
                        <span className="text-secondary">
                          {new Date(blog.blogDate).toLocaleDateString()}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <article className="blog-content-body">
                    <img
                      src={`${IMAGE_BASE_URL}${blog.attached_document}`}
                      className="rounded shadow-sm"
                      alt={blog.blogName}
                    />
                    <div dangerouslySetInnerHTML={{ __html: blog.blogDesc }} />
                  </article>
                  <div className="readmore">
                    <Link href="/blogs" className="button stroke">
                      Back{" "}
                      <i className="fa fa-angles-left icon-circular sm"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 pageAside category-panel">
                <div className="inner aside-inner">
                  <section className="bg-light rounded shadow-sm">
                    <div className="sec-title mb-3">
                      <span className="h4 mb-0 fw-bold text-primary">
                        Recent Posts
                      </span>
                    </div>
                    <div id="recently-posted" className="side-recentBlogs">
                      {/* Static recent blogs */}
                      <div className="recentBlogs-box">
                        <Link href="#">
                          <div className="img-fluid">
                            <img
                              src="https://www.dcmonumentstour.com/uploads/blogs/4602eeb02fe239c517b3ce13528c5885.png"
                              alt="Washington DC Night Tours for Couples & Families"
                              className="h-100 object-cover"
                            />
                          </div>
                          <span>
                            Washington DC Night Tours for Couples &amp; Families
                          </span>
                        </Link>
                      </div>
                      <div className="recentBlogs-box">
                        <Link href="#">
                          <div className="img-fluid">
                            <img
                              src="https://www.dcmonumentstour.com/uploads/blogs/7ea5f7c32af1428149c5e380f9ec6dfc.png"
                              alt="A Local’s Guide to the Best Summer Tours in Washington, DC"
                              className="h-100 object-cover"
                            />
                          </div>
                          <span>
                            A Local’s Guide to the Best Summer Tours in
                            Washington, DC
                          </span>
                        </Link>
                      </div>
                      <div className="recentBlogs-box">
                        <Link href="#">
                          <div className="img-fluid">
                            <img
                              src="https://www.dcmonumentstour.com/uploads/blogs/0b5927cd15b51425b8dca57ce4a0af93.jpg"
                              alt="Experience a VIP Private Tour in Washington DC with DC Monuments"
                              className="h-100 object-cover"
                            />
                          </div>
                          <span>
                            Experience a VIP Private Tour in Washington DC with
                            DC Monuments
                          </span>
                        </Link>
                      </div>
                      <div className="recentBlogs-box">
                        <Link href="#">
                          <div className="img-fluid">
                            <img
                              src="https://www.dcmonumentstour.com/uploads/blogs/0d8078f16e7f91933a79d2b04a5a8e26.png"
                              alt="Small Group Tour in Washington DC"
                              className="h-100 object-cover"
                            />
                          </div>
                          <span>Small Group Tour in Washington DC</span>
                        </Link>
                      </div>
                      <div className="recentBlogs-box">
                        <Link href="#">
                          <div className="img-fluid">
                            <img
                              src="https://www.dcmonumentstour.com/uploads/blogs/ca5a0bec98301f39ca971ce9d471b524.png"
                              alt="Empower Your Team with Corporate Tours In Washington DC"
                              className="h-100 object-cover"
                            />
                          </div>
                          <span>
                            Empower Your Team with Corporate Tours In Washington
                            DC
                          </span>
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
