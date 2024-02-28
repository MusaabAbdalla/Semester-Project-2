export function formatDate(time){
    const date = new Date(time)
    const formatedDate = date.toLocaleString()
    return formatedDate

}