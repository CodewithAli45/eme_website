import React from 'react'
import Header from '../../components/Header'
import Footers from '../../components/Footer'
import './About.css';

export function About() {
  return (
    <>
        <Header />
        <div className='flex item-center justify-center mt-6'>
            <div className='flex w-1/2 item-center justify-center border bg-slate-100'>
                <div className='pointer font-bold text-lg text-slate-700 w-full px-10 py-6 flex flex-col items-start gap-6'>
                    <div className='about-button bg-blue-400 p-2 w-48'>
                        <button>About Us</button>
                    </div>
                    <div className=' about-button p-2 w-full'>
                        <button>Vision & Mission</button>
                    </div>
                    <div className=' about-button p-2 w-full'>
                        <button>Core Competency</button>
                    </div>
                    <div className='about-button p-2 w-full'>
                        <button>Project Portfolio</button>
                    </div>
                    <div className='about-button p-2 w-full'>
                        <button>Key Industry</button>
                    </div>
                    <div className='about-button p-2 w-full'>
                        <button>Why Choose</button>
                    </div>
                </div>
                <div className='px-10 py-6'>
                    <div className="about text-xl text-justify">
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2'>Electro-Mech Engineers,</p>
                        <p className='mb-6 pl-12 text-xl'>a leading Engineering, Procurement, and Construction (EPC) company dedicated to delivering innovative and turnkey solutions across diverse industries. With a steadfast commitment to excellence, we take pride in being the preferred partner for clients seeking a reliable and comprehensive approach to project development.</p>
                        <p className='mb-6 pl-12 text-xl'>
                        Established on July 31st, 2004, our company has been a cornerstone of excellence in the field of infrastructure development. Headquartered in Bokaro, Jharkhand, we have been actively involved in a diverse range of EPC, Civil and Structural projects, contributing significantly to the growth and progress of Eastern India.
                        </p>
                    </div>
                    <div className="vision text-justify">
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2' >Vision</p>
                        <p className='mb-6 pl-12 text-xl'>
                            Our vision is to provide world class engineering services with a particular focus on Steel, Energy, Infrastructure and Government Services. Our objective is to expand and enhance our presence throughout India & abroad by competitiveness, experience and business relationship. We intend to target Steel, Energy, Infrastructure and Government Services, where we believe high potential of growth is there.
                        </p>
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2' >Mission</p>
                        <p className='mb-6 pl-12 text-xl'>
                            Cost effective & time bound project execution assuring quality with latest technology
                        </p>
                    </div>
                    <div className="core text-justify">
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2' >Core Competencies:</p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Engineering:  </span>Our company boasts a team of skilled and experienced engineers proficient in delivering cutting-edge solutions across various engineering disciplines.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Construction:  </span>With a strong network of suppliers and a strategic approach to procurement, we ensure timely and cost-effective acquisition of materials and resources for our projects.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Engineering:  </span>From groundbreaking to completion, our commitment to quality and efficiency is evident in our civil and structural construction projects.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Geographical Presence:</span>Primarily focusing on Jharkhand, West Bengal, Orissa, Chattishgarh, Madhya Pradesh & Andhra Pradesh, our footprint extends across the region, contributing to the development of vital infrastructure that propels economic and societal progress.
                        </p>
                    </div>
                    <div className="portfolio">
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2'>Project Portfolio:</p>
                        <p className='mb-6 pl-12 text-xl'>
                            Our company has successfully executed a wide array of projects, ranging from intricate engineering solutions to large-scale civil and structural constructions. Our diverse portfolio includes but is not limited to:
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>EPC Projects: </span>Comprehensive solutions encompassing engineering, procurement, and construction, ensuring seamless project delivery.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Civil Projects: </span>Expertise in the construction of roads, bridges, dams, and other essential civil infrastructure.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Structural Projects: </span>From industrial complexes to residential towers, our structural projects stand as a testament to our proficiency in creating robust and enduring structures.
                        </p>
                    </div>
                    <div className="quality text-justify">
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2'>Commitment to Quality and Safety:</p>
                        <p className='mb-6 pl-12 text-xl'>
                            We uphold the highest standards of quality and safety in all our endeavours. Our commitment to excellence ensures that our projects not only meet but exceed industry benchmarks.
                        </p>
                    </div>
                    <div className="industry text-justify">
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2' >Kye Industry We Serve</p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Steel:</span> As an EPC contractor and experience the difference expertise makes in the steel industry. We are dedicated to delivering innovative and efficient solutions that propel steel-related projects to new heights of success. From conceptualization to completion, we are with every step of the way, shaping the future of the steel industry.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Infrastructure:</span> Our expertise extends to infrastructure development, including transportation, water resources, and urban & rural development projects.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Energy: </span>From power plants to renewable energy projects, we contribute to the growth of the energy sector by delivering cutting-edge solutions.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Oil & Gas:</span> We are offering end-to-end services in exploration, extraction, processing, distribution and transportation facilities
                        </p>
                    </div>
                    <div className="why-choose text-justify">
                        <p className='block text-2xl font-bold text-slate-600 bg-teal-200 p-1 mb-2' >Why Choose</p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Proven Track Record: </span>With a history of successful project completions, we have earned the trust of clients.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Innovation: </span>We embrace the latest technologies and methodologies to bring innovation to every project, enhancing time efficiency and sustainability.
                        </p>
                        <p className='mb-6 pl-12 text-xl'>
                            <span className='font-bold text-yellow-700'>Client-Centric Approach: </span>Our commitment to client satisfaction is unwavering, and we tailor our services to meet the unique requirements of each project.
                        </p>
                    </div>
                </div>
            </div> 
        </div>
        <Footers />
    </>
    
  )
}

