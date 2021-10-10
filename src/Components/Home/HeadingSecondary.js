import React from 'react';
import {theme} from '../../theme';
import styled from 'styled-components';


const Container = styled.div`
      .heading{
        color: ${theme.grey};
        font-size: 3rem;
        font-weight: 400;
      }

`
function HeadingSecondary(props) {
    return (
        <Container><h2 className="heading">Houda MZARI</h2></Container>
    );
}

export default HeadingSecondary;