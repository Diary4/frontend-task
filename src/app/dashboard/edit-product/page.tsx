'use client'
import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import { FaEdit } from 'react-icons/fa';

const EditProduct = () => {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productId) {
      alert('Please enter a valid product ID');
      return;
    }
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Product updated:', data);
      alert('Product updated temporarily! Check the console for details.');
      setIsPopupOpen(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-full text-black bg-white p-4'>
        <h1 className='text-black text-2xl font-bold mb-4'>Product List</h1>
        <table className='w-full border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border p-2'>ID</th>
              <th className='border p-2'>Title</th>
              <th className='border p-2'>Price</th>
              <th className='border p-2'>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className='border p-2'>1</td>
              <td className='border p-2'>Example Product</td>
              <td className='border p-2'>$99.99</td>
              <td className='border p-2'>
                <button onClick={() => setIsPopupOpen(true)} className='text-blue-500'><FaEdit /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {isPopupOpen && (
        <div className='fixed text-black top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Edit Product</h2>
            <form onSubmit={handleUpdate} className='space-y-4'>
              <input type='number' placeholder='Product ID' className='border p-2 w-full' onChange={(e) => setProductId(e.target.value)} required />
              <input type='text' name='title' placeholder='Title' className='border p-2 w-full' onChange={handleChange} />
              <input type='number' name='price' placeholder='Price' className='border p-2 w-full' onChange={handleChange} />
              <input type='text' name='description' placeholder='Description' className='border p-2 w-full' onChange={handleChange} />
              <input type='text' name='image' placeholder='Image URL' className='border p-2 w-full' onChange={handleChange} />
              <input type='text' name='category' placeholder='Category' className='border p-2 w-full' onChange={handleChange} />
              <div className='flex justify-end space-x-2'>
                <button type='button' className='bg-gray-500 hover:cursor-pointer text-white px-4 py-2 rounded' onClick={() => setIsPopupOpen(false)}>Cancel</button>
                <button type='submit' className='bg-green-500 hover:cursor-pointer text-white px-4 py-2 rounded'>Update Product</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
