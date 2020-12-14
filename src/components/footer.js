import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Footer = () => {
    return (
        <footer className="footer">
        <section className="section">
          <div className="container has-text-centered">
            <div className="buttons is-centered">
              <a className="button" href="https://www.linkedin.com/in/hendrang/" target="blank"><img src="assets/icons/linkedin-in.svg" alt="linkedin"></img></a>
              <a className="button" href="https://github.com/hendrang" target="blank"><img src="assets/icons/github.svg" alt="github"></img></a>
              <a className="button" href="https://twitter.com/hendrangdev" target="blank"><img src="assets/icons/twitter.svg" alt="twitter"></img></a>
            </div>
            <p className="subtitle is-6">&#169;<em>Hendra Ng. All right reserved.</em></p>
          </div>
        </section>
      </footer>
    )
};

export default Footer;

/*

<footer class="footer">
        <div class="container has-text-centered">
          <div class="block"><a class="title is-4" href="#">Pied Piper</a></div>
          <div class="buttons is-centered">
              <a class="button" href="#"><img src="placeholder/icons/twitter.svg" alt=""></a>
              <a class="button" href="#"><img src="placeholder/icons/facebook-f.svg" alt=""></a>
              <a class="button" href="#"><img src="placeholder/icons/instagram.svg" alt=""></a>
              <a class="button" href="#"><img src="placeholder/icons/linkedin-in.svg" alt=""></a>
              </div>
          <p class="subtitle is-6">© 2020 Pied Piper. All right reserved.</p>
        </div>
      </footer>      
*/