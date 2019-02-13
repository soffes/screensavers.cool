import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  margin: 2rem 0;
  color: #aaa;
  font-size: 14px;
  font-weight: 500;

  a {
    color: #aaa;

    &:hover {
      color: #0881b3;
    }
  }
`

const Footer = (props) => {
  return(
    <FooterContainer>
      <p>© 2019 <a href="https://soff.es" rel="external">Sam Soffes</a></p>
    </FooterContainer>
  )
}

export default Footer
