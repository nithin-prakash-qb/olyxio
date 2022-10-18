const getData = () => {
  fetch("testimonial.json")
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
      sideMenu.forEach((testObj, index) => {
        let parent = document.getElementById("main_u_li");
        let pop_up = document.createElement("li");
        pop_up.setAttribute("class", "main_li");

        let icon = document.createElement("i");
        icon.setAttribute(
          "class",
          "fa-solid fa-circle-chevron-down arrowDownIcon  "
        );
        // icon.setAttribute("id", `${testObj.mainmenu}`);
        // icon.setAttribute("class","arrowDownIcon");

        let listContainer = document.createElement("ul");
        listContainer.className = "sub_li hiddens";
        listContainer.dataset.menuId = testObj.mainmenu;

        let anchorTag = document.createElement("a");
        anchorTag.className = "myAnchor";

        // loading subli for each main li
        anchorTag.addEventListener("click", (event) => {
          // console.log(event.target);

          let dropDown = anchorTag.nextElementSibling;
          if (Object.values(dropDown.classList).includes("hiddens")) {
            dropDown.classList.remove("hiddens");
            event.target.style.color = "#e62552";
          } else {
            dropDown.classList.add("hiddens");
            event.target.style.color = "#0d093e";
          }
        });

        // Trying out

        // anchorTag.addEventListener("click", (event) => {
        //   // console.log(event.target);
        //   let clicked = event.target
        //   console.log(event.target)
        //   let dropDown = clicked.nextElementSibling;
        //   console.log(dropDown)
        //   if (Object.values(dropDown.classList).includes("hiddens")) {
        //     dropDown.classList.remove("hiddens");
        //   } else {
        //     dropDown.classList.add("hiddens");
        //   }

        //   let all_anchor_tag=document.querySelectorAll(".myAnchor")

        //   all_anchor_tag.forEach((y)=>{
        //     let dropDown = y.nextElementSibling;
        //     if (Object.values(dropDown.classList).includes("hiddens")) {
        //       dropDown.classList.remove("hiddens");
        //     }else{
        //       dropDown.classList.add("hiddens");
        //     }

        //     }
        //   )
        //   let dropDown = anchorTag.nextElementSibling;

        //   if (Object.values(dropDown.classList).includes("hiddens")) {
        //     dropDown.classList.remove("hiddens");
        //   } else {
        //     dropDown.classList.add("hiddens");
        //   }

        // });

        // creating Unordered list

        let count_li = 0;
        while (count_li <= testObj["subMenu"].length - 1) {
          testObj["subMenu"].forEach((x) => {
            let listItemChild = document.createElement("li");
            let listItemAnchor = document.createElement("a");
            listItemAnchor.innerHTML = `${Object.keys(x)[0]}`;
            listItemAnchor.href = Object.values(x)[0];
            listItemChild.appendChild(listItemAnchor);
            count_li++;
            listContainer.appendChild(listItemChild);
          });
        }

        const textContent = document.createTextNode(`${testObj.mainmenu}`);
        anchorTag.appendChild(textContent);
        pop_up.appendChild(anchorTag);

        if (testObj.subMenu.length === 0) {
        } else {
          anchorTag.appendChild(icon);
        }
        pop_up.appendChild(listContainer);
        parent.appendChild(pop_up);
      });
    });
};
getData();

// JS for location page
const getDataLocation = () => {
  fetch("location.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      header_fn(data)
    });//closing of then
  
};
getDataLocation();

// function for getting the header
let header_fn = (data)=>{
  let main = document.getElementById("main");
  let heading_un_li = document.createElement("ul");
  data.forEach((testObj) => {
    let heading_list_item = document.createElement("li");
    let heading_button = document.createElement("button");
    heading_button.innerHTML=`${testObj.country}`;
    heading_list_item.appendChild(heading_button)
    heading_un_li.appendChild(heading_list_item)
  });
  main.appendChild(heading_un_li)
}