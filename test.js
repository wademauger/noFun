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

describe('noFun\'s isNotFun function', function(){
  it('should be false if a string is "Kayla"', function(){
    expect(nofun.isNotFun('kayla')).toBe(true);
    expect(nofun.isNotFun('Kayla')).toBe(true);
    expect(nofun.isNotFun('KAYLA')).toBe(true);
  });
  it('should be true if a string is not "Kayla"', function(){
    expect(nofun.isNotFun('timbrook')).toBe(false);
    expect(nofun.isNotFun('Timbrook')).toBe(false);
    expect(nofun.isNotFun('TIMBROOK')).toBe(false);
  });
});

describe('noFun\'s hasFun() String enhancement', function(){
  it('should return false if \'kayla\' is in a String', function(){
    expect('kayla'.hasFun()).toBe(false);
    expect('Kayla'.hasFun()).toBe(false);
    expect('KAYLA'.hasFun()).toBe(false);
    expect('Kayla is from vermont'.hasFun()).toBe(false);
    expect('Kayla likes coffee'.hasFun()).toBe(false);
    expect('Our president is KAYLA (all hail)'.hasFun()).toBe(false);
  });
  it('should return true if \'kayla\' is not in a String', function(){
    expect('timbrook'.hasFun()).toBe(true);
    expect('Timbrook'.hasFun()).toBe(true);
    expect('TIMBROOK'.hasFun()).toBe(true);
    expect('Timbrook is from new york'.hasFun()).toBe(true);
    expect('Timbrook probably likes coffee too'.hasFun()).toBe(true);
    expect('Our vice president is TIMBROOK (respect)'.hasFun()).toBe(true);
  });
});

describe('noFun\'s hasFun() Array enhancement', function(){
  it('should return true if there are not any \'kayla\'s in an Array', function(){
    expect(['Tim', ' ', 'Brook'].hasFun()).toBe(true);
    expect(['Vice', 'President'].hasFun()).toBe(true);
    expect(['Michael', 'Timbrook'].hasFun()).toBe(true);
  });
  it('should return false if there are one or more \'kayla\'s in an Array', function(){
    expect(['President', 'Kayla'].hasFun()).toBe(false);
    expect(['kayla', 'is', 'from', 'Vermont'].hasFun()).toBe(false);
    expect(['KAYLA', 'is', 'going', 'to', 'hate', 'us'].hasFun()).toBe(false);
  });
});

describe('noFun\'s hasFun() Object enhancement', function(){
  it('should return false if \'kayla\' is anywhere in an object', function(){
    let swag = {kayla: 'isn\'t fun'};
    let yolo = {notAnyFun: 'Kayla'};
    let neat = {hasNoFun: ['has', 'to', 'be', 'kayla']};
    let meme = {doesntHaveFun: {whois: 'KAYLA'}};
    expect(swag.hasFun()).toBe(false);
    expect(yolo.hasFun()).toBe(false);
    expect(neat.hasFun()).toBe(false);
    expect(meme.hasFun()).toBe(false);
  });
  it('should return true if an object has no reference to any \'kayla\'', function(){
    let swag = {timbrook: 'is fun'};
    let yolo = {tonsOfFun: 'Timbrook'};
    let neat = {hasSoMuchFun: ['has', 'to', 'be', 'Tim', ' ', 'Brook']};
    let meme = {doesntNotHaveFun: {whois: 'TIMBROOK'}};
    expect(swag.hasFun()).toBe(true);
    expect(yolo.hasFun()).toBe(true);
    expect(neat.hasFun()).toBe(true);
    expect(meme.hasFun()).toBe(true);
  });
});

jasmine.execute();
