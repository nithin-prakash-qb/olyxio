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
      });
      //Close Button
      close_button = document.getElementById("close_button");
      close_button.addEventListener("click", () => {
        document.getElementById("pop_up").style.display = "none";
      });

      // Loading Main li
      let sideMenu = data["sideMenu"];
      sideMenu.forEach((testObj,index) => {
        let parent = document.getElementById("main_u_li");
        let pop_up = document.createElement("li");
        pop_up.setAttribute("class", "main_li");

        let icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-circle-chevron-down");
        icon.setAttribute("id", `${testObj.mainmenu}`);

        let listContainer = document.createElement('ul')
        listContainer.className = 'sub_li'

        // console.log(listContainer.innerHTML.trim())

        icon.addEventListener("click", () => {
            testObj["subMenu"].forEach(x => {
            let listItemChild = document.createElement("li")
            listItemChild.innerHTML=`${Object.keys(x)[0]}`
            listContainer.appendChild(listItemChild)
            // document.getElementById(id).innerHTM
            if(document.getElementsByClassName('sub_li')[0].innerHTML.trim() == ""){
              listContainer.appendChild(listItemChild)
            }else{
              
            }
            
          })

        });
        // we should append listItemParent to all the 4 list items .appendChild(listItemParent)
        const textContent = document.createTextNode(`${testObj.mainmenu}`);
        // textContent.appendChild(listItemParent)
        pop_up.appendChild(textContent)
        if (testObj.subMenu.length===0){
          
        }else{
          pop_up.appendChild(icon);
        }
        pop_up.appendChild(listContainer)
        parent.appendChild(pop_up);
      });
    });
};

// All Functions
// const arrowDown = (event) => {
//   console.log("OK", event.target.id);
// };

getData();
