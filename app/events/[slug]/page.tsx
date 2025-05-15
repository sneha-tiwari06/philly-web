import Link from "next/link";
import React from "react";
import EventModal from "./eventModal";
import axios from "axios";
import { notFound } from "next/navigation";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/app/utils/config";
interface Blog {
  _id: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  eventName: string;
  eventURL: string;
  eventDesc: string;
  propertyDetails: string;
  possibilities: string;
  attached_document: string;
}
async function getEventDetail(slug: string): Promise<Blog | null> {
  try {
    const res = await axios.get<Blog>(
      `${API_BASE_URL}/events/${slug}`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch event detail:", error);
    return null;
  }
}
export default async function EventDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const event = await getEventDetail(slug);

  if (!event) return notFound();
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
                  <Link href="/event-party-philly-city">Events</Link>
                </li>
                <li className="breadcrumb-item active">{event.eventName}</li>
              </ol>
            </nav>
          </div>
        </div>
        <section className="w-100 position-relative overflow-hidden padding section-events">
          <div className="container-lg">
            <div className="sec-title mx-auto text-center">
              <span className="h6 sec-title__tagline">popular events</span>
              <h2 className="h1 mb-0">
                <span className="text-third">{event.eventName}</span> Services
                in Philly City
              </h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-7 overview-">
                <div className="inner pe-lg-5">
                  <div
                    dangerouslySetInnerHTML={{ __html: event.eventDesc }}
                  ></div>
                  <div className="readmore w-auto">
                    <a
                      href="#eventModal"
                      data-bs-toggle="modal"
                      data-bs-type="Wedding Event"
                      className="button"
                    >
                      Get Quote <i className="fa fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 overview-imgBox">
                <div className="img-fluid position-relative h-100">
                  <img
                    src={`${IMAGE_BASE_URL}$${event.attached_document}`}
                    className="h-100 object-cover shadow-sm"
                    alt={event.eventName}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <EventModal />
    </>
  );
}
