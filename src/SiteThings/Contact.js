import React from "react";
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact_2.jpg";
import contact3 from "../assets/contact_3.jpg";
export default function Contact() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="parent">
            <div className="child">
              <div className="title_header fs-1 fw-bold">
                Designing Dashboards with usability in mind
              </div>
              <span className="d-flex align-items-start gap-4 my-3">
                <mark className="bg-black text-white rounded-5 px-2">2020</mark>
                <p>Dashboard, User Experience Design </p>
              </span>
              <div className="title_p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="child">
              <center>
              <img src={contact1} alt="" />
              </center>
            </div>
            <div className="child">
              <div className="title_header">
                <p className="fs-3 fw-bold">Heading 1</p> <br />
                <p className="fs-4 fw-bold">Heading 2</p>
              </div>
              <div className="title_p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="child">
              <center>
              <img src={contact2} alt="" />
              </center>
            </div>
            <div className="child">
             <center>
             <img src={contact3} alt="" />
             </center>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
