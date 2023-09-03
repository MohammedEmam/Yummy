import {
  categoriesDataList,
  searchDataList,
  categoriesDataFilterList,
  areaDataList,
  GetAllDataFilter,
  AreaDataFilterDetailsList,
  GetAreaDataFilterDetails,
  allDataList,
  allDataListFilterList,
  ingredientsDataFilterList,
  GetIngredientsDataFilter,
  SearchByFirstLetter,
  
} from "./getData.module.js";

export let idmeal = "";
export let detailsObj = {};
let category = "";

// Display Main Data
export class DisplaySearchData {
  constructor() {}
  displayData(list) {
    let cartona = "";
    if (list.length > 0) {
        list.forEach((e) => {
        cartona += `
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div itemId= "${e.idMeal}"  class="inner">
              <div class="img">
                <img class="w-100" src="${e.strMealThumb}" alt="" />
              </div>
              <div "
                class="layer d-flex justify-content-center align-items-center"
              >
                <h3>${e.strMeal}</h3>
              </div>
            </div>
          </div>
            `;
      });
    }
    $(".items").html(cartona);
    $(".inner").click(async function (e) {      
        $(".itemsSction").css("display", "none");
        $(".contactSection").css("display", "none");
        $(".searchSection").css("display", "none");
        $(".detailsSction").css("display", "block");
        let getAreaDataFilterDetails = new GetAreaDataFilterDetails();
        idmeal = $(this).attr("itemId");
        await getAreaDataFilterDetails.GetAreaDataFilterDetailsFunc(idmeal);
  
        let cartonaIn = "";
        let strIngredient = [];
        let strMeasure = [];
        let newstrIngredient = [];
        let newstrMeasure = [];
        for (let i = 1; i <= 20; i++) {

          let test = "strIngredient"+i
          let test2 = (AreaDataFilterDetailsList[0][test]);
          strIngredient.push(test2);
          let test3 = "strMeasure"+i
          let test4 = (AreaDataFilterDetailsList[0][test3]);
          strMeasure.push(test4);

          // strMeasure.push(AreaDataFilterDetailsList[i].strMeasure+i);
        }  
        newstrIngredient = strIngredient.filter(function(currentValue, i, arr){return strIngredient[i].length>1});
        // newstrMeasure = strMeasure.filter(function(currentValue, i, arr){return strIngredient[i].length>0});
        newstrMeasure = strMeasure.filter(function(currentValue, index, arr){return strMeasure[index].length>1});
        let cartonaList = '' ;
        for (let i = 0 ; i<newstrIngredient.length ; i++) {
          if (newstrMeasure[i] == undefined) {
            newstrMeasure[i] = "" ;
          }
          cartonaList +=
          `
          <li class="alert alert-info m-2 p-1"> ${newstrMeasure[i]}  ${newstrIngredient[i]}</li>
  
          `
          
        };
  

  
    if (AreaDataFilterDetailsList[0].strTags != null) {
      let test = AreaDataFilterDetailsList[0].strTags.split(",");
      test.forEach((e) => {
        cartonaIn += `
                <li class="alert alert-danger m-2 p-1">${e}</li>
                `
      });
    }
        let cartona = "";
        AreaDataFilterDetailsList.forEach((e) => {
          cartona += `
            <div class=" col-md-4">
            <img class="" src="${e.strMealThumb}" alt="${e.strMeal}">
            <h2 class="text-white text-center w-75 m-auto">${e.strMeal}</h2>
        </div>
        <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${e.strInstructions != undefined ? `${e.strInstructions}` : ""}</p>
        <h3><span class="fw-bolder">Area : </span>${
          e.strArea != undefined ? `${e.strArea}` : ""
        }</h3>
        <h3><span class="fw-bolder">Category : </span>${
          e.strCategory != undefined ? `${e.strCategory}` : ""
        } </h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${cartonaList}
        </ul>
    
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${cartonaIn}
        </ul>
    
        <a target="_blank" href="${
          e.strSource
        }" class="btn btn-success">Source</a>
        <a target="_blank" href="${
          e.strYoutube
        }" class="btn btn-danger">Youtube</a>
    </div>
            `;
        });
        $(".detailsSctionRow").html(cartona);
        $(".detailsSction").css("display", "block");
  
      });

    };
  }

