import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

export function CardImageTop({
  card,
  children,
  className,
  linkRoute,
  ...rest
}) {
  return (
    <div
      {...rest}
      className={clsx(
        'deck__card h-full max-w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow hover:shadow-xl hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800',
        className,
      )}
    >
      <Link href={`${linkRoute}${card['name_slug']}`}>
        <Image
          src={`/images/${card.image ? card.image : 'image_placeholder.jpg'}`}
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
        </div>
      </Link>
    </div>
  );
}
