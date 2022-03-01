export function setAllModalsOff(obj){
    let newObj = {}
    for (let key in obj){
        newObj[key] = false
    }
    return newObj

}


