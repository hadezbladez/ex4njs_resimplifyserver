

//insertion
function mkStrg_colDat(var_data){
	let stg = '';//<< this causing the fucking error

	if(isArr(var_data) ){//input multi row
		let nmb1 = 0;
		let size = Object.keys(var_data[0]).length;
		stg += "(";
		for(var ky in var_data[0] ){
			stg += ky;

			if(nmb1 == size - 1){}
			else{stg += ', ';}

			nmb1++;
		}
		stg += ")";
	}
	else if(isObj(var_data) ){//input row only
		let numb = 0;
		let size = Object.keys(var_data).length;
		stg += "(";
		for(var ky in var_data){
			stg += ky;

			if(numb == size-1){}else{stg += ', '}
			numb++;
		}
		stg += ")";
	}

	return stg;
}
function mkStrg_varDat1(var_data){
	let stg = [];
	let str = [];

	if(isArr(var_data) ){//array is not yet
		let stg2 = [];
		for(let i = 0; i < var_data.length; i++){
			stg2 = [];
			for(let ky in var_data[i] ){
				stg2.push(var_data[i][ky] );
			}
			stg.push(stg2);
		}
	}
	else if(isObj(var_data) ){
		for(let ky in var_data){
			str.push(var_data[ky] )
		}
		stg = str;
	}
	return stg;
}
//updating
function mkStrg_colDat1(var_data){
	let stg = '';

	if(isArr(var_data) ){//is it like this?
		let numb = 0; let len = Object.keys(var_data[0]).length;
		for(var ky in var_data[0]){
			stg += `${ky} = ?`
			if(numb < len - 1){stg += ', '}
			numb++;
		}
	}
	else if(isObj(var_data) ){//input row only
		let numb = 0; let len = Object.keys(var_data).length;
		for(var ky in var_data){
			stg += `${ky} = ?`
			if(numb < len - 1){stg += ', '}
			numb++;
		}
	}
	return stg;
}


function isArr(yv){return Array.isArray(yv);}
function isObj(yv){return ((typeof yv === 'object') && !isArr(yv) );}//it should is class
function isVal(yv){return !isObj(yv) && !isArr(yv);}



////----main content
let constructiveData = {
    dataChoice1 : [
        {id : 1, colname : "data1", othername : "data2", stringed_json : JSON.stringify({shit : "mon"})}
    ],
    dataChoice2 : [
        {id : 1, colname : "data1", othername : "data2", stringed_json : JSON.stringify({shit : "mon"})},
        {id : 2, colname : "data2", othername : "data3", stringed_json : JSON.stringify({mon : "shit", shit : "shit"})},
    ],
    dataChoice3 : []
}
const testive = {
    questionThem : function(showIt){
        test("mkStrg_colDat example1", function(){
            let quickquery = mkStrg_colDat(constructiveData.dataChoice1)
            let dgt = Object.keys(constructiveData.dataChoice1[0])
            if(showIt){console.log(quickquery) }
            
            const dataDiff = `(${dgt[0]}, ${dgt[1]}, ${dgt[2]}, ${dgt[3]})`
            expect(quickquery).toBe(dataDiff)
        })
        test("mkStrg_varDat1 example1", function(){
            let quickquery = mkStrg_varDat1(constructiveData.dataChoice1)
            let dgt = constructiveData.dataChoice1[0]
            if(showIt){console.log(quickquery) }

            const dataDiff = [ [dgt.id, dgt.colname, dgt.othername, dgt.stringed_json] ]
            expect(quickquery).toStrictEqual(dataDiff)
        })
        test("mkStrg_colDat1 example1", function(){
            let quickquery = mkStrg_colDat1(constructiveData.dataChoice1)
            let dgt = Object.keys(constructiveData.dataChoice1[0])
            if(showIt){console.log(quickquery) }

            const dataDiff = `${dgt[0]} = ?, ${dgt[1]} = ?, ${dgt[2]} = ?, ${dgt[3]} = ?`
            expect(quickquery).toStrictEqual(dataDiff)
        })

        test("mkStrg_colDat example2-samewith1", function(){
            let quickquery = mkStrg_colDat(constructiveData.dataChoice2)
            let dgt = Object.keys(constructiveData.dataChoice2[0])
            if(showIt){console.log(quickquery) }
            
            const dataDiff = `(${dgt[0]}, ${dgt[1]}, ${dgt[2]}, ${dgt[3]})`
            expect(quickquery).toBe(dataDiff)
        })
        test("mkStrg_varDat1 example2", function(){
            let quickquery = mkStrg_varDat1(constructiveData.dataChoice2)
            let dgt0 = constructiveData.dataChoice2[0];
            let dgt1 = constructiveData.dataChoice2[1];
            if(showIt){console.log(quickquery) } 

            const dataDiff = [ 
                [dgt0.id, dgt0.colname, dgt0.othername, dgt0.stringed_json],
                [dgt1.id, dgt1.colname, dgt1.othername, dgt1.stringed_json],
            ]
            expect(quickquery).toStrictEqual(dataDiff)
        })
        test("mkStrg_colDat1 example2-samewith1", function(){
            let quickquery = mkStrg_colDat1(constructiveData.dataChoice2)
            let dgt = Object.keys(constructiveData.dataChoice2[0])
            if(showIt){console.log(quickquery) }

            const dataDiff = `${dgt[0]} = ?, ${dgt[1]} = ?, ${dgt[2]} = ?, ${dgt[3]} = ?`
            expect(quickquery).toStrictEqual(dataDiff)
        })

        test("mkStrg_varDat1 example2", function(){
            let quickquery = mkStrg_varDat1(constructiveData.dataChoice3)
            if(showIt){console.log(quickquery) } 

            const dataDiff = []
            expect(quickquery).toStrictEqual(dataDiff)
        })
    }
}

test('test working', function(){expect(1+1).toBe(2); });
testive.questionThem(false)