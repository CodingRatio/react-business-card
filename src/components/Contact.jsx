export default function Contact(){
    return(
        <div className="contact--container">
            <section className="contact--list--container">
                <div className="link--container">
                    <a href="#" className="list--icon"> <img src="/images/appointment.png"/></a>
                    <a href="#" className="list--text"><span>Book an appointment online!</span></a>
                </div>
                <div className="link--container">
                    <a href="#" className="list--icon"><img src="/images/telephone-call.png"/></a>
                    <a href="#" className="list--text"><span>(832) 219 - 1438</span></a>
                </div>
                <div className="link--container">
                    <a href="#" className="list--icon"><img src="/images/mail.png"/></a>
                    <a href="#" className="list--text"><span>realemail@email.dev</span></a>
                </div>
            </section>
        </div>
    )
}