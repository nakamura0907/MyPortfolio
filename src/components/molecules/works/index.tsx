import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import { FadeUp } from '../../atoms/observer'

import './style.css'

type MyImageDataLike = ImageDataLike & {
  name: string
}

const Works = () => {
  const data = useStaticQuery(
    graphql`
      query works {
        images: allFile(filter: { relativeDirectory: { eq: "thumbnail" } }) {
          edges {
            node {
              name
              childImageSharp {
                id
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  )
  const images: Array<MyImageDataLike> = data.images.edges.map(({ node }: any) => ({
    ...node.childImageSharp,
    name: node.name
  }))
  return (
    <section className="section works" id="works">
      <div className="l-inner">
        <h2 className="section-title">作品集</h2>

        <div className="gallery-wrap">
          {images.map((image, index) => {
            const Image = getImage(image)
            if (!Image) {
              return null
            }
            return (
              <FadeUp key={index}>
                <Link to={image.name} className="gallery-link">
                  <GatsbyImage image={Image} backgroundColor="white" className="gallery-image" alt={image.name} />
                </Link>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Works
