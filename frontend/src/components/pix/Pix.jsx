import { useState } from 'react';
import Head from 'next/head';

import { useFormik } from 'formik';
import axios from 'axios';

// import Header from '../components/Header';
// import { useCart } from '../contexts/CartContext';

import { formatPrice } from '../util/format';

export default function Pix() {
  const [orderStatus, setOrderStatus] = useState('pre-order');
  const [qrcode, setQrcode] = useState(null);
  const { cart, removeFromCart, updateProductQuantity } = useCart();

  const form = useFormik({
    initialValues: {
      cpf: '',
      name: '',
      phone: ''
    },
    onSubmit: async (values) => {
      const items = Object.keys(cart).map((item) => {
        const formattedItem = {
          quantity: cart[item].quantity,
          price: cart[item].data.price,
          name: cart[item].data.name,
        };

        return formattedItem;
      });
      const order = { ...values, items: [...items] };

      setOrderStatus('ordering');

      const { data } = await axios.post('http://localhost:3001/create-order', order);

      setQrcode(data.qrcode);
      setOrderStatus('order-received');
    }
  });

}
