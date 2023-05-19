async function getPosts() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // {next: {revalidate: 100}}
    )
    return   response.json()
}


export default async function About() {

    const posts = await getPosts()


    return (
        <>
            {posts.map(e => (<p key={posts.id}>{e.name}</p>))}
            <h1>About</h1>
        </>
    )
}