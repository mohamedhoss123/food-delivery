import { api } from '@/lib/api';
import { createFileRoute, redirect } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/resturant/item/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    });
  const handleFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   const data = await  api('/api/resturant/item', {
      method: 'POST',
      body: formData,onResponseError: (error) => {
          if(error.response.status ==403){
              console.log("unauthorized")
              redirect({to:'/auth/resturant/login',throw: true,})
          }    
      }
    })
    console.log(data)
    
  };

  return (
    <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={formData.price} />
      </label>
      <br />
      <button type="submit">Create item</button>
    </form>
  );
}
