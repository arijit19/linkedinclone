export const filterObject = (filterID, Obj) => {
    let updateObject = {}
    for(let e in Obj)
    {
        if(Obj[e].contentID === filterID){
            updateObject[e] = Obj[e];
        }
            
    }
    return updateObject;
}

export const removeObject = (filterID, Obj) => {
    let updateObject = {}
    for(let e in Obj)
    {
        if(e !== filterID){
            updateObject[e] = Obj[e];
        }
            
    }
    return updateObject;
}

export const isLiked  = (uid, likes)=>{
    let val = false;
    for(let like in likes){
       if(likes[like].uid===uid){
           val=true;
           break;
       }
    }
    return val;
}

export const getLikeDocID  = (uid, likes)=>{
    let id ;
    for(let like in likes){
       if(likes[like].uid===uid){
            id = like;
           break;
       }
    }
    return id;
}
