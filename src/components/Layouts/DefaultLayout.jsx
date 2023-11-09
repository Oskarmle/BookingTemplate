import React from 'react'
import Footer from '../molecules/footer'

export default function DefaultLayout({children}) {
  return (
    <div>
    { children }
    <Footer />
    </div>
  )
}
