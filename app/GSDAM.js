

////----core content
const fs = require("fs");

let _vrt = {
    _GSDAM : null, ____trackSetup : {},

    //content to the GSDAM
    ____wordCode : {//word code might hold another content like word cut or any analogy you want to fill in
        stgpath : {
            currentProjectPath : "null",
            ////cores
            webRoute :          "/app/WebRoute",
            gsdamSetup :        "/app/components/GSDAM",
            dotenv_setup :      "/.env",
            ////concepts
            front_webpage :     "/concept/views",
            front_public :      "/concept/public",
            back_endmodel :     "/concept/models",
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
        errCheckPath : function(flname, drname, err){//unfinished code
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
                // console.log("process " + index + " : " + val)
                command.push(val)
            })
        
            return command;
        },
    
    
    },

};
const csload_JSFile = {//this guy doesnt transported out
    fileMassesType_toLoadJSFile : function(packlib_content, dirprojname){

        let dataReturn = null;
        const loin = packlib_content.loadingInfo;
        // const dirprojname = _vrt.____wordCode.stgpath.currentProjectPath
        const ____dirprojectname = (loin.pathNamePrefix_dirStg == "$currentProject") ? dirprojname : null;
        const ____dirprojectname_with1wordPath = ____dirprojectname + loin.pathNameWord_dirStg;

        switch(packlib_content.loadingInfo.fileMasses){
            case "any": dataReturn = csload_JSFile.startRecursivity_dirChecking(____dirprojectname_with1wordPath, loin.showNull); 
            break;

            // case "allin": dataReturn = csload_JSFile.allin_fileChecking(____dirprojectname, loin); break;
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


class GSDAM{//reactive class
    ////----variable content
    constructor(){//because we are referencing them it might be make our job a bit easier
        this.wc = _vrt.____wordCode
        this.func =_vrt.____func
        this.confParam = {}
    }

    ////----step by step initializement
    //before
    setup1_currentProjectPath(path_stg){
        if(_vrt.____trackSetup.currentProjectPath){return}

        _vrt.____wordCode.stgpath.currentProjectPath = path_stg
        this.wc.stgpath.currentProjectPath = path_stg;
        _vrt.____trackSetup.currentProjectPath = true;
    }
    setup2_dotenvConfig(){
        if(_vrt.____trackSetup.dotenvConfig){return}

        let obj_dotenv = require('dotenv').config({ 
            path: this.func.ppFolder(this.wc.stgpath.dotenv_setup),
            encoding: 'utf-8'
        });
        if(obj_dotenv.error){console.log(__filename.replace(__dirname, "")); console.error(obj_dotenv.error)}
        this.confParam = {
            nodeEnv : process.env.NODE_ENV,
            dbConfig: {
                connectionLimit: 100,
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                multipleStatements: true
            },
            token: process.env.TOKEN,
            jwt:process.env.JWT,
        }
        
        _vrt.____trackSetup.dotenvConfig = true;
    }
    setup3_initialize_powerful_ppFolder(){
        if(_vrt.____trackSetup.initialize_powerful_ppFolder){return}

        let keys = Object.keys(this.wc.stgpath)
        for(let i=0; i<keys.length; i++){let ky = keys[i]
            if(i == 0){continue;} //<< 0 is currentProjectPath.
            this.func.powerful_ppFolder[ky] = this.func.ppFolder(this.wc.stgpath[ky] )
        }
        _vrt.____trackSetup.initialize_powerful_ppFolder = true;
    }
    setup4b_loadPacklib(){
        if(_vrt.____trackSetup.loadPacklib){return}
        for(let idx in this.packlib){
            csload_JSFile.fileMassesType_toLoadJSFile(this.packlib[idx], 
                _vrt.____wordCode.stgpath.currentProjectPath) 
        }
        _vrt.____trackSetup.loadPacklib = true;
    }
    setup4c_loadedFromOutside(packlib_content){
        if(_vrt.____trackSetup.loadPacklib){return}
        this.packlib = JSON.parse(JSON.stringify(packlib_content) );
        this.setup4b_loadPacklib()
    }
    
    install1b_databaseConnection(dbchoice = String){//after global
        if(_vrt.____trackSetup.databaseConnection){return}
        _vrt.____trackSetup.databaseConnection = true;

        // this.packlib[0].cdm[0].dbConn._init(dbchoice)
        this.packlib[0].cdm.dbConn._init(dbchoice)
    }


    ////----getter && setter
    getSetupList(){return Object.keys(_vrt.____trackSetup); }


    ////----DEPRECATED
    setup4_add2Func(){
        if(_vrt.____trackSetup.add2Func){return}
        this.func.usefulFunc = this.func.rootRequire(this.wc.stgpath.usefulFunc)
        _vrt.____trackSetup.add2Func = true;
    }
    setup4a_add2utilib(){
        if(_vrt.____trackSetup.add2utilib){return}
        
        let oj_utilPack = this.utilib
        for(let ky in oj_utilPack){
            try {oj_utilPack[ky] = this.func.rootRequire(oj_utilPack[ky])}
            catch (error) {console.log("Error", error) }
        }
        this.utilib = oj_utilPack

        _vrt.____trackSetup.add2utilib = true;
    }
    install1_databaseConnection(dbChoice = String){
        if(_vrt.____trackSetup.databaseConnection){return}
        _vrt.____trackSetup.databaseConnection = true;

        switch(dbChoice){
            case "mysql": this.func.dbConn_mysql = this.func.rootRequire(this.wc.stgpath.dbConn_mysql); break;
            case "pgsql": this.func.dbConn_pgsql = this.func.rootRequire(this.wc.stgpath.dbConn_pgsql); break;
        }
        
        this.func.respon = this.func.rootRequire(this.wc.stgpath.respon)
    }
    install1a_databaseConnection(dbchoice = String){
        if(_vrt.____trackSetup.databaseConnection){return}
        _vrt.____trackSetup.databaseConnection = true;

        this.utilib.dbConn._init(dbchoice)
    }
}


////---- export content
module.exports = {//-- singleton pattern gsdam
    ALLINIT : function(){this.GSDAM.getInstance(); },
    GSDAM  : {getInstance : function(){
        if(!_vrt._GSDAM){_vrt._GSDAM = new GSDAM();}    
        return _vrt._GSDAM ;
    } }

    , tdd : {csload_JSFile}
}































