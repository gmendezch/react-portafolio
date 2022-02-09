import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="Te ofrezco los siguientes"
          heading="Servicios"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="Realizo diseños ui/ux para sitios web que llamen la atención del usuario."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="Desarrollo Sitios Web escalables con alta performance, garantizando la seguridad y fluidez."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="Desarrollo Aplicaciones móviles con diseños agradables y tecnologia actualizada."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
