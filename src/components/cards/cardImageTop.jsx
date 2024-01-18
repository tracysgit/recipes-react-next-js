import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { slugifyString } from '@/lib/utils';

// import testImage from './../../../public/images/appetizers_pesto.webp';

export function CardImageTop({
  card,
  children,
  className,
  ...rest
}) {
  return (
    <li
      {...rest}
      className={clsx(
        'deck__card h-auto max-w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow hover:shadow-xl hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800',
        className,
      )}
    >
      <Link href={`/recipes/${slugifyString(card.name)}`}>
        <Image
          src={`/images/${card.image ? card.image : 'image_placeholder'}.webp`}
          width={400}
          height={150}
          className="card__image w-full"
          alt={card.image ? 'Image of ' + card.name : ''}
          style={{
            objectFit: 'cover',
            // width: '100%',
            height: '150px',
          }}
        />
        <div className="card__body flex flex-col justify-between px-4 py-4">
          <h3 className="card__title mb-0 text-xl text-gray-900 dark:text-white">
            {card.name}
          </h3>
          {/* <p className="card__copy mb-3 font-normal text-gray-700 dark:text-gray-400"></p> */}
          <div className="card__tags pb-1 pt-3">
            {card.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="mb-1 mr-2 mt-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #{tag}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </li>
  );
}
