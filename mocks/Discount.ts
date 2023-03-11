import axios from 'axios'

export const calculateDiscount = async (productName:string, qty:number, price:number) => {

  const response = await axios.get(`/discount?quantity=${qty}&productName=${productName}`)
  
  const discount = response.data.discount
  const netPrice = price - (price * discount / 100)

  return { 
    productName: productName, 
    qty: qty, 
    price: price, 
    discount: discount, 
    netPrice: netPrice 
  }
}