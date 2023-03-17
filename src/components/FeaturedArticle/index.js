import React from 'react'
import './style.css'
import ArticleTitle from '../Title/index'
import ArticleBody from '../Body/index'
import ArticleInfo from '../Info/index'
import Paragraph from '../Paragraph/index'
import LifeImage from '../../img/life.jpg'

function index() {
  return (
    <>
      <article class="article-featured">
        <img class="article-img" src={LifeImage} alt="life image" />
        <ArticleTitle text="Finding simplicity in life" type="h2" />
        <ArticleInfo />
        <ArticleBody text="Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though,in how you can find simplicity in the life you already living."/>
        <Paragraph text="continue reading"/>
      </article>
    </>
  )
}

export default index

