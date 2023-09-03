import {
  DisplaySearchData,
  DisplayCategoriesData,
  idmeal,
  DisplayAreaData,
  DisplaySearchInputData,
} from "./displayData.module.js";
export let searchDataList = [];
export let categoriesDataList = [];
export let categoriesDataFilterList = [];
export let allDataListFilterList = [];
export let areaDataList = [];
export let AreaDataFilterDetailsList = [];
export let allDataList = [];
export let ingredientsDataFilterList = [];
export let searchByNameList = [];

// Get Home Data
let display = new DisplaySearchData();
export class GetSearchData {
  constructor() {}
  async getSearchData(
    date = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  ) {
    $(".loading").css("display", "flex");
    try {

      let req = await fetch(date);
      let data = await req.json();
      let allData = data.meals;
      searchDataList = allData;
      display.displayData(searchDataList);

    }catch (error) {
          }

    $(function () {
      $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
    });
  }
}

// // Get Category Data

let displayCategoriesData = new DisplayCategoriesData();

export class GetCategoriesData {
  constructor() {}
  async GetCategoriesDataFunc() {
    $(".loading").css("display", "flex");
    try {
      let req = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      let data = await req.json();
      let allData = data.categories;
      categoriesDataList = allData;
      displayCategoriesData.displayCategoriesDataFunc(categoriesDataList);


    }catch (error) {
          }

    $(function () {
      $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
    });
  }
}
let getCategoriesData = new GetCategoriesData();

// // Get Area, Ingredients Data Filter
export class GetAllDataFilter {
  constructor() {}
  async GetAllDataFilterFunc(c, idmeal) {
    $(".loading").css("display", "flex");

    try {
      let req = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${c}=${idmeal}`
      );
      let data = await req.json();
      let allData = data.meals;
      allDataListFilterList = allData;


    }catch (error) {
          }

    $(function () {
      $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
    });
  }
}
// // Get Ingredients Data
export class GetIngredientsDataFilter {
  constructor() {}
  async GetIngredientsDataFilterFunc(idmeal) {
    $(".loading").css("display", "flex");
    try {
      let req = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${idmeal}`
      );
      let data = await req.json();
      let allData = data.meals;
      ingredientsDataFilterList = allData;


    }catch (error) {
          }


    $(function () {
      $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
    });
  }
}

// // Get Ingredients Data  Filter
export class GetIngredientDataFilter {
  constructor() {}
  async GetIngredientDataFilterFunc(idmeal) {
    $(".loading").css("display", "flex");
    try {
      let req = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast${idmeal}`
      );
      let data = await req.json();
      let allData = data.meals;
      allDataListFilterList = allData;


    }catch (error) {
          }

    $(function () {
      $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
    });
  }
}

// // Get Category , Area Data

let displayAreaData = new DisplayAreaData();
export class GetAllData {
  constructor() {}
  async GetAllDataFunc(category) {
    $(".loading").css("display", "flex");

    let req = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?${category}=list`
    );
    let data = await req.json();
    let allData = data.meals;
    if (category == "c") {
      getCategoriesData.GetCategoriesDataFunc();
    } else if (category == "a") {
      let allData = data.meals;
      areaDataList = allData;
      displayAreaData.displayAreaDataFunc(areaDataList);
    } else if (category == "i") {
      let allData = data.meals;
      allDataList = allData;
      displayAreaData.displayAreaDataFunc(allDataList);
    }
    $(function () {
      $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
    });
  }
}

// // Get Area, Ingredients Data

export class GetAreaDataFilterDetails {
  constructor() {}
  async GetAreaDataFilterDetailsFunc(featch) {
    $(".loading").css("display", "flex");
    try {

      let req = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${featch}`
      );
      let data = await req.json();
      let allData = data.meals;
      AreaDataFilterDetailsList = allData;

    }catch (error) {
          }

    // let displayDetailsAreaDataFilter = new DisplayDetailsAreaDataFilter
    // displayDetailsAreaDataFilter.DisplayDetailsAreaDataFilterFunc();

    $(function () {
      $(".loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
      });
    });
  }
}


let displaySearchInputData = new DisplaySearchInputData()
export class SearchByName {
  constructor() {}
  async searchByNameFunc(val) {

        try {
            $(".loading").css("display", "flex");
            let req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
            let date = await req.json();
            let allData = date.meals;
            searchByNameList = allData;
            displaySearchInputData.displaySearchInputDataFunc(searchByNameList);
              } catch (error) {
          }
          $(function () {
            $(".loading").fadeOut(2000, function () {
              $("body").css("overflow", "auto");
            });
          });
  }
}
export class SearchByFirstLetter {
  constructor() {}
  async searchByFirstLetterFunc(val) {


        try {
            $(".loading").css("display", "flex");

            let req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`);
            let date = await req.json();
            let allData = date.meals;
            searchByNameList = allData;
            displaySearchInputData.displaySearchInputDataFunc(searchByNameList);
              } catch (error) {
          }
          $(function () {
            $(".loading").fadeOut(2000, function () {
              $("body").css("overflow", "auto");
            });
          });

  }
}


let searchByName = new SearchByName();

    $(".searchByName").keyup(function () {
        let val = $(".searchByName").val();
        searchByName.searchByNameFunc(val);
      });
      
      let searchByFirstLetter = new SearchByFirstLetter();
    $(".searchByFirstLetter").keyup(function () {

        let val = $(".searchByFirstLetter").val();
        searchByFirstLetter.searchByFirstLetterFunc(val);
      });



// export class GetAreaData {
//   constructor() {}
//   async GetAreaDataFunc(category) {
//         $(".loading").css("display" , "flex")
//         $(function(){
//             $(".loading").fadeOut(2000 , function(){
//                 $("body").css("overflow", "auto");;
//             });

//         })
//         let req = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${category}=list`);
//         let data = await req.json();
//         let allData = data.meals;
//         areaDataList = allData;
//         displayAreaData.displayAreaDataFunc(areaDataList);
//   }
// }
