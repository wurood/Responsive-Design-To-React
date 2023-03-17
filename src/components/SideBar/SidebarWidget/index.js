import React from 'react'
import './style.css'
import WidgetTitle from '../../Title/index'
import WidgetBody from '../../Body/index'
import WidgetRecentPost from '../SideBarRecentPosts/index'

function index(props) {
  return (
    <div class="sidebar-widget">
        { props.order == 'first-widget'
          ?
          <>
            <WidgetTitle text={props.title}   type="h2" />
            <img src={props.img} alt="" class="widget-image" />
            <WidgetBody text={props.body} />
          </>
          :
          <>
             <WidgetTitle text={props.title}   type="h2" />
             <WidgetRecentPost />
          </>
         }
    </div>
  )
}

export default index