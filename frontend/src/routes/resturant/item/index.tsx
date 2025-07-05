import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react';
import { api } from '@/lib/api'
export const Route = createFileRoute('/resturant/item/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [data, setData] = useState<{ name: string; price: number }[]>([]);

  const fetchData = async () => {
    const response = await api('/api/resturant/item/');
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {data.map(item => (
          <li key={item.name}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
