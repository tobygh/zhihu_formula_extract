function get_formula_img(){
    var imgs = document.getElementsByTagName("img");
    var formula_imgs = [];
    for(const img of imgs){
        var att_names = img.getAttributeNames();
        if(att_names.length==5 && att_names[4]=='data-formula'){
            formula_imgs.push(img);
        }
    }
    // console.log("start working");
    // console.log(formula_imgs);
    return formula_imgs;
}



function create_decoration(formula_imgs){
    styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.id = 'styles_js1';
                                    //background-color: yellow;transition-timing-function: ease-in-out;transition-duration: 0.4s;
    styleElement.innerText = ".formula_box{ color:rgba(0 0 0 / 8%); border: solid 1px rgba(0 0 0 / 8%);font-size:14px;padding:0 5px 0 5px;};";
    document.getElementsByTagName('head')[0].appendChild(styleElement);


    styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.id = 'styles_js2';
                                    //background-color: yellow;
    styleElement.innerText = ".formula_box:hover{ background-color: white;color:rgba(0 0 0 );border: solid 1px rgba(0 0 0);}";
    document.getElementsByTagName('head')[0].appendChild(styleElement);

    for(const img of formula_imgs){

        var formula_str = img.getAttribute('data-formula');
        // var img_html = img.outerHTML;
        // img_html = '<div >'+img_html+'<p>'+formula_str+"</p>"+'</div>';
        // img.outerHTML = img_html;
        formula_div= document.createElement("div");
        formula_div.innerText = formula_str;
        formula_div.setAttribute("class" ,"formula_box");
        formula_div.style.position = 'absolute';
        rect = img.getBoundingClientRect();
        // formula_div.style.top = rect.y-document.body.getBoundingClientRect().y+'px';
        // formula_div.style.left = rect.x+'px';
        // formula_div.style.top = -rect.height+"px";
        // formula_div.style.left = 0+"px";
        img.outerHTML = '<div style="display:inline-block">'+formula_div.outerHTML+img.outerHTML+'</div>';
        // document.body.appendChild(formula_div);
    }


}

// alert("hello");
formula_imgs = get_formula_img();

create_decoration(formula_imgs);