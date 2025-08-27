import './style.css'
import Header from '../../componets/Header'
import Footer from '../../componets/Footer'


function Home() {
    return (
        <>
         <Header />
        <main> 
            <List titulo="Lista Um" />
            <List titulo="Lista Dois" />
            <Images/>
            <Form/>
        </main>
        <Footer/>
        </>

    )
}

export default Home