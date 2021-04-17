export const getComments = (commentsID, allcomments) => {
    let comments = {}
    for(let id in commentsID)
    {
        comments[commentsID[id]] = allcomments[commentsID[id]];
    }

    return comments;
}
