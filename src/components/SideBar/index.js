import React from 'react'
import './style.css'
import SideBarWidget from './SidebarWidget/index'
import AboutMe from '../../img/about-me.jpg'

function index() {
  const sideBarWidgetData = [ 
    ['About me',AboutMe,"I find life better, and I'm happier, when things are nice and simple.","first-widget"],
    ['Recent posts']
    ];

  return (
    <aside class="sidebar">
      {sideBarWidgetData.map((item, index) => {
          return (
            <SideBarWidget key={index} title={item[0]} img={item[1]} body={item[2]} order={item[3]} />
          );
      })}
    </aside>
  )
}

export default index