'use client';

import { useFormStatus } from 'react-dom';

export default function RecipeAddSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">
      {pending ? 'Submitting...' : 'Add Recipe'}
    </button>
  )
}
