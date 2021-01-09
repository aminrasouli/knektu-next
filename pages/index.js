import Head from 'next/head';
import React from 'react';
import {Button, Container} from 'reactstrap';

export default function Home() {
  return (
      <>
        <Head>
          <title>Knektu 37</title>
        </Head>
        <Container fluid>
          <h1>What is Lorem Ipsum?</h1>
          <Button>Lorem</Button>
        </Container>
      </>
  );
}
