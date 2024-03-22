import NavBar from "../components/navbar";
import Cards from "../components/Cards";


const HomePage = () => {


    return (
        <>
        <header>
            <NavBar/>
        </header>
       <main className="bg-gradient-to-br from-pink-50 to-cyan-50">
            <Cards/>
       </main>
       <footer>

       </footer>
       </>
    )
}


export default HomePage;