const butNow=document.querySelector(`#butNow`)
const butDate=document.querySelector(`#butDate`)
const calendar=document.querySelector(`#data`)
const calendarDis=document.querySelector(`#calendarDis`)
const display=document.querySelector(`#display`)
butNow.addEventListener(`click`,()=>{
let todayDate=new Date();
const selectedDate=document.querySelector(`#wydarzenie`).value
if(selectedDate=='null'){
    display.innerHTML="<span style='color: red'>Wybierz wydarzenie!</span>"
}else{
    let futureDate=new Date(selectedDate); 
    let diff=futureDate.getTime()-todayDate.getTime()
    let daysDiff=Math.ceil(diff/(1000*60*60*24))
    display.innerHTML=`${daysDiff>=0? 'Zostało' :"Upłynęło"} ${daysDiff} dni ${daysDiff>=0? 'do' :"od"} wydarzenia`
}

})

calendar.addEventListener(`change`,()=>{
    if(calendar.value){
    let calendarDate=new Date(calendar.value)
    const selectedDate=document.querySelector(`#wydarzenie`).value
    if(!selectedDate=='null'){
        display.innerHTML="<span style='color: red'>Wybierz wydarzenie!</span>"
    }else{
        let futureDate=new Date(selectedDate); 
        let diff=futureDate.getTime()-calendarDate.getTime()
        let daysDiff=Math.ceil(diff/(1000*60*60*24))
        display.innerHTML=`${daysDiff>=0? 'Zostało' :"Upłynęło"} ${Math.abs(daysDiff)} dni ${daysDiff>=0? 'do' :"od"} wydarzenia`
    }
}else{
    display.innerHTML="<span style='color: red'>Wybierz datę w kalendarzu!</span>"
}
})
isHidden=true;
butDate.addEventListener(`click`,()=>{
    calendarDis.classList.toggle(`hidden`)
    if(!isHidden){
        isHidden=true;
        butDate.innerHTML="Pokaż kalendarz"
    }else{
        isHidden=false;
        butDate.innerHTML="Ukryj kalendarz"
    }
})