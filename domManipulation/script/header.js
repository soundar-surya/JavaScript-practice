
export const Title =  function({
        text = 'default', tag='h1',
        color='black',
        fontFamily='Ubuntu',
        textAlign='left'
    }){

    let h1 = document.createElement(tag);
    h1.appendChild(document.createTextNode(text));
    h1.style.color = color;
    h1.style.fontFamily = fontFamily;
    h1.style.textAlign = textAlign;
    root.appendChild(h1);
    return;
}

export const HorizontalLine = function({
        attribute: attr,
        color = 'black'
    }){

    let hr = document.createElement('hr');
    hr.setAttribute(attr[0], attr[1]);
    hr.style.color = color;
    root.appendChild(hr);
    return;
}