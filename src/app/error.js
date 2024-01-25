'use client';

import H1Headline from "@/components/headlines/h1Headline";

export default function Error({ error }) {
  return (
    <main className="error text-center">
      <H1Headline extraClasses="mt-12">An error has occurred!</H1Headline>
      <p>Failed to fetch data. Please try again later.</p>
    </main>
  )
}