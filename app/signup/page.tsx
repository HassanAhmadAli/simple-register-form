"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useGlobalState } from "@/provider/globalState";
import { formSchema } from "./schema/formSchema";
import { ModeToggle } from "@/components/mode-toggle";
import { toast } from "sonner";

const url = "https://images.pexels.com/photos/34710867/pexels-photo-34710867.jpeg";
export default function SignupPage() {
    const setUser = useGlobalState((state) => state.setUser);

    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
    });
    function onSubmit(data: z.infer<typeof formSchema>) {
        setUser({
            name: data.fullName,
            email: data.email,
        });
        toast.dismiss();
        toast.success("Registration successful!");
    }
    return (
        <div
            className="bg-muted/70 flex min-h-screen w-full items-center justify-center p-4"
            style={{
                backgroundImage: `url('${url}')`,
                backgroundSize: "stretch",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Card className="w-full max-w-md rounded-lg bg-green-50 p-8 shadow-lg backdrop-blur-sm dark:bg-gray-900/90">
                <CardHeader>
                    <div className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <ModeToggle />
                    </div>
                    <CardDescription>Enter your information to create an account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="hassan.ali.36900@outlook.com"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="8+ characters"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password_confirm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Repeat your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Create account
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
