import { uuid } from 'uuidv4'; 

let uuid1 = uuid();

let products = [
  {
    id: uuid1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99
  },
  {
    id: uuid(),
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 0,
    price: 649.99
  },
  {
    id: uuid(),
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99
  },
  {
    id: uuid(),
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 12,
    price: 13.74
  }
];

const client = {
  get: url => {
    return new Promise((resolve, reject) => {
      if (url === "/api/products") {
        resolve([...products]);
      } else if (url.match(/\/api\/products\/.+/)) {
        let id = url.split("/")[3];
        let product = products.find(p => p.id === id);
        resolve(product);
      } else {
        reject("Invalid URL!");
      }
    });
  },
<<<<<<< HEAD

=======
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      if (!data.title || !data.quantity || !data.price) {
        reject("Please provide all fields");
      }
<<<<<<< HEAD

=======
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
      if (url === "/api/products") {
        let product = Object.assign({ id: uuid() }, data);
        products.push(product);
        resolve({ ...product });
      } else {
        reject("Invalid URL!");
      }
    });
  },
<<<<<<< HEAD

=======
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
  put: (url, data) => {
    return new Promise((resolve, reject) => {
      if (!data.title && !data.quantity && !data.price) {
        reject("Please provide at least one field");
      }
<<<<<<< HEAD

=======
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
      if (url.match(/\/api\/products\/.+/)) {
        let id = url.split("/")[3];
        let product = products.find(p => p.id === id);
        let newProduct = Object.assign({}, product, data);
<<<<<<< HEAD

        products = products.map(p => {
          return p.id === id ? newProduct : p;
        });

=======
        products = products.map(p => {
          return p.id === id ? newProduct : p;
        });
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
        resolve(newProduct);
      } else {
        reject("Invalid URL!");
      }
    });
  },
  delete: url => {
    return new Promise((resolve, reject) => {
      let id = url.split("/")[3];
      if (!products.some(p => p.id === id)) {
        reject("Invalid product");
      }
<<<<<<< HEAD

=======
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
      if (url.match(/\/api\/products\/.+/)) {
        let product = products.find(p => p.id === id);
        let index = products.indexOf(product);
        products.splice(index, 1);
        resolve();
      } else {
        reject("Invalid URL!");
      }
    });
  }
};
<<<<<<< HEAD

/* **USAGE**
client.get('/api/products')
      .then((products) => console.log(products));

client.get(`/api/products/${uuid1}`)
      .then((product) => console.log(product));


=======
/* **USAGE**
client.get('/api/products')
      .then((products) => console.log(products));
​
client.get(`/api/products/${uuid1}`)
      .then((product) => console.log(product));
​
​
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
client.post(`/api/products`, {title: 'ABC', quantity: 25, price: 12})
      .then((product) => {
        console.log(product);
      });
<<<<<<< HEAD

=======
​
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
client.put(`/api/products/${uuid1}`, {title: 'Book Reader'})
      .then((product) => {
        console.log(product);
      });
<<<<<<< HEAD

=======
​
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
client.delete(`/api/products/${uuid1}`)
      .then(() => {
        
      });
*/
<<<<<<< HEAD

export default client;
=======
export default client;
>>>>>>> 3e113073041de0443805e2721436020cd58ba957
