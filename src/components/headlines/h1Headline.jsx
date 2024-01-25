export default function H1Headline({ id, extraclasses, children }) {
  return (
    <h1 id={id} className={`text-3xl leading-none text-gray-900 dark:text-white lg:text-4xl ${extraclasses}`}>{children}</h1>
  )
}
