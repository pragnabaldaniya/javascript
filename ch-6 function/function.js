console.log("Function");

/**
 * Function : Re-useble block of code sepecific tas
 * 
 * tyoe of function
 * 
 * 1. pre-defined / Built-in function
 * 2. User defined function (UDF)
 * 
 * 1) Pre-defined / Built-in function
 * -> Already created 
 *      -log()
 *      -error()
 *      -warn()
 *      -prompt()
 *      -Number()
 *      -parseint()
 *      -parseflot()
 *      -string()
 *      -math.floor()
 * 
 * 2) User defined function(udf)
 * -> Your self created function
 * 
 *  type of udf
 * 
 * 1. TNRN
 * 2. TSRN
 * 3. TNRS
 * 4. TSRS
 * 
 * 
 * */

//1) TNRN :-
//syntsx : function fundtionName (){}

function printmultipleLog() {
    console.log("Hello 1");
    console.log("Hello 2");
    console.log("Hello 3");
}

printmultipleLog();

//2) TSRN :-
//syntax : function functionName (parameters)

function loginWithEmailAndPassword(email, password) {
    if (email == undefined || password == undefined) {
        alert("please enter your email & password");
        return;
    }
}
console.log("Email :", email);
console.log("Password : ", password);

loginWithEmailAndPassword();




