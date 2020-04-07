const para = document.querySelector('p');
// const b = para.textContent.split(' ').map(item => item.length > 8 ? `<span style="background-color: yellow">${item}</span>` : item).join(' ');

// para.innerHTML = b

let newArray = [];
para.textContent.split(' ').forEach(x => {
  if (x.length >= 8) {
    newArray.push(`<span style="background-color: yellow">${x}</span>`);
  } else {
    newArray.push(x);
  }
});
para.innerHTML = newArray.join(' ');

/* const newLink = document.createElement('a');
newLink.innerHTML = '<h3>Facebook</h3>'
newLink.setAttribute('href', 'https://www.facebook.com');
document.body.appendChild(newLink)

// para.innerHTML = para.textContent.split(/\.[^\.|<]/).join('.</p><p>') + '</p>'


const siz = para.textContent.split(' ').length
const sizElement = document.createElement('p')
sizElement.innerHTML = `<h4> The number of words in the paragraph is technically ${siz}`
document.body.insertBefore(sizElement, document.querySelector('p'))


document.getElementById */
