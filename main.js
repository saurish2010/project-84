canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keycode;
    console.log(keypressed);
    if((keypressed>=97 && keypressed<=122)|| (keypressed>=65 && keypressed<=90))
    {
        alphabetkey();
        document.getElementById("d1").innerHTML="You pressed an Alphabet Key";
        console.log("albhabetkey")
        function alphabetkey()
{
    img_image="";
    }
{
    if(keypressed>=48 && keypressed<=57)
    {
        numberkey();
        document.getElementById("d1").innerHTML="You pressed an Number Key";
        console.log("numberkey")
        function numberkey()
{
    img_image="";
}
    }
}
}
    
    if(keypressed>=37 && keypressed<=40)
    {
        arrowkey();
        document.getElementById("d1").innerHTML="You pressed an Arrow Key";
        console.log("arrowkey")
        function arrowkey()
{
    img_image="";
}
    }
    
}
    
    if((keypressed=17) (keypressed=18) (keypressed=27))
    {
        Specialkey();
        document.getElementById("d1").innerHTML="You pressed an Special Key";
        console.log("Specialkey")
        function Specialkey()
{
    img_image="";
}
    }
    


