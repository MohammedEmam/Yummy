import {
  GetSearchData,
  GetAllData,
  SearchByName,
} from "../JS/getData.module.js";

let searchData = new GetSearchData();
let getAllData = new GetAllData();

$(function () {
  $(".loading").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});

// داتا الصفحه الرئيسيه
searchData.getSearchData();
// فتح وقفل السايد بار
$(".openSideNavMenu").click(function (e) {
  if ($(".openSideNavMenuI").hasClass("fa-bars")) {
    $(".openSideNavMenuI").toggleClass("fa-xmark");
    $(".openSideNavMenuI").toggleClass("fa-bars");
    $(".sideLinks").animate({ left: "250px" }, 1000);
    $(".sideOpen").animate({ left: "250px" }, 1000);
    $(".sideLinks ul li").animate({ top: "0" }, 900);
    $(".sideNavMenu2").css("z-index", "2");
  } else if ($(".openSideNavMenuI").hasClass("fa-xmark")) {
    $(".openSideNavMenuI").toggleClass("fa-xmark");
    $(".openSideNavMenuI").toggleClass("fa-bars");
    $(".sideLinks").animate({ left: "0px" }, 1000);
    $(".sideOpen").animate({ left: "0" }, 1000);
    $(".sideLinks ul li").animate({ top: "300" }, 900);
    $(".sideNavMenu2").css("z-index", "1");
  }
});

// فتح صفحه السيرش
$(".Search").click(function (e) {
  // let searchByName = new SearchByName();
  // await searchByName.searchByNameFunc()
  $(".openSideNavMenuI").toggleClass("fa-xmark");
  $(".openSideNavMenuI").toggleClass("fa-bars");
  $(".sideLinks").animate({ left: "0px" }, 1000);
  $(".sideOpen").animate({ left: "0" }, 1000);
  $(".sideLinks ul li").animate({ top: "300" }, 900);
  $(".sideNavMenu2").css("z-index", "1");
  $(".itemsSction").css("display", "none");
  $(".detailsSction").css("display", "none");
  $(".contactSection").css("display", "none");
  // $(".itemsSction").css("display" , "block");
  $(".searchSection").css("display", "block");
});

// فتح صفحه contactus
$(".contactUS").click(function (e) {
  $(".openSideNavMenuI").toggleClass("fa-xmark");
  $(".openSideNavMenuI").toggleClass("fa-bars");
  $(".sideLinks").animate({ left: "0px" }, 1000);
  $(".sideOpen").animate({ left: "0" }, 1000);
  $(".sideLinks ul li").animate({ top: "300" }, 900);
  $(".sideNavMenu2").css("z-index", "1");
  $(".itemsSction").css("display", "none");
  $(".detailsSction").css("display", "none");
  $(".searchSection").css("display", "none");
  $(".contactSection").css("display", "block");
});

function clickAllCategory(category) {
  $(".loading").css("display", "flex");
  $(function () {
    $(".loading").fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
  });
  $(".openSideNavMenuI").toggleClass("fa-xmark");
  $(".openSideNavMenuI").toggleClass("fa-bars");
  $(".sideLinks").animate({ left: "0px" }, 1000);
  $(".sideOpen").animate({ left: "0" }, 1000);
  $(".sideLinks ul li").animate({ top: "300" }, 900);
  $(".sideNavMenu2").css("z-index", "1");
  $(".detailsSction").css("display", "none");
  $(".searchSection").css("display", "none");
  $(".contactSection").css("display", "none");
  $(".itemsSction").css("display", "block");

  getAllData.GetAllDataFunc(category);
}

$(".ingredients").click(function () {
  clickAllCategory("i");
});

$(".categories").click(function () {
  clickAllCategory("c");
});

$(".area").click(function () {
  clickAllCategory("a");
});

// $(".closeDetails").click(function (e) {
//     // if (){

//     // }

//     $(".itemsSction").css("display" , "block");
//     let test = $(".itemsSction").css("display");
//     console.log(test);
//     $(".detailsSction").css("display" , "none");

// });

//
let rxName = /^[a-zA-Z ]{2,30}$/;
let rxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let rxPhone = /^01[0125][0-9]{8}$/;
let rxAge = /^(1[89]|[2-9]\d)$/;
let rxPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function Validate(rx, er, valedation) {
  if (rx.test(er)) {
    $(`.${valedation}`).css("display", "none");

    return true;
  }
  $(`.${valedation}`).css("display", "block");
  return false;
}

$(".name").keyup(function () {
  Validate(rxName, $(".name").val(), "validname");
  chickValidation();
});
$(".email").keyup(function () {
  Validate(rxEmail, $(".email").val(), "validemail");
  chickValidation();
});
$(".phone").keyup(function () {
  Validate(rxPhone, $(".phone").val(), "validphone");
  chickValidation();
});
$(".age").keyup(function () {
  Validate(rxAge, $(".age").val(), "validage");
  chickValidation();
});
$(".password").keyup(function () {
  Validate(rxPass, $(".password").val(), "validpassword");
  chickValidation();
});
$(".repassword").keyup(function () {
  Validate(rxPass, $(".repassword").val(), "validrepassword");
  chickValidation();
});

function chickValidation(){
if (
  Validate(rxName, $(".name").val(), "validname") == true &&
  Validate(rxEmail, $(".email").val(), "validemail") == true &&
  Validate(rxPhone, $(".phone").val(), "validphone") == true &&
  Validate(rxAge, $(".age").val(), "validage") == true &&
  $(".password").val() == $(".repassword").val() &&
  Validate(rxPass, $(".password").val(), "validpassword") == true &&
  Validate(rxPass, $(".password").val(), "validpassword") == true 

) {
    $(".submit").removeAttr("disabled");
}else {
    $(".buttonDiv").html(`<button class="btn btn-outline-danger mx-auto d-block mt-5 submit" disabled >Submit </button>`);
}
}
