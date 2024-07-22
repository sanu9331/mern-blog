import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;

    return (
        <Navbar className="border-b-2 bg-gray-100">
            <Link
                to="/"
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                    Sanus's
                </span>
                Blog
            </Link>
            <div className="flex-grow flex justify-end items-center">
                <form className="hidden lg:flex">
                    <TextInput
                        type="text"
                        placeholder="Search..."
                        rightIcon={AiOutlineSearch}
                        className="w-30"
                    />
                </form>
                <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                    <AiOutlineSearch />
                </Button>
            </div>
            <div className="flex gap-8 md:order-2 items-center">
                <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                    <FaMoon />
                </Button>
                <Link to="/sign-in">
                    <Button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="p-2 lg:flex lg:items-center lg:justify-end">
                <Navbar.Link
                    as={Link}
                    to="/"
                    className={path === "/" ? 'text-purple-500' : ''}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    to="/about"
                    className={path === "/about" ? 'text-purple-500' : ''}
                >
                    About
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    to="/projects"
                    className={path === "/projects" ? 'text-purple-500' : ''}
                >
                    Projects
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
