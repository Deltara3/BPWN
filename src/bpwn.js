function getObjEncoded(objinfo) {
    var objEncoded = "";
    return objEncoded;
}

function createLevel(spwnCode) {

}

function bpwn() {
    console.log("loading BPWN...");
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
        alert("BPWN code not found, see console for more information.");
        console.log("BPWN code not found; did you set the `type` attr of a <script> element to \"text/spwn\"?")
    } else {
        // continue with bpwn-ing
    }
}