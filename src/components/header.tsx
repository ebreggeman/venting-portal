import Image from "next/image";
import Link from "next/link";

const navLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/posts",
        label: "Posts",
    },
]

export default function Header() {
    return <header>
        <Image
            src="../public/VPLogo.png"
            alt="Logo"
            width="50"
            height="50"
        />

        <nav>
            <ul>
                {
                    navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link></li>
                    ))
                }
            </ul>
        </nav>
    </header>

}