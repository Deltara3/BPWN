function getObjEncoded(objinfo) {
    var objEncoded = "";
    return objEncoded;
}

function createLevel(spwnCode) {

}

function bpwn() {
    var scripts = document.scripts;
    var isBPWNCodeFound = false;
    var BPWNElement = undefined;
    for (var i = 0; i < scripts.length; i++) {
        if(scripts[i].type == "text/spwn") {
            isBPWNCodeFound = true;
            BPWNElement = scripts[i];
        }
    }

    if(!isBPWNCodeFound) {
        console.log("BPWN code not found: Did you set the `type` attr of a <script> element to \"text/spwn\"?")
        alert("BPWN code not found, see console for more information.");
    } else {
        // continue with bpwn-ing
    }
}