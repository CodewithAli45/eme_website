import React from 'react'
import './projects.css';
import Header from '../../components/Header';
import ongoingProject from '../../ongoingProject.json'
import Footers from '../../components/Footer';

export default function OngoingProject() {
 
  return (
    <>
      <Header />
      <div className='project-containers mb-10'>
          <div className="projects-table">
            <div className='flex' >
              <img src="/ongoing.svg"  alt="" />
            </div>
            <div className="table flex item-center">
              <table className="table-containers w-full ">
                <thead className='text-lg text-gray-100 text-center uppercase bg-slate-700 '>
                  <tr>
                    <th scope="col" className="px-6 py-3 w-1/2 border">Name of work</th>
                    <th scope="col" className="px-6 py-3 border">Client</th>
                    <th scope="col" className="px-6 py-3 border">Location</th>
                  </tr>
                </thead>
                <tbody className='project-body'>
                  {ongoingProject.map((item, index) => (
                    <tr key={index} className='border-b text-justify'>
                      <td className="px-6 py-4 border"><span className='text-xl font-bold block'>{item.project}</span>  <span className='text-lg text-gray-500 dark:text-gray-400 '>{item.description}</span></td>
                      <td className="px-6 py-4 border text-center text-xl text-gray-600 uppercase">{item.client}</td>
                      <td className="px-6 py-4 border text-center text-xl text-gray-600 uppercase">{item.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
      <Footers />
    </>
  )
}