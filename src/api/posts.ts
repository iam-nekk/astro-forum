type Post = {
    id: string,
    title: string,
    author: string,
}

let posts: Post[] // very temporary, put this in a database!!

export const getAllPosts = (): Post[] => {
    return posts
}

export const getPost = (id: string): Post | undefined => {
    return posts.find(x => x.id === id)
}

export const createPost = (title: string, author: string): boolean => {
    posts.push({
        id: getRandomId(),
        title,
        author
    })
    return true
}





import crypto from "crypto" //todo: use a uuid!!

function getRandomId(): string{
    return crypto.randomBytes(20).toString('hex');
}

posts = [{id: getRandomId(), title: "test title", author: "nekk"},{id: getRandomId(), title: "test 2", author: "nekk"}]