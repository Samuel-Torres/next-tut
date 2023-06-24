"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css";
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';

const links = [
    {
        id: 0, 
        title: "Home",
        url: "/"
    },
    {
        id: 1, 
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 2, 
        title: "Blogs",
        url: "/blogs"
    },
    {
        id: 3, 
        title: "About",
        url: "/about"
    },
    {
        id: 4, 
        title: "Contact",
        url: "/contact"
    },
    {
        id: 5, 
        title: "Dashboard",
        url: "/dashboard"
    }
]

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>lamamia</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map(link => (
                    <Link 
                        key={link.id} 
                        href={link.url} 
                        className={styles.link}
                    >
                        {link.title}
                    </Link>
                ))}
                <button 
                    onClick={() => console.log("logged out")}
                    className={styles.logout}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default NavBar