import React from 'react'
import main3_1 from '../assets/main3_1.jpg'
import main3_2 from '../assets/main3_2.jpg'
import main3_3 from '../assets/main3_3.jpg'
import main3_4 from '../assets/main3_4.jpg'

export default function Works() {
  return (
    <div>
      <section id='main3'>
        <div className="container py-5"> 
        <div className="title fs-2 fw-bold my-5">
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
            <div className="child d-flex gap-5 my-5">
              <div className="box w-50">
                <img src={main3_4} alt="" className='w-100' />
              </div>
              <div className="box w-60">
                <div className="title_header fs-3 fw-bold">
                Components 
                </div>
                <span className='d-flex align-items-start gap-5 my-4'>
                  <mark className='bg-black rounded-4 px-3 text-white'>2018</mark>
                  <p className='fs-5'>Components, Design</p>
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
  )
}
