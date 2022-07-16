const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// ESTE MÉTODO RETORNA CADA INDEX DO VALOR SEPARADAMENTE
// const infoOrder = (order) => {
//   const info = [];
//   for(info in order) {
//     info.push(order[info]);
//   }

//   return info;
// };

// const customerInfo = (order) => `${Object.values(order.phoneNumber)}`

// console.log(customerInfo(order));

// for (const info in order) {
//   console.log(order[info]);
// }

//EXERCICIO 1 - MINHA VERSÃO - FUNCIONA

/* const customerInfo = (order) => {

console.log(`"Olá Ana Silveira, entrega para: 
${Object.values(order)[0]}, 
Telefone: ${Object.values(order)[1]},
${Object.values(order.address)[0]},
${Object.values(order.address)[1]},
${Object.values(order.address)[2]}.
`);
}

customerInfo(order); */

//////////////////////////////////////////////////////////EXERCICIO 2 - MINHA VERSÃO - FUNCIONA

const orderModifier = (order) => {

  const newOrder = {
    name: 'Luiz Silva',
    payment: {
      total: 60
    }
  }

  Object.assign(order, newOrder)

  console.log(`Olá ${Object.values(order)[0]}
  o total do seu pedido de 
  ${Object.keys(order.order.pizza)[0]}, 
  ${Object.keys(order.order.pizza)[1]} e 
  ${Object.keys(order.order.drinks)[0]} é 
  R$ ${Object.values(order.payment)[0]}.`
  
  )

}  

orderModifier(order); 