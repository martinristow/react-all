import {SubmitHandler, useForm} from "react-hook-form";


interface FormData {
    name: string;
    email: string;
    password: string;
}

const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" {...register("name", {required: "Name is required"})}
                           placeholder="Enter a name"/>
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" {...register("email", {required: "Email is required"})}
                           placeholder="Enter a email"/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "The password must be at least 8 characters"
                        },
                        maxLength: {
                            value: 25,
                            message: "The password cannot be longer than 25 characters."
                        }
                    })}
                           placeholder="Enter a password"/>
                    {errors.password && <p>{errors.password.message}</p>}
                </div>


                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form
