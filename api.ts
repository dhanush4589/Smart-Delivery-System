import axios from 'axios';

// You can update this URL to point to your actual backend URL
const apiUrl = 'http://localhost:5000/api';

// Fetch all partners
export const fetchPartners = async () => {
  try {
    const response = await axios.get(`${apiUrl}/partners`);
    return response.data;
  } catch (error) {
    console.error('Error fetching partners:', error);
    throw error;
  }
};

// Fetch all orders with optional filters
export const fetchOrders = async (filters: any) => {
  try {
    const response = await axios.get(`${apiUrl}/orders`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Assign an order to a partner
export const assignOrder = async (orderId: string, partnerId: string) => {
  try {
    const response = await axios.post(`${apiUrl}/orders/assign`, { orderId, partnerId });
    return response.data;
  } catch (error) {
    console.error('Error assigning order:', error);
    throw error;
  }
};
