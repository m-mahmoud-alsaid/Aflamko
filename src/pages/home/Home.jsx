import { Outlet } from 'react-router-dom'

import HomeLayout from '../../components/layout/HomeLayout'
import Footer from '../../components/ui/Footer'

function Home() {

    return (
        <HomeLayout footer={<Footer />}>
            <Outlet />
        </HomeLayout>
    )
}

export default Home