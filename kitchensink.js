/*

Bonus

If it is an array or object, javascript will return it's type as object, you can use the isArray Method to check if it is an array and complete the following extensions:
array: loop through each element and console log it
object: loop through each key and console log the value there
null: is also technically an object so you can work out how to check for that
Super Bonus

In the above where you are given an array/object, rather than console log the result, call the kitchenSink function again with each element in the array passed in as an arguement - this is called Recursion btw, it's considered pretty advanced stuff :-)
*/

function kitchenSink (entry) {
  if (typeof entry === "string") {
    console.log(entry);
  }
  if (typeof entry === "number") {
    console.log(Math.pow(entry, 2));
  }
  if (typeof entry === "boolean") {
    if (entry === 'true') {
      console.log('yes');
    } else {console.log('no');}
  }
  if (typeof entry === "function") {
    entry ();
  }
  if (typeof entry === "undefined") {
    console.log('Bad data passed!');
  }
  if (typeof entry === "object") {
    if(entry == null) {
      console.log('entry is null');
      return; }
    if (Array.isArray(entry)) {
      for (var i = 0; i < entry.length; i++) { kitchenSink(entry[i]);  }
    }
    else { for (var key in entry) { kitchenSink(entry[key]);  }
    }
  }
}

//function sum () { console.log(10 + 12) }

kitchenSink()
