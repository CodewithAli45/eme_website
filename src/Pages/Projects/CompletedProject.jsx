import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './CompletedProject.css';
import Header from '../../components/Header';

const url = "https://google-sheet.onrender.com/google_sheet/getprojects";

export default function CompletedProject() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects()
  }, []);

  const fetchProjects = async() => {
    try {
      const response = await axios.get(url);
      setProjects(response.data.data.projects);
      console.log("Projects are ", response.data.data.projects);
    } catch (error) {
      console.log("Error in fetch projects from database ", error);
    }
  }
  return (
    <>
      <Header />
      <div className='project-containers'>
          <div className="projects-table">
            <div className='flex bg-dark item-center' >
              <img src="/project.svg"  alt="" />
            </div>
            <div className="table flex item-center bg-slate-400">
              <table className="table-containers w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className='text-lg text-gray-100 text-center uppercase bg-slate-700 '>
                  <tr>
                    <th scope="col" className="px-6 py-3 w-1/2 border">Project</th>
                    <th scope="col" className="px-6 py-3 border">Client</th>
                    <th scope="col" className="px-6 py-3 border">Location</th>
                  </tr>
                </thead>
                <tbody className='project-body'>
                  {projects.map((item, index) => (
                    <tr key={index} className='border-b '>
                      <td className="px-6 py-4 text-white border">{item.name}</td>
                      <td className="px-6 py-4 border">{item.client}</td>
                      <td className="px-6 py-4 border">{item.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}