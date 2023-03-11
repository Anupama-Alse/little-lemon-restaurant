import Nav from './Nav';
import Footer from './Footer';

function ConfirmedBooking(props) {
    return (
        <>
            <Nav />
            <section className="bookingConfirmed" >
                <h1 style={{color:"orange"}}>Thank you !</h1>
                <h2>Booking confirmed</h2>
                <p>Your reservation is confirmed for <b>{props.date}</b> at <b>{props.time} </b> with <b>{props.guests} </b> guests </p>
                <p>Hope you will have a great experience:)</p>
            </section>
            <Footer />
        </>
    )
}

export default ConfirmedBooking;