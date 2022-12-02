export const validateMovie = (movieInfo) => {
        const {title, storyLine, language, releseDate, status, type, genres, tags, cast} = movieInfo;
    
        if(!title.trim()) return {error: 'Title is missing!'}
        if(!storyLine.trim()) return {error: 'Story line is missing!'}
        if(!language.trim()) return {error: 'Languare is missting!'}
        if(!releseDate.trim()) return {error: 'Relese date is missing!'}
        if(!status.trim()) return {error: 'Status is missing!'}
        if(!type.trim()) return {error: 'Type is missing!'}
    
        //validate for genres we are checking if genres is an array or not
        if(!genres.length ) return {error: 'Genres are missing!'}
        // we are checking genres needs to field with string value
        for( let gen of genres){
        if( !gen.trim()) return {error: 'Invalid genres!'}
        }
    
        //validate for tags we are checking if tags is an array or not
        if(!Array.isArray(tags)) return {error: 'tags are missing!'}
        // we are checking tags needs to field with string value
        for( let tag of tags){
        if( !tag.trim()) return {error: 'Invalid tags!'}
        }
    
        //validate for cast we are checking if cast is an array or not
        if(!cast.length) return {error: 'Cast and crew are missing!'}
        // we are checking cast needs to field with string value
        for( let c of cast){
            if( typeof c !== "object") return {error: 'Invalid cast!'}
        }
    
        return {error: null}
}
