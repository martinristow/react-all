const invalidEmails = ["admin@gmail.com", "test@gmail.com"];

export const EmailValidator = ({
        required: {
            value: true,
            message: "Email is required"
        },
        minLength: {
            value: 15,
            message: "Email address must be at least 15 characters long"
        },

        validate: {
            invalidEmailCheck: value => !invalidEmails.includes(value) || "Email address is invalid"
        },

        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
        }
    }
)