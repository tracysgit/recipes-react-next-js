'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/lib/utils';

export default function Breadcrumbs({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter( path => path );

  return (
    <>
      <nav className={containerClasses} aria-label="breadcrumbs">
        <div className={listClasses}>
          <Link href={'/'} className="hover:underline">{homeElement}</Link>
          {pathNames.length > 0 && separator}
          {pathNames.map( (link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`;
            let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
            let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
            
            return (
              <React.Fragment key={index}>
                <span className={itemClasses}>
                    <Link href={href} className="hover:underline">{itemLink}</Link>
                </span>
                {pathNames.length !== index + 1 && separator}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  )
}
