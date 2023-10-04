import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
//import CustomNavbar from './components/CustomNavbar'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NatWest ShareSave',
      defaultTitle: 'NatWest ShareSave',
      description: 'NatWest ShareSave',
      openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: 'https://natwestshareplans.com',
        site_name: 'NatWest ShareSave Support Hub',
      },
    }
  },
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 39.3 59.75">
        <path d="m.29,50.54c-.42-.5-.42-1.16.17-1.83l5.56-6.31c.5-.58,1.16-.83,1.91-.25,3.82,3.74,6.97,5.56,11.37,5.56s7.22-1.66,7.22-5.31c0-3.4-2.49-4.48-6.14-6.14l-7.05-3.32C7.18,30.21,1.37,25.81,1.37,16.76,1.37,5.89,9.59,0,19.71,0c6.89,0,12.61,2.74,17.43,7.72.5.5.58,1.25.08,1.91l-5.48,6.56c-.42.58-1.16.83-1.74.42-3.73-3.15-6.47-4.56-9.88-4.56-3.82,0-6.06,1.91-6.06,4.9,0,3.15,2.32,4.15,6.56,6.14l5.89,2.66c6.14,2.91,12.78,6.72,12.78,16.68,0,12.12-9.96,17.35-19.75,17.35-9.21,0-15.77-4.56-19.25-9.21Z"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Spydr Docs
      </span>
    </>
  ),
  project: {
    link: null,
    icon: null,
  },
  chat: {
    link: null,
  },
  docsRepositoryBase: 'https://github.com/sprouller/nw-sharesave-support-uk',
  footer: {
    text: 'NatWest ShareSave Support UK',
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://natwestshareplans.com" target="_blank">
        🎉 Spydr's New Project is out now! Read more →
      </a>
    )
  },
  search: {
    placeholder: 'Search docs',
  },
  
  navbar: {
    //component: CustomNavbar,  
    },

  }

export default config
