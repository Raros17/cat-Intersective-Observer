import React from 'react';
import styled, { keyframes } from 'styled-components';

interface CatInterface {
  id: string;
  url: string;
}

interface CardProps {
  data: CatInterface;
  isLoading: boolean;
}

const loadingAnimation = keyframes`
  from {
    background-position: -200px 0;
  }
  to {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(90deg, #9c9c9c 25%, #7f7f7f 50%, #5a5a5a 75%);
  background-size: 200px 100%;
  animation: ${loadingAnimation} 1.5s infinite linear;
`;

function Cards({ data, isLoading }: CardProps) {
  return (
    <>
      <section>
        <CardContainer>
          {isLoading ? (
            <>
              <SkeletonContainer />
              <SkeletonContainer style={{ height: '30px', marginTop: '10px' }} />
            </>
          ) : (
            <>
              <ImgContainer>
                <img src={data.url} alt={data.id} />
              </ImgContainer>
              <h3>{data.id}</h3>
            </>
          )}
        </CardContainer>
      </section>
    </>
  );
}

export default Cards;

const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  justify-content: bet;
`;

const CardContainer = styled.div`
  background-color: #fff;
  height: 350px;
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  h3 {
    font-size: 30px;
    text-align: center;
    margin-top: 10px;
  }
`;