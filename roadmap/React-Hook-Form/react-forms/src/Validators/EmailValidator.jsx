export const EmailValidator = ({
        required: {
            value: true,
            message: "Email is required"
        },
        minLength: {
            value: 15,
            message: "Email address must be at least 15 characters long"
        },

        validateEmail: value => {
            const invalidEmails = ["admin@gmail.com", "test@gmail.com"];
            if (invalidEmails.includes(value)) {
                return "Email address is invalid";
            }

            return true;
        },

        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
        }
    }
)