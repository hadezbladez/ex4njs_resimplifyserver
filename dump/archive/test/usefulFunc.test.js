


//fuck this fil
var fs = require('fs');
const fil = {
    wrifi_sync : function (title = String, content = String){fs.writeFileSync(title, content);},
    refi : function (thisPath_fileName = String, fh = function(){}){
        fs.readFile(thisPath_fileName, {encoding: 'utf-8'}, function(err, dataContent){fh(err, dataContent);}) 
    },
    refi_sync : function(thisPath_fileName = String){
        return fs.readFileSync(thisPath_fileName, {encoding: 'utf-8'} )
    },
    redir_sync : function(folderTest = String, whatToDo = function(fil){}){
        return fs.readdirSync(folderTest).forEach(function(fil){
            whatToDo(fil);
        });
    },
    upg1 : {
        __wrifi_sync : function(title = String, ojContent = {}, spaces = 4){
            return fs.writeFileSync(title, JSON.stringify(ojContent, null, spaces) );
        }
    }
}



////----main content

const goback_pathstg = "/../../..";
let variableTestData = {
    dataToTest : {
        dataChoice1 : [{id : 1, colname : "data1", othername : "data2", stringed_json : JSON.stringify({shit : "mon"})} ],
        dataChoice2 : [
            {id : 1, colname : "data1", othername : "data2", stringed_json : JSON.stringify({shit : "mon"})},
            {id : 2, colname : "data2", othername : "data3", stringed_json : JSON.stringify({mon : "shit", shit : "shit"})},
        ],
        dataChoice3 : [],

        dataChoice4 : {id : 1, colname : "data1", othername : "data2", stringed_json : JSON.stringify({shit : "mon"})}
    },
    realDirProject : __dirname + goback_pathstg,

}

