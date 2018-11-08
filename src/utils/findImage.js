const findImage =  (text) => {
  if(typeof text === "string"){
    let regExp = /<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>/i;

    return text.match(regExp);
  }
  else{
    return null;
  }
};

export default findImage;