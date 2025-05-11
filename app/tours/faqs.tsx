"use client";
import React, { useEffect, useState } from "react";

interface Faq {
  _id: string;
  question: string;
  answer: string;
  category: {
    _id: string;
    category: string;
  };
}

const slugify = (str: string) =>
  str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");

const Faqs = ({ categoryId }: { categoryId?: string }) => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/faqs");
        const data = await res.json();

        const filtered = categoryId
          ? data.filter(
              (faq: any) => slugify(faq.category.category) === categoryId
            )
          : data;

        setFaqs(filtered);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, [categoryId]);

  const toggleAnswer = (id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section className="tour_faq_box">
      <div className="sec-title">
        <h4 className="mb-0">Frequently Asked Questions?</h4>
      </div>
      <div className="faqs-box scroller">
        {faqs.map((faq) => (
          <div key={faq._id}>
            <div
              className="faqs_question"
              onClick={() => toggleAnswer(faq._id)}
              style={{ cursor: "pointer" }}
            >
              {faq.question} <i className="fa fa-angle-down"></i>
            </div>
            {openIndex === faq._id && (
              <div className="faqs_answer">
                <div className="inside">
                  <p className="mb-0">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
