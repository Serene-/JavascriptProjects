const array=["everything","like Art","love","challenging"];
const dash=document.getElementById("dash");

let IsVisible=true;
let text="";

function delay(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function changeText()
{
    var i=0;
    while(true)
    {
      
        text=array[i];
        document.getElementById("newText").innerText="";
   
        for(let j=0;j<text.length;j++)
            {

                
                document.getElementById("newText").innerText+=text[j];
                await delay(400);
                    if(IsVisible)
                    {
                        dash.style.visibility="hidden";
                        IsVisible=false;
                        await delay(200);
                    }
                    else
                    {
                        dash.style.visibility="visible";
                        IsVisible=true;
                        await delay(200);
                    }
            }
        var length=text.length;
        for(let k=0;k<length;k++)
            {
                text=text.substring(0,text.length-1);
                document.getElementById("newText").innerText=text;
                await delay(400);
                if(IsVisible)
                    {
                        dash.style.visibility="hidden";
                        IsVisible=false;
                        await delay(200);
                    }
                    else
                    {
                        dash.style.visibility="visible";
                        IsVisible=true;
                        await delay(200);
                    }
            }
        i++;
        if(i>=array.length) i=0;
    }
}
changeText();   
