// Our joan object.
var joan = {
  "Real Name": "Jehanne la Pucelle.",
  "Grew Up Where": "Domremy, a village in northeastern France.",
  "Known For": "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
  "Scars": "Took an arrow to the shoulder and a crossbow bolt to the thigh while liberating Paris.",
  "Symbolism": "Stands for French unity and nationalism."
};

// We can then access the properties using the below approach:
console.log(joan["Real Name"]);
console.log(joan["Grew Up Where"]);


// If the "property" is only one word -- it's even easier.
console.log(joan.Symbolism);
console.log(joan.Scars);

// But, it's still possible to use brackets.
console.log(joan["Symbolism"]);
console.log(joan["Scars"]);

// Always lowercase your object keys and keep them one word camel cased.
// We did it this way to show the relationship between the arrays and the object.
