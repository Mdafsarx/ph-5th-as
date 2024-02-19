
// scroll //
getId('BuyTickets').addEventListener('click',()=>{

window.scrollTo(0,1220)

});

function reload(){
    
}



let seatsButton=getClass('seats-Button');
 seatsButton=Array.from(seatsButton);


 const array=[];
let sum=0;
 seatsButton.forEach(seatButton => {
    // seat btn onclick event
    seatButton.addEventListener('click',()=>{

        // cannot book more then 4 ticket
        if(array.length===4){
            return alert(`you can't buy more then 4 ticket`)
                }

// You cannot buy this ticket again
 const seatInnerText=seatButton.innerText;
if(array.includes(seatInnerText)){return alert(`You cannot buy this ${seatInnerText} ticket again`)}
array.push(seatInnerText);




 // background color set in seats
setBackgroundColor(seatButton)


// seat details adding
const p=document.createElement('p');
const p2=document.createElement('p');
const p3=document.createElement('p');

p.innerText=seatInnerText;
p2.innerText=`Economoy`;
p3.innerText=550;

getId('SeatSelectedContainer').appendChild(p);
getId('SeatSelectedContainer').appendChild(p2);
getId('SeatSelectedContainer').appendChild(p3);


// seat value setting
const seatCountValue=getInnerText('SeatBookCount');
const  newSeatBookCount=seatCountValue+1;
setInnerText('SeatBookCount',newSeatBookCount);


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
setInnerText('grandTotal',TotalBusTicketPrice);



// extra mark start here ///


// apply button and copupon input

if(newSeatBookCount>=4){
    
    getId('ApplyButton').removeAttribute('disabled');
    getId('ApplyButton').addEventListener('click',()=>{
        const InputValue=getId('CopuponCode').value ;

        if(InputValue==='NEW15'){
const discount15=TotalBusTicketPrice * 0.15;
const discount15Total=TotalBusTicketPrice-discount15;
setInnerText('grandTotal',discount15Total);
getId('DiscountContainer').classList.remove('hidden');
setInnerText('discount15Display','Discount');
setInnerText('discount15DisplayTaka',discount15);
getId('copuponAndApply').classList.add('hidden');
        }
        else if(InputValue==='Couple 20'){

            const discount15=TotalBusTicketPrice * 0.20;
            const discount15Total=TotalBusTicketPrice-discount15;
            setInnerText('grandTotal',discount15Total);
            getId('DiscountContainer').classList.remove('hidden');
            setInnerText('discount15Display','Discount');
            setInnerText('discount15DisplayTaka',discount15);
            getId('copuponAndApply').classList.add('hidden')

        }
        else{
            return alert('Invalid input')
        }


    })

   
    
}



// number and apply button disabled and able 

getId('NumberInput').addEventListener('input',(e)=>{

const Number=e.target.value;
if(newSeatBookCount>0&&Number.length>5)
{

    getId('NextBtn').removeAttribute('disabled')

}

})

const NumberValue=getId('NumberInput').value;
console.log(NumberValue);
if(newSeatBookCount>0 && NumberValue.length>=5){

getId('NextBtn').removeAttribute('disabled');

}



 }) 

})


//  Next button;

getId('NextBtn').addEventListener('click',()=>{

document.querySelector('header').classList.add('hidden');
document.querySelector('main').classList.add('hidden');
getId('footer').classList.add('hidden')
getId('success').classList.remove('hidden')

})
    
// success continue btn

getId('Continue').addEventListener('click',()=>{
    document.querySelector('header').classList.remove('hidden');
document.querySelector('main').classList.remove('hidden');
getId('footer').classList.remove('hidden')
getId('success').classList.add('hidden')

});

