let userName = prompt("Lütfen isminizi yazınız:");
let myName = document.querySelector("#myName");

// Asagida 3 farkli yontemle kullanici adini ekrana yazdirdim.

// Ternary Operator kullanimi
userName.length > 0
  ? (myName.innerHTML = userName)
  : alert("Lütfen kullanıcı adını giriniz.");

// Switch-Case kullanimi
/*
switch (userName.length > 0) {
  case true:
    myName.innerHTML = userName;
    break;
  case false:
    alert("Lütfen bilginizi giriniz.");
    break;
}
*/

// if-else kullanimi
/*
if (userName.length > 0) {
      myName.innerHTML = userName;
    } else {
      alert("Lütfen bilginizi giriniz.");
    }
*/
// --------------------------------------
// Saat kodlarini asagida verdim.

let clock = document.querySelector("#myClock");

function showTime() {
// daysOfWeek, hafanin günlerini yazdirdim. Pazardan başlamamin sebebi getDay metodu 0. index olarak pazari aliyor.
  let daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let currentDate = new Date(); //güncel tarihi verecek
  let currentSecond = currentDate.getSeconds().toString().padStart(2, "0"); 
  /*getSecond, saniyeyi; toString, padstart için gerekli çünkü padstart string degerle calisiyor; padStart iki parametre aliyor. birincisi girilen degerin uzunlugu, ikincisi basina eklenen deger. Sondan iki degeri aliyor. getMinutes vs. anlarsiniz artik.*/
  let currentMinute = currentDate.getMinutes().toString().padStart(2, "0");
  let currentHour = currentDate.getHours().toString().padStart(2, "0");
  
  let currentDay = daysOfWeek[currentDate.getDay()]; // getDay güncel tarihin degerini donecek pazarsa 0, pazaretesi ise 1 vs.

  //textContent ile innerHTML farkı: textContent sadece metin icerigini, innerHTML ile elementlerin iceigini de degilsirebilirsiniz, ekleme yapabilirsiniz vs.
  clock.textContent =
    currentHour + ":" + currentMinute + ":" + currentSecond + " " + currentDay;
}

// setInterval Fonksiyonu 2 parametre aliyor, ilk parametreye uygulayacağımız fonksiyonu, ikinciye kaç milisaniyede yenileyeceğimizi yazıyoruz. Bu sayede zaman surekli guncel kaliyor.
setInterval(showTime, 1000);
