import{h as a,a as e}from"./vendor.620635d3.js";var t=a({name:"Payment",setup:()=>({payments:[{id:"credit",name:"Credit card"},{id:"debit",name:"Debit card"},{id:"paypal",name:"Paypal"}]}),render(){return e("div",{className:"d-block my-3"},[this.payments.map((a=>e("div",{className:"custom-control custom-radio"},[e("input",{id:a.id,name:"paymentMethod",type:"radio",className:"custom-control-input"},null),e("label",{className:"custom-control-label",htmlFor:a.id},[a.name])])))])}});export default t;
