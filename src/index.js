import './style.css'
import './common.scss'
import './test.less'
import './t.styl'
import img from './assets/1.png';
let image = document.createElement('img');
image.src = img;
document.querySelector('#app').appendChild(image)
let btn = document.createElement('button')
btn.textContent = "懒加载"

btn.onclick = () => {
    import('./lazy.js').then((module) => { console.log(module.default) })
}
document.querySelector('#app').appendChild(btn)
console.log('111')