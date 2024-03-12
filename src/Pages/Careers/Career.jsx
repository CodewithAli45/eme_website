import React from 'react'
import Header from '../../components/Header'
import Footers from '../../components/Footer'

export default function Career() {
  return (
    <>
        <Header />
        <div className='career-container flex item-center justify-center flex-col my-6 mx-20'>
            <img src="/careers.svg" alt="career-img" />
            <div>
              <h1 className='text-lg font-semibold underline text-slate-600 '>Career at Electro Mech Engineers (EME)</h1>
              <p className='text-slate-500 text-justify'>
              Welcome to Electro Mech Engineers (EME), where we are committed to excellence and innovation in the field of Engineering, Procurement, and Construction (EPC). As a dynamic and forward-thinking company, we specialize in executing turnkey projects across various industries, including Coal, Steel, Cement, Infrastructure, Oil & Gas, and more.
              </p>
            </div>
            <div>
              <span className='block my-3 text-slate-700 text-lg font-bold'>Life at EME:</span> 
              <span className='block mb-5 text-justify text-slate-500'> At EME, we believe in fostering a collaborative and inclusive work environment. Our team is comprised of talented professionals who share a passion for delivering high-quality projects and pushing the boundaries of what's possible. We encourage a culture of continuous learning and development, where employees are empowered to grow both personally and professionally.</span>

              <span className='block text-slate-700'>Team Collaboration: </span>
              <span className='block mb-5 text-justify text-slate-500'>
                We emphasize teamwork and value the unique contributions of each team member. Together, we create an environment that encourages collaboration and creativity.
              </span>
              <span className='block text-slate-700'>Innovation: </span>
              <span className='block mb-5 text-justify text-slate-500'>EME is at the forefront of technological advancements in the EPC industry. We encourage innovation and provide our employees with opportunities to work on cutting-edge projects.</span>
              <span className='block text-slate-700'>Employee Well-being: </span>
              <span className='block mb-5 text-justify text-slate-500'>We prioritize the well-being of our employees, offering competitive benefits, a healthy work-life balance, and various wellness programs.</span>
            </div>
            <div className="current-openings">
              <h1 className='text-2xl font-bold underline my-1'>Current Openings</h1>
              <table className='border w-full'>
                <thead text-lg text-gray-100 text-center uppercase bg-slate-700 >
                  <tr >
                    <th scope="col" className="px-6 py-3 w-1/6 uppercase border">sl</th>
                    <th scope="col" className="px-6 py-3 border uppercase">Description</th>
                    <th scope="col" className="px-6 py-3 border uppercase">Apply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b text-justify'>
                    <td className="px-6 py-4 border text-center text-xl text-gray-600 uppercase">1</td>
                    <td className="px-6 py-4 border text-left text-xl text-gray-600 uppercase"><span>Accountant</span></td>
                    <td className="px-6 py-4 border text-center text-xl text-gray-600 ">Click Here</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <h1 className='text-2xl font-bold my-5'>Send Your Resume</h1>
                <form action="">
                  <input type="text" name="" id="" placeholder='Enter your name' className='block my-1 px-10 rounded-lg ' />
                  <input type="email" name="" id="" placeholder='enter your email' className='block my-1 px-10 rounded-lg' />
                  <input type="text" name="" id="" placeholder='drop your resume' className='block my-1 px-10 rounded-lg' />
                  <button className='shadow-lg block my-1 px-10 border rounded-xl bg-slate-100 py-2 text-xl'>Send</button>
                </form>
              </div>
            </div>
        </div>
        <Footers />
    </>
    
  )
}
