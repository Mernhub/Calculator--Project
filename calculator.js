let result = "";
let btns = document.querySelectorAll('.btn');
let arr = Array.from(btns);

arr.forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      result = eval(result);
      document.querySelector('input').value = result;
    }
    else if(e.target.innerHTML == 'C'){
      result = ""
      document.querySelector('input').value = result;
    }
    else{ 
    console.log(e.target)
    result = result + e.target.innerHTML;
    document.querySelector('input').value = result;
      }
  })
})