import React from 'react'
import './Introduction.css';

export default function Introduction() {
  return (
    <div className="intro-container">
        <div className="co-name-intro">Electro-mech Engineers</div>
        <div className="co-name-intro2">Turnkey Concepts</div>
        <div className="co-name-intro-main">
          An Engineering, Procurement, and Construction (EPC) company dedicated to delivering innovative and turnkey solutions across diverse industries. With a steadfast commitment to excellence, we take pride in being the preferred partner for clients seeking a reliable and comprehensive approach to project development.
        </div>
        <div className="co-name-intro3">-: Commitment to Quality and Safety :-</div>
        <div className="intro-verticals">
          <div className="intro-core">
            <div className="bg-slate-400 text-2xl font-bold px-10 py-2">Core Competencies</div>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Engineering</p>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Procurement</p>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Construction</p>
          </div>
          <div className="intro-vertical">
            <div className="bg-slate-400 text-2xl font-bold px-10 py-2">Project Outline</div>
            <p className="text-red-950 text-xl font-bold  text-center py-3">EPC Projects</p>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Civil Projects</p>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Structural Projects</p>
          </div>
          <div className="intro-keyindustry">
            <div className="bg-slate-400 text-2xl font-bold px-10 py-2 ">Key Industries</div>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Infrastructure</p>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Steel</p>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Power</p>
            <p className="text-red-950 text-xl font-bold  text-center py-3">Oil & Gas</p>
          </div>
        </div>
        <div className="co-details py-2">
          <img src="turnover-eme.jpg" alt="" />
        </div>
    </div>
  )
}
