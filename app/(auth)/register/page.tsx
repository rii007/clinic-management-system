"use client"

import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    email: z.email({ message: "Invalid email" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits long" }),
    logo: z.url({ message: "Invalid logo url" }).optional(),
    availableLocations: z.string().min(1, { message: "At least one location is required" }),
    website: z.string().url({ message: "Invalid website url" }),
    ownerName: z.string().min(3, { message: "Owner name must be at least 3 characters long" }),
})


const RegisterPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "+91 ",
            logo: "",
            availableLocations: "",
            website: "",
            ownerName: "",
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }
    return (
        <div className='flex items-center justify-center h-screen'>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"

                        render={({ field }) => (
                            <FormItem className='w-fit'>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"

                        render={({ field }) => (
                            <FormItem className='w-fit'>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"

                        render={({ field }) => (
                            <FormItem className='w-fit'>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="logo"

                        render={({ field }) => (
                            <FormItem className='w-fit'>
                                <FormLabel>Logo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter logo" type="file" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="availableLocations"

                        render={({ field }) => (
                            <FormItem className='w-fit'>
                                <FormLabel>Available Locations</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter available locations" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="website"

                        render={({ field }) => (
                            <FormItem className='w-fit'>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter website" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ownerName"

                        render={({ field }) => (
                            <FormItem className='w-fit'>
                                <FormLabel>Owner Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter owner name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>

            </Form>
        </div>
    )
}

export default RegisterPage