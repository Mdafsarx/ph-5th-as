
// scroll //
getId('BuyTickets').addEventListener('click',()=>{

window.scrollTo(0,1220)

});

function reload(){
    
}



let seatsButton=getClass('seats-Button');
 seatsButton=Array.from(seatsButton);




 seatsButton.forEach(seatButton => {
    seatButton.addEventListener('click',()=>{
        
        // background color set in seats
setBackgroundColor(seatButton)

const seatInnerText=seatButton.innerText;


// console.log(seatInnerText)

// seat details adding
const p=document.createElement('p');
const p2=document.createElement('p');
const p3=document.createElement('p')
p.innerText=seatInnerText;
p2.innerText=`Economoy`;
p3.innerText=550;
getId('SeatSelectedContainer').appendChild(p);
getId('SeatSelectedContainer').appendChild(p2);
getId('SeatSelectedContainer').appendChild(p3);

console.log(getId('SeatSelectedContainer').children[0].innerText)

// seat value setting
const seatCountValue=getInnerText('SeatBookCount');
const newSeatBookCount=seatCountValue+1;
setInnerText('SeatBookCount',newSeatBookCount)


// seat left 
const totalSeatsLeft=getInnerText('totalSeatsLeft');
const UpdatedSeatsLeft=totalSeatsLeft-1;
if(UpdatedSeatsLeft<0){ return alert('All the seats are over, next time InshaAllah')}
setInnerText('totalSeatsLeft',UpdatedSeatsLeft)


// total price ///
let ticketPrice=550;
const TotalPrice=getInnerText('TotalPrice');
const TotalBusTicketPrice=TotalPrice+ticketPrice;
setInnerText('TotalPrice',TotalBusTicketPrice);



// grand total

setInnerText('grandTotal',TotalBusTicketPrice)






    })
 });



