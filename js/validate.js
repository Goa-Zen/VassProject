$(document).ready(function () 
{
    $("#btnSend").click(function (event) {
        var resultLength = [];
        var expReg = [];
        var valueTest = [];
        var resultPattern = [];
        var pass = [];

        valueTest[0] = $("#fullName").val();
        valueTest[1] = $("#email").val();
        valueTest[2] = $("#password").val();

        expReg[0] = "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
        expReg[1] = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        expReg[2] = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm";

        resultLength[0] = valueTest[0].length > 2 ? 1 : 0 ;
        resultLength[1] = valueTest[1].length > 8 ? 1 : 0 ;
        resultLength[2] = valueTest[2].length > 8 ? 1 : 0 ;
       
        var concatenaLength = resultLength.join(",");
        pass[0]=fResumeResults(concatenaLength);

        for (val in valueTest) {
            resultPattern[val] = fValidatePat(valueTest[val], expReg[val]);
        }
        var concatenaPattern = resultPattern.join(",");
        pass[1]=fResumeResults(concatenaPattern);

       var result = pass.join(",");
/*         alert (concatenaLength);
        alert (concatenaPattern);
        alert (result); */
        if(result==='1,1') {
            event.returnValue=true;		
        }else if(result=='0,0') {
            alert('Incorrect Length and format');
            event.preventDefault();
        }else if(result=='0,1') {
            alert('Incorrect Length');
            event.preventDefault();
        }else if(result=='1,0') {
            alert('Incorrect format');
            event.preventDefault();
        }
          
	});	

});	

function fValidatePat (value_, pattern_)  {
    var ExpReg=pattern_;
    var valor = value_;
    if(valor.match(ExpReg)!=null) {
        return 1;		
    }else {
        return 0;	
    }	
}

function fResumeResults (result_) {
    switch (result_) {
        case '1,1,1':
            return 1;
        default:
            return 0;            
    }
}
