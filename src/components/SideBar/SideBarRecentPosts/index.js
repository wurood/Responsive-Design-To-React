import React from 'react'
import WidgetRecentPost from './SideBarRecentPost/index'
import FoodImage from '../../../img/food.jpg'
import WorkImage from '../../../img/work.jpg'
import DecorImage from '../../../img/deco.jpg'

function index() {
    const RecentPostData = [ 
        ['Keeping cooking simple',FoodImage],
        ['Simplicity and work',WorkImage],
        ['Simple decorations',DecorImage]
    ];

  return (
      <>
        {RecentPostData.map((item, index) => {
            return (
                <WidgetRecentPost key={index} text={item[0]} image={item[1]} />

            );
        })}
      </>
  )
}

export default index