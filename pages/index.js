import React from 'react'
import Head from 'next/head'
import Styles from '../styles/index.module.scss'
import Navigation from '../components/navigation'
import Banner from '../components/banner'
import About from '../components/about'
import ListPricing from '../components/list-pricing'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Container from '../components/container'

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      tiers: [
        {
          name: "Basic",
          action: [
            "Mencatat barang masuk",
            "Mencatat barang keluar",
            "Mencatat hasil keuntungan"
          ],
          price: "$40"
        },
        {
          name: "Business",
          action: [
            "Mencatat barang masuk dan keluar",
            "Mencatat Keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
          ],
          price: "$140"
        },
        {
          name: "Entrepreneur",
          action: [
            "Mencatat barang masuk dan keluar",
            "Mencatat Keuntungan",
            "Dapat menganalisa hasil penjualan dengan CHART",
            "Support 7x24 Jam",
            "Export data ke Excel",
            "AI Prediksi penghasilan"
          ],
          price: "$240"
        }
      ]
    }
  }

  render() {

    const { tiers } = this.state

    return (
      <div id="home">
        <Head>
          <title>Analiser - Analyze your business</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />

        {/* Decoration for top screen */}
        <svg className={`${Styles.decor} ${Styles.topDecor}`} viewBox="0 0 511 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H511C511 0 360 270 206 270C69.3427 270 0 202 0 202V0Z" fill="#108DE8" />
          <path d="M0 0H511C511 0 360 270 206 270C69.3427 270 0 202 0 202V0Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="255.5" y1="0" x2="255.5" y2="270" gradientUnits="userSpaceOnUse">
              <stop stopColor="#01D1FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <main>
          <Container>
            <Banner />
            <About />

            {/* Decoration for middle screen */}
            <svg className={`${Styles.decor} ${Styles.middleDecor}`} viewBox="0 0 754 663" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M204.357 335.716C204.357 378.518 169.659 413.216 126.857 413.216C84.0548 413.216 49.3569 378.518 49.3569 335.716C49.3569 292.914 84.0548 258.216 126.857 258.216C169.659 258.216 204.357 292.914 204.357 335.716Z" fill="url(#paint0_linear)" />
              <path d="M606.357 102.716C606.357 145.518 571.659 180.216 528.857 180.216C486.055 180.216 451.357 145.518 451.357 102.716C451.357 59.9137 486.055 25.2158 528.857 25.2158C571.659 25.2158 606.357 59.9137 606.357 102.716Z" fill="url(#paint1_linear)" />
              <path d="M753.857 1.21581C715.857 -5.61753 661.664 14.7158 650.857 104.216C637.357 216.013 544.857 254.216 435.357 178.216C325.857 102.216 272.678 162.716 253.857 290.216C238.357 395.216 233.192 439.807 115.357 453.716C-37.1431 471.716 -8.99999 630.5 38.0001 662.5H753.857V1.21581Z" fill="url(#paint2_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="377" y1="105.5" x2="325.353" y2="768.235" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A9F0FF" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="377" y1="105.5" x2="325.353" y2="768.235" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A9F0FF" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="377" y1="105.5" x2="325.353" y2="768.235" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A9F0FF" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <ListPricing tiers={tiers} />
            <Contact />
          </Container>
        </main>

        <Footer />

      </div >
    )
  }
}

export default Home