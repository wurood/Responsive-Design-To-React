import React from 'react'
import './style.css';
import FeaturedArticle from '../FeaturedArticle/index'
import RecentArticles from '../RecentArticles/index'
import SideBar from '../SideBar/index'

function index() {

  return (
    <>
    <div class="container content">
     <main role="main">
        <FeaturedArticle />
        <RecentArticles />
     </main>
     <SideBar />

    </div>
    </>
  )
}

export default index