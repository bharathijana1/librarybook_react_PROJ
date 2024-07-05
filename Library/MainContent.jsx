import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HeadingNavbar } from './HeadingNavbar'
import { Footer } from './Footer'
import MainBookList from './MainBookList'
import { AddtoBook } from './AddtoBook'
import { PagenotFount } from './PagenotFount'
import { UpdateBook } from './UpdateBook'

export const MainContent = () => {
  return (

    <Router>
        <HeadingNavbar />

      <Routes>
        <Route path="/" element={<MainBookList />} />
        <Route path="/addbook" element={<AddtoBook />} />
        <Route path="/updatebook/:id" element={<UpdateBook />} />
        <Route path="*" element={<PagenotFount />} />
      </Routes>

        <Footer />
    </Router>


)
}
