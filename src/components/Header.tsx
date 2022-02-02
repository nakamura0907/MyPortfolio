/** @jsx jsx */
import React from 'react'
import Scroll from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'
import { jsx } from '@emotion/react'
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import styles from '../styles/header'

interface State {
  inPageLinks: Element[];
  activeLinkID: string;
}

const initialState: State = {
  inPageLinks: [],
  activeLinkID: "",
}

const Header: React.FC = () => {
  const location = useLocation();
  const [inPageLinks, setInPageLinks] = React.useState(initialState.inPageLinks);
  const [activeLinkID, setActiveLinkID] = React.useState(initialState.activeLinkID);

  React.useEffect(() => {
    const target = document.querySelectorAll(".in-page-link");

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((value) => {
        if (value.isIntersecting) {
          setActiveLinkID(value.target.id);
        }
      })
    }
    const observer = new IntersectionObserver(callback, {
      rootMargin: "-50% 0%",
      threshold: 0
    });
    target.forEach((element) => observer.observe(element))

    setInPageLinks(Array.from(target));

    return () => {
      observer.disconnect();
      setActiveLinkID(initialState.activeLinkID);
    }
  }, [location])

  return (
    <header className="header" css={styles}>
      <div className="profile">
        <div className="site-title">
          <Link to="/">Nakamura0907 Portfolio</Link>
        </div>
        <div>
          <div className="l-flex l-flex-justify-center">
            <StaticImage src='../images/avatar.png' alt='avatar' width={200} className='avatar avatar-circle' />
          </div>
        </div>
      </div>
      <nav className="header-nav" aria-label='page-in-links'>
        <ul className="header-nav-list">
          {inPageLinks.map((element, index) => (
            <li className={`header-nav-item ${activeLinkID === element.id ? "is-active" : ""}`} key={index}>
              <Scroll href={`#${element.id}`}>{element.id ?? "TOP"}</Scroll>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
