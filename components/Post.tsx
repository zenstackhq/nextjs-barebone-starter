/* eslint-disable react/no-children-prop */
import React from 'react';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';
import { Post } from '@zenstackhq/runtime/types';

const Post: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
            <h2>{post.title}</h2>
            <ReactMarkdown children={post.content} />
            <style jsx>{`
                div {
                    color: inherit;
                    padding: 2rem;
                }
            `}</style>
        </div>
    );
};

export default Post;
