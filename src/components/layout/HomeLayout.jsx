import Header from '../ui/Header'
import SideBar from '../ui/SideBar'

function HomeLayout({ children }) {

    return (
        <div className='min-h-screen max-h-screen flex flex-col'>

            <Header />

            <div className='grid grid-cols-[68px_1fr] flex-1'>
                <aside className='bg-card rounded-tr-xl'>
                    <SideBar />
                </aside>

                <section className=''>
                    {children}
                </section>
            </div>
        </div>
    )
}

export default HomeLayout