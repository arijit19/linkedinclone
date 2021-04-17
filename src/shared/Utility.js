export const updateObject = (oldObject, updatedObject) => {
    return {
        ...oldObject,
        ...updatedObject
    };
};

export const checkValidation = (rules, value)=> {
    let isValid = true;
    if(!rules)
        return false;
        
    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d{1,}(\.\d{0,4})?$/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if(rules.isImage) {
        const valueType = value.type.toString().split('/');
        isValid = valueType[0]==="image" && isValid
    }
    if(rules.isVideo) {
        const valueType = value.type.toString().split('/');
        isValid = valueType[0]==="video" && isValid
    }
    return isValid;
}

export const getObjectLenth = (obj) => {
    let count = 0;
    for(let ele in obj){
        if(ele !== undefined)
            count++;
    }
    return count;
}

export const isObjectEleIncluded=(obj,ele)=>{
    let flag = false;
    for(let e in obj){
        if(e===ele){
            flag=true;
            break;
        }
    }
    return flag;
}