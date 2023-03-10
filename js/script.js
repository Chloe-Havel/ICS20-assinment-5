// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-assinment-5/sw.js", {
    scope: "/ICS20-assinment-5/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  let counter = 0
  let answer = 0

  const loopNumber = parseInt(document.getElementById("loop-number").value)

  while (counter < loopNumber) {
    answer = answer + (4 / (1 + 2 * counter)) * (-1) ** counter
    counter++
  }

  // output
  document.getElementById("answer").innerHTML =
    " Your answer is " + " = " + answer
}
