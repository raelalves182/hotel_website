import React from 'react';
import { Box, Content, Title } from './index.js';
import { CardOne } from '../../components/Card';

export default function Home() {
  return (
    <div>
      <Content>
        <section>
          <Title>Latest on the Property Listing</Title>
          <div>
            {Array.from({ length: 4 })?.map((_, index) => (
              <CardOne key={index} />
            ))}
          </div>
        </section>

        <section>
          <Title>Nearby Listed Properties</Title>
          <div>
            {Array.from({ length: 4 })?.map((_, index) => (
              <CardOne key={index} />
            ))}
          </div>
        </section>

        <section>
          <Title>Top Rated Properties</Title>
          <div>
            {Array.from({ length: 4 })?.map((_, index) => (
              <CardOne key={index} />
            ))}
          </div>
        </section>

        <Box>
          <div>
            <h1>Try Hosting With Us</h1>
            <span>Earn extra just by renting your property...</span>
            <div>
              <button>Become A Host</button>
            </div>
          </div>
        </Box>

        {/* <section>
          <Title maxWidth={412}>Featured Properties on our Listing</Title>
          <div>
            {Array.from({ length: 4 })?.map((_, index) => (
              <CardTwo key={index} />
            ))}
          </div>
        </section> */}
      </Content>
    </div>
  )
}
