submit.addEventListener("click", (e) => {
  e.preventDefault() //this line prevent to load the entire page
  let titlec = title.value // this will store the value
  let taskc = task.value
  let datec = date.value
  localStorage.setItem(`${datec}`, JSON.stringify([titlec,taskc]))
  console.log(e);
  todo.innerHTML=`
    <h1>${titlec}</h1>
    <p>${taskc}</p>
    `
  title.value='' // this is used to provide blank space
  task.value=''
  date.value=''
})
DeleteBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  let datec=date.value
  localStorage.removeItem(`${datec}`)
  todo.innerHTML=' '
  date.value=''
})