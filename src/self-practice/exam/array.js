function reverse(str) {
    if(str.length ==0)
    return "";
    else
    return reverse(str.substring(1))+str.charAt(0);
}

console.log(reverse("anil"));

console.log("Anil".substring(1));