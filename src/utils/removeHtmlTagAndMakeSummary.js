const removeHtmlTagAndMakeSummary =  (text, chop) => {
  if(typeof text === "string"){
    if(text.indexOf("<") != -1){
      var s = text.split("<");
      for(var i = 0; i < s.length; i++){
        if(s[i].indexOf(">") != -1){
          s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length);
        }
      }
      text = s.join("");
    }
    chop = (chop < text.length - 1) ? chop : text.length - 2;
    while(text.charAt(chop - 1) != ' ' && text.indexOf(' ', chop) != -1) chop++;
    text = text.substring(0, chop - 1);
    return text + '...';
  }
  else{
    return '';
  }
};

export default removeHtmlTagAndMakeSummary;