import Nav from './Nav';
import Footer from './Footer';


function PageError() {
    return (
        <>
            <Nav />
            <section style={{textAlign:"center",paddingBottom:"25%"}}>
            <h1>Error </h1>
            <h4>The page you are trying to vist doest not exist. Please try again.</h4>
            </section>
            <Footer />
        </>
    )
}

export default PageError;