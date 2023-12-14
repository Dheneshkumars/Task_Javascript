var container = document.querySelector('.input_container');

fetch('dummy.json').then(res=>res.json()).then((data)=>{JsonData(data)}).catch((err)=>{console.log(err,"error")});

const JsonData = (data)=>{
    const arr = data?.products;
    for (let index = 0; index < arr.length; index++) {
        const {title,id} = arr[index];
        elementCreate('input','checkbox',id,title,index);
    }
}

const elementCreate = (input,type,id,title,name)=>{
    const element = document.createElement(input);
    const labelElement = document.createElement('label');
    const formContainer= document.createElement('div');
    formContainer.className = 'form_input';
    labelElement.innerHTML = title;
    element.type = type;
    element.id = id;
    element.name = name;
    element.onclick = ()=> handleOnclick(element);
    container.append(formContainer);
    formContainer.append(element);
    formContainer.append(labelElement);
}
let valueArr =[];
const handleOnclick = (element)=>{
    // if checked checkbox index filter
    element.checked ? !valueArr.includes(element.name) && valueArr.push(element.name) :(valueArr = valueArr.filter((data) => data.toString() !== element.name));
    
   ( Array.isArray(valueArr) && valueArr.length > 0) ?
        document.querySelector('p').innerText = valueArr.join(', ') : document.querySelector('p').innerText = ' ';
    console.log(valueArr,element.checked && element.name);
}