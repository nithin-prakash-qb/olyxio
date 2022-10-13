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
      // Hamberger
      hamMenu = document.getElementById("ham_menu");
      hamMenu.addEventListener("click", () => {
        document.getElementById("pop_up").style.display = "block";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      });
      //Close Button
      close_button = document.getElementById("close_button");
      close_button.addEventListener("click", () => {
        document.getElementById("pop_up").style.display = "none";
      });
      //Arrow Down

      // Main li
      let sideMenu=data["sideMenu"]
      sideMenu.forEach((testObj) => {
        let parent=document.getElementById("main_u_li")
        let pop_up = document.createElement("li");
        pop_up.setAttribute("class", "main_li");
        pop_up.innerHTML=`${testObj.mainmenu}<i class="fa-solid fa-circle-chevron-down" ></i>`
        
          testObj["subMenu"].forEach(x => {
            let listItemParent = document.getElementsByClassName('sub_li')[0]
            let listItemChild = document.createElement("li")
            listItemChild.innerHTML=`${Object.keys(x)[0]}`
            pop_up.appendChild(listItemChild)
          })
        parent.appendChild(pop_up)
       }
      )
      
    });
};
getData();