// Display SearchInput Data
export class DisplaySearchInputData {
  constructor() {}
  displaySearchInputDataFunc(list) {
    let cartona = "";
    if (list.length > 0) {
        list.forEach((e) => {
        cartona += `
            <div class="col-lg-3 col-md-4 col-sm-6">
            <div itemId= "${e.idMeal}"  class="inner">
              <div class="img">
                <img class="w-100" src="${e.strMealThumb}" alt="" />
              </div>
              <div "
                class="layer d-flex justify-content-center align-items-center"
              >
                <h3>${e.strMeal}</h3>
              </div>
            </div>
          </div>
            `;
      });
    }
    $(".itemsSearch").html(cartona);
    $(".inner").click(async function (e) {

      $(".itemsSction").css("display", "none");
      $(".contactSection").css("display", "none");
      $(".searchSection").css("display", "none");
      $(".detailsSction").css("display", "block");
      let getAreaDataFilterDetails = new GetAreaDataFilterDetails();
      idmeal = $(this).attr("itemId");
      await getAreaDataFilterDetails.GetAreaDataFilterDetailsFunc(idmeal);
      let strIngredient = [];
      let strMeasure = [];
      let newstrIngredient = [];
      let newstrMeasure = [];
      for (let i = 1; i <= 20; i++) {

        let test = "strIngredient"+i
        let test2 = (AreaDataFilterDetailsList[0][test]);
        strIngredient.push(test2);
        let test3 = "strMeasure"+i
        let test4 = (AreaDataFilterDetailsList[0][test3]);
        strMeasure.push(test4);

        // strMeasure.push(AreaDataFilterDetailsList[i].strMeasure+i);
      }  
      newstrIngredient = strIngredient.filter(function(currentValue, i, arr){return strIngredient[i].length>1});
      // newstrMeasure = strMeasure.filter(function(currentValue, i, arr){return strIngredient[i].length>0});
      newstrMeasure = strMeasure.filter(function(currentValue, index, arr){return strMeasure[index].length>1});
      let cartonaList = '' ;
      for (let i = 0 ; i<newstrIngredient.length ; i++) {
        if (newstrMeasure[i] == undefined) {
          newstrMeasure[i] = "" ;
        }
        cartonaList +=
        `
        <li class="alert alert-info m-2 p-1"> ${newstrMeasure[i]}  ${newstrIngredient[i]}</li>

        `
        
      };


      let cartonaIn = "";
  if (AreaDataFilterDetailsList[0].strTags != null) {
    let test = AreaDataFilterDetailsList[0].strTags.split(",");
    test.forEach((e) => {
      cartonaIn += `
              <li class="alert alert-danger m-2 p-1">${e}</li>
              `
    });
  }
      let cartona = "";
      AreaDataFilterDetailsList.forEach((e) => {
        cartona += `
          <div class=" col-md-4">
          <img class="" src="${e.strMealThumb}" alt="${e.strMeal}">
          <h2 class="text-white text-center w-75 m-auto">${e.strMeal}</h2>
      </div>
      <div class="col-md-8">
      <h2>Instructions</h2>
      <p>${e.strInstructions != undefined ? `${e.strInstructions}` : ""}</p>
      <h3><span class="fw-bolder">Area : </span>${
        e.strArea != undefined ? `${e.strArea}` : ""
      }</h3>
      <h3><span class="fw-bolder">Category : </span>${
        e.strCategory != undefined ? `${e.strCategory}` : ""
      } </h3>
      <h3>Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
      ${cartonaList}
      </ul>
  
      <h3>Tags :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
      ${cartonaIn}
      </ul>
  
      <a target="_blank" href="${
        e.strSource
      }" class="btn btn-success">Source</a>
      <a target="_blank" href="${
        e.strYoutube
      }" class="btn btn-danger">Youtube</a>
  </div>
          `;
      });
      $(".detailsSctionRow").html(cartona);
      $(".detailsSction").css("display", "block");

    });
  }
}

