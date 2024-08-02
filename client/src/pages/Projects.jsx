import React from 'react';
import { TextInput, Textarea, Label, Button } from 'flowbite-react';

export default function Projects() {
    return (
        <div>
            {/* <h1> hi ,Projects</h1>
            <h3> you can add user projects here</h3> */}
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-6">
                <div className="max-w-lg w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">
                        Contact Us
                    </h2>
                    <form>
                        <div className="mb-4">
                            <Label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
                                Name
                            </Label>
                            <TextInput
                                id="name"
                                type="text"
                                placeholder="Your name"
                                required
                                className="mt-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
                                Email
                            </Label>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Your email"
                                required
                                className="mt-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Your message"
                                required
                                rows={6}
                                className="mt-2 w-full"
                            />
                        </div>
                        <div className="text-center">
                            <Button type="submit" className="hover:bg-gradient-to-r from-blue-500 to-teal-500">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
