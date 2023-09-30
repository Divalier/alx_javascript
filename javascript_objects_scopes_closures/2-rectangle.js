#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
      // Check if w or h is not defined, or w or h is equal to 0, or not a positive integer
      if (w === undefined || h === undefined || w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
          // If any of the conditions is met, create an empty object
          return {};
      }

      this.width = w;
      this.height = h;
  }
}

  
  module.exports = Rectangle;
  
  