// // عرض تفاصيل الداتا الرئيسيه
// export class DisplayDetailsData {
//   constructor() {}
//   displayDetailsData() {
//     let cartona = "";
//     if (detailsObj.strTags != null) {
//       let test = detailsObj.strTags.split(",");
//       test.forEach((e) => {
//         cartona += `
//                 <li class="alert alert-danger m-2 p-1">${e}</li>
//                 `;
//       });
//     }
//     $(".detailsSctionRow").html(`
//         <div class=" col-md-4">
//         <img class="" src="${detailsObj.strMealThumb}" alt="${
//       detailsObj.strMeal
//     }">
//         <h2 class="text-white text-center w-75 m-auto">${
//           detailsObj.strMeal
//         }</h2>
//     </div>
//     <div class="col-md-8">
//     <h2>Instructions</h2>
//     <p>${
//       detailsObj.strInstructions != undefined
//         ? `${detailsObj.strInstructions}`
//         : ""
//     }</p>
//     <h3><span class="fw-bolder">Area : </span>${
//       detailsObj.strArea != undefined ? `${detailsObj.strArea}` : ""
//     }</h3>
//     <h3><span class="fw-bolder">Category : </span>${
//       detailsObj.strCategory != undefined ? `${detailsObj.strCategory}` : ""
//     } </h3>
//     <h3>Recipes :</h3>
//     <ul class="list-unstyled d-flex g-3 flex-wrap">
//         <li class="alert alert-info m-2 p-1">1 Packet Filo Pastry</li>
//         <li class="alert alert-info m-2 p-1">150g Minced Beef</li>
//         <li class="alert alert-info m-2 p-1">150g Onion</li>
//         <li class="alert alert-info m-2 p-1">40g Oil</li>
//         <li class="alert alert-info m-2 p-1">Dash Salt</li>
//         <li class="alert alert-info m-2 p-1">Dash Pepper</li>
//     </ul>

//     <h3>Tags :</h3>
//     <ul class="list-unstyled d-flex g-3 flex-wrap">
//     ${cartona}
//     </ul>

//     <a target="_blank" href="${
//       detailsObj.strSource
//     }" class="btn btn-success">Source</a>
//     <a target="_blank" href="${
//       detailsObj.strYoutube
//     }" class="btn btn-danger">Youtube</a>
// </div>
//         `);
//   }
// }
// عرض داتا الكاتيجوري كامله
export class DisplayCategoriesData {
  constructor() {}
  displayCategoriesDataFunc(list) {
    let cartona = "";
    if (list != null || list != undefined) {
      if (list.length > 0) {
        list.forEach((e) => {
          cartona += `
              <div class="col-lg-3 col-md-4 col-sm-6">
              <div itemId= "${e.strCategory}"  class="inner">
                <div class="img">
                  <img class="w-100" src="${e.strCategoryThumb}" alt="" />
                </div>
                <div "
                  class="layer text-center d-flex justify-content-center align-items-center flex-column"
                >
                  <h3 class="h-25" >${e.strCategory}</h3>
                  <p class="h-50">${e.strCategoryDescription}</p>
                </div>
              </div>
            </div>
              `;
        });
      }
    }
    $(".items").html(cartona);
    //
    $(".inner").click(async function (e) {
      let getAllDataFilter = new GetAllDataFilter();
      idmeal = $(this).attr("itemId");
      await getAllDataFilter.GetAllDataFilterFunc("c",idmeal);
      $(".itemsSction").css("display", "none");
      $(".contactSection").css("display", "none");
      let cartona = "";
      if (allDataListFilterList.length >= 0) {
        allDataListFilterList.forEach((e) => {
          cartona += `
                <div class="col-lg-3 col-md-4 col-sm-6">
                <div itemId= "${e.idMeal}"  class="inner">
                  <div class="img">
                    <img class="w-100" src="${e.strMealThumb}" alt="" />
                  </div>
                  <div class="layer text-center d-flex justify-content-center align-items-center flex-column">
                    <h3 class="" >${e.strMeal}</h3>
                  </div>
                </div>
              </div>
                `;
        });
      }
      $(".items").html(cartona);
      $(".itemsSction").css("display", "block");
      //
      $(".inner").click(async function (e) {
        let getAreaDataFilterDetails = new GetAreaDataFilterDetails();
        $(".itemsSction").css("display", "none");
        $(".contactSection").css("display", "none");
        idmeal = $(this).attr("itemId");
        await getAreaDataFilterDetails.GetAreaDataFilterDetailsFunc(idmeal);
        
        let strIngredient = [];
        let strMeasure = [];
        let newstrIngredient = [];
        let newstrMeasure = [];
        for (let i = 1; i <= 20; i++) {
  
          let test = "strIngredient"+i
          let test2 = (AreaDataFilterDetailsList[0][test]);
          strIngredient.push(test2);
          let test3 = "strMeasure"+i
          let test4 = (AreaDataFilterDetailsList[0][test3]);
          strMeasure.push(test4);
  
          // strMeasure.push(AreaDataFilterDetailsList[i].strMeasure+i);
        }  
        newstrIngredient = strIngredient.filter(function(currentValue, i, arr){return strIngredient[i].length>1});
        // newstrMeasure = strMeasure.filter(function(currentValue, i, arr){return strIngredient[i].length>0});
        newstrMeasure = strMeasure.filter(function(currentValue, index, arr){return strMeasure[index].length>1});
        let cartonaList = '' ;
        for (let i = 0 ; i<newstrIngredient.length ; i++) {
          if (newstrMeasure[i] == undefined) {
            newstrMeasure[i] = "" ;
          }
          cartonaList +=
          `
          <li class="alert alert-info m-2 p-1"> ${newstrMeasure[i]}  ${newstrIngredient[i]}</li>
          `
        };

        let cartona = "";
        AreaDataFilterDetailsList.forEach((e) => {
          cartona += `
          <div class=" col-md-4">
          <img class="" src="${e.strMealThumb}" alt="${e.strMeal}">
          <h2 class="text-white text-center w-75 m-auto">${e.strMeal}</h2>
      </div>
      <div class="col-md-8">
      <h2>Instructions</h2>
      <p>${e.strInstructions != undefined ? `${e.strInstructions}` : ""}</p>
      <h3><span class="fw-bolder">Area : </span>${
        e.strArea != undefined ? `${e.strArea}` : ""
      }</h3>
      <h3><span class="fw-bolder">Category : </span>${
        e.strCategory != undefined ? `${e.strCategory}` : ""
      } </h3>
      <h3>Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
      ${cartonaList}
      </ul>
  
      <h3>Tags :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
      ${cartona}
      </ul>
  
      <a target="_blank" href="${
        e.strSource
      }" class="btn btn-success">Source</a>
      <a target="_blank" href="${
        e.strYoutube
      }" class="btn btn-danger">Youtube</a>
  </div>
          `;
        });
        $(".detailsSctionRow").html(cartona);
        $(".detailsSction").css("display", "block");
      });
    });
  }
}


