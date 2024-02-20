import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    background-position: -200px 0;
  }
  to {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${loadingAnimation} 1.5s infinite linear;
`;

const SkeletonImage = styled(SkeletonContainer)`
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
`;

const SkeletonTitle = styled(SkeletonContainer)`
  height: 30px;
  width: 70%;
  margin: 10px auto;
`;

const SkeletonCard = styled.div`
  background-color: #fff;
  height: 350px;
  width: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
`;

const Skeleton = () => {
  return (
    <SkeletonCard>
      <SkeletonImage />
      <SkeletonTitle />
    </SkeletonCard>
  );
};

export default Skeleton;
