import React from 'react';
import ActiveLink from 'components/active-link'
import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = () => {
    const [isActive, setisActive] = React.useState(false);
    const router = useRouter();

    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }

    function getNavClassName(path) {
        if (router.pathname == path) {
            return "navbar-item is-active";
        }

        return "navbar-item";
    }

    return (
        <section className="section">
            <div className="container">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link href='/'>
                                <a className="navbar-item">
                                    <img src='/assets/logos/hendra_h.svg' alt='Hendra Ng' width='130' height='800' />
                                </a>
                            </Link>
                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={toggleBurgerMenu}>
                                <span aria-hidden='true'></span>
                                <span aria-hidden='true'></span>
                                <span aria-hidden='true'></span>
                            </a>
                        </div>
                    </div>
                    <div id="navbarBasic" className="navbar-menu is-vcentered">
                        <div className="navbar-start mt-6 mr-5">
                            <ActiveLink href="/resume" activeClassName="is-active"><a onClick={toggleBurgerMenu} className="navbar-item">Resume</a></ActiveLink>
                            <ActiveLink href="/blog" activeClassName="is-active"><a onClick={toggleBurgerMenu} className="navbar-item">Blog</a></ActiveLink>
                            {/* <Link href="/resume"><a onClick={toggleBurgerMenu} className={"navbar-item ${router.pathname == '/resume' ? 'is-active' : ''}"}>Resume</a></Link>
                            <Link href="/blog"><a onClick={toggleBurgerMenu} className={getNavClassName("/blog")}>Blog</a></Link> */}
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                {/* <input className="input" type="text" placeholder="Search" /> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
};

export default Navbar;

/*
section className="section">
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
*/