const httpRequest=new XMLHttpRequest();

httpRequest.open('get', 'https://jsonplaceholder.typicode.com/users', false)
httpRequest.send();
let Users=JSON.parse(httpRequest.responseText);

let tableBody=document.getElementById('tbody');


Users.forEach((user,index) => {
    let tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td><button type="button" class="btn " >view</button></td>
    
    `;
    tableBody.appendChild(tr);    
});


let viewBtn=document.querySelectorAll('.btn');
let detailsContainer=document.getElementById('detalis');
viewBtn.forEach((btn,index) => {
    btn.addEventListener('click',function(e){
        e.preventDefault();
        /* let userId=Users[index].id; */
        detailsContainer.innerHTML=`
        <h2> id: ${Users[index].id}</h2>
        <h2> name: ${Users[index].name}</h2>
        <p> email: ${Users[index].email}</p>
        <p> street: ${Users[index].address.street}</p>
        <p> city: ${Users[index].address.city}</p>
        <p> zipcode: ${Users[index].address.zipcode}</p>
        <p> phone: ${Users[index].phone}</p>
        <p> website: ${Users[index].website}</p>
        <p> company: ${Users[index].company.name}</p>
        
        `
    
    
})
});