const invalidPasswords = ["admin", "test123", "admin123", "123456789", "123456"];

export const PasswordValidator = {
    required: true,
    validate: {
        trimCheck: value => value.trim() !== '' || "Password cannot be empty or spaces only",
        invalidPasswordCheck: value => !invalidPasswords.includes(value) || "Password is invalid",
        capitalLetterCheck: value => /[A-Z]/.test(value) || "Password must include at least 1 capital letter",
        signLetterCheck: value => /[!@#$%]/.test(value) || "Your password must contain at least 1 sign(!@#$%)",
    },
    minLength: {
        value: 5,
        message: "Password must be at least 5 characters long!"
    },
    maxLength: {
        value: 15,
        message: "Password cannot be longer than 15 characters!"
    }
}


