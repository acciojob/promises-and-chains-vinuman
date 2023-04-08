//your JS code here. If required.
const button = document.getElementById('btn');
const age = document.getElementById('age');
const name = document.getElementById('name');
const error = document.querySelector('.error')

button.addEventListener('click', ()=>{
	if(age.value=='' || name.value==''){
			error.innerHTML = `
       <p>inputs cannot be empty.</p>
   `;
	}else{
		error.innerHTML = '';
			return new Promise((resolve, reject) => {

		setTimeout(()=>{
			if(age.value>=18){
			resolve(`Welcome, ${name.value}. You can vote.`)
		} else{
			reject(`Oh sorry ${name.value}. You aren't old enough.`)
		}
		}, 4000)
		
	})
	}

});
