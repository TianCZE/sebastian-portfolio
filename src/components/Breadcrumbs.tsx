import Link from "next/link";


export default function Breadcrumbs() {
    return (
        <nav className="bg-grey-light w-full rounded-md">
            <ol className="list-reset flex">
                <li>
                    <Link
                        href="/"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >
                        Home
                    </Link>
                </li>
            </ol>
        </nav>
    );
}