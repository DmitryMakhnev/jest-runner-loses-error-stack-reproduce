const error = new Error('Hello');
const errorDescriptor = Object.getOwnPropertyDescriptors(error)
console.log(errorDescriptor?.stack?.value);
