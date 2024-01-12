let array = ['one','two','three','four'];
let object = {};
array.forEach((element, index) => {
 object[index + 1] = element;
});

console.log(object)

const arr=[1, 2, 3, 4, 1, 2, 5, 6, 7, 8, 8, 9];
const noduplicates = arr.reduce((acc,item) =>{
    if(!acc.includes(item)){
        acc.push(item);}
        return acc;
},[]);
console.log(noduplicates);
