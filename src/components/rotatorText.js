import React from 'react';
import styled from 'styled-components';

import { darkBlue, orange } from './globalStyles'

const Rotator = styled.div`
  background: ${darkBlue};
  padding: 50px 0;
`
const RotatorText = styled.marquee`
  color: ${orange};
  background: ${darkBlue};
  margin: 0;
  font-size: 188px;
  line-height: 1;
  text-wrap: no-wrap;
  text-transform: uppercase;
  font-family: SojuzMono-Bold;
`

export default ({ children }) => (
    <Rotator>
        <RotatorText>
            {children}
        </RotatorText>
    </Rotator>
)