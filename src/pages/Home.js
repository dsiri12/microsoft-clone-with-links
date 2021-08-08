import Layout from '../components/layout/Layout'
import Banner from '../components/home/Banner'
import HomeCards1 from '../components/home/HomeCards1'
import Xbox from '../components/home/Xbox'
import HomeCards2 from '../components/home/HomeCards2'
import Carbon from '../components/home/Carbon'

const Home = () => {
  return (
    <Layout>
      <Banner />

      <HomeCards1 />

      <Xbox />

      <HomeCards2 />

      <Carbon />
    </Layout>
  )
}

export default Home
