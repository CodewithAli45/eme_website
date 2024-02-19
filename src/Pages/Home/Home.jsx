import React from 'react'
import Header from '../../components/Header'
import ImageCarousel from './ImageCarousel'
import Introduction from './Introduction'
import Client from '../../components/Clients/Client'
import Footers from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <ImageCarousel />
      <Introduction />
      <Client />
      <Footers />
      
    </>
  )
}
