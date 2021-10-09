function encodeObj(objinfo) {
    var objinfoDecoded = undefined;
    var objEncoded = "";
    try {
        objinfoDecoded = JSON.parse(objinfo)
    } catch {
        console.log("internal error while encodeObj(). (JSON_PARSE_ERROR)")
    }

    if (objinfoDecoded.OBJ_ID) {
        objEncoded = objEncoded + "1," + objinfoDecoded.OBJ_ID.toString() + ",";
    } else {
        objEncoded = objEncoded + "1,1,";
    }

    if(objinfoDecoded.X) {
        objEncoded = objEncoded + "2," + objinfoDecoded.X.toString() + ",";
    } else {
        objEncoded = objEncoded + "2,0,"
    }

    if(objinfoDecoded.Y) {
        objEncoded = objEncoded + "3," + objinfoDecoded.Y.toString() + ",";
    } else {
        objEncoded = objEncoded + "3,0,"
    }
    return objEncoded + ";";
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
        console.warn("[WARN] BPWN code not found: Did you set the `type` attr of a <script> element to \"text/spwn\"?");
        alert("BPWN code not found, see console for more information.");
    } else {
        // continue with bpwn-ing
    }
}