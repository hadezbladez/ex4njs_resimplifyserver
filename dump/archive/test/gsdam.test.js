


////oldies
const { fail } = require("assert");
const fs = require("fs")
let exmp_fd_content = {
    loadingInfo : {
        pathNamePrefix_dirStg : null, // "$currentProject", null
        pathNameWord_dirStg : null, // "/asd/dsa/sdf"
        pathNameSuffix_fileStg : null, // ["any.js", "thing.js", "you.js", "want.js"], "in_here.js"
        fileMasses : null, // "any", "allin", all", "chosenByArray", "one"
        showNull : true,
        info : "collect .js file into contentDataMass(cdm) v0.1"
    },
    cdm : null,
}
let ___vrt = {
    _GSDAM : null, ____trackSetup : {},

    //content to the GSDAM
    ____wordCode : {//word code might hold another content like word cut or any analogy you want to fill in
        stgpath : {
            currentProjectPath : "null",
            ////cores
            // appSetup :          "/app/core/AppContenxt",//they are on @/zuck/graveyard
            webRoute :          "/app/WebRoute",
            gsdamSetup :        "/app/components/GSDAM",
            dotenv_setup :      "/.env",
            ////concepts
            front_webpage :     "/concept/views",
            front_public :      "/concept/public",
            back_endmodel :     "/concept/models",
            ////utilities || many of it goes to the utilib
            dbConn :            "/app/utility/dbConn",              //unused
            usefulFunc :        "/app/utility/usefulFunc",          //unused
        },
    
    },
    ____func : {
        compare_2String : function(s1, s2){
            if(s1 && s2){return null}
            else if(s1 || s2){
                if(s1){return s1;} else if(s2){return s2;}
            } else{return null;}
        },
        valPort_point : function(valPort = '3000'){//Normalize a port into a number, string, or false.
            if(isNaN(parseInt(valPort, 10) ) ){return valPort}// named pipe
            else if(parseInt(valPort, 10) >= 0 ){return parseInt(valPort, 10) }// normal port number
            else {return false}
        },
        errCheckPath : function(flname, drname, err){
            if(flname == null || drname == null){}
            else{}
        },
    
        powerful_ppFolder : {},
        ppFolder : function(name){let pathFolder = `${_vrt.____wordCode.stgpath.currentProjectPath}${name}`;return pathFolder;},
        rootRequire : function(name){return require(this.ppFolder(name) );},
        requiring : function(...names){
            let content = {}
    
            for(let name of names){content[name] = require(name); }
            return content;
        },
    
        _ttime : {
            in_sec : function(tm_sec){return tm_sec * 1000;},
            in_minute : function(tm_min){return this.in_sec(60 * tm_min);},
            in_hour : function(tm_hr){return this.in_minute(60 * tm_hr);}
        },
    
        commandCheck : function(){//this thing are for checking the environment starting up content but it is not used for now
            let command = [];
            process.argv.forEach(function(val, index, array){//we need to detect -p stuff
                console.log("process " + index + " : " + val)
                command.push(val)
            })
        
            return command;
        },
    
    
    },

    ____packlib : [//<< why i drop it using array? maybe they want to add more specific one?
        {//how to use this> look@/dump/archive/test/gsdam.test.js
            loadingInfo : {
                pathNamePrefix_dirStg : "$currentProject",
                pathNameWord_dirStg : ["/app/utility"],
                pathNameSuffix_fileStg : null,
                fileMasses : "any",
                showNull : true,
                info : "collect .js file into contentDataMass(cdm) v0.1"
            },
            cdm : null,
        }
    ],

    ____utilib:{//DEPRECATED && used 4 exact module usage
        usefulFunc :        "/app/utility/usefulFunc",
        dbConn :            "/app/utility/dbConn"
    },

};





////----using selective test

const goback_pathstg = "/../../..";
let _current_testdata = {
    showIt : false,
    realDirProject : __dirname + goback_pathstg,
    packlib : [
        {
            loadingInfo : {
                pathNamePrefix_dirStg : "$currentProject",
                pathNameWord_dirStg : "/app/utility",
                pathNameSuffix_fileStg : null,
                fileMasses : "any",
                showNull : true,
                info : "collect .js file into contentDataMass(cdm) v0.1"
            },
            cdm : null,
        }
    ],
}

