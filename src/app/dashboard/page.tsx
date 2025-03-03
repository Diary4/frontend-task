'use client'
import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'

const page = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);   

  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <div className='w-full bg-white p-4 ml-64'>
        <h1 className='text-black text-2xl font-bold mb-4'>Product List</h1>
        <div className='overflow-x-auto'>
          <table className='min-w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200 text-black'>
                <th className='border border-gray-300 px-4 py-2'>ID</th>
                <th className='border border-gray-300 px-4 py-2'>Image</th>
                <th className='border border-gray-300 px-4 py-2'>Title</th>
                <th className='border border-gray-300 px-4 py-2'>Price</th>
                <th className='border border-gray-300 px-4 py-2'>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: { id: number, title: string, price: number, category: string, image: string }) => (
                <tr key={product.id} className='hover:bg-gray-100 text-black'>
                  <td className='border border-gray-300 px-4 py-2'>{product.id}</td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <img src={product.image || ''} alt={product.title} className='h-16 w-16 object-contain' />
                  </td> 
                  <td className='border border-gray-300 px-4 py-2'>{product.title}</td>
                  <td className='border border-gray-300 px-4 py-2'>${product.price}</td>
                  <td className='border border-gray-300 px-4 py-2'>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default page
