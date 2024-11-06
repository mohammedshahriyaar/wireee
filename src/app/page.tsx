// app/ctf/page.tsx
'use client';

import { useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState<string>('');

  const handleTrafficBoom = async () => {
    setMessage('Sending packets...');

    // Trigger multiple requests in bursts
    for (let i = 0; i < 1000; i++) {
      fetch(`/api/traffic-boom`)
        .then((res) => res.json())
        .catch((error) => console.error(error));
      
      // Small delay to mimic natural traffic, adjust as needed
      await new Promise((resolve) => setTimeout(resolve, 10));
    }

    setMessage('Traffic BOOM completed! Check your network monitor for the flag.');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>CTF Challenge</h1>
      <button onClick={handleTrafficBoom}>Traffic BOOM</button>
      {message && <p>{message}</p>}
    </div>
  );
}
