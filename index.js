/*
 * Name: Vivek Hegde
 * Date: July 15, 2022
 * Section: CSE 154 AB
 *
 * This is the JS to implement the UI for my To-do list web application for CP-2.
 * It has functions defined to add a new task (through both the add button and the enter key),
 * strike through the task on click,and removal of the task on double click.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addToList);
    id("input-box").addEventListener("keydown", function(keypressed) {
      if (keypressed.key === 'Enter') {
        addToList();
      }
    });
  }

  /**
   * Adds a new task to the to-do list
   */
  function addToList() {
    let newTask = gen("p");
    newTask.classList.add("item");

    let task = id("input-box").value;
    if (task !== "") {
      newTask.textContent = task;
      id("to-dos").appendChild(newTask);
      id("input-box").value = "";
    }

    newTask.addEventListener("click", strikeTask);
    newTask.addEventListener("dblclick", removeTask);
  }

  /**
   * strikes the task when invoked (on-click)
   */
  function strikeTask() {
    this.classList.toggle("finished");
  }

  /**
   * removes the task when invoked (double-click)
   */
  function removeTask() {
    this.remove();
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * creates and returns a new empty DOM node representing an element of that tagName type
   * @param {string} tagName - HTML element type.
   * @returns {object} - A new DOM object representing an element of that tagName type
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();