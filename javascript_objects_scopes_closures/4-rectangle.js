#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // If w or h is equal to 0 or not a positive integer, create an empty object
        return {};
      }
      this.width = w;
      this.height = h;
    }
  
    print() {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  
    rotate() {
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  