'use client';

import { useSearchParams } from 'next/navigation';

export default function QueryParamsTestPage() {
  const searchParams = useSearchParams();
  const qs = searchParams.get('qs');
  const mac = searchParams.get('mac');
  const cust_response = searchParams.get('cust_response');

  return (
    <>
      <h1>Test Query Params page</h1>
      {qs && <p>The 'qs' query parameter is: {qs}</p>}
      {mac && <p>The 'mac' query parameter is: {mac}</p>}
      {(cust_response && cust_response === 'yes') && <p>The customer response is 'SMILEY FACE'</p>}
      {(cust_response && cust_response === 'no') && <p>The customer response is 'SAD FACE'</p>}
      
    </>
  );
}
