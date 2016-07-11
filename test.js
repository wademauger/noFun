'use strict';

let nofun = require('./index');
let Jasmine = require('jasmine');
let jasmine = new Jasmine();

describe('noFun\'s KAYLA member', function(){
  it('should be "NOT FUN"', function(){
    expect(nofun.KAYLA).toBe('NOT FUN');
    expect(nofun.KAYLA).not.toBe('FUN');
  });
});

describe('noFun\'s FUN member', function(){
  it('should be "NOT KAYLA"', function(){
    expect(nofun.FUN).toBe('NOT KAYLA');
    expect(nofun.FUN).not.toBe('KAYLA');
  });
});

describe('noFun\'s isFun function', function(){
  it('should be false if a string is "Kayla"', function(){
    expect(nofun.isFun('kayla')).toBe(false);
    expect(nofun.isFun('Kayla')).toBe(false);
    expect(nofun.isFun('KAYLA')).toBe(false);
  });
  it('should be true if a string is not "Kayla"', function(){
    expect(nofun.isFun('timbrook')).toBe(true);
    expect(nofun.isFun('Timbrook')).toBe(true);
    expect(nofun.isFun('TIMBROOK')).toBe(true);
  });
});

jasmine.execute();
