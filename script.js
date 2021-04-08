var Person = function (userName, password, amount) {
    this.userName = userName
    this.amount = amount
    this.password = password
}

var users = []

// Variables

let name = document.getElementById('username')
let name1 = document.getElementById('username1')
let password = document.getElementById('password')
let password1 = document.getElementById('password1')
let confirmPW = document.getElementById('confirm')
let register = document.querySelector('.register-btn')
let login = document.querySelector('.login-btn')
let regForm = document.querySelector('.reg-cont')
let depositForm = document.querySelector('.deposit-cont')
let withdrawForm = document.querySelector('.withdraw-cont')
let sendForm = document.querySelector('.send-cont')
let closeReg = document.querySelector('.closeReg')
let closeLog = document.querySelector('.closeLog')
let closeDep = document.querySelector('.closeDeposit')
let closeWith = document.querySelector('.closeWithdraw')
let closeSend = document.querySelector('.closeSend')
let regLink = document.querySelector('.reg-link')
let logForm = document.querySelector('.login-cont')
let hero = document.querySelector('.hero')
let accountCont = document.querySelector('.account-cont')
let accountPage = document.querySelector('.account')
let logout = document.querySelector('.logout-btn')
let access = document.querySelector('.log-btn')
let depositLink = document.querySelector('.deposit')
let withdrawLink = document.querySelector('.withdraw')
let sendLink = document.querySelector('.send')
let depositBtn = document.querySelector('.deposit-btn')
let withdrawBtn = document.querySelector('.withdraw-btn')
let sendBtn = document.querySelector('.send-btn')
let actions = document.querySelector('.action-modal')
let profileName = document.querySelector('.user-name')
let depositValue = document.getElementById('deposit')
let withdrawValue = document.getElementById('withdraw')
let recipient = document.getElementById('recipient')
let sendValue = document.getElementById('send')
let balance = document.querySelector('.current-value')
let table = document.querySelector('.table')

// Functions

let createUser = (userName, password) => {
    var newPerson = new Person(userName, password, 0)
    users.push(newPerson)
}

let findUser = (user) => {
    return users.find(item => item.userName === user)
}

let deposit = (user, amount) => {
    var foundUser = findUser(user)
    foundUser.amount += amount
    console.log(foundUser)
}

let withdraw = (user,amount) => {
    var foundUser = findUser(user)
    foundUser.amount -= amount
}

let getBalance = (user) => {
    var foundUser = findUser(user)
    return foundUser.amount
}

let send = (from_user, to_user, amount) => {
    var sender = findUser(from_user)
    var receiver = findUser(to_user)
    console.log (receiver)
    sender.amount -= amount
    receiver.amount += amount
}

// Events

login.addEventListener('click', () => {
    logForm.style.display = 'block'
    login.style.display = 'none'
})

regLink.addEventListener('click', () => {
    regForm.style.display = 'block'
    login.style.display = 'none'
})

register.addEventListener('click', () => {
    var foundUser = findUser(name.value)
    if(foundUser) {
        return alert('User_Already_Exists')
    }
    if(password.value !== confirmPW.value) {
        return alert('Please_Confirm_Password')
    }
    createUser(name.value,password.value)
    hero.style.display = 'none'
    regForm.style.display = 'none'
    accountPage.style.display = 'block'
    profileName.textContent = name.value
    balance.textContent = getBalance(profileName.textContent)
})

logout.addEventListener('click', () => {
    hero.style.display = 'block'
    accountPage.style.display = 'none'
    logForm.style.display = 'none'
    login.style.display = 'block'
})

access.addEventListener('click', () => {
    var foundUser = findUser(name1.value)
    if (!foundUser) {
        return alert('User_Does_Not_Exist')
    }

    if (foundUser.password !== password1.value) {
        return alert('Incorrect_Password')
    }
    hero.style.display = 'none'
    accountPage.style.display = 'block'
    profileName.textContent = name1.value
    balance.textContent = getBalance(profileName.textContent)
})

// Transaction Modals

depositLink.addEventListener('click', () => {
    accountCont.style.display = 'none'
    depositForm.style.display = 'block'
})

withdrawLink.addEventListener('click', () => {
    accountCont.style.display = 'none'
    withdrawForm.style.display = 'block'
})

sendLink.addEventListener('click', () => {
    accountCont.style.display = 'none'
    sendForm.style.display = 'block'
})

// Transactions 

depositBtn.addEventListener('click', () => {
    deposit(profileName.textContent, parseInt(depositValue.value))
    accountCont.style.display = 'flex'
    depositForm.style.display = 'none'
    balance.textContent = getBalance(profileName.textContent)
})

withdrawBtn.addEventListener('click', () => {
    var foundUser = findUser(profileName.textContent)
    if (foundUser.amount < parseInt(withdrawValue.value)) {
        return alert('Not_Enough_Money')
    } 
    withdraw(profileName.textContent, parseInt(withdrawValue.value))
    accountCont.style.display = 'flex'
    withdrawForm.style.display = 'none'
    balance.textContent = getBalance(profileName.textContent)
})

sendBtn.addEventListener('click', () => {
    var foundUser1 = findUser(recipient.value)
    var foundUser2 = findUser(profileName.textContent)
    if (!foundUser1) {
        return alert('Receiver_Does_Not_Exist')
    }
    if (foundUser2.amount < parseInt(sendValue.value)) {
        return alert('Not_Enough_Money')
    } 
    send(profileName.textContent, recipient.value, parseInt(sendValue.value))
    accountCont.style.display = 'flex'
    sendForm.style.display = 'none'
    balance.textContent = getBalance(profileName.textContent)
})

// Close buttons

closeLog.addEventListener('click', () => {
    logForm.style.display = 'none'
    login.style.display = 'block'
})

closeReg.addEventListener('click', () => {
    regForm.style.display = 'none'
    login.style.display = 'block'
})

closeDep.addEventListener('click', () => {
    accountCont.style.display = 'flex'
    depositForm.style.display = 'none'
})

closeWith.addEventListener('click', () => {
    accountCont.style.display = 'flex'
    withdrawForm.style.display = 'none'
})

closeSend.addEventListener('click', () => {
    accountCont.style.display = 'flex'
    sendForm.style.display = 'none'
})


// Table

// let insertCell = () => {
//     table.insertRow(1)
// }