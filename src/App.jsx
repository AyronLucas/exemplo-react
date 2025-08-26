import './App.css'
import Footer from './componets/Footer'
import Header from './componets/Header'
import List from './componets/List'

function App() {
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

        export default App
