import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resume">
                        <a>Resume</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;