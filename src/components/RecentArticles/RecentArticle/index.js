import React from 'react'
import './style.css'
import ArticleTitle from '../../Title/index'
import ArticleBody from '../../Body/index'
import ArticleInfo from '../../Info/index'
import Paragraph from '../../Paragraph/index'

function index(props) {
  return (
    <>
       <article class="article-recent">
            <div className="image" >
              <img class="image article-img" src={props.image} alt="image" />
              <ArticleInfo />
            </div>
            <div >
             <ArticleTitle  className="article-title" text={props.title}  type="h2" />
             <ArticleBody  text={props.body} />
             <Paragraph text={props.paragraph} />
             </div>
             
       </article>
    </>
  )
}

export default index