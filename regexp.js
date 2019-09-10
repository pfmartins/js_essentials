let regExp = /paulo@gmail.com/;
let regExpDiff = /paulo@gmail.comm/;
let regExpTest = /^[a-z][a-z][a-z][a-z]@gmail\.com$/;
let regExpTest2 = /^[a-z]+@gmail\.com$/;
let regExpTest3 = /^\w+@\w+(\.\w{2,3})+$/;
let result = regExp.test('paulo@gmail.com')
let resultExec = regExp.exec('paulo@gmail.com')

console.log(`regExp.test('paulo@gmail.com') -> `, regExp.test('paulo@gmail.com'))
console.log(`regExp.exec('paulo@gmail.com') -> `, regExp.exec('paulo@gmail.com'))

console.log(`regExpDiff.exec('paulo@gmail.com') -> `, regExpDiff.exec('paulo@gmail.com'))
console.log(`regExpTest.exec('paul@gmail.com') -> `, regExpTest.exec('paul@gmail.com'))

console.log(`regExpTest2.exec('blakenorm@gmail.com') -> `, regExpTest2.exec('blakenorm@gmail.com'))

console.log(`regExpTest3.exec('blakenorm@hotmail.com.br') -> `, regExpTest3.exec('blakenorm@hotmail.com.br'))