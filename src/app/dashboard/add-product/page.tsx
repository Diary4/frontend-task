'use client'    
import React, { useState } from 'react';
import SideBar from '../components/SideBar';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      alert('Product added temporarily! Check the console for details.');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-full text-black bg-white p-4'>
        <h1 className='text-black text-2xl font-bold mb-4'>Add Product</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input type='text' name='title' placeholder='Title' className='border p-2 w-full' onChange={handleChange} required />
          <input type='number' name='price' placeholder='Price' className='border p-2 w-full' onChange={handleChange} required />
          <input type='text' name='description' placeholder='Description' className='border p-2 w-full' onChange={handleChange} required />
          <input type='text' name='image' placeholder='Image URL' className='border p-2 w-full' onChange={handleChange} required />
          <input type='text' name='category' placeholder='Category' className='border p-2 w-full' onChange={handleChange} required />
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
