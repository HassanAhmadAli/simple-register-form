import z from "zod";
import _ from "lodash";
const PasswordSchema = z
    .string("Password must be longer than 8 characters")
    .trim()
    .min(8, "Password must be longer than 8 characters");
export const formSchema = z
    .object({
        fullName: z.string("First name is required").trim().min(3, "First name is required"),
        email: z.email("Email is required"),
        password: PasswordSchema,
        password_confirm: PasswordSchema,
    })
    .required()
    .refine((data) => data.password === data.password_confirm, {
        message: "Passwords do not match",
        path: ["password_confirm"],
    });
