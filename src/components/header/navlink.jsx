'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './navlink.module.css';

export default function Navlink({ href, as, children }) {
  const path = usePathname();
  const baseClasses = `mx-1 px-2 py-2 hover:underline ${classes.navlink}`;
  
  let isActiveLink = false;
  if (path === '/' && path === href) {
    isActiveLink = true;
  } else if (href !== '/' && path.startsWith(href)) {
    isActiveLink = true;
  } 

  return (
    <>
      {isActiveLink ? (
        <Link 
          as={as && `${as}`}
          href={href} 
          className={`${baseClasses} ${classes.active}`}
          aria-current="page">
            {children}
        </Link>
      ) : (
        <Link 
          as={as && `${as}`}
          href={href} 
          className={`${baseClasses}`}>
            {children}
        </Link>
      )}
    </>
  )
}
