import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useHtmlClassService } from '../../_core/MetronicLayout';

export function Footer() {
  const today = new Date().getFullYear();
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      footerClasses: uiService.getClasses("footer", true),
      footerContainerClasses: uiService.getClasses("footer_container", true)
    };
  }, [uiService]);

  return (
    <Wrapper>
    <div
      className={`footer backg py-4 d-flex flex-lg-column  ${layoutProps.footerClasses}`}
      id="kt_footer"
    >
      <div
        className={`${layoutProps.footerContainerClasses} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted font-weight-bold mr-2">{today.toString()}</span> &copy;{" "}
          <a
            href="https://www.charlesetiennev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-50 text-hover-primary"
          >
            Charles-Étienne
          </a>
          
           <span className="text-dark-50">
           {'  -  '}
           </span> 
          <a
            href="http://ericmartins.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-50 text-hover-primary"
          >
            Eric Martins
          </a>
        </div>
        <div className="nav nav-dark order-1 order-md-2">
          <Link
           to='/support'
          >
            Support
          </Link>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.backg{background-color: #1e1e2d}
`;