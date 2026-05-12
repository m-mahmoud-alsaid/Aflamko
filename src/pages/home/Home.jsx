import { Outlet } from 'react-router-dom'

import HomeLayout from '../../components/layout/HomeLayout'

function Home() {

    return (
        <HomeLayout>
            <Outlet />
        </HomeLayout>
    )
}

export default Home