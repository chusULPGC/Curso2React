import React, { Component } from 'react'

export class Post extends Component {
    ;

    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({ posts: data })


    }

    render() {
        return (
            <div className="centrar">
                <h1 className="publicaciones">Publicaciones</h1>
                <hr />
                {this.state.posts.map(post => {
                    return <div class="card border-secondary mb-3">
                    <div class="card-header text-danger">Noticia {post.id}</div>
                    <div class="card-body text-secondary">
                        <h5 class="card-title">{post.title}</h5>
                        <p class="card-text">{post.body}</p>
                    </div>
                </div>
                })}

            </div>

        )
    }
}

export default Post;
