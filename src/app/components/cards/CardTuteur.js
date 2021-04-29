import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../_metronic/_helpers';

const avatars = [
  '001-boy',
  '002-girl',
  '003-girl-1',
  '004-boy-1',
  '005-girl-2',
  '006-girl-3',
  '007-boy-2',
  '008-boy-3',
  '009-boy-4',
  '010-girl-4',
  '011-boy-5',
  '012-girl-5',
  '013-girl-6',
  '014-girl-7',
  '015-boy-6',
  '016-boy-7',
  '017-girl-8',
  '018-girl-9',
  '019-girl-10',
  '020-girl-11',
  '021-boy-8',
  '022-girl-12',
  '023-girl-13',
  '024-boy-9',
  '025-girl-14',
  '026-boy-10',
  '027-girl-15',
  '028-girl-16',
  '029-boy-11',
  '030-girl-17',
  '031-boy-12',
  '032-boy-13',
  '033-girl-18',
  '034-boy-14',
  '035-boy-15',
  '036-girl-19',
  '037-girl-20',
  '038-boy-16',
  '039-girl-21',
  '040-boy-17',
  '041-girl-22',
  '042-girl-23',
  '043-boy-18',
  '044-boy-19',
  '045-boy-20',
  '046-girl-24',
  '047-girl-25',
  '048-boy-21',
  '049-boy-22',
  '050-girl-26',
];

export const CardTuteur = () => {
  return (
    <>
      <Wrapper className='px-4 d-inline mr-3 mb-5 bg-white d-flex rounded'>
        <div className='py-3'>
          <h5 className='font-weight-bold mb-0'>Ginnette Reanaud</h5>

          <p className='text-muted mb-0'>services solutions</p>

          <Button variant='info'>Contactez</Button>
        </div>
        <div className=''>
          <SVG
            className='h-100 pt-3 profilSvg
            '
            src={toAbsoluteUrl(
              '/media/svg/avatars/' +
                avatars[Math.floor(Math.random() * 50) + 1] +
                '.svg'
            )}
          ></SVG>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  div {
    background-color: white;
  }
`;
