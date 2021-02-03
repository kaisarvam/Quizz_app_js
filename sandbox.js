const correctans = ['B','B','A','B',];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

//const scoreview =document.querySelector('.scoreview');

form.addEventListener('submit',e=>{
e.preventDefault();

let score = 0;
const userAnswer =[form.q1.value ,form.q2.value ,form.q3.value ,form.q4.value ,];
// check Answers

userAnswer.forEach((answer,index)=>{

if(answer=== correctans[index])
{
  score +=25;
}

});

//show result in page
scrollTo(0,0);

result.classList.remove('d-none');

let i= 0
const timer =setInterval(()=>{
  i++;
  result.querySelector('span').textContent =`${i}%`;
  if(i===score)
  {
    clearInterval(timer);
  };
},30)

//scoreview.innerHTML = `your score is  : ${score}`;
//console.log(score);

});