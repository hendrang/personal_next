import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = () => {
    const [isActive, setisActive] = React.useState(false);
    const router = useRouter();

    return (
        <section className="section">
            <div className="container">
                <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
                    <div className='navbar-brand'>
                        <a className='navbar-item'>
                            <Link href='/' className='navbar-item'>
                                <img src='/hendrang_logo_transparent.svg' alt='Hendra Ng' width='130' height='800' />
                            </Link>
                        </a>

                        <a onClick={() => { setisActive(!isActive) }}
                            role='button'
                            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                            aria-label='menu'
                            aria-expanded='false'
                            data-target='navbarBasic'>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </a>
                    </div>
                    <div id='navbarBasic' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                        <div className='navbar-start'>
                            <div className='navbar-item'>
                                <a className={`navbar-item ${router.pathname == '/resume' ? 'is-active' : ''}`}>
                                    <Link href='/resume'>Resume</Link>
                                </a>
                            </div>
                            <div className='navbar-item'>
                                <a className={`navbar-item ${router.pathname == '/blog' ? 'is-active' : ''}`}>
                                    <Link href='/blog'>Blog</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

    )
};

export default Navbar;