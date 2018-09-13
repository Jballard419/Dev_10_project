function rollDice(sides){
  return Math.floor(Math.random()*sides+1);
}


function game(bet) {

  if((rollDice(6)+rollDice(6))===7)
  {
    return(bet+4);
  }else {
    return(Math.max(bet-1, 0));
  }

}
// Quick funiction  to confirm dice distrubution
function testDice()
{
  for (var i = 0; i < 1000000; i++)
   {
    if((rollDice(6)+rollDice(6))===1)
    {
      return false;
    }
   }
   return true;
}

/*
  funiction: table())
  name: purpose handles calling the game() and recording values until the money runs out.
  pre: the init bet for game()
  post: an object containing the init bet roll's before broke, the max money, and the rolls at max

*/
function table(bet) {
  var book={};
  book.initbet=bet
  book.roll=0; book.max$=bet; book.maxRoll=0;
  if(!(bet>0)) // the not is there to protect against NaN
  {
    return null;
  }
    while(bet>0)
    {
      book.roll++;
      bet=game(bet);
      if(book.max$<bet) //logs new max
      {
        book.maxRoll=book.roll;
        book.max$=bet;
      }
    }
   return book;

}

/*
  funiction: table())
  name: purpose handles the Dom and calling table
  pre: user submit the form
  post: Table filled out 

*/
function casino(){
  //Dom stuff
  bet=parseFloat((document.getElementById("bet").value).replace('$','')); //lets user procedded with $ in input

  var book=table(bet);
  console.log(book);
  if(book===null)
  {
    alert("Invalid Bet, must be greater than zero");
    return false;
  }
    document.getElementById("startingbet").innerText=book.initbet;
    document.getElementById("Results").style.display="block";
    document.getElementById("totalrolls").innerText=book.roll;
    document.getElementById("maxAmount").innerText=book.max$;
    document.getElementById("rollsatmax").innerText=book.maxRoll;




  return false;


  };
