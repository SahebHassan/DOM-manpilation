console.log('hello')
let titleDiv=document.getElementById('title')
console.log('before: ',titleDiv.innerText)
titleDiv.innerText='goodbye my lover!'
console.log('after: ',titleDiv.innerText)
titleDiv.innerHtml='<p>Hello</p>'