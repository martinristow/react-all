import {ChangeEvent, FormEvent, useState} from "react";

interface ContactFormStateInterface {
    name: string;
    email: string;
}

const ContactForm = () => {

    const [formData, setFormData] = useState<ContactFormStateInterface>({
        name: '',
        email: '',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
            </div>

            <div>
                <label>Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}
export default ContactForm
