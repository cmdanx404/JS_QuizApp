const quizData = [
  {
    question: "What is the output of: console.log(typeof null);",
    options: ["\"null\"", "\"undefined\"", "\"object\"", "\"number\""],
    answer: "\"object\""
  },
  {
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: ["String", "Number", "Object", "Boolean"],
    answer: "Object"
  },
  {
    question: "What will the following code log? console.log(a); var a = 5;",
    options: ["undefined", "5", "ReferenceError", "null"],
    answer: "undefined"
  },
  {
    question: "Variables declared with let and const are:",
    options: [
      "Hoisted and initialized as undefined",
      "Not hoisted",
      "Hoisted but in a temporal dead zone",
      "Always global"
    ],
    answer: "Hoisted but in a temporal dead zone"
  },
  {
    question: "What is the output? const person = { name: 'Alice', sayName: function() { console.log(this.name); } }; const say = person.sayName; say();",
    options: ["Alice", "undefined", "null", "Error"],
    answer: "undefined"
  },
  {
    question: "What will this return? (function() { return typeof arguments; })();",
    options: ["\"array\"", "\"object\"", "\"arguments\"", "\"undefined\""],
    answer: "\"object\""
  },
  {
    question: "What is the correct way to handle asynchronous code?",
    options: ["setTimeout", "callbacks", "Promises", "async/await", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the output? console.log('Start'); setTimeout(() => console.log('Middle'), 0); console.log('End');",
    options: [
      "Start → Middle → End",
      "Start → End → Middle",
      "Middle → Start → End",
      "End → Start → Middle"
    ],
    answer: "Start → End → Middle"
  },
  {
    question: "What does NaN === NaN return?",
    options: ["true", "false", "undefined", "Error"],
    answer: "false"
  },
  {
    question: "Which one is a correct way to create a promise?",
    options: [
      "let p = new Promise();",
      "let p = Promise();",
      "let p = new Promise((resolve, reject) => {});",
      "let p = Promise.create();"
    ],
    answer: "let p = new Promise((resolve, reject) => {});"
  },
  {
    question: "What is the output of closure example? function outer(){let count=0; return function inner(){ count++; return count;}} const fn=outer(); console.log(fn()); console.log(fn());",
    options: ["1, 1", "0, 1", "1, 2", "2, 3"],
    answer: "1, 2"
  },
  {
    question: "What is the output of event loop example? console.log('A'); setTimeout(()=>console.log('B'),0); Promise.resolve().then(()=>console.log('C')); console.log('D');",
    options: [
      "A → B → C → D",
      "A → C → D → B",
      "A → D → B → C",
      "A → D → C → B"
    ],
    answer: "A → C → D → B"
  },
  {
    question: "In JavaScript, every object has a hidden property called:",
    options: ["__parent__", "__proto__", "prototype", "constructor"],
    answer: "__proto__"
  },
  {
    question: "What will this print? const obj = { name:'JS', arrow:()=>console.log(this.name), normal:function(){console.log(this.name);} }; obj.arrow(); obj.normal();",
    options: ["undefined, JS", "JS, JS", "JS, undefined", "undefined, undefined"],
    answer: "undefined, JS"
  },
  {
    question: "What is the result of: 0 == '0'; 0 === '0';",
    options: ["true, true", "true, false", "false, false", "false, true"],
    answer: "true, false"
  },
  {
    question: "What is the output of destructuring example? const {a:x=10, b:y=20} = {a:5}; console.log(x,y);",
    options: ["10 20", "5 20", "5 undefined", "undefined 20"],
    answer: "5 20"
  },
  {
    question: "What is the result of spread operator? const arr=[1,2,3]; const newArr=[...arr,4,5]; console.log(newArr);",
    options: ["[1,2,3,[4,5]]", "[1,2,3,4,5]", "[4,5,1,2,3]", "Error"],
    answer: "[1,2,3,4,5]"
  },
  {
    question: "Which is true about Map vs Object in JS?",
    options: [
      "Maps can only use strings as keys.",
      "Objects can use functions as keys.",
      "Maps can use objects as keys.",
      "Objects are always faster than Maps."
    ],
    answer: "Maps can use objects as keys."
  },
  {
    question: "What does this print? console.log([1,2,3].map(num => { if(num%2===0) return; return num*2; }));",
    options: ["[2, undefined, 6]", "[2, null, 6]", "[2, , 6]", "[2, 0, 6]"],
    answer: "[2, undefined, 6]"
  },
  {
    question: "What does IIFE stand for in JavaScript?",
    options: [
      "Immediately Invoked Function Expression",
      "Inline Iterated Function Execution",
      "Instant Internal Function Expression",
      "Internal Invoked Functional Event"
    ],
    answer: "Immediately Invoked Function Expression"
  },
  {
    question: "What is the output of generator example? function* gen(){yield 1; yield 2; return 3;} const g=gen(); console.log(g.next()); console.log(g.next()); console.log(g.next());",
    options: [
      "{value:1,done:false}, {value:2,done:false}, {value:3,done:false}",
      "{value:1,done:false}, {value:2,done:false}, {value:3,done:true}",
      "{value:1,done:false}, {value:2,done:true}, {value:3,done:true}",
      "Error"
    ],
    answer: "{value:1,done:false}, {value:2,done:false}, {value:3,done:true}"
  },
  {
    question: "What does the new keyword do in JavaScript?",
    options: [
      "Creates a new function",
      "Creates a new execution context",
      "Creates a new object linked to a constructor’s prototype",
      "Creates a new variable scope"
    ],
    answer: "Creates a new object linked to a constructor’s prototype"
  },
  {
    question: "What will this return? function curry(a){ return function(b){ return a+b; }} console.log(curry(5)(10));",
    options: ["5", "10", "15", "undefined"],
    answer: "15"
  },
  {
    question: "What is the output? async function test(){ return 5; } test().then(console.log);",
    options: ["undefined", "5", "Promise {5}", "Error"],
    answer: "5"
  },
  {
    question: "Which method creates a shallow copy of an object?",
    options: [
      "JSON.parse(JSON.stringify(obj))",
      "Object.assign({}, obj)",
      "structuredClone(obj)",
      "cloneDeep(obj)"
    ],
    answer: "Object.assign({}, obj)"
  }
];
