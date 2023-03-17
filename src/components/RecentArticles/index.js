import React from 'react'
import RecentArticle from './RecentArticle/index'
import FoodImage from '../../img/food.jpg'
import DecorImage from '../../img/deco.jpg'
import WorkImage from '../../img/work.jpg'

function index() {
    const recentArticleData = [ 
        ['Keeping cooking simple',"Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.",'CONTINUE READING',FoodImage],
        ['Simplicity and work','Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.','CONTINUE READING',WorkImage],
        ['Simple decorations',"A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before.",'CONTINUE READING',DecorImage]
      ];

  return (
    <>
    {recentArticleData.map((item, index) => {
        return (
          <RecentArticle key={index} title={item[0]} body={item[1]} paragraph={item[2]} image={item[3]}/>
        );
    })}
    </>
  )
}

export default index