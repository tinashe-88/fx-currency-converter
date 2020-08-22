import React from 'react'
import {
  ReactComponent as SiteLogo
} from './logo'

const Logo = () => (
  <div className="my-0 mr-md-auto font-weight-normal">
    <a 
      href="/"
      title="Fx App"
      target="__blank"
      rel="noopener noreferrer"
    >
      <SiteLogo />
    </a>
  </div>
)

export default Logo