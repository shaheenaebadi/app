'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Footer Top Image */}
      <div className="footer-top-image w-full relative h-32">
        <Image
          src="/Assets/artwork/foot.jpg"
          alt="Decorative Image Above Footer"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Footer Container */}
      <div className="footer-container bg-[#f8f9fa] border-t border-gray-200">
        {/* Footer Content */}
        <div className="footer-content max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Footer Left */}
            <div className="footer-left text-sm text-gray-600">
              Last Updated: 2024-11-01 23:59:53
            </div>

            {/* Footer Right */}
            <div className="footer-right text-sm text-gray-600 text-center md:text-right">
              Planning and Implementation: Cabinet Division, a2i, BCC, DoICT & BASIS
            </div>
          </div>
        </div>

        {/* Footer Bottom with Logos */}
        <div className="footer-bottom max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Bangladesh Government Logo */}
            <div className="relative h-24 w-48">
              <Image
                src="/Assets/Bangladesh_Gov_Logo.png"
                alt="Bangladesh Government Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Logo 2 */}
            <div className="relative h-24 w-48">
              <Image
                src="/Assets/artwork/CF_logo_horizontal_blktype.png"
                alt="Logo 2"
                fill
                className="object-contain"
              />
            </div>

            {/* Logo 3 with Link */}
            <Link 
              href="https://github.com/CrimsonFrost77/KPW-Repo2"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-24 w-48"
            >
              <Image
                src="/Assets/artwork/Logo_alxx.png"
                alt="Logo 3"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;