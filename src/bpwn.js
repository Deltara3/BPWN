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

function intepret(code) {
    if(code.startsWith("%")) {
        if(code.startsWith("%.alert")) {
            //var useCode2 = false;
            //var code2 = "";
            //if(code.match(/"\);*%./g)) {
            //    code2 = code.replace(/%.*"\);/, "");
            //    console.log(code2);
            //}

            if(code.endsWith(");") || code.endsWith(")")) {
                eval(code.substr(2))
            } else {
                console.error("no terminator found for %.alert call")
            }

            //if(useCode2) {
            //    //
            //}
        } else if (code.startsWith("%.log")) {
            if(code.endsWith(");") || code.endsWith(")")) {
                eval("console." + code.substr(2))
            } else {
                console.error("no terminator found for %.log call")
            }
        } else if (code.startsWith("%.warn")) {
            if(code.endsWith(");") || code.endsWith(")")) {
                eval("console." + code.substr(2))
            } else {
                console.error("no terminator found for %.warn call")
            }
        } else if (code.startsWith("%.error")) {
            if(code.endsWith(");") || code.endsWith(")")) {
                eval("console." + code.substr(2))
            } else {
                console.error("no terminator found for %.error call")
            }
        }
    }
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
        console.warn("BPWN code not found. Did you set the `type` attr of a <script> element to \"text/spwn\"?");
        alert("BPWN code not found, see console for more information.");
    } else {
        BPWNElement.innerHTML.split("\n").forEach((code) => {
            code = code.trim();
            // console.log(code);
            intepret(code);
        })
    }
}