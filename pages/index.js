import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout/Layout'
import HomeCard from '../components/index/HomeCard'
import BecomingCard from '../components/index/BecomingCard'

export default function Home () {
  return (
    <>
      <Head>
        <title>Knektu 37</title>
      </Head>
      <Layout>

        <div
          className="pt-3 pb-2 mb-3">
          <p>Welcome Ms Beck</p>
          <h1 className="h2">Home</h1>
        </div>

        <HomeCard/>


        <div
          className="pt-3 pb-2 mb-3">
          <h1 className="h2">Becoming a tutor with us.</h1>
          <p>To become a tutor we need to confirm all your documents before you
            can teach children. Please see below your document review.</p>
        </div>

        <BecomingCard/>

        <div
          className="pt-3 pb-2 mb-3">
          <h1 className="h2">Requests</h1>
          <p>To see more information, tap on the requests below to review and
            accept or reject them.</p>
          <div className="text-center no-request-text-box">
            <span className="text-muted">
            You have no requests at the moment.<br/> Make sure you are Online as well. Being online will allow the students to find you!
          </span>
          </div>
        </div>

      </Layout>
    </>
  )
}
