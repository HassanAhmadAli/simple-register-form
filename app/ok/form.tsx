"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState } from "react";

const formSchema = z
    .object({
        firstName: z.coerce.string().min(1, "First name is required"), // Added validation message
        age: z.coerce.number().int().positive(),
    })
    .required();

export default function App() {
    const [x, setX] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
        setX((arg) => arg + 1); // State update is now here
    };

    return (
        <div>
            <div>{x}</div>
            {/* Correct usage of handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <p>{errors.firstName?.message}</p>

                <input type="number" {...register("age")} />
                <p>{errors.age?.message}</p>

                <input className="cursor-pointer" type="submit" />
            </form>
        </div>
    );
}
