import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import styled from 'styled-components';
export const FiltreEtoilesStagiaires = () => {
  return (
    <Wrapper>
      <div className='mt-5'>
        {/* 5 */}
        <div className='d-flex'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        {/* 4 */}
        <div className='d-flex'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderOutlinedIcon />
        </div>
        {/* 3 */}
        <div className='d-flex'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderOutlinedIcon />
          <StarBorderOutlinedIcon />
        </div>
        {/* 2 */}
        <div className='d-flex'>
          <StarIcon />
          <StarIcon />
          <StarBorderOutlinedIcon />
          <StarBorderOutlinedIcon />
          <StarBorderOutlinedIcon />
        </div>
        {/* 1 */}
        <div className='d-flex'>
          <StarIcon />
          <StarBorderOutlinedIcon />
          <StarBorderOutlinedIcon />
          <StarBorderOutlinedIcon />
          <StarBorderOutlinedIcon />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
