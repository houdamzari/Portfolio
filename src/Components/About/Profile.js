import React from 'react';
import styled from 'styled-components';
import {theme} from "../../theme";

import picture from "../../media/Avatar.png";



const Container = styled.div`
  position: relative;
  z-index: 1;
  

  right: 10%;
  .circle{
          position: relative;
          width: 32rem;
          height: 32rem;
    //animation: rotate1 3s linear infinite;
    background: rgb(205,219,254);
    background: linear-gradient(90deg, rgba(205,219,254,1) 2%, rgba(254,205,205,1) 66%);    top: 7.5rem;
   border-radius: 50%;
    z-index: 99999;
         
    
          &:after{
            content: '';
            background-color: ${theme.black};
            opacity: .7;

            width: 25rem;
            height: 25rem;
            position: absolute;
            border-radius: 50%;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%);
            
          }
        }
  .picture{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99999;
    //animation: rotate1 3s linear infinite;

    top: 7rem;
    object-fit: cover;

`
function Profile() {
    return (
        <Container>
            <div className='circle'></div>
            <img src={picture} alt="" className="picture"/>
        </Container>
    );
}

export default Profile;