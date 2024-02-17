

const fs = require("fs")
let pathstg = `${__dirname}/zznota.txt`;

async function rf(pathstg){
    let data = await new Promise(function(resolve, reject){
        fs.readFile(pathstg, "utf-8", function(err, data){
            if(err){reject(err)}
            resolve(data)
        })
    })
    return data
}





const testive = {
    workingExample_testJest : function(){
        /*
            https://jestjs.io/
            https://jestjs.io/docs/asynchronous
            https://jestjs.io/docs/tutorial-async

            try to use promisify thing and test callback?

            Promises returning...

            jest resetmodules
            https://jestjs.io/docs/using-matchers
            https://jestjs.io/docs/setup-teardown
            https://stackoverflow.com/questions/58151010/difference-between-resetallmocks-resetmodules-resetmoduleregistry-restoreallm

        */
        test('test readfile promise_then_catch', function(done){
            rf(pathstg).then(function(dataString){
                expect(dataString).toBe("123")
                done()
            }).catch(function(err){done(err) })
        
        });
        test('test readfile callback', function(done){
            fs.readFile(pathstg, "utf-8", function(err, dataString){
                if(err){done(err)}
                else{
                    expect(dataString).toBe("123")
                    done()
                }
            })
        });

        test("old-style of checking function on hardcoded files",function(done){
            try {
                let fundatas = "doSeomthing_function() >> until done"
                // console.log(fundatas); 
                done();
            } catch (error) {
                fail(JSON.stringify({
                    errorData : error,
                    message : "error when requiring"
                }))
            }
        })

        test('null', () => {
            const n = null;
            expect(n).toBeNull();
            expect(n).toBeDefined();
            expect(n).not.toBeUndefined();
            expect(n).not.toBeTruthy();
            expect(n).toBeFalsy();
        });
          
        test('zero', () => {
            const z = 0;
            expect(z).not.toBeNull();
            expect(z).toBeDefined();
            expect(z).not.toBeUndefined();
            expect(z).not.toBeTruthy();
            expect(z).toBeFalsy();
        });
    }
}


test('test working', function(){expect(2+2).toBe(4); });
testive.workingExample_testJest()
