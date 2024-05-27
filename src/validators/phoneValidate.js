export function isPhone(phone) {
    if(phone === null){
        return true
    }else{
        return (phone[0] === '8') && (phone[1] === '9')
    }
     
} 