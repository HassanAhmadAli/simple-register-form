import z from "zod";
import _ from "lodash";
const PasswordSchema = z.string().min(8, "Password must be longer than 8 characters");
export const formSchema = z
    .object({
        fullName: z.coerce.string().min(3, "First name is required"),
        email: z.email("Email is required"),
        password: PasswordSchema,
        password_confirm: PasswordSchema,
    })
    .required()
    .transform((val) => {
        if (val.password !== val.password_confirm) throw new Error("passwords does not match");
        return _.omit(val, ["password_confirm"]);
    });
