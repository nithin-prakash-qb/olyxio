const getData = async () => {
  await fetch("testimonial.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let testimonial = data["testimonial"];
      testimonial.forEach((testObj) => {
        let parent = document.getElementById("testimonials");
        let div1 = document.createElement("div");
        div1.setAttribute("class", "testi");
        div1.innerHTML = `<div class="testi_image_designation">
                                <div>
                                    <img src="${testObj.image}" alt="" />
                                </div>
                                <div class="name_designation_div">
                                    <h4 class="image_name">${testObj.name}</h4>
                                    <p class="image_designation">${testObj.designation}</p>
                                </div>
                            </div>
                            <p class="test_para">
                                ${testObj.description}
                            </p>
                          </div>`;
        parent.appendChild(div1);
      });
    });

};
getData()

// let parent = document.getElementById("testimonials");
// let div1 = document.createElement("div");
// div1.setAttribute("class", "testi");
// let div2 = document.createElement("div");
// div2.setAttribute("class", "testi_image_designation");
// div2.innerHTML = `<div> <img src="" alt="" /> </div>
//                 <h4 class="image_name"></h4>
//                 <p class="image_designation"></p>`;
// parent.appendChild(div1);
// div1.appendChild(div2)

// Hamberger
hamMenu = document.getElementById('ham_menu')
hamMenu.addEventListener("click",()=>{
    let div1 = document.createElement("div");
    
    
});

