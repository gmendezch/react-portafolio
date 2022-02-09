import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/sucre.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Estoy aquí</h3>
          <PText>Sucre, Bolivia</PText>
          <a
            className="map__card__link"
            href="https://www.google.com.bo/maps/place/Sucre/@-19.047795,-65.2620872,17z/data=!3m1!4b1!4m5!3m4!1s0x93fbcf07f002c2a1:0x92ff2a4cf9e68039!8m2!3d-19.0478001!4d-65.2598985?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            Abrir en google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
