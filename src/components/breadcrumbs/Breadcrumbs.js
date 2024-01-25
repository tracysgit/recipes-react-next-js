'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/lib/utils';

export default function Breadcrumbs({ homeElement, separatorSymbol, navClasses, listWrapperClasses, listItemClasses, linkClasses, activeClasses, capitalizeLinks }) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter( path => path );
  let separator = `<span aria-hidden="true">&nbsp;${separatorSymbol}&nbsp;</span>`;

  return (
    <>
      <nav aria-label="breadcrumbs" className={`breadcrumbs ${navClasses}`}>
        <ol className={`list-breadcrumbs ${listWrapperClasses}`}>
          <li className={`breadcrumb ${listItemClasses}`}>
            <Link href={'/'} className={`${linkClasses}`}>
              {homeElement}
            </Link>
            {pathNames.length > 0 && 
              <span aria-hidden="true">&nbsp;{separatorSymbol}&nbsp;</span>
            }
          </li>
          {pathNames.map( (link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`;
            let itemClasses = paths === href ? `${linkClasses} ${activeClasses}` : linkClasses;
            let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
            return (
              <li key={index} className={`breadcrumb ${listItemClasses}`}>
                <Link href={href} className={`${itemClasses}`}>
                  {itemLink}
                </Link>
                {pathNames.length !== index + 1 && 
                  <span aria-hidden="true">&nbsp;{separatorSymbol}&nbsp;</span>
                }
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  )
}
