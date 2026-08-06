var currentUserData = null

class UserData {

    userSettings={}
    skipBootloader=false

    constructor(data) {
        if (data == null) {
            saveDataToStorage()
            return this
        }
        let rawData = JSON.parse(data)
        Object.keys(rawData).forEach((key)=>{
            this[key] = rawData[key]
        })
        return this
    }
    
}

function loadDataFromStorage() {
    currentUserData = new UserData(localStorage.getItem("userData"))
    return currentUserData
}

function saveDataToStorage() {
    if (currentUserData == null) return;
    localStorage.setItem("userData",JSON.stringify(currentUserData))
}