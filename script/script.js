function convertToRoman(num = document.getElementById("decimal").value) {
    var romNum = "";
    while(num/1000 >= 1){
      num -= 1000;
      romNum += "M";
    }
    while(num/900 >= 1){
      num -= 900;
      romNum += "CM";
    }
    while(num/500 >= 1){
      num = num-500;
      romNum += "D";
    }
    while(num/400 >= 1){
      num = num-400;
      romNum += "CD";
    }
    while(num/100 >= 1){
      num = num-100;
      romNum += "C";
    } 
    while(num/90 >= 1){
      num = num-90;
      romNum += "XC";
    }
    while(num/50 >= 1){
      num = num-50;
      romNum += "L";
    }
    while(num/40 >= 1){
      num = num-40;
      romNum += "XL";
    }
    while(num/10 >= 1){
      num = num-10;
      romNum += "X";
    }
    while(num/9 >= 1){
      num = num-9;
      romNum += "IX";
    }
    while(num/5 >= 1){
      num = num-5;
      romNum += "V";
    }
    while(num/4 >= 1){
      num = num-4;
      romNum += "IV";
    }
    while(num/1 >= 1){
      num = num-1;
      romNum += "I";
    }
    
    return(document.getElementById("romano").value = romNum);
}
