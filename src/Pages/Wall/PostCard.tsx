import React from "react";
import { post, postAction } from "./types";
import defaultProfileImg from "../../assets/images/gallery/profile.png";

const PostCard = ({
  post,
  setPostAction,
  setTextPost,
}: {
  post: post;
  setPostAction: any;
  setTextPost: any;
}) => {
  return (
    <section key={post.id} className="old-post">
      <div className="old-post-header">
        <img className="img-profile" src={defaultProfileImg} alt="" />
        <div className="d-flex justify-content-between w-100">
          <p className="fs-5 fw-medium">Dr Mohamed</p>
          <div className="d-flex gap-2 align-items-center text-muted">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            {post.date.toLocaleDateString()}{" "}
            {post.date.toLocaleTimeString().split(":").slice(0, 2).join(":")}{" "}
            {post.date.toLocaleTimeString().split(" ")[1]}
          </div>
        </div>
      </div>
      <div
        className="old-post-content"
        dir="auto"
        dangerouslySetInnerHTML={{ __html: post.postHTMLContent }}
      ></div>
      <div className="post-actions">
        <div className="post-action">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          <span className="">20</span>
        </div>
        <div
          className="post-action"
          onClick={() => {
            setPostAction({ action: "comments", post: post });
          }}
        >
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          <span className="">20</span>
        </div>
        <div
          className="post-action"
          onClick={() => {
            setPostAction({ action: "edit", post: post });
            setTextPost(post.postHTMLContent);
          }}
        >
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
        <div
          className="post-action"
          onClick={() => setPostAction({ action: "delete", post: post })}
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
