export default function H1Headline({ id, extraClasses, children }) {
  return (
    <h1 id={id} className={`mb-2 md:mb-6 lg:mb-8 text-3xl leading-none text-gray-900 dark:text-white lg:text-4xl ${extraClasses}`}>{children}</h1>
  )
}
