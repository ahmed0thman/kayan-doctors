import React from "react";
import imgProfile from "../../assets/images/gallery/profile.png";

const CommentCard = () => {
  return (
    <div className="comment-card">
      <div className="comment-card-header">
        <img className="img-profile" src={imgProfile} alt="" />
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex flex-column">
            <p className="fs-5 fw-medium">Dr Mohamed</p>
            <div className="d-flex gap-2 align-items-center text-muted">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              5/17/2025 7:26 AM
            </div>
          </div>
          <div className="comment-actions">
            <span className="comment-action">
              <i className="fa fa-ban" aria-hidden="true"></i>
            </span>
            <span className="comment-action">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="comment-card-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
        ipsa aperiam dolor quisquam facere fugiat, laboriosam vero, similique
        maxime consectetur ducimus odit. Quisquam quae eum incidunt pariatur ad
        fuga modi.
      </div>
    </div>
  );
};

const CommentsPopup = ({
  show,
  resetPostAction,
}: {
  show: boolean;
  resetPostAction: any;
}) => {
  return (
    <div className={`comment-container ${show ? "show" : ""}`}>
      <div className="d-flex border-bottom mx-3 mt-1 mb-3 justify-content-end">
        <span className="btn btn-close  px-1" onClick={resetPostAction}></span>
      </div>

      <div className="comments-cards">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />

        <CommentCard />
      </div>
    </div>
  );
};

export default CommentsPopup;
