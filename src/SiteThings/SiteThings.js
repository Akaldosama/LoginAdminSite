import React from "react";
import Man from "../assets/man.jpg";
import main3_1 from '../assets/main3_1.jpg'
import main3_2 from '../assets/main3_2.jpg'
import main3_3 from '../assets/main3_3.jpg'

import "./SiteThings.css";

export default function SiteThings() {
  return (
    <div>
      <section id="main1">
        <div className="container">
          <div className="parent d-flex">
            <div className="child w-50 p-2">
              <div className="title_header text-4xl">
                Hi, I am John, Creative Technologist
              </div>
              <div className="title_p my-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
              <div className="title_btn">
                <button className="text-white bg-[orange] fs-4">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="child w-50 d-flex align-items-center justify-content-center">
              <img src={Man} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="main2">
        <div className="container">
          <div className="title">
            <span>Recent posts</span>
            <span>View all</span>
          </div>
          <div className="parent d-flex align-items-center justify-content-center gap-3">
            <div className="child w-50 p-4 bg-white">
              <div className="title_header fs-3 fw-bold">
                Making a design system from scratch
              </div>
              <p>12 Feb | Design, Pattern</p>
              <div className="title_p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>

            <div className="child w-50 p-4 bg-white">
              <div className="title_header fs-3 fw-bold">
                Creating pixel perfect icons in Figma
              </div>
              <p>12 Feb | Figma, Icon Design</p>
              <div className="title_p">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='main3'>
        <div className="container py-5"> 
        <div className="title fs-4 py-3">
          Featured Works
        </div>
          <div className="parent">
            <div className="child d-flex gap-5">
              <div className="box w-50">
                <img src={main3_1} alt="" className='w-100' />
              </div>
              <div className="box w-60">
                <div className="title_header fs-3 fw-bold">
                  Designing Dashboards  
                </div>
                <span className='d-flex align-items-start gap-5 my-4'>
                  <mark className='bg-black rounded-4 px-3 text-white'>2020</mark>
                  <p className='fs-5'>Dashboard</p>
                </span>
                <p className='fs-5'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="child d-flex gap-5 py-5">
              <div className="box w-50">
                <img src={main3_2} alt="" className='w-100' />
              </div>
              <div className="box w-60">
                <div className="title_header fs-3 fw-bold">
                Vibrant Portraits of 2020 
                </div>
                <span className='d-flex align-items-start gap-5 my-4'>
                  <mark className='bg-black rounded-4 px-3 text-white'>2018</mark>
                  <p className='fs-5'>Illustration</p>
                </span>
                <p className='fs-5'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="child d-flex gap-5">
              <div className="box w-50">
                <img src={main3_3} alt="" className='w-100' />
              </div>
              <div className="box w-60">
                <div className="title_header fs-3 fw-bold">
                36 Days of Malayalam type  
                </div>
                <span className='d-flex align-items-start gap-5 my-4'>
                  <mark className='bg-black rounded-4 px-3 text-white'>2018</mark>
                  <p className='fs-5'>Typography</p>
                </span>
                <p className='fs-5'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
