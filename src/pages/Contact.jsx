import Detail from "../components/detail";
import { Gmail } from "../components/svg"

const Contact = props => {
    const mailAddress = "yasinburakkalkan@gmail.com";

    return (
        <Detail {...props}>
            <p>You can send mail for questions and problems. I am waiting every time your feedback. Please help me for better development my project. You can fast reach me in email.</p>
            <a href={`mailto:${mailAddress}`} className="d-flex align-items-center mt-3"><Gmail className="mr-3" /> yasinburakkalkan@gmail.com</a>
        </Detail>
    )
}

export default Contact;