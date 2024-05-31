import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

const Footer: NextPage = () => {
  return (
    <footer className="footer  text-white p-10 px-14  bg-[#2b2b58] rounded-lg my-3">
      
        <div>
          <Image className="max-w-[200px]" src='https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg' width={100} height={100} alt="" unoptimized/>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
  );
};

export default Footer;