// عرض داتا المنطقه كامله
export class DisplayAreaData {
  constructor() {}
  displayAreaDataFunc(list) {
    let cartona = "";
    if (list.length > 0) {
      if (list == areaDataList) {
        category = "a" ;
        list.forEach((e) => {
          cartona += `
                  <div class="col-lg-3 col-md-4 col-sm-6 text-white">
                  <div itemId= "${e.strArea}"  class="inner">
                    <div class="img d-flex justify-content-between align-items-center flex-column">
                    <i class="fa-4x fa-solid fa-house-laptop"></i>
                      <h2>${e.strArea}</h2>
                    </div>
                  </div>
                </div>
                  `;
        });
      } else if (list == allDataList) {
        category = "i" ;
        list.forEach((e) => {
          cartona += `
                      <div class="col-lg-3 col-md-4 col-sm-6 text-white">
                      <div itemId= "${e.strIngredient}"  class="inner">
                        <div class="img d-flex justify-content-between align-items-center flex-column">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h2 class="text-center">${e.strIngredient}</h2>
                        </div>
                      </div>
                    </div>
                      `;
        });
      } else if (list == categoriesDataList) {
        category = "c" ;
        list.forEach((e) => {
          cartona += `
                      <div class="col-lg-3 col-md-4 col-sm-6">
                      <div itemId= "${e.strCategory}"  class="inner">
                        <div class="img">
                          <img class="w-100" src="${e.strCategoryThumb}" alt="" />
                        </div>
                        <div "
                          class="layer text-center d-flex justify-content-center align-items-center flex-column"
                        >
                          <h3 class="h-25" >${e.strCategory}</h3>
                          <p class="h-50">${e.strCategoryDescription}</p>
                        </div>
                      </div>
                    </div>
                      `;
        });
      }
    }
    $(".items").html(cartona);
    //
    $(".inner").click(async function (e) {
        let getAllDataFilter = new GetAllDataFilter();
        let getIngredientsDataFilter = new GetIngredientsDataFilter();
        idmeal = $(this).attr("itemId");
        await getAllDataFilter.GetAllDataFilterFunc(category,idmeal);
        await getIngredientsDataFilter.GetIngredientsDataFilterFunc(idmeal);
        $(".itemsSction").css("display", "none");
        $(".contactSection").css("display", "none");

        if (category == "a"){
            let cartona = "";
            if (allDataListFilterList.length > 0) {
              allDataListFilterList.forEach((e) => {
                cartona += `
                      <div class="col-lg-3 col-md-4 col-sm-6">
                      <div itemId= "${e.idMeal}"  class="inner">
                        <div class="img">
                          <img class="w-100" src="${e.strMealThumb}" alt="" />
                        </div>
                        <div class="layer text-center d-flex justify-content-center align-items-center flex-column">
                          <h3 class="" >${e.strMeal}</h3>
                        </div>
                      </div>
                    </div>
                      `;
              });
              $(".items").html(cartona);
              $(".itemsSction").css("display", "block");        
            }
        }else if (category == "i") {
            // GetAreaDataFilterDetails
            let cartona = "";
            if (ingredientsDataFilterList.length > 0) {
                ingredientsDataFilterList.forEach((e) => {
                cartona += `
                      <div class="col-lg-3 col-md-4 col-sm-6">
                      <div itemId= "${e.idMeal}"  class="inner">
                        <div class="img">
                          <img class="w-100" src="${e.strMealThumb}" alt="" />
                        </div>
                        <div class="layer text-center d-flex justify-content-center align-items-center flex-column">
                          <h3 class="" >${e.strMeal}</h3>
                        </div>
                      </div>
                    </div>
                      `;
              });
              $(".items").html(cartona);
              $(".itemsSction").css("display", "block");        
            }
        }
      //
      $(".inner").click(async function (e) {

        let getAreaDataFilterDetails = new GetAreaDataFilterDetails();
        $(".itemsSction").css("display", "none");
        $(".contactSection").css("display", "none");
        $(".contactSection").css("display", "none");
        $(".searchSection").css("display", "none");
        idmeal = $(this).attr("itemId");
        await getAreaDataFilterDetails.GetAreaDataFilterDetailsFunc(idmeal);
        let strIngredient = [];
        let strMeasure = [];
        let newstrIngredient = [];
        let newstrMeasure = [];
        for (let i = 1; i <= 20; i++) {

          let test = "strIngredient"+i
          let test2 = (AreaDataFilterDetailsList[0][test]);
          strIngredient.push(test2);
          let test3 = "strMeasure"+i
          let test4 = (AreaDataFilterDetailsList[0][test3]);
          strMeasure.push(test4);

          // strMeasure.push(AreaDataFilterDetailsList[i].strMeasure+i);
        }  
        newstrIngredient = strIngredient.filter(function(currentValue, i, arr){return strIngredient[i].length>1});
        // newstrMeasure = strMeasure.filter(function(currentValue, i, arr){return strIngredient[i].length>0});
        newstrMeasure = strMeasure.filter(function(currentValue, index, arr){return strMeasure[index].length>1});
        let cartonaList = '' ;
        for (let i = 0 ; i<newstrIngredient.length ; i++) {
          if (newstrMeasure[i] == undefined) {
            newstrMeasure[i] = "" ;
          }
          cartonaList +=
          `
          <li class="alert alert-info m-2 p-1"> ${newstrMeasure[i]}  ${newstrIngredient[i]}</li>
  
          `
          
        };
  

        let cartonaIn = "";
    if (AreaDataFilterDetailsList[0].strTags != null) {
      let test = AreaDataFilterDetailsList[0].strTags.split(",");
      test.forEach((e) => {
        cartonaIn += `
                <li class="alert alert-danger m-2 p-1">${e}</li>
                `
      });
    }
        let cartona = "";
        AreaDataFilterDetailsList.forEach((e) => {
          cartona += `
            <div class=" col-md-4">
            <img class="" src="${e.strMealThumb}" alt="${e.strMeal}">
            <h2 class="text-white text-center w-75 m-auto">${e.strMeal}</h2>
        </div>
        <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${e.strInstructions != undefined ? `${e.strInstructions}` : ""}</p>
        <h3><span class="fw-bolder">Area : </span>${
          e.strArea != undefined ? `${e.strArea}` : ""
        }</h3>
        <h3><span class="fw-bolder">Category : </span>${
          e.strCategory != undefined ? `${e.strCategory}` : ""
        } </h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${cartonaList}
        </ul>
    
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${cartonaIn}
        </ul>
    
        <a target="_blank" href="${
          e.strSource
        }" class="btn btn-success">Source</a>
        <a target="_blank" href="${
          e.strYoutube
        }" class="btn btn-danger">Youtube</a>
    </div>
            `;
        });
        $(".detailsSctionRow").html(cartona);
        $(".detailsSction").css("display", "block");
      });
    });
  }
}
