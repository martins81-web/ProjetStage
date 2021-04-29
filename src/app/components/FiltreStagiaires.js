import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import { FiltreEtoilesStagiaires } from './FiltreEtoilesStagiaires';
import { toAbsoluteUrl } from '../../_metronic/_helpers';
import styled from 'styled-components';
export const FiltreStagiaires = () => {
  const [afficherFiltreEtoiles, setAfficherFiltreEtoiles] = useState(false);
  const toggleFiltre = React.useCallback(
    () => setAfficherFiltreEtoiles(!afficherFiltreEtoiles),
    [afficherFiltreEtoiles, setAfficherFiltreEtoiles]
  );
  return (
    <Wrapper>
      <div>
        Boolean is set to <b>{String(afficherFiltreEtoiles)}</b>.
      </div>

      <h1 className='text-muted my-5'>Filtres</h1>
      <div className='d-flex py-5'>
        <div
          onClick={toggleFiltre}
          className='symbol symbol-40 symbol-light-success mr-5 hover-etoiles'
        >
          <span className='symbol-label'>
            <span className='svg-icon svg-icon-lg svg-icon-success'>
              <SVG
                className='h-75 align-self-end'
                src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')}
              ></SVG>
            </span>
          </span>
        </div>

        <div className='d-flex flex-column font-weight-bold'>
          <p
            className='text-dark text-hover-primary mb-1 font-size-lg hover-etoiles'
            onClick={toggleFiltre}
          >
            Par moyenne
          </p>
          {afficherFiltreEtoiles ? <FiltreEtoilesStagiaires /> : ''}
        </div>
      </div>
      <div className='d-flex py-5'>
        <div className='symbol symbol-40 symbol-light-success mr-5'>
          <span className='symbol-label'>
            <span className='svg-icon svg-icon-lg svg-icon-success'>
              <SVG
                className='h-75 align-self-end'
                src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')}
              ></SVG>
            </span>
          </span>
        </div>

        <div className='d-flex flex-column font-weight-bold'>
          <p className='text-dark text-hover-primary mb-1 font-size-lg'>
            Aucune tâche inscrite
          </p>
        </div>
      </div>
      <div className='d-flex py-5'>
        <div className='symbol symbol-40 symbol-light-success mr-5'>
          <span className='symbol-label'>
            <span className='svg-icon svg-icon-lg svg-icon-success'>
              <SVG
                className='h-75 align-self-end'
                src={toAbsoluteUrl('/media/svg/icons/Home/Library.svg')}
              ></SVG>
            </span>
          </span>
        </div>

        <div className='d-flex flex-column font-weight-bold'>
          <p className='text-dark text-hover-primary mb-1 font-size-lg'>
            Non affecté à un stage
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .MuiSvgIcon-root {
    color: #ffbb00;
  }
  .hover-etoiles:hover {
    cursor: pointer;
  }
`;
