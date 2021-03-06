import React from 'react';
import styled from '@emotion/styled';
import Indexes from './../../util/ZIndex';
import Theme from './../../util/Theme';

export default function Sidebar() {

  return (
    <SidebarContainer>
      <Section>
        <SectionTitle>Section One</SectionTitle>

        <PageTitle>
          Page One
        </PageTitle>

      </Section>


    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;

  background: rgba(45, 106, 134, 0.15);
  top: 0;
  left: 0;

  z-index: ${Indexes.sidebar};
`;


const Section = styled.div`
  width: 100%;
`;


const SectionTitle = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
  font-size: 16px;
  background-color: white;
  height: 35px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 10px;
  transition: background-color 150ms ease-in-out;

    :hover {
      background-color: rgb(45, 114, 210, 0.3);
    }
`;

const PageTitle = styled(SectionTitle)`
  font-size: 14px;
  padding: 0 0 0 14px;
  height: 30px;
  font-weight: 200;
`;
