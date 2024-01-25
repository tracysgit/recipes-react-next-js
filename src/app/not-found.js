import H1Headline from "@/components/headlines/h1Headline";

export default function NotFound() {
  return (
    <main className="not-found text-center">
      <H1Headline extraClasses="mt-12">Not found!</H1Headline>
      <p>We could not find the requested page or resource.</p>
    </main>
  )
}