const testive = {

    
    ////----setup current
    JSFile_setup : function(){//nearly-same functionality  GSDAM.js
        const csload_JSFile = {
            fileMassesType_toLoadJSFile : function(packlib_content, dirprojname){
        
                let dataReturn = null;
                const loin = packlib_content.loadingInfo;
                // const dirprojname = _current_testdata.realDirProject
                const ____dirprojectname = (loin.pathNamePrefix_dirStg == "$currentProject") ? dirprojname : null;
                const ____dirprojectname_with1wordPath = ____dirprojectname + loin.pathNameWord_dirStg;
        
                switch(packlib_content.loadingInfo.fileMasses){
                    case "any": dataReturn = csload_JSFile.startRecursivity_dirChecking(____dirprojectname_with1wordPath, loin.showNull); 
                    break;
        
                    case "allin": dataReturn = csload_JSFile.allin_fileChecking(____dirprojectname, loin); break;
                    case "all": 
                    let arr_filename = fs.readdirSync(____dirprojectname_with1wordPath)
                    dataReturn = csload_JSFile.loadReqMore_basedArrFilename_JSFile(____dirprojectname_with1wordPath, arr_filename, loin.showNull)
                    break;
            
                    case "chosenByArray": 
                    dataReturn = csload_JSFile.loadReqMore_basedArrFilename_JSFile(____dirprojectname_with1wordPath, loin.pathNameSuffix_fileStg, loin.showNull); 
                    break;
                    case "one": dataReturn = csload_JSFile.loadReqOne_JSFile(____dirprojectname_with1wordPath, loin.pathNameSuffix_fileStg);
                    break;
                }
            
                packlib_content.cdm = dataReturn;
            },
        
            //any-tree
            startRecursivity_dirChecking : function(pathname, showNull = true){
                let dataoj = {}
                let fileDiffCatalogue = csload_JSFile.between_filesAndDirectory(pathname, fs.readdirSync(pathname) );
        
                if(fileDiffCatalogue.dirs){
                    for(let idx in fileDiffCatalogue.dirs){
                        let dirname = fileDiffCatalogue.dirs[idx]
                        dataoj[dirname] = {}
                        dataoj[dirname] = csload_JSFile.recursivityDirContent(`${pathname}/${dirname}`, showNull)
                    }
                }
                if(fileDiffCatalogue.files){
                    let checkedFiles = csload_JSFile.loadReqMore_basedArrFilename_JSFile(pathname, fileDiffCatalogue.files, showNull)
                    dataoj = Object.assign(checkedFiles, dataoj )
                }
        
                if(showNull && csload_JSFile.isEmpty(dataoj) ){dataoj = "(NULL)EMPTYDIR" }
                else if(!showNull && csload_JSFile.isEmpty(dataoj)){return undefined }
                return dataoj;
            },
            between_filesAndDirectory : function(pathname, filenames){
                let dirs = []; let files = [];
        
                for(let val of filenames){
                    let stats = fs.statSync(`${pathname}/${val}`);
                    if(stats.isFile() ){files.push(val) }
                    else if(stats.isDirectory() ){dirs.push(val) }
                }
        
                return {dirs, files}
            },
            recursivityDirContent : function(pathname, showNull = true){
                let dataoj = {}
                let fileDiffCatalogue = csload_JSFile.between_filesAndDirectory(pathname, fs.readdirSync(pathname) );
        
                if(fileDiffCatalogue.dirs){
                    for(let idx in fileDiffCatalogue.dirs){
                        let dirname = fileDiffCatalogue.dirs[idx]
                        // console.log("recurse>>" + dirname)
                        dataoj[dirname] = {}
                        dataoj[dirname] = csload_JSFile.recursivityDirContent(`${pathname}/${dirname}`, showNull)
                    }
                }
                if(fileDiffCatalogue.files){
                    let checkedFiles = csload_JSFile.loadReqMore_basedArrFilename_JSFile(pathname, fileDiffCatalogue.files, showNull)
                    dataoj = Object.assign(checkedFiles, dataoj )
                }
        
                if(showNull && csload_JSFile.isEmpty(dataoj) ){dataoj = "(NULL)EMPTYDIR" }
                else if(!showNull && csload_JSFile.isEmpty(dataoj)){return undefined }
                return dataoj;
            },
            //all-tree
            allin_fileChecking : function(____dirprojectname, loin){//DEPRECATED
                let ojd_content = []
                for(let vpnw of loin.pathNameWord_dirStg){
                    let datafFile_arrs = fs.readdirSync(____dirprojectname + vpnw)
                    let processed_datafile = csload_JSFile.loadReqMore_basedArrFilename_JSFile(____dirprojectname + vpnw, datafFile_arrs, loin.showNull)
                    ojd_content.push(processed_datafile)
                }
        
                return ojd_content;
            },
        
            loadReqMore_basedArrFilename_JSFile : function(pathname, arr_filename, showNull = true){
                let fileContents = {}
                for(let idx in arr_filename){
                    let fnameJS = arr_filename[idx]
                    let dojsfile = csload_JSFile.loadReqOne_JSFile(pathname, fnameJS)
        
                    if(showNull){
                        if(csload_JSFile.isEmpty(dojsfile) ){dojsfile = "(NULL)EMPTYFILE"}
                    } else if(!showNull){
                        if(typeof dojsfile == "string" && dojsfile.includes("(NULL)") ){continue;}
                        if(csload_JSFile.isEmpty(dojsfile) ){continue}
                    } 
                    
                    fileContents[fnameJS.replace(".js","")] = dojsfile
                }
            
                return fileContents
            },
            loadReqOne_JSFile : function(pathname, filename_js){
                try {
                    const content = fs.statSync(`${pathname}/${filename_js}`)
        
                    if(content.isDirectory() ){return `(NULL)IS_DIRECTORY`}
                    if(!(filename_js.includes(".js")) ){return `(NULL)NOT_JSFILE`;}
        
                    return require(`${pathname}/${filename_js.replace(".js", "")}`)
                } catch (error) {return `(NULL)${error.code}`}
            },
        
            isEmpty : function(oj){return Object.keys(oj).length === 0},
        }
        //new test
        test("JSFileSetup_anyExample", function(){
            let exmp_fd5 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : //<< choose the folder not using [array]
                        "/app",
                        // "/dump/testrecursive",
                    pathNameSuffix_fileStg : null,
                    fileMasses : "any",
                    //<<it checks what is the difference between directory or not
                    //be really careful using any because it checks all of dir and file requirements
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd5, _current_testdata.realDirProject)

            expect(exmp_fd5.cdm).not.toBeNull()
            expect(exmp_fd5.cdm.GSDAM).not.toBeNull()
            expect(exmp_fd5.cdm.WebRoute).not.toBeNull()
            expect(exmp_fd5.cdm.utility).not.toBeNull()
            expect(exmp_fd5.cdm.utility.dbConn).not.toBeNull()
            expect(exmp_fd5.cdm.utility.usefulFunc).not.toBeNull()
        })
        test("JSFileSetup_allinExample", function(){//allin might be cancerous because it differ from cdm's content
            let exmp_fd1 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : ["/app/utility", "/app"], //test wrong example "/app/utility/borgen/dfd"
                    pathNameSuffix_fileStg : null,
                    fileMasses : "allin", //<<what allin mean is checking all files in this[array_of_dirname] if it is dir it returns just as file
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd1, _current_testdata.realDirProject)
            
            expect(exmp_fd1.cdm).not.toBeNull()
            expect(exmp_fd1.cdm[0]).not.toBeNull()
            expect(exmp_fd1.cdm[0].dbConn).not.toBeNull()
            expect(exmp_fd1.cdm[0].usefulFunc).not.toBeNull()
            expect(exmp_fd1.cdm[1]).not.toBeNull()
            expect(exmp_fd1.cdm[1].GSDAM).not.toBeNull()
            expect(exmp_fd1.cdm[1].WebRoute).not.toBeNull()
            expect(exmp_fd1.cdm[1].utility).toContain("(NULL)IS_DIRECTORY")
        })
        test("JSFileSetup_allExample", function(){
            let exmp_fd2 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : //<< choose the folder not using [array]
                        "/app",
                        // "/app/utility",
                    pathNameSuffix_fileStg : null,
                    fileMasses : "all",//<<what all mean is checking all files if it is dir it returns just as file
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd2, _current_testdata.realDirProject)

            expect(exmp_fd2.cdm).not.toBeNull()
            expect(exmp_fd2.cdm.GSDAM).not.toBeNull()
            expect(exmp_fd2.cdm.WebRoute).not.toBeNull()
            expect(exmp_fd2.cdm.utility).toContain("(NULL)IS_DIRECTORY")
        })
        test("JSFileSetup_chosenByArrayExample", function(){
            let exmp_fd3 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : "/app/utility",
                    pathNameSuffix_fileStg : ["ed.txt","callhello.js", "usefulFunc.js"],//<< add more to get something you want
                    fileMasses : "chosenByArray",
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd3, _current_testdata.realDirProject)

            expect(exmp_fd3.cdm).not.toBeNull()
            expect(exmp_fd3.cdm.usefulFunc).not.toBeNull()
            expect(exmp_fd3.cdm.callhello).toContain("(NULL)ENOENT")
            expect(exmp_fd3.cdm['ed.txt']).toContain("(NULL)ENOENT")
        })
        test("JSFileSetup_oneExample", function(){
            let exmp_fd4 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : "/app/utility",
                    pathNameSuffix_fileStg : "dbConn.js",
                    fileMasses : "one",
                    showNull : true,//<<its always showing true
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd4, _current_testdata.realDirProject)
            
            expect(exmp_fd4.cdm).not.toBeNull()
        })
    },
    JSFile_picked : function(){//taken directly on GSDAM.js
        //https://stackoverflow.com/questions/60714101/how-to-setup-jest-with-node-modules-that-use-es6

        ////---- es6 modules suffered from import-export shittyness
        const csload_JSFile = require(_current_testdata.realDirProject + "/app/GSDAM").tdd.csload_JSFile

        test("JSFileSetup_anyExample", function(){
            let exmp_fd5 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : //<< choose the folder not using [array]
                        "/app",
                        // "/dump/testrecursive",
                    pathNameSuffix_fileStg : null,
                    fileMasses : "any",
                    //<<it checks what is the difference between directory or not
                    //be really careful using any because it checks all of dir and file requirements
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd5, _current_testdata.realDirProject)

            expect(exmp_fd5.cdm).not.toBeNull()
            expect(exmp_fd5.cdm.GSDAM).not.toBeNull()
            expect(exmp_fd5.cdm.WebRoute).not.toBeNull()
            expect(exmp_fd5.cdm.utility).not.toBeNull()
            expect(exmp_fd5.cdm.utility.dbConn).not.toBeNull()
            expect(exmp_fd5.cdm.utility.usefulFunc).not.toBeNull()
        })
        test("JSFileSetup_allExample", function(){
            let exmp_fd2 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : //<< choose the folder not using [array]
                        "/app",
                        // "/app/utility",
                    pathNameSuffix_fileStg : null,
                    fileMasses : "all",//<<what all mean is checking all files if it is dir it returns just as file
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd2, _current_testdata.realDirProject)

            expect(exmp_fd2.cdm).not.toBeNull()
            expect(exmp_fd2.cdm.GSDAM).not.toBeNull()
            expect(exmp_fd2.cdm.WebRoute).not.toBeNull()
            expect(exmp_fd2.cdm.utility).toContain("(NULL)IS_DIRECTORY")
        })
        test("JSFileSetup_chosenByArrayExample", function(){
            let exmp_fd3 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : "/app/utility",
                    pathNameSuffix_fileStg : ["ed.txt","callhello.js", "usefulFunc.js"],//<< add more to get something you want
                    fileMasses : "chosenByArray",
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd3, _current_testdata.realDirProject)

            expect(exmp_fd3.cdm).not.toBeNull()
            expect(exmp_fd3.cdm.usefulFunc).not.toBeNull()
            expect(exmp_fd3.cdm.callhello).toContain("(NULL)ENOENT")
            expect(exmp_fd3.cdm['ed.txt']).toContain("(NULL)ENOENT")
        })
        test("JSFileSetup_oneExample", function(){
            let exmp_fd4 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : "/app/utility",
                    pathNameSuffix_fileStg : "dbConn.js",
                    fileMasses : "one",
                    showNull : true,//<<its always showing true
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd4, _current_testdata.realDirProject)
            
            expect(exmp_fd4.cdm).not.toBeNull()
        })
    },

    SetupGSDAM_forTests : function(){
        jest.resetModules()
        let gsdamSetup = require(_current_testdata.realDirProject + "/app/GSDAM.js")
        
        gsdamSetup.GSDAM.getInstance().setup1_currentProjectPath(_current_testdata.realDirProject)
        gsdamSetup.GSDAM.getInstance().setup2_dotenvConfig();
        gsdamSetup.GSDAM.getInstance().setup3_initialize_powerful_ppFolder();
        gsdamSetup.GSDAM.getInstance().setup4c_loadedFromOutside(_current_testdata.packlib)
    
        global.GSDAM = gsdamSetup.GSDAM.getInstance();
    },
    GSDAM_testLookUp : function(showIt){
        test('look into GSDAM content', function(){
            let packlibs = global.GSDAM.packlib
            let packlib_zero = packlibs[0];

            if(showIt){console.log(global.GSDAM)}

            expect(packlibs).not.toBeNull()
            expect(packlib_zero.cdm).not.toBeNull()

            expect(packlibs.length).toBe(1)
        });
    },
    GSDAM_funcDemand : function(){
        test("GSDAM.func.compare_2String(test, null)",function(){
            let testFunc = global.GSDAM.func;
            expect(testFunc.compare_2String("test", null) ).toBe("test")
        })
        test("GSDAM.func.compare_2String(null, content)",function(){
            let testFunc = global.GSDAM.func;
            expect(testFunc.compare_2String(null, "content") ).toBe("content")
        })
        test("GSDAM.func.compare_2String(test, content)",function(){
            let testFunc = global.GSDAM.func;
            expect(testFunc.compare_2String("test", "content") ).toBe(null)
        })
        test("GSDAM.func.compare_2String(null, null)",function(){
            let testFunc = global.GSDAM.func;
            expect(testFunc.compare_2String(null, null) ).toBe(null)
        })

        test("GSDAM.func.ppFolder",function(){
            let testFunc = global.GSDAM.func;
            expect(testFunc.ppFolder("/app/utility") ).toBe(_current_testdata.realDirProject + "/app/utility")
        })
        test("GSDAM.func.rootRequire",function(){
            let testFunc = global.GSDAM.func;
            let functu = null

            try {functu = testFunc.rootRequire("/app/utility/usefulFunc")}
            catch (error) {
                console.log(error)
                functu = null
            }

            expect(functu).not.toBeNull()
            expect(functu.vr.isArr([]) ).toBe(true)
        })

        test("GSDAM.func.ttime_content1",function(){
            let ttime = global.GSDAM.func._ttime;
            expect(ttime.in_sec(100) ).toBe(100 * 1000)
        })
        test("GSDAM.func.ttime_content2",function(){
            let ttime = global.GSDAM.func._ttime;
            expect(ttime.in_minute(2) ).toBe(2 * 60 * 1000)
        })
        test("GSDAM.func.ttime_content3",function(){
            let ttime = global.GSDAM.func._ttime;
            expect(ttime.in_hour(3) ).toBe(3 * 60 * 60 * 1000)
        })
        test("GSDAM.func.ttime_content4",function(){
            let ttime = global.GSDAM.func._ttime;
            expect(ttime.in_minute(2) ).toBe(ttime.in_sec(2 * 60) )
        })
        test("GSDAM.func.ttime_content5",function(){
            let ttime = global.GSDAM.func._ttime;
            expect(ttime.in_hour(3) ).toBe(ttime.in_minute(3 * 60))
        })
        test("GSDAM.func.ttime_content6",function(){
            let ttime = global.GSDAM.func._ttime;
            expect(ttime.in_hour(3) ).toBe(ttime.in_sec(3 * 60 * 60))
        })

        test("GSDAM.func.requiring self",function(){
            let testFunc = global.GSDAM.func;
            let fundatas = null
            try {
                fundatas = testFunc.requiring(
                    `${_current_testdata.realDirProject}/app/utility/usefulFunc`,
                    `${_current_testdata.realDirProject}/app/utility/dbConn`,
                )
            } catch (error) {
                console.log(error)
                fundatas = null
            }
            expect(fundatas).not.toBeNull()
        })
        test("GSDAM.func.requiring other-libs",function(){
            let testFunc = global.GSDAM.func;
            let fundatas = null
            
            try {fundatas = testFunc.requiring('fs', 'http');}
            catch (error) {
                console.log(error)
                fundatas = null
            }
            expect(fundatas).toStrictEqual({fs:require('fs'), http:require("http")})
        })

        test("GSDAM.func.valPort_point", function(){
            let testFunc = global.GSDAM.func;
            let datatests = [
                {data: testFunc.valPort_point(0), expected: 0}, 
                {data: testFunc.valPort_point(10), expected: 10}, 
                {data: testFunc.valPort_point(1), expected: 1}, 
                {data: testFunc.valPort_point(8989), expected: 8989}, 
                {data: testFunc.valPort_point("content"), expected: "content"}, 
                {data: testFunc.valPort_point(-1), expected: false}, 
                {data: testFunc.valPort_point(null), expected: null}, 
                {data: testFunc.valPort_point(false), expected: false}, 
                {data: testFunc.valPort_point(), expected: 3000}, 
                {data: testFunc.valPort_point(undefined), expected: 3000}, 
            ]
            
            for(let datatest of datatests){expect(datatest.data ).toBe(datatest.expected)}
            
        })

        test("GSDAM.func.commandCheck", function(){
            let testFunc = global.GSDAM.func;
            let content = testFunc.commandCheck()

            // console.log(content)
            expect(content).not.toBeNull()
            
        })
    },

    ////---- dynamic reloading test
    //workin on GSDAM.js.{setup4c_loadedFromOutside()}
    GSDAMSetup_4cExample_scoped : function(){
        jest.resetModules();
        let gsdamSetup_example = null

        beforeEach(() => {
            gsdamSetup_example = require(_current_testdata.realDirProject + "/app/GSDAM.js")
            gsdamSetup_example.GSDAM.getInstance().setup1_currentProjectPath(_current_testdata.realDirProject)
            gsdamSetup_example.GSDAM.getInstance().setup2_dotenvConfig();
            gsdamSetup_example.GSDAM.getInstance().setup3_initialize_powerful_ppFolder();
        });
        afterEach(()=>{jest.resetModules(); })

        test("JSFileSetup_anyExample", function(){
            const packlibData = [
                {
                    loadingInfo : {
                        pathNamePrefix_dirStg : "$currentProject",
                        pathNameWord_dirStg : "/app/utility",
                        pathNameSuffix_fileStg : null,
                        fileMasses : "any",
                        showNull : true,
                        info : "collect .js file into contentDataMass(cdm) v0.1"
                    },
                    cdm : null,
                }
            ]
            
            gsdamSetup_example.GSDAM.getInstance().setup4c_loadedFromOutside(packlibData)
            const tct1 = gsdamSetup_example.GSDAM.getInstance();

            expect(tct1.packlib[0].cdm).not.toBeNull()
            expect(tct1.packlib[0].cdm.dbConn).not.toBeNull()
            expect(tct1.packlib[0].cdm.usefulFunc).not.toBeNull()
        })
        test("JSFileSetup_allExample", function(){
            const packlibData = [
                {
                    loadingInfo : {
                        pathNamePrefix_dirStg : "$currentProject",
                        pathNameWord_dirStg : //<< choose the folder not using [array]
                            "/app",
                            // "/app/utility",
                        pathNameSuffix_fileStg : null,
                        fileMasses : "all",//<<what all mean is checking all files if it is dir it returns just as file
                        showNull : true,
                        info : "collect .js file into contentDataMass(cdm) v0.1"
                    },
                    cdm : null,
                }
            ]
            
            gsdamSetup_example.GSDAM.getInstance().setup4c_loadedFromOutside(packlibData)
            const tct1 = gsdamSetup_example.GSDAM.getInstance();

            expect(tct1.packlib[0].cdm).not.toBeNull()
            expect(tct1.packlib[0].cdm.GSDAM).not.toBeNull()
            expect(tct1.packlib[0].cdm.WebRoute).not.toBeNull()
            expect(tct1.packlib[0].cdm.utility).toContain("(NULL)IS_DIRECTORY")
        })
        test("JSFileSetup_fakeAllInExample_usingall", function(){
            const packlibData = [
                {
                    loadingInfo : {
                        pathNamePrefix_dirStg : "$currentProject",
                        pathNameWord_dirStg : "/app",
                        pathNameSuffix_fileStg : null,
                        fileMasses : "all",//<<what all mean is checking all files if it is dir it returns just as file
                        showNull : true,
                        info : "collect .js file into contentDataMass(cdm) v0.1"
                    },
                    cdm : null,
                },
                {
                    loadingInfo : {
                        pathNamePrefix_dirStg : "$currentProject",
                        pathNameWord_dirStg : "/app/utility", //"/app/utility"
                        pathNameSuffix_fileStg : null,
                        fileMasses : "all",//<<what all mean is checking all files if it is dir it returns just as file
                        showNull : true,
                        info : "collect .js file into contentDataMass(cdm) v0.1"
                    },
                    cdm : null,
                },
            ]
            
            gsdamSetup_example.GSDAM.getInstance().setup4c_loadedFromOutside(packlibData)
            const tct1 = gsdamSetup_example.GSDAM.getInstance();

            expect(tct1.packlib[0].cdm).not.toBeNull()
            expect(tct1.packlib[0].cdm.GSDAM).not.toBeNull()
            expect(tct1.packlib[0].cdm.WebRoute).not.toBeNull()
            expect(tct1.packlib[0].cdm.utility).toContain("(NULL)IS_DIRECTORY")

            expect(tct1.packlib[1].cdm).not.toBeNull()
            expect(tct1.packlib[1].cdm.dbConn).not.toBeNull()
            expect(tct1.packlib[1].cdm.usefulFunc).not.toBeNull()
        })
        test("JSFileSetup_chosenByArrayExample", function(){
            const packlibData = [
                {
                    loadingInfo : {
                        pathNamePrefix_dirStg : "$currentProject",
                        pathNameWord_dirStg : "/app/utility",
                        pathNameSuffix_fileStg : ["ed.txt","callhello.js", "usefulFunc.js"],//<< add more to get something you want
                        fileMasses : "chosenByArray",
                        showNull : true,
                        info : "collect .js file into contentDataMass(cdm) v0.1"
                    },
                    cdm : null,
                }
            ]
            
            gsdamSetup_example.GSDAM.getInstance().setup4c_loadedFromOutside(packlibData)
            const tct1 = gsdamSetup_example.GSDAM.getInstance();

            expect(tct1.packlib[0].cdm).not.toBeNull()
            expect(tct1.packlib[0].cdm.usefulFunc).not.toBeNull()
            expect(tct1.packlib[0].cdm.callhello).toContain("(NULL)ENOENT")
            expect(tct1.packlib[0].cdm['ed.txt']).toContain("(NULL)ENOENT")
        })
        test("JSFileSetup_oneExample", function(){
            const packlibData = [
                {
                    loadingInfo : {
                        pathNamePrefix_dirStg : "$currentProject",
                        pathNameWord_dirStg : "/app/utility",
                        pathNameSuffix_fileStg : "dbConn.js",
                        fileMasses : "one",
                        showNull : true,//<<its always showing true
                        info : "collect .js file into contentDataMass(cdm) v0.1"
                    },
                    cdm : null,
                }
            ]

            gsdamSetup_example.GSDAM.getInstance().setup4c_loadedFromOutside(packlibData)
            const tct1 = gsdamSetup_example.GSDAM.getInstance();

            expect(tct1.packlib[0].cdm).not.toBeNull()
        })
    },

    ////----deprecated
    oldJSFile_setup : function(showIt){
        const csload_JSFile = {
            fileMassesType_toLoadJSFile : function(packlib_content){
        
                let dataReturn = null;
                const loin = packlib_content.loadingInfo;
                const dirprojname = _current_testdata.realDirProject
                const ____dirprojectname = (loin.pathNamePrefix_dirStg == "$currentProject") ? dirprojname : null;
                const ____dirprojectname_with1wordPath = ____dirprojectname + loin.pathNameWord_dirStg;
        
                switch(packlib_content.loadingInfo.fileMasses){
                    case "any": dataReturn = csload_JSFile.startRecursivity_dirChecking(____dirprojectname_with1wordPath, loin.showNull); 
                    break;
        
                    case "allin": dataReturn = csload_JSFile.allin_fileChecking(____dirprojectname, loin); break;
                    case "all": 
                    let arr_filename = fs.readdirSync(____dirprojectname_with1wordPath)
                    dataReturn = csload_JSFile.loadReqMore_basedArrFilename_JSFile(____dirprojectname_with1wordPath, arr_filename, loin.showNull)
                    break;
            
                    case "chosenByArray": 
                    dataReturn = csload_JSFile.loadReqMore_basedArrFilename_JSFile(____dirprojectname_with1wordPath, loin.pathNameSuffix_fileStg, loin.showNull); 
                    break;
                    case "one": dataReturn = csload_JSFile.loadReqOne_JSFile(____dirprojectname_with1wordPath, loin.pathNameSuffix_fileStg);
                    break;
                }
            
                packlib_content.cdm = dataReturn;
            },
        
            //any-tree
            startRecursivity_dirChecking : function(pathname, showNull = true){
                let dataoj = {}
                let fileDiffCatalogue = csload_JSFile.between_filesAndDirectory(pathname, fs.readdirSync(pathname) );
        
                if(fileDiffCatalogue.dirs){
                    for(let idx in fileDiffCatalogue.dirs){
                        let dirname = fileDiffCatalogue.dirs[idx]
                        dataoj[dirname] = {}
                        dataoj[dirname] = csload_JSFile.recursivityDirContent(`${pathname}/${dirname}`, showNull)
                    }
                }
                if(fileDiffCatalogue.files){
                    let checkedFiles = csload_JSFile.loadReqMore_basedArrFilename_JSFile(pathname, fileDiffCatalogue.files, showNull)
                    dataoj = Object.assign(checkedFiles, dataoj )
                }
        
                if(showNull && csload_JSFile.isEmpty(dataoj) ){dataoj = "(NULL)EMPTYDIR" }
                else if(!showNull && csload_JSFile.isEmpty(dataoj)){return undefined }
                return dataoj;
            },
            between_filesAndDirectory : function(pathname, filenames){
                let dirs = []; let files = [];
        
                for(let val of filenames){
                    let stats = fs.statSync(`${pathname}/${val}`);
                    if(stats.isFile() ){files.push(val) }
                    else if(stats.isDirectory() ){dirs.push(val) }
                }
        
                return {dirs, files}
            },
            recursivityDirContent : function(pathname, showNull = true){
                let dataoj = {}
                let fileDiffCatalogue = csload_JSFile.between_filesAndDirectory(pathname, fs.readdirSync(pathname) );
        
                if(fileDiffCatalogue.dirs){
                    for(let idx in fileDiffCatalogue.dirs){
                        let dirname = fileDiffCatalogue.dirs[idx]
                        // console.log("recurse>>" + dirname)
                        dataoj[dirname] = {}
                        dataoj[dirname] = csload_JSFile.recursivityDirContent(`${pathname}/${dirname}`, showNull)
                    }
                }
                if(fileDiffCatalogue.files){
                    let checkedFiles = csload_JSFile.loadReqMore_basedArrFilename_JSFile(pathname, fileDiffCatalogue.files, showNull)
                    dataoj = Object.assign(checkedFiles, dataoj )
                }
        
                if(showNull && csload_JSFile.isEmpty(dataoj) ){dataoj = "(NULL)EMPTYDIR" }
                else if(!showNull && csload_JSFile.isEmpty(dataoj)){return undefined }
                return dataoj;
            },
            //all-tree
            allin_fileChecking : function(____dirprojectname, loin){//DEPRECATED
                let ojd_content = []
                for(let vpnw of loin.pathNameWord_dirStg){
                    let datafFile_arrs = fs.readdirSync(____dirprojectname + vpnw)
                    let processed_datafile = csload_JSFile.loadReqMore_basedArrFilename_JSFile(____dirprojectname + vpnw, datafFile_arrs, loin.showNull)
                    ojd_content.push(processed_datafile)
                }
        
                return ojd_content;
            },
        
            loadReqMore_basedArrFilename_JSFile : function(pathname, arr_filename, showNull = true){
                let fileContents = {}
                for(let idx in arr_filename){
                    let fnameJS = arr_filename[idx]
                    let dojsfile = csload_JSFile.loadReqOne_JSFile(pathname, fnameJS)
        
                    if(showNull){
                        if(csload_JSFile.isEmpty(dojsfile) ){dojsfile = "(NULL)EMPTYFILE"}
                    } else if(!showNull){
                        if(typeof dojsfile == "string" && dojsfile.includes("(NULL)") ){continue;}
                        if(csload_JSFile.isEmpty(dojsfile) ){continue}
                    } 
                    
                    fileContents[fnameJS.replace(".js","")] = dojsfile
                }
            
                return fileContents
            },
            loadReqOne_JSFile : function(pathname, filename_js){
                try {
                    const content = fs.statSync(`${pathname}/${filename_js}`)
        
                    if(content.isDirectory() ){return `(NULL)IS_DIRECTORY`}
                    if(!(filename_js.includes(".js")) ){return `(NULL)NOT_JSFILE`;}
        
                    return require(`${pathname}/${filename_js.replace(".js", "")}`)
                } catch (error) {return `(NULL)${error.code}`}
            },
        
            isEmpty : function(oj){return Object.keys(oj).length === 0},
        }

        test("JSFileSetup_anyExample", function(done){
            let exmp_fd5 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : //<< choose the folder not using [array]
                        "/app",
                        // "/dump/testrecursive",
                    pathNameSuffix_fileStg : null,
                    fileMasses : "any",
                    //<<it checks what is the difference between directory or not
                    //be really careful using any because it checks all of dir and file requirements
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd5)
            if(showIt){console.log(exmp_fd5)}
            done();
        })
        test("JSFileSetup_allinExample", function(done){//allin might be cancerous because it differ from cdm's content
            let exmp_fd1 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : ["/app/utility", "/app"], //test wrong example "/app/utility/borgen/dfd"
                    pathNameSuffix_fileStg : null,
                    fileMasses : "allin", //<<what allin mean is checking all files in this[array_of_dirname] if it is dir it returns just as file
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd1)
            if(showIt){console.log(exmp_fd1)}
            
            done();
        })
        test("JSFileSetup_allExample", function(done){
            let exmp_fd2 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : //<< choose the folder not using [array]
                        "/app",
                        // "/app/utility",
                    pathNameSuffix_fileStg : null,
                    fileMasses : "all",//<<what all mean is checking all files if it is dir it returns just as file
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd2)
            if(showIt){console.log(exmp_fd2)}
            
            done();
        })
        test("JSFileSetup_chosenByArrayExample", function(done){
            let exmp_fd3 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : "/app/utility",
                    pathNameSuffix_fileStg : ["ed.txt","callhello.js", "usefulFunc.js"],//<< add more to get something you want
                    fileMasses : "chosenByArray",
                    showNull : true,
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd3)
            if(showIt){console.log(exmp_fd3)}
            done();
        })
        test("JSFileSetup_oneExample", function(done){
            let exmp_fd4 = {
                loadingInfo : {
                    pathNamePrefix_dirStg : "$currentProject",
                    pathNameWord_dirStg : "/app/utility",
                    pathNameSuffix_fileStg : "dbConn.js",
                    fileMasses : "one",
                    showNull : true,//<<its always showing true
                    info : "collect .js file into contentDataMass(cdm) v0.1"
                },
                cdm : null,
            }
            csload_JSFile.fileMassesType_toLoadJSFile(exmp_fd4)
            if(showIt){console.log(exmp_fd4)}
            done();
        })
    },
    weirdCTN1 : function(){//GSDAM note current

        let intt = {
            wc: {
              stgpath: {
                currentProjectPath: 'D:/zland_wkspc/web_all_ws1/ex4njs_resimplifyserver/dump/archive/test/../../..',
                webRoute: '/app/WebRoute',
                gsdamSetup: '/app/components/GSDAM',
                dotenv_setup: '/.env',
                front_webpage: '/concept/views',
                front_public: '/concept/public',
                back_endmodel: '/concept/models'
              }
            },
            func: {
              compare_2String: 'Function: compare_2String',
              valPort_point: 'Function: valPort_point',
              errCheckPath: 'Function: errCheckPath',
              powerful_ppFolder: {
                webRoute: 'D:/zland_wkspc/web_all_ws1/ex4njs_resimplifyserver/dump/archive/test/../../../app/WebRoute',
                gsdamSetup: 'D:/zland_wkspc/web_all_ws1/ex4njs_resimplifyserver/dump/archive/test/../../../app/components/GSDAM',
                dotenv_setup: 'D:/zland_wkspc/web_all_ws1/ex4njs_resimplifyserver/dump/archive/test/../../../.env',
                front_webpage: 'D:/zland_wkspc/web_all_ws1/ex4njs_resimplifyserver/dump/archive/test/../../../concept/views',
                front_public: 'D:/zland_wkspc/web_all_ws1/ex4njs_resimplifyserver/dump/archive/test/../../../concept/public',
                back_endmodel: 'D:/zland_wkspc/web_all_ws1/ex4njs_resimplifyserver/dump/archive/test/../../../concept/models'
              },
              ppFolder: 'Function: ppFolder',
              rootRequire: 'Function: rootRequire',
              requiring: 'Function: requiring',
              _ttime: {
                in_sec: 'Function: in_sec',
                in_minute: 'Function: in_minute',
                in_hour: 'Function: in_hour'
              },
              commandCheck: 'Function: commandCheck'
            },
            confParam: {
              nodeEnv: 'test',
              dbConfig: {
                connectionLimit: 100,
                host: '127.0.0.1',
                port: '3306',
                user: 'root',
                password: '',
                database: 'test',
                multipleStatements: true
              },
              token: '1235897871:AAFuZE2vVWml7N0iTW4hMFO0RoazeHiwCD8',
              jwt: '$2y$18$sx0X4cA7EF4NWs6rWjHIGO1VGyxPbh4a2j9X/r8oAfzbcjcXJx0ce'
            },
            packlib: [ { loadingInfo: [Object], cdm: [Object] } ]
        }

        let tt1 = {
            "wc": {
                "stgpath": {
                    "currentProjectPath": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver",
                    "webRoute": "/app/WebRoute",
                    "gsdamSetup": "/app/components/GSDAM",
                    "dotenv_setup": "/.env",
                    "front_webpage": "/concept/views",
                    "front_public": "/concept/public",
                    "back_endmodel": "/concept/models",
                    "dbConn": "/app/utility/dbConn",
                    "usefulFunc": "/app/utility/usefulFunc"
                }
            },
            "func": {
                "powerful_ppFolder": {
                    "webRoute": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/app/WebRoute",
                    "gsdamSetup": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/app/components/GSDAM",
                    "dotenv_setup": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/.env",
                    "front_webpage": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/concept/views",
                    "front_public": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/concept/public",
                    "back_endmodel": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/concept/models",
                    "dbConn": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/app/utility/dbConn",
                    "usefulFunc": "D:/zland_wkspc/web_all_ws1/ex3anjs_fixdynamicserver/app/utility/usefulFunc"
                },
                "_ttime": {}
            },
            "packlib": [
                {
                    "loadingInfo": {
                        "pathNamePrefix_dirStg": "$currentProject",
                        "pathNameWord_dirStg": [
                            "/app/utility"
                        ],
                        "pathNameSuffix_fileStg": null,
                        "fileMasses": "allin",
                        "showNull": true,
                        "info": "collect .js file into contentDataMass(cdm) v0.1"
                    },
                    "cdm": [
                        {//exported module kinda botched up and not showing all of the content
                            "dbConn": {},
                            "usefulFunc": {
                                "vr": {},
                                "p": {
                                    "json": {},
                                    "arr": {}
                                },
                                "fil": {
                                    "upg1": {}
                                }
                            }
                        }
                    ]
                }
            ],
            "confParam": {
                "nodeEnv": "development",
                "dbConfig": {
                    "connectionLimit": 100,
                    "host": "127.0.0.1",
                    "port": "3306",
                    "user": "root",
                    "password": "",
                    "database": "test",
                    "multipleStatements": true
                },
                "token": "1235897871:AAFuZE2vVWml7N0iTW4hMFO0RoazeHiwCD8",
                "jwt": "$2y$18$sx0X4cA7EF4NWs6rWjHIGO1VGyxPbh4a2j9X/r8oAfzbcjcXJx0ce"
            }
        }
    },
}


test('test working', function(){expect(1+2).toBe(3); });
testive.JSFile_setup()
testive.JSFile_picked()

testive.SetupGSDAM_forTests()
testive.GSDAM_testLookUp(_current_testdata.showIt)
testive.GSDAM_funcDemand()

testive.GSDAMSetup_4cExample_scoped();

//deprecated
// testive.oldJSFile_setup(_current_testdata.showIt)


