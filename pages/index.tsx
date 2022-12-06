import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'
import Player from '../components/Player'

const Home: NextPage = () => {
    const videoJsOptions = {
        techOrder: ['youtube'],
        autoplay: false,
        controls: true,
        sources: [
          {
            src: 'https://www.youtube.com/watch?v=IxQB14xVas0',
            type: 'video/youtube',
          },
        ],
      }
  return (
    <div className="relative h-screen bd-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
        <Head>
            <title>Kino-Nauka</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
    <main>
        <Banner/>
        <section>
            <Player {...videoJsOptions} />
        
        </section>

    </main>
    {/*Modal */}
    </div>
  )
}

export default Home

