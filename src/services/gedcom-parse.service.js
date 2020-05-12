import gedcom from '../assets/111.ged';

export class GedcomParseService {


    get results() {
        return this.result;
    }

    constructor(data) {
        this.result = {};
        this.gedFile = data;
        this.parseLines();
    }

    parseLines() {
        const lines = this.gedFile.match(/[^\r\n]+/g);

        let currentKey = '';
        let previoslevel;
        let currentlevel;
        let currentSecondLevel = '';
        lines.forEach((line) => {
            previoslevel = currentlevel;
            let dataLineArr;
            const firstNmb = line.charAt(0);
            if (currentKey) {
                this.result[currentKey] = Object.assign({}, this.result[currentKey]);
            }
            switch (firstNmb) {
                case '0':
                    currentlevel = 0;
                    dataLineArr = line.split(' ');
                    if (dataLineArr.length > 2 && dataLineArr[1].startsWith('@')) {
                        currentKey = handleKey(dataLineArr[1]);
                    }
                    break;
                case '1':
                    currentlevel = 1;
                    dataLineArr = line.split(' ');
                    if (dataLineArr[1] === 'NAME') {
                        const currentData = line.slice(line.indexOf('NAME') + 4);
                        this.result[currentKey].NAME = removeAllExeptLetters(currentData);
                    }
                    if (dataLineArr[1] === 'SEX') {
                        const currentData = line.slice(line.indexOf('SEX') + 3);
                        this.result[currentKey].SEX = removeAllExeptLetters(currentData);
                    }
                    if (dataLineArr[1] === 'FAMS') {
                        const currentData = line.slice(line.indexOf('FAMS') + 4);
                        this.result[currentKey].FAMS = handleKey(currentData);
                    }
                    if (dataLineArr[1] === 'FAMC') {
                        const currentData = line.slice(line.indexOf('FAMC') + 4);
                        this.result[currentKey].FAMC = handleKey(currentData);
                    }
                    if (dataLineArr[1].startsWith('BIRT')) {
                        currentSecondLevel = 'BIRT';
                        this.result[currentKey][currentSecondLevel] = {};
                    }
                    if (dataLineArr[1].startsWith('DEAT')) {
                        currentSecondLevel = 'DEAT';
                        this.result[currentKey][currentSecondLevel] = {};
                    }

                    if (dataLineArr[1] === 'HUSB') {
                        const currentData = line.slice(line.indexOf('HUSB') + 4);
                        this.result[currentKey].HUSB = handleKey(currentData);
                    }
                    if (dataLineArr[1] === 'WIFE') {
                        const currentData = line.slice(line.indexOf('WIFE') + 4);
                        this.result[currentKey].WIFE = handleKey(currentData);
                    }
                    if (dataLineArr[1] === 'CHIL') {
                        const currentData = line.slice(line.indexOf('CHIL') + 4);
                        if (this.result[currentKey].CHIL) {
                            this.result[currentKey].CHIL.push(handleKey(currentData));
                        } else {
                            this.result[currentKey].CHIL = [handleKey(currentData)];
                        }
                    }

                    break;
                case '2':
                    currentlevel = 2;
                    dataLineArr = line.split(' ');
                    if (dataLineArr[1] === 'DATE') {
                        if (currentSecondLevel) {
                            const currentData = line.slice(line.indexOf('DATE') + 4);
                            this.result[currentKey][currentSecondLevel].DATE = handleKey(currentData);
                        }
                    }
                    if (dataLineArr[1] === 'GIVN') {
                        const currentData = line.slice(line.indexOf('GIVN') + 4);
                        this.result[currentKey].GIVN = handleKey(currentData);
                    }
                    if (dataLineArr[1] === 'SURN') {
                        const currentData = line.slice(line.indexOf('SURN') + 4);
                        this.result[currentKey].SURN = handleKey(currentData);
                    }
                    if (dataLineArr[1] === '_MARNM') {
                        const currentData = line.slice(line.indexOf('_MARNM') + 6);
                        this.result[currentKey]._MARNM = handleKey(currentData);
                    }
                    break;
            }
            if (previoslevel > currentlevel) {
                currentSecondLevel = '';
            }
        });
    }
}

function removeAllExeptLetters(str) {
    const val = str.replace(/[\"\'~`!@#$%^&()_={}[\]:;,.<>+\/?-]+|\d+|^\s+$/g, '').replace(/\s+/ig, ' ').trim();
    return val.trim();
}

function handleKey(str) {
    return str.replace(/@/g, '').replace(/\r/g, '').trim();
}

export const gedcomService = new GedcomParseService(gedcom);

console.log(gedcomService.results);