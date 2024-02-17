////----libraries


const vr = {
    isArr : function (yv){return Array.isArray(yv);},
    isObj : function (yv){return ((typeof yv === 'object') && !this.isArr(yv) );},//it should is class
    isVal : function (yv){return !this.isObj(yv) && !this.isArr(yv);},
    isFunc : function (yv){return typeof yv === 'function'},
    isNon : function (yv){return yv == null},

    //this is value domain
    isNumber : function (yv){return typeof yv === 'number'},
    isString : function (yv){return typeof yv === 'string'},
    isString_hasNumber : function (myString) {
        if(this.isNumber(myString) ){return false}
        return /\d/.test(myString);
    },
    isJSONString : function (yv){
        try {
            const parsedData = JSON.parse(yv); 
            // if(this.isString(parsedData) ){throw new Error("string")}
            if(this.isNumber(parsedData) ){throw new Error("number")}
            return true
        } catch (error) {return false} 
    },
    isString_strictly : function (yv){return this.isString(yv) && !this.isJSONString(yv);},
}

////----content
module.exports = {
    vr,
    p : {
        prilog : function(any, spaces){console.log(JSON.stringify(any, null, spaces) );},
        json : {
            fullClone__ : function (oj_toBeCloned){return JSON.parse(JSON.stringify(oj_toBeCloned) );},
            refCopy__ : function (oj_toBeReferenced){return Object.assign({}, oj_toBeReferenced);}
        },
        arr:{
            uniqVal : function (arr = []){
                if(!(vr.isArr(arr) )){return -1}
                let uniqSet = new Set(arr ); 
                return [...uniqSet] 
            }
        }

    },
    qdb:{
        //insertion
        setQueryString_4insert : function(var_data){//mkStrg_colDat
            let stg = '';//<< this causing the fucking error
            let numb = 0;
            
            if(vr.isArr(var_data) ){//input multi row
                let size = Object.keys(var_data[0]).length;
                for(var ky in var_data[0] ){
                    stg += ky;

                    if(!(numb == size - 1) ){ stg += ', ';}
                    numb++;
                }
            } 
            else if(vr.isObj(var_data) ){//input row only
                let size = Object.keys(var_data).length;
                for(var ky in var_data){
                    stg += ky;
        
                    if(numb == size-1){}else{stg += ', '}
                    numb++;
                }
            }
            else{return -1}
        
            return `(${stg})`;
        },
        setQueryString_4Update : function(var_data){//mkStrg_colDat1
            let stg = ''; let numb = 0;
        
            if(vr.isArr(var_data) ){//is it like this?
                let len = Object.keys(var_data[0]).length;
                for(var ky in var_data[0]){
                    stg += `${ky} = ?`
                    if(numb < len - 1){stg += ', '}
                    numb++;
                }
            }
            else if(vr.isObj(var_data) ){//input row only
                let len = Object.keys(var_data).length;
                for(var ky in var_data){
                    stg += `${ky} = ?`
                    if(numb < len - 1){stg += ', '}
                    numb++;
                }
            }
            else{return -1}

            return stg;
        },

        setDMLQueryVariable : function(var_data){//mkStrg_varDat1
            let stg = []; let stg2 = [];
        
            if(vr.isArr(var_data) ){//array is not yet
                for(let i in var_data){
                    stg2 = [];
                    for(let ky in var_data[i] ){stg2.push(var_data[i][ky] );}
                    stg.push(stg2);
                }
            }
            else if(vr.isObj(var_data) ){
                for(let ky in var_data){stg.push(var_data[ky] ) }
            }
            else {return -1}
            return stg;
        },

    }
}