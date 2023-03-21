let mtn1 =['0703','0706', '0803', '0806', '0810','0813','0814','0816', '0903','0906'];
let airtel1 =['0701', '0708', '0803', '0808', '0812', '0902','0907'];
let glo1 = ['0705', '0805', '0807', '0815', '0811', '0905'];
let nineMobile1 = ['0809', '0817', '0818', '0908', '0909'];
let mtn2= ['+234703','+234706', '+234803', '+234806', '+234810','+234813','+234814','+234816', '+234903','+234906']
let airtel2 = ['+234701', '+234708', '+234803', '+234808', '+234812', '+234902','+234907'];
let glo2 =['+234705', '+234805', '+234807', '+234815', '+234811', '+234905'];
let nineMobile2 = ['+234809', '+234817', '+234818', '+234908', '+234909'];
let mtnLogo = document.getElementById('mtn');
let airtelLogo = document.getElementById('airtel');
let gloLogo = document.getElementById('glo');
let nineMobileLogo = document.getElementById('9mobile');
let invalidNumber = document.getElementById('small');

function myFunction(){
let inputValue = document.getElementById('phone').value;
let inputValueString = inputValue.toString();
let inputValueLength = inputValueString.length;

//console.log(/^\d+$/.test(inputValueString);
//console.log(inputValueString.slice(1));


if(inputValueString == (0||inputValueString.startsWith('0'))){
    mtnLogo.style.display = 'none'
    airtelLogo.style.display = 'none'
    gloLogo.style.display = 'none'
    nineMobileLogo.style.display = 'none'
    return invalidNumber.style.display = 'none'

}


for(i=0; i<mtn1.length || i<mtn2.length||i<airtel1.length||i<airtel2.length||  i<glo1.length|| i<glo2.length|| i<nineMobile1.length|| i<nineMobile2.length; i++){
    if((inputValueString.startsWith(mtn1[i]) && inputValueLength ===11 && /^\d+$/.test(inputValueString) )||(inputValueString.startsWith(mtn2[i]) && inputValueLength ===14 && /^\d+$/.test(inputValueString.slice(1)))){
        airtelLogo.style.display = 'none'
        gloLogo.style.display = 'none'
        nineMobileLogo.style.display = 'none'
        invalidNumber.style.display = 'none'
        return mtnLogo.style.display = 'inline';
} 
else if((inputValueString.startsWith(airtel1[i]) && inputValueLength == 11 && /^\d+$/.test(inputValueString)) ||(inputValueString.startsWith(airtel2[i]) && inputValueLength == 14 && /^\d+$/.test(inputValueString.slice(1)))){
    mtnLogo.style.display = 'none'
    gloLogo.style.display = 'none'
    nineMobileLogo.style.display = 'none'
    invalidNumber.style.display = 'none'
    return airtelLogo.style.display = 'inline';
    }
else if((inputValueString.startsWith(glo1[i]) && inputValueLength == 11 && /^\d+$/.test(inputValueString))||(inputValueString.startsWith(glo2[i]) && inputValueLength == 14 && /^\d+$/.test(inputValueString.slice(1)))){
        mtnLogo.style.display = 'none'
        airtelLogo.style.display = 'none'
        nineMobileLogo.style.display = 'none'
        invalidNumber.style.display = 'none'
        return gloLogo.style.display = 'inline';
        }

else if((inputValueString.startsWith(nineMobile1[i]) && inputValueLength == 11 && /^\d+$/.test(inputValueString))||(inputValueString.startsWith(nineMobile2[i]) && inputValueLength == 14 && /^\d+$/.test(inputValueString.slice(1)))){
            mtnLogo.style.display = 'none'
            airtelLogo.style.display = 'none'
            gloLogo.style.display = 'none'
            invalidNumber.style.display = 'none'
                return nineMobileLogo.style.display = 'inline';
}
else if (!(inputValueString.startsWith(mtn1[i]) && inputValueLength == 11) || !(inputValueString.startsWith(mtn2[i]) && inputValueLength == 14)){
    invalidNumber.style.display = 'inline'
    nineMobileLogo.style.display = 'none'
    gloLogo.style.display ='none'
    airtelLogo.style.display = 'none'
    mtnLogo.style.display = 'none'
}
}
}



