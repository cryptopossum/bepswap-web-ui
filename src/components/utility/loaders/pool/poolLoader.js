import React from 'react';
import ContentLoader from 'react-content-loader';
import { palette } from 'styled-theme';

const PoolLoader = () => (
  <ContentLoader
    height={400}
    width={1000}
    speed={1}
    backgroundColor={palette('background', 1)}
    foregroundColor={palette('background', 2)}
  >
    <rect x="0" y="20" rx="4" ry="4" width="80%" height="65" />
    <rect x="0" y="85" rx="4" ry="4" width="80%" height="65" />
    <rect x="0" y="150" rx="4" ry="4" width="80%" height="65" />
    <circle cx="15" cy="255" r="15" />
    <rect x="40" y="245" rx="2" ry="2" width="120" height="20" />
  </ContentLoader>
);

export default PoolLoader;
