
btnAdd = document.querySelector("#btnAdd");
btnMul = document.querySelector("#btnMul");
btnDiv = document.querySelector("#btnDiv");
addForm = document.querySelector("#calc");
showUsers = document.querySelector("#showUsers");
usernameInput = document.querySelector("#username");
userAddBtn = document.querySelector("#username");

calcResult = document.querySelector("#calcResult");

let users = [];

function showResult(operator){
    let num1 = addForm.num1.value;
    let num2 = addForm.num2.value;
    let res = 0;
    if(operator==="+"){
         res = Number.parseInt(num1) + Number.parseInt(num2);
    }else if(operator === "*"){
         res = Number.parseInt(num1) * Number.parseInt(num2);
    }else if(operator === "/"){
         res = Number.parseInt(num1) / Number.parseInt(num2);
    }
    calcResult.innerHTML = `<h4>${num1}  ${operator} ${num2}  =  ${res}</h4> `;
   
}
btnAdd.addEventListener('click',e=>{
    e.preventDefault();
    showResult("+");
})
btnMul.addEventListener('click',e=>{
    e.preventDefault();
    showResult("*");
})
btnDiv.addEventListener('click',e=>{
    e.preventDefault();
    showResult("/");
})

function deleteUser(username){
    bootbox.confirm({
        message: "Do you wnat to really delete user :"+username+" ? ",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if(result){
                users = users.filter(e=>e != username)

                showUsersList();
            }
        }
    });
   
}
function editUser(user){
    users = users.filter(e=>e != user);
    showUsersList();
    usernameInput.value = user;
}
function showUsersList(){
    str ="<ul class='list-group'>";
    for(let u of users){
        str += `<li class='list-group-item'>${u} 
                <i class="fas fa-trash float-right" onclick="deleteUser('${u}')"></i>
                <i class="fas fa-edit float-right mr-2 ml-2" onclick="editUser('${u}')"></i>
                </li>`
    }
    str+="</ul>"
    showUsers.innerHTML = str;
}

userAddBtn.addEventListener('keyup',e =>{
    if (e.key === "Enter") {
        username = e.target.value;
        if(username.trim().length==0){
            console.log("User name ",username);
            usernameInput.classList.add('error');
            console.log(usernameInput.classList);
            usernameInput.focus();
        }else{
            users.push(username);
            e.target.value="";
            showUsersList();
        }
       
    }
})
