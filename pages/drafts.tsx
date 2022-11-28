import { usePost } from '@zenstackhq/runtime/client';
import React from 'react';
import Post from '../components/Post';

const Drafts: React.FC = () => {
    const { find } = usePost();
    const { data: posts } = find({
        where: { published: false },
    });

    return (
        <>
            <div className="page">
                <h1>Drafts</h1>
                <main>
                    {posts?.map((post) => (
                        <div key={post.id} className="post">
                            <Post post={post} />
                        </div>
                    ))}
                </main>
            </div>
            <style jsx>{`
                .post {
                    background: white;
                    transition: box-shadow 0.1s ease-in;
                    cursor: pointer;
                }

                .post:hover {
                    box-shadow: 1px 1px 3px #aaa;
                }

                .post + .post {
                    margin-top: 2rem;
                }
            `}</style>
        </>
    );
};

export default Drafts;
