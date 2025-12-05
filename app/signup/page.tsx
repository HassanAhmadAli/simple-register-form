"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGlobalState } from "@/provider/globalState";
import { formSchema } from "./schema/formSchema";

export default function SignupPage() {
    const setUser = useGlobalState((state) => state.setUser);
    const user = useGlobalState((state) => state.user);
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setUser({
            name: data.fullName,
            email: data.email,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="fullName">FullName</Label>
                <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your fullName"
                    {...register("fullName")}
                />
                <p>{formState.errors.fullName?.message}</p>

                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    required
                />
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Enter your Password(8 chars+)"
                    {...register("password")}
                />
                <Label htmlFor="password_confirm">Password</Label>
                <Input
                    id="password_confirm"
                    type="password"
                    placeholder="Please repeat your password"
                    {...register("password_confirm")}
                />
                <Input className="cursor-pointer" type="submit" />
            </form>
        </div>
    );
}
