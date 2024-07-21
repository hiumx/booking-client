import React, { useEffect, useState } from 'react'
import "./_post_create.scss";
import ManagerDefaultLayout from '~/pages/System/layouts/ManagerDefaultLayout';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { getTypePost } from '~/services/typePost.service';
import Select from 'react-select';
import { newPost } from '~/services/post.service';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const PostCreate = () => {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const [title, setTitle] = useState("");
    const [typePost, setTypePost] = useState([]);
    const [typeChose, setTypeChose] = useState({ value: 1, label: 'Luxury Travel' });
    const [contentHtml, setContentHtml] = useState('');
    const [contentMarkdown, setContentMarkdown] = useState('');
    const [image, setImage] = useState("");

    const { id: userId } = useSelector(state => state.user.userMyInfo);
    const { id: hotelId } = useParams();

    const options = typePost?.map(t => ({
        value: t.id,
        label: t.name
    }));

    useEffect(() => {
        getTypePost()
            .then(res => {
                if (res.code === 1000)
                    setTypePost(res.metadata);
            }).catch(err => {
                console.error(err);
            });
    }, []);

    const handleChangeTypeSelect = (obj) => {
        setTypeChose(obj);
    }

    const handleEditorChange = ({ html, text }) => {
        setContentHtml(html);
        setContentMarkdown(text);
    }

    const handleClickCreate = () => {
        const payload = {
            title,
            contentHtml,
            contentMarkdown,
            authorId: userId,
            hotelId: Number(hotelId),
            typePostId: typeChose.value,
            image: ""
        }

        newPost(payload)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.error(err);
            })
    }

    return (
        <ManagerDefaultLayout listItem={["Hotels"]}>
            <div className='post__create__wrapper'>
                <h4 className='post__create__title'>Create new post</h4>
                <div className='post__create__type__select'>
                    <label htmlFor="post-type" className="form-label">Select post type</label>
                    <Select
                        options={options}
                        className='sr__body__sort'
                        onChange={handleChangeTypeSelect}
                        value={typeChose}
                    />
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="post-title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="post-title"
                        placeholder="Enter post title"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div class="mb-3 mt-3">
                    <label htmlFor="post-image" className="form-label">Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="post-image"
                    />
                </div>
                <div className='post__create__markdown'>
                    <label htmlFor="post-content" className="form-label">Content</label>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={handleEditorChange}
                    />
                </div>
                <button
                    className='btn btn-info float-end'
                    onClick={handleClickCreate}
                >
                    Create
                </button>
            </div>
        </ManagerDefaultLayout>
    )
}

export default PostCreate