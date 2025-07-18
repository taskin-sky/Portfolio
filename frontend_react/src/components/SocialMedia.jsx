import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/taskin.mubassir"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      <div>
        <FaFacebookF />
      </div>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/taskin-sky"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <div>
        <FaGithub />
      </div>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/taskin-mohammad-mubassir/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/your_instagram_username"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <div>
        <BsInstagram />
      </div>
    </a>

    {/* Twitter (X) */}
    <a
      href="https://x.com/Taskin_Mubassir"
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
    >
      <div>
        <BsTwitter />
      </div>
    </a>
  </div>
);

export default SocialMedia;
