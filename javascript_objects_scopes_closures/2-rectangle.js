#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
      if (!w || !h || w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)) {
          // If w or h is equal to 0 or not a positive integer, create an empty object
          return {};
      }
      
      // Initialize instance attributes
      this.width = w;
      this.height = h;
  }
}
  
  module.exports = Rectangle;
  
  