const testive = {
    questionThem : function(){
        const usefulFunc = require(variableTestData.realDirProject + "/app/utility/usefulFunc.js")

        test("vr.isArr", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isArr([]) ).toBeTruthy()
            expect(vr_.isArr({}) ).toBeFalsy()
            expect(vr_.isArr("") ).toBeFalsy()
            expect(vr_.isArr("asd") ).toBeFalsy()
        })
        test("vr.isObj", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isObj({}) ).toBeTruthy()
            expect(vr_.isObj([]) ).toBeFalsy()
            expect(vr_.isObj("") ).toBeFalsy()
            expect(vr_.isObj("asd") ).toBeFalsy()
        })
        test("vr.isVal", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isVal("") ).toBeTruthy()
            expect(vr_.isVal(2) ).toBeTruthy()
            expect(vr_.isVal([]) ).toBeFalsy()
            expect(vr_.isVal({}) ).toBeFalsy()
        })
        test("vr.isFunc", function(){
            const vr_ = usefulFunc.vr
            const testFunc = function(ssdd){const data = ""}

            expect(vr_.isFunc(function(){return "content"}) ).toBeTruthy()
            expect(vr_.isFunc(testFunc ) ).toBeTruthy()

            //what did you think about this? should it be true? this means outputting content but it just goes against returning content
            expect(vr_.isFunc(testFunc() ) ).toBeFalsy()
            expect(vr_.isFunc([]) ).toBeFalsy()
            expect(vr_.isFunc({}) ).toBeFalsy()
            expect(vr_.isFunc("") ).toBeFalsy()
            expect(vr_.isFunc(2) ).toBeFalsy()
        })
        test("vr.isNon", function(){
            const vr_ = usefulFunc.vr
            const testFunc = function(ssdd){const data = ""}

            expect(vr_.isNon(function(){return "content"}) ).toBeFalsy()
            expect(vr_.isNon(testFunc ) ).toBeFalsy()
            expect(vr_.isNon([]) ).toBeFalsy()
            expect(vr_.isNon({}) ).toBeFalsy()
            expect(vr_.isNon("") ).toBeFalsy()
            expect(vr_.isNon(2) ).toBeFalsy()

            expect(vr_.isNon(testFunc() ) ).toBeTruthy()
            expect(vr_.isNon(null) ).toBeTruthy()
            expect(vr_.isNon(undefined) ).toBeTruthy()
        })

        test("vr.isNumber", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isNumber([]) ).toBeFalsy()
            expect(vr_.isNumber({}) ).toBeFalsy()
            expect(vr_.isNumber("") ).toBeFalsy()
            expect(vr_.isNumber("asd") ).toBeFalsy()
            
            expect(vr_.isNumber(0) ).toBeTruthy()
            expect(vr_.isNumber(123) ).toBeTruthy()
            expect(vr_.isNumber(0x123456789) ).toBeTruthy()
            expect(vr_.isNumber(123456789123456789123456789123456789123485678612145612612506845406) ).toBeTruthy()
        })
        test("vr.isString", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isString([]) ).toBeFalsy()
            expect(vr_.isString({}) ).toBeFalsy()
            expect(vr_.isString("") ).toBeTruthy()
            expect(vr_.isString("asd") ).toBeTruthy()
            
            expect(vr_.isString(0) ).toBeFalsy()
            expect(vr_.isString(123) ).toBeFalsy()
            expect(vr_.isString(0x123456789) ).toBeFalsy()
            expect(vr_.isString(123456789123456789123456789123456789123485678612145612612506845406) ).toBeFalsy()
        })
        test("vr.isString_hasNumber", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isString_hasNumber([]) ).toBeFalsy()
            expect(vr_.isString_hasNumber({}) ).toBeFalsy()
            expect(vr_.isString_hasNumber("") ).toBeFalsy()
            expect(vr_.isString_hasNumber("asd") ).toBeFalsy()
            expect(vr_.isString_hasNumber("asd") ).toBeFalsy()
            expect(vr_.isString_hasNumber("123") ).toBeTruthy()
            expect(vr_.isString_hasNumber("asd123") ).toBeTruthy()
            

            expect(vr_.isString_hasNumber(0) ).toBeFalsy()
            expect(vr_.isString_hasNumber(2) ).toBeFalsy()
            expect(vr_.isString_hasNumber(1) ).toBeFalsy()

            expect(vr_.isString_hasNumber(123) ).toBeFalsy()
            expect(vr_.isString_hasNumber(0x123456789) ).toBeFalsy()
            expect(vr_.isString_hasNumber(123456789123456789123456789123456789123485678612145612612506845406) ).toBeFalsy()
        })

        test("vr.isJSONString", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isJSONString([]) ).toBeFalsy()
            expect(vr_.isJSONString({}) ).toBeFalsy()
            expect(vr_.isJSONString(JSON.stringify({})) ).toBeTruthy()
            expect(vr_.isJSONString(JSON.stringify({test : "Test", numbers:0})) ).toBeTruthy()
            expect(vr_.isJSONString("") ).toBeFalsy()
            expect(vr_.isJSONString("asd") ).toBeFalsy()
            expect(vr_.isJSONString("asd") ).toBeFalsy()
            expect(vr_.isJSONString("123") ).toBeFalsy()
            expect(vr_.isJSONString("asd123") ).toBeFalsy()
            

            expect(vr_.isJSONString(0) ).toBeFalsy()
            expect(vr_.isJSONString(2) ).toBeFalsy()
            expect(vr_.isJSONString(1) ).toBeFalsy()

            expect(vr_.isJSONString(123) ).toBeFalsy()
            expect(vr_.isJSONString(0x123456789) ).toBeFalsy()
            expect(vr_.isJSONString(123456789123456789123456789123456789123485678612145612612506845406) ).toBeFalsy()
        })
        test("vr.isString_strictly", function(){
            const vr_ = usefulFunc.vr

            expect(vr_.isString_strictly([]) ).toBeFalsy()
            expect(vr_.isString_strictly({}) ).toBeFalsy()
            expect(vr_.isString_strictly(JSON.stringify({})) ).toBeFalsy()
            expect(vr_.isString_strictly(JSON.stringify({test : "Test", numbers:0})) ).toBeFalsy()
            expect(vr_.isString_strictly("") ).toBeTruthy()
            expect(vr_.isString_strictly("asd") ).toBeTruthy()
            expect(vr_.isString_strictly("asd") ).toBeTruthy()
            expect(vr_.isString_strictly("123") ).toBeTruthy()
            expect(vr_.isString_strictly("asd123") ).toBeTruthy()
            

            expect(vr_.isString_strictly(0) ).toBeFalsy()
            expect(vr_.isString_strictly(2) ).toBeFalsy()
            expect(vr_.isString_strictly(1) ).toBeFalsy()

            expect(vr_.isString_strictly(123) ).toBeFalsy()
            expect(vr_.isString_strictly(0x123456789) ).toBeFalsy()
            expect(vr_.isString_strictly(123456789123456789123456789123456789123485678612145612612506845406) ).toBeFalsy()
        })

        //logging console content
        test("p.prilog", function(done){
            const p_ = usefulFunc.p

            p_.prilog(variableTestData, 4)
            p_.prilog("Test Data Success", 4)
            done()
        })
        test("p.json", function(){
            const p_ = usefulFunc.p

            const cloned = p_.json.fullClone__(variableTestData)
            const refed = p_.json.refCopy__(variableTestData)

            expect(cloned).toEqual(variableTestData)
            expect(cloned === variableTestData).toBeFalsy()
            expect(cloned == variableTestData).toBeFalsy()

            expect(refed).toEqual(variableTestData)
            expect(refed === variableTestData).toBeFalsy()
            expect(refed == variableTestData).toBeFalsy()
        })
        test("p.uniq", function(){
            const p_ = usefulFunc.p
            const data = p_.arr.uniqVal(["data", 'data', 2, 3]) 

            expect(data).toEqual(["data", 2, 3])
            expect(p_.arr.uniqVal({}) ).toBe(-1)
            expect(p_.arr.uniqVal() ).toEqual([])
            //yes it should be false because reference is different
            expect(data == ["data", 2, 3]).toBeFalsy();
            expect(data === ["data", 2, 3]).toBeFalsy();
        })


    },
    newQuestion_4them : function(){
        const usefulFunc = require(variableTestData.realDirProject + "/app/utility/usefulFunc.js")

        //model_quickquerydbtest.test
        test("setQueryString_4insert example0", function(){
            let quickquery = usefulFunc.qdb.setQueryString_4insert("")
            expect(quickquery).toBe(-1)
        })
        test("setQueryString_4insert example1", function(){
            let quickquery = usefulFunc.qdb.setQueryString_4insert(variableTestData.dataToTest.dataChoice1)
            let dgt = Object.keys(variableTestData.dataToTest.dataChoice1[0])
            
            const dataDiff = `(${dgt[0]}, ${dgt[1]}, ${dgt[2]}, ${dgt[3]})`
            expect(quickquery).toBe(dataDiff)
        })
        test("setQueryString_4insert example2", function(){
            let quickquery = usefulFunc.qdb.setQueryString_4insert(variableTestData.dataToTest.dataChoice4)
            let dgt = Object.keys(variableTestData.dataToTest.dataChoice1[0])
            
            const dataDiff = `(${dgt[0]}, ${dgt[1]}, ${dgt[2]}, ${dgt[3]})`
            expect(quickquery).toBe(dataDiff)
        })
        test("setQueryString_4Update example0", function(){
            let quickquery = usefulFunc.qdb.setQueryString_4Update("")
            expect(quickquery).toBe(-1)
        })
        test("setQueryString_4Update example1", function(){
            let quickquery = usefulFunc.qdb.setQueryString_4Update(variableTestData.dataToTest.dataChoice1)
            let dgt = Object.keys(variableTestData.dataToTest.dataChoice1[0])

            const dataDiff = `${dgt[0]} = ?, ${dgt[1]} = ?, ${dgt[2]} = ?, ${dgt[3]} = ?`
            expect(quickquery).toStrictEqual(dataDiff)
        })
        test("setQueryString_4Update example2", function(){
            let quickquery = usefulFunc.qdb.setQueryString_4Update(variableTestData.dataToTest.dataChoice4)
            let dgt = Object.keys(variableTestData.dataToTest.dataChoice1[0])
            
            const dataDiff = `${dgt[0]} = ?, ${dgt[1]} = ?, ${dgt[2]} = ?, ${dgt[3]} = ?`
            expect(quickquery).toBe(dataDiff)
        })

        test("setDMLQueryVariable example0", function(){
            let quickquery = usefulFunc.qdb.setDMLQueryVariable("")
            expect(quickquery).toBe(-1)
        })
        test("setDMLQueryVariable example1", function(){
            let quickquery = usefulFunc.qdb.setDMLQueryVariable(variableTestData.dataToTest.dataChoice1)
            let dgt = variableTestData.dataToTest.dataChoice1[0]

            const dataDiff = [ [dgt.id, dgt.colname, dgt.othername, dgt.stringed_json] ]
            expect(quickquery).toStrictEqual(dataDiff)
        })
        test("setDMLQueryVariable example2", function(){
            let quickquery = usefulFunc.qdb.setDMLQueryVariable(variableTestData.dataToTest.dataChoice2)
            let dgt0 = variableTestData.dataToTest.dataChoice2[0];
            let dgt1 = variableTestData.dataToTest.dataChoice2[1];

            const dataDiff = [ 
                [dgt0.id, dgt0.colname, dgt0.othername, dgt0.stringed_json],
                [dgt1.id, dgt1.colname, dgt1.othername, dgt1.stringed_json],
            ]
            expect(quickquery).toStrictEqual(dataDiff)
        })
        test("setDMLQueryVariable example3", function(){
            let quickquery = usefulFunc.qdb.setDMLQueryVariable(variableTestData.dataToTest.dataChoice3)

            const dataDiff = []
            expect(quickquery).toStrictEqual(dataDiff)
        })
        test("setDMLQueryVariable example4", function(){
            let quickquery = usefulFunc.qdb.setDMLQueryVariable(variableTestData.dataToTest.dataChoice4)
            let dgt = variableTestData.dataToTest.dataChoice4

            const dataDiff = [dgt.id, dgt.colname, dgt.othername, dgt.stringed_json]
            expect(quickquery).toStrictEqual(dataDiff)
        })
    },
    howToUse_someOfContent : function(){
        const usefulFunc = require(variableTestData.realDirProject + "/app/utility/usefulFunc.js")

        const stringBaked = usefulFunc.qdb.setQueryString_4Update(variableTestData.dataToTest.dataChoice4)
        const q = `UPDATE {{database_table_name}} SET ${stringBaked}`
        const variableAdd = usefulFunc.qdb.setDMLQueryVariable(variableTestData.dataToTest.dataChoice4)

        console.log({
            whatsthis : "updating to database-table",
            q_contentQuery : q,
            v_contentQuery : variableAdd
        })

        const stringBaked1 = usefulFunc.qdb.setQueryString_4insert(variableTestData.dataToTest.dataChoice4)
        const q1 = `INSERT INTO {{database_table_name}} SET ${stringBaked1}`
        const variableAdd1 = usefulFunc.qdb.setDMLQueryVariable(variableTestData.dataToTest.dataChoice4)

        console.log({
            whatsthis : "inserting to database-table",
            q_contentQuery : q1,
            v_contentQuery : [variableAdd1]
        })
    },
}

test('test working', function(){expect(4+3).toBe(7); });
testive.questionThem()
testive.newQuestion_4them()

testive.howToUse_someOfContent()