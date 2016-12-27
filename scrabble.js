
function scrabble (inputString, outputString) {
  inputString = inputString.split('').sort()
  outputString = outputString.split('').sort()
  var inputObj = {}
  var outputObj = {}

  for (var i = 0; i < inputString.length; i++){
    if(inputObj[inputString[i]] >= 1)
    { inputObj[inputString[i]] = inputObj[inputString[i]] + 1;
      //console.log('1st block' + inputObj);
    }
    else
    {  inputObj[inputString[i]] = 1;
       //console.log('2nd block' + inputObj);
    }
    }
    console.log(inputObj);
    for (var j = 0; j < outputString.length; j++){
      if(outputObj[outputString[j]] >= 1)
      { outputObj[outputString[j]] = outputObj[outputString[j]] + 1;
        //console.log('1st block' + inputObj);
      }
      else
      {  outputObj[outputString[j]] = 1;
         //console.log('2nd block' + inputObj);
      }
      }
    console.log(outputObj);

    for (var n = 0; n < outputString.length; n++) {
      var c = false;
      if (outputObj[outputString[n]] <= inputObj[inputString[n]]) {
        
        //console.log(n + ' true');
        c = true
      } else {
        //console.log(n + ' false');
        c = false
      }
    }console.log(c);

}

scrabble("eegreenvr", "evergreen")
