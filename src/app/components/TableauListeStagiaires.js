/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

import { toAbsoluteUrl } from '../../_metronic/_helpers';

export function TableauListeStagiaires({ className }) {
  return (
    <Wrapper className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 py-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label font-weight-bolder text-dark'>
            Stagiaires
          </span>
          <span className='text-muted mt-3 font-weight-bold font-size-sm'>
            36 stagiaires
          </span>
        </h3>
        <div className='card-toolbar'>
          <a
            href='#'
            className='btn btn-success font-weight-bolder font-size-sm'
          >
            <span className='svg-icon svg-icon-md svg-icon-white'>
              <SVG
                src={toAbsoluteUrl(
                  '/media/svg/icons/Communication/Add-user.svg'
                )}
                className='h-50 align-self-center'
              ></SVG>
            </span>
            Nouveau
          </a>
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body py-0'>
        {/* begin::Table */}
        <div className='table-responsive'>
          <table
            className='table table-head-custom table-vertical-center'
            id='kt_advance_table_widget_1'
          >
            <thead>
              <tr className='text-left'>
                <th className='pl-0' style={{ width: '20px' }}>
                  <label className='checkbox checkbox-lg checkbox-single'>
                    <input type='checkbox' value='1' />
                    <span></span>
                  </label>
                </th>
                <th colSpan="2">Stagiaires</th>
                <th>Hôte</th>
                <th>Évaluations</th>
                <th className='text-right'>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pl-0'>
                  <label className='checkbox checkbox-lg checkbox-single'>
                    <input type='checkbox' value='1' />
                    <span></span>
                  </label>
                </td>
                <td className='pr-0'>
                  <div className='symbol symbol-50 symbol-light mt-1'>
                    <span className='symbol-label'>
                      <SVG
                        src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                        className='h-75 align-self-end'
                      ></SVG>
                    </span>
                  </div>
                </td>
                <td className='pl-0'>
                  <a
                    href='#'
                    className='text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg'
                  >
                    Brad Simmons
                  </a>
                  <span className='text-muted font-weight-bold text-muted d-block'>
                    HTML, JS, ReactJS
                  </span>
                </td>
                <td>
                  <span className='text-dark-75 font-weight-bolder d-block font-size-lg'>
                    Intertico
                  </span>
                  <span className='text-muted font-weight-bold'>
                    Web, UI/UX Design
                  </span>
                </td>
                <td>
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <StarBorderOutlinedIcon />
                  <StarBorderOutlinedIcon />
                </td>
                <td className='pr-0 text-right'>
                  <a
                    href='#'
                    className='btn btn-icon btn-light btn-hover-primary btn-sm mx-3'
                  >
                    <span className='svg-icon svg-icon-md svg-icon-primary'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/Communication/Write.svg'
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-light btn-hover-primary btn-sm'
                  >
                    <span className='svg-icon svg-icon-md svg-icon-primary'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/General/Trash.svg'
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>

              <tr>
                <td className='pl-0'>
                  <label className='checkbox checkbox-lg checkbox-single'>
                    <input type='checkbox' value='1' />
                    <span></span>
                  </label>
                </td>
                <td className='pr-0'>
                  <div className='symbol symbol-50 symbol-light  mt-1'>
                    <span className='symbol-label'>
                      <SVG
                        src={toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg')}
                        className='h-75 align-self-end'
                      ></SVG>
                    </span>
                  </div>
                </td>
                <td className='pl-0'>
                  <a
                    href='#'
                    className='text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg'
                  >
                    Natali Trump
                  </a>
                  <span className='text-muted font-weight-bold text-muted d-block'>
                    Python, PostgreSQL, ReactJS
                  </span>
                </td>
                <td>
                  <span className='text-dark-75 font-weight-bolder d-block font-size-lg'>
                    The Hill
                  </span>
                  <span className='text-muted font-weight-bold'>Insurance</span>
                </td>
                <td>
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <StarBorderOutlinedIcon />
                  <StarBorderOutlinedIcon />
                </td>
                <td className='pr-0 text-right'>
                  <a
                    href='#'
                    className='btn btn-icon btn-light btn-hover-primary btn-sm mx-3'
                  >
                    <span className='svg-icon svg-icon-md svg-icon-primary'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/Communication/Write.svg'
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-light btn-hover-primary btn-sm'
                  >
                    <span className='svg-icon svg-icon-md svg-icon-primary'>
                      <SVG
                        src={toAbsoluteUrl(
                          '/media/svg/icons/General/Trash.svg'
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Body */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .MuiSvgIcon-root {
    color: #ffbb00;
  }
`;
