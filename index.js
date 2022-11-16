// switch case

// // const profesi = "guru";
// // let result = "";

// // switch (profesi) {
// //   case "guru":
// //     result = "mengajar";
// //     break;
// //   case "pelaut":
// //     result = "berlayar";
// //     break;
// //   case "polisi":
// //     result = "menilang";
// //   default:
// //     result = "tidak Tahu";
// // }

// // console.log(result);

// const tummy = "penuh";
// let result = "";

// switch (tummy) {
//   case "lapar":
//     result = "makan";
//     break;
//   case "kosong":
//     result = "asam lambung naik";
//     break;
//   case "penuh":
//     result = "ngantuk";
//     break;
//   default:
//     result = "tidur";
// }

// console.log(result);

// ternary operator

// let isButton = true;

// let result = isButton ? "tampilkan sidebar" : "sembunyikan sidebar";

// console.log(result);

// looping

// for (let i = 5; i >= -5; i--) {
//   console.log(i);
// }

for (let i = 1; i <= 15; i++) {
  console.log(i);
  let num = i;

  if (num % 15 == 0) {
    console.log("Fizz Buzz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
