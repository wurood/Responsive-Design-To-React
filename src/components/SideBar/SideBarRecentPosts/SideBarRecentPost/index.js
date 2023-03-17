import React from 'react'
import WidgetTitle from '../../../Title/index'

function index(props) {
  return (
    <div class="widget-recent-post">   
        <WidgetTitle text={props.text} type="h2" />
        <img src={props.image} alt="image" class="widget-image" />
    </div>
  )
}

export default index