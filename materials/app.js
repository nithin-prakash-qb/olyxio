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
      // Hamberger menu 
      hamMenu = document.getElementById("ham_menu");
      hamMenu.addEventListener("click", () => {
        document.getElementById("pop_up").style.display = "block";
      });

      // Close Button
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
          "fa-solid fa-circle-chevron-down arrowDownIcon"
        );
        let listContainer = document.createElement("ul");
        listContainer.className = "sub_li hiddens";
        listContainer.dataset.menuId = testObj.mainmenu;
        let anchorTag = document.createElement("a");
        anchorTag.className = "myAnchor";
        const textContent = document.createTextNode(`${testObj.mainmenu}`);
        anchorTag.appendChild(textContent);

        // Adding arrowkeys to main list items
        if (testObj.subMenu.length === 0) {
          if(testObj.mainmenu==="Blog"){
            anchorTag.href=testObj.Link
          }else{
            anchorTag.href=testObj.Link
          }
        } else {
          anchorTag.appendChild(icon);
        }
        pop_up.appendChild(anchorTag);

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

        // loading subli for each main li when clicled
        anchorTag.addEventListener("click", (event) => {
          let dropDown = anchorTag.nextElementSibling;
          if (Object.values(dropDown.classList).includes("hiddens")) {
            dropDown.classList.remove("hiddens");
            anchorTag.style.color = "#e62552";
            anchorTag.getElementsByTagName("i")[0].classList.add("fa-rotate-180")
            anchorTag.getElementsByTagName("i")[0].style.paddingRight="10px";
           
          } else {
            dropDown.classList.add("hiddens");
            anchorTag.style.color = "#0d093e";
            anchorTag.getElementsByTagName("i")[0].classList.remove("fa-rotate-180")
          }
        });

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
      countries(data)
      localStorage.setItem("locationData", JSON.stringify(data));
    });
    

};

getDataLocation();

// function for getting all the countries in the header
let countries = (data)=>{
  let country_header= document.getElementById("country_header")
  let H1=document.createElement("h1")
  H1.innerHTML="WHERE WE ARE"
  country_header.appendChild(H1)
  // H1.setAttribute("id")
  let heading_un_li = document.createElement("ul");
  let initialData=data.find((location)=>location.unique_id==="c4")
  data.forEach((testObj) => {
    let heading_list_item = document.createElement("li");
    let heading_button = document.createElement("button");
    heading_button .setAttribute("onclick",button_fn);
    heading_button .onclick= ()=> button_fn(data);
    heading_button.innerHTML=`${testObj.country}`;
    heading_list_item.appendChild(heading_button)
    heading_un_li.appendChild(heading_list_item)
  });
  country_header.appendChild(heading_un_li)
  eachCountry(initialData)
}


function button_fn(data){
  data.forEach((test_obj)=>{
    if(test_obj.country===event.target.innerHTML){
      eachCountry(test_obj)
    }
  })
}

function eachCountry(data_object){
  let main= document.getElementById("main");
  let section = document.createElement("section");
  section.setAttribute("id", "content");
  let article = document.createElement("article");
  article.setAttribute("class","article")
      data_object.location.forEach((x)=>{
        let div1=document.createElement("div");
        div1.setAttribute("onmouseover","mouse_fn(this)")
        // div1.onmouseover= ()=> mouse_fn();
        div1.className = "USA_container common_container";
        let div1_h3=document.createElement("h3");
        div1_h3.innerHTML=`${x.place}`
        div1.appendChild(div1_h3)
        Object.keys(x.address).forEach((y)=>{
          let div1_p1=document.createElement("p");
          div1_p1.innerHTML=`${x.address[y]}`
          div1.appendChild(div1_p1)
        })
        let div1_p2=document.createElement("p");
        div1_p2.setAttribute('class',"phone")
        if(x.hasOwnProperty("phoneNumber")){
          div1_p2.innerHTML=`<i class="fa-sharp fa-solid fa-phone"></i> ${x.phoneNumber}`
          div1.appendChild(div1_p2)
        }
        
        let div1_p3=document.createElement("p");
        div1_p3.setAttribute('class',"map")
        div1_p3.innerHTML=`<i class="fa-solid fa-location-dot"> ${x.location}`
        div1.appendChild(div1_p3)
        article.appendChild(div1)
      })
  
  section.appendChild(article)
  main.replaceChildren(section)
  
} 
// let image = document.createElement('img')
// image.src="officeImages/USAchantilly.png"
// let aside = document.createElement("aside")
// aside.appendChild(image)
// section.appendChild(aside)
// main.appendChild(section)
let mouse_fn=(div1)=>{
  // const location = JSON.parse(localStorage.getItem("locationData"));
  let aside = document.createElement("aside")
  let image = document.createElement('img')
  image.src=div1.locationImage
  aside.replaceChildren(image)

}
