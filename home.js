let username=localStorage.getItem('uname')
console.log(username)


function logout(){
    localStorage.clear()
    window.location="login.html"
}

function addEmployee() {
    employee = {
        id: empid.value,
        name: empname.value,
        addr: empaddr.value,
        desg: empdesg.value,
        exp: empexp.value,
        sal: empsal.value
    }
    if (employee.id in localStorage) {
        alert("Employee already exist")
    } else {
        localStorage.setItem(employee.id, JSON.stringify(employee))
        alert("employee details added")
        empid.value = ""
        empname.value = ""
        empaddr.value = ""
        empdesg.value = ""
        empexp.value = ""
        empsal.value = ""
    }
    
}



