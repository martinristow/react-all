export const EmailValidator = ({
        required: true,
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
        }
    }
)