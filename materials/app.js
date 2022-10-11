let array=[]
let getData = () => {
    fetch("testimonial.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    array=data
  });
}
getData()

console.log(array);
// Create element:
const para = document.createElement("h4");
para.innerHTML = "Sifat Hasannn";

// Append to another element:
document.getElementsByClassName("image_name").appendChild(para);

let parent = document.getElementById('testimonials')
let div1=document.createElement('div')
let div2=document.createElement('div')
div1.innerHTML=`<div>
<img src="${obj[0].image}" alt="" />
</div>`
div2.innerHTML=`<h4 class="image_name">${name}</h4>
<p class="image_designation">${desig}</p>`
parent.appendChild(div1)
parent.appendChild(div2)