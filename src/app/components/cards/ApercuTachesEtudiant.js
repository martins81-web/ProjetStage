import React from 'react';
import SVG from 'react-inlinesvg';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import styled from 'styled-components';
import { toAbsoluteUrl } from '../../../_metronic/_helpers';

export const ApercuTachesEtudiant = (className) => {
  return (
    <>
      <Wrapper className='my-3'>
        <div className={`card card-custom ${className}`}>
          <div className='card-header border-0 py-5'>
            <div className='d-flex'>
              <div className='symbol symbol-40 symbol-light-success mr-5'>
                <span className='symbol-label'>
                  <SVG
                    className='h-75 '
                    src={toAbsoluteUrl('/media/svg/avatars/042-girl-23.svg')}
                  ></SVG>
                </span>
              </div>
              <h3 className='card-title align-items-start flex-column m-0'>
                <span className='card-label font-weight-bolder text-dark'>
                  Exploration du milieu de stage
                </span>
                <span className='text-muted mt-3 font-weight-bold font-size-sm'>
                  <SVG
                    src={toAbsoluteUrl(
                      '/media/svg/icons/Communication/Add-user.svg'
                    )}
                    className='h-50 align-self-center'
                  ></SVG>{' '}
                  4 septembre 17
                </span>
              </h3>
            </div>
            <div className='card-toolbar align-self-start m-0'>
              <a
                href='#'
                className='btn btn-light-info font-weight-bolder font-size-sm '
              >
                Voir
              </a>
            </div>
          </div>
          <div className='card-body pt-0'>
            <div className='card-text'>
              <p>
                Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez
                ce vieux whisky au juge blond qui fume sur son île intérieure, à
                côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre,
                ce qui lui permet de penser à la cænogenèse de l"être dont il
                est question dans la cause ambiguë entendue à Moÿ, dans un
                capharnaüm qui, pense-t-il, diminue çà et là la qualité de son
                œuvre.{' '}
              </p>
            </div>
            <div className='card-text d-flex justify-content-between'>
              <div>
                <CommentIcon color='primary' /> commentaires
              </div>
              <div>
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
                <StarBorderOutlinedIcon />
                <StarBorderOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .MuiSvgIcon-colorPrimary {
    color: red !important;
  }
  .MuiSvgIcon-root {
    color: #ffbb00;
  }
`;
