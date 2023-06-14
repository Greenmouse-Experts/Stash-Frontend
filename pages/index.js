import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/layouts/homepage/Layout'
import HeroBanner from '@/components/frontend/homepage/HeroBanner'
import Future from '@/components/frontend/homepage/Future'
import Features from '@/components/frontend/homepage/Features'
import Reviews from '@/components/frontend/homepage/Reviews'
import DownloadApp from '@/components/frontend/homepage/Download'

const inter = Inter({ subsets: ['latin'] })

const  HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroBanner/>
        {/* the future of banking */}
        <Future/>
        {/* features of stash */}
        <Features/>
        {/* customer reviews */}
        <Reviews/>
        {/* downloads of apps */}
        <DownloadApp/>
      </Layout>
    </>
    )
  }

const getLayout = (page) => <Layout>{page}</Layout>;

export { getLayout };
export default HomePage;
