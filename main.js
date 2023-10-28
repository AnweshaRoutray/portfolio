const textQuery=document.querySelector(".text");
const cursorQuery=document.querySelector(".cursor");
const textArray=["CSE Grad","Java Enthusiast","Front-end Hobbyist"];
const typingDelay=200;
const erasingDelay=200;
const newTextdelay=2000;
let index=0,charindex=0;
function type()
{
    if(charindex<textArray[index].length)
    {
        if(!cursorQuery.classList.contains("Typing"))
            cursorQuery.classList.add("Typing"); //Stop Blinking
        textQuery.textContent+=textArray[index].charAt(charindex);
        charindex++; 
        setTimeout(type,typingDelay);   
    }
    else{
        cursorQuery.classList.remove("Typing"); //start blinking
        setTimeout(erase,erasingDelay);
    }

}
function erase()
{
    if(charindex>0)
    {
        if(!cursorQuery.classList.contains("Typing"))
            cursorQuery.classList.add("Typing"); 
        textQuery.textContent=textArray[index].substring(0,charindex-1);
        charindex--;
        setTimeout(erase,erasingDelay);    
    }
    else{
        cursorQuery.classList.remove("Typing");
        index++;
        if(index>=textArray.length)
        index=0;
        setTimeout(type,typingDelay+1100);

    }

}
const var1 = document.addEventListener("DOMContentLoaded",function(){
    if(textArray.length)
    setTimeout(type,newTextdelay+250);
});
function displaymenu()
{
    
}