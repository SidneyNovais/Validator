/**
 * 
 * @author Sidney Novais - 02/01/2019
 * 
 */

export class Validator {

    constructor() {
        this._valid = true;
        this._details = [];
        this._values = [];
    }

    check() {
        let values = this._values;
        for(let i = 0; i < values.length;i++) {
            if(!this._rules(values[i])) break;
        }
        
        if(this.valid) return true;
        return false;
    }

    report() {
        let values = this._values;
        this._details = [];
        for(let i = 0; i < values.length;i++) {

            let object = new Object();
            object.name = values[i].name;
            object.value = values[i].value;
            if(values[i].min) {
                object.min = this._min(values[i].value,values[i].min);
            }

            if(values[i].email) {
                object.email = this._isEmail(values[i].value);
            }

            if(values[i].required) {
                object.required = this._required(values[i].value);
            }


            this._details = this._details.concat(object);

        }
        return this._details;
    }

    _rules(object) {
        if(object.min) {
            let test = this._min(object.value, object.min);
            
            if(!test){
                this.valid = false;
                return false;
            }
        }

        if(object.email) {
            let test = this._isEmail(object.value);

            if(!test) {
                this.valid = false;
                return false;
            }
        }

        if(object.required) {
            let test = this._required(object.value);

            if(!test) {
                this.valid = false;
                return false;
            }
        }


        this.valid = true;
        return true;
    }

    _min(value, min) {
        if(value.length >= min ) return true;
        return false;
    }

    _isEmail(value) {
        let test;
        test = value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

        if(test) return true;
        return false;
    }

    _required(value) {
        if(value.trim().length) return true;
        return false;
        
    }

    setValues(values) {
        this._values = values;
    }
}
