const user = {id: 1, name: 'Sakib Khan', job: 'actor'};
// JavaScript object notation (JSON) 
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/* 
{ id: 1, name: 'Sakib Khan', job: 'actor' }
{"id":1,"name":"Sakib Khan","job":"actor"}
*/

const shop = {
    name: 'Alia',
    address: {
        street: 'khilkhat bazar',
        city: 'dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'monitor', 'box', 'mouse'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);