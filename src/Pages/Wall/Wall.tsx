import React, { useState } from "react";
import defaultProfileImg from "../../assets/images/gallery/doctor.png";

import { Editor } from "primereact/editor";
import { post, postAction } from "./types";
import PostCard from "./PostCard";
import ModalWarningDelete from "../../Components/ModalWarningDelete/ModalWarningDelete";
import CommentsPopup from "./CommentsPopup";

const initPostAction: postAction = {
  action: null,
  post: { id: "", date: new Date(), postHTMLContent: "" },
};

const Wall = () => {
  const [showModalPost, setShowModalPost] = useState<boolean>(false);
  const [textPost, setTextPost] = useState<string>("");
  const [posts, setPosts] = useState<post[]>([
    {
      id: "g243bj87rrg",
      date: new Date(
        "Sat May 17 2025 07:26:01 GMT+0300 (Eastern European Summer Time)"
      ),

      postHTMLContent:
        '<p class="ql-direction-rtl">👨‍⚕️✨ <strong>تعرفوا عليّ أكثر!</strong> ✨👩‍⚕️</p><p class="ql-direction-rtl">مرحبًا! أنا <strong>د. [الاسم]</strong>، طبيب/ة مختص/ة في <strong>[التخصص]</strong>، بخبرة تمتد لأكثر من <strong>[عدد السنوات]</strong> سنوات في تقديم الرعاية الصحية للمرضى وتشخيص الحالات بدقة واهتمام.</p><p><br></p><p class="ql-direction-rtl">🎓 حاصل/ة على شهادة في الطب من <strong>[اسم الجامعة]</strong>، وأكملت تدريبي في <strong>[اسم المستشفى أو المؤسسة]</strong>.</p><p class="ql-direction-rtl">📍 أعمل حاليًا في <strong>[اسم العيادة أو المستشفى]</strong>، وأسعى دائمًا إلى تقديم أفضل خدمة طبية ممكنة مبنية على الثقة والاحترام المتبادل.</p><p><br></p><p class="ql-direction-rtl">❤️ شغفي هو أن أساعد كل مريض ومريضة على استعادة صحتهم والعيش بجودة حياة أفضل.</p><p class="ql-direction-rtl">📅 يمكنكم حجز موعد عبر الرسائل أو الاتصال على الرقم: <strong>[رقم الهاتف]</strong></p><p><br></p><p class="ql-direction-rtl">تابعوني لمزيد من النصائح الطبية والمعلومات المفيدة!</p><p class="ql-direction-rtl">#طبيبك_الموثوق #الرعاية_الصحية #صحتك_أولويتنا</p><p><br></p>',
    },
  ]);

  const [postAction, setPostAction] = useState<postAction>(initPostAction);

  function handleAddPost() {
    const newPost = {
      id: Math.random().toString(36).substring(2, 15),
      date: new Date(),
      postHTMLContent: textPost,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setTextPost("");
    setShowModalPost(false);
  }

  function handleEditPost() {
    const newPosts = posts.map((post) => {
      if (postAction.post.id === post.id) {
        const newPost = post;
        newPost.postHTMLContent = textPost;
        return newPost;
      } else return post;
    });
    setPosts(newPosts);
    resetPostAction();
  }

  function resetPostAction() {
    setPostAction(initPostAction);
    setShowModalPost(false);
    setTextPost("");
  }

  function handleDeletePost() {
    setPosts((prev) => {
      const newPosts = prev.filter((post) => post.id !== postAction?.post.id);
      return newPosts;
    });
    resetPostAction();
  }
  return (
    <>
      <div className="wall-wrapper">
        <div className="wall-header">
          cover photo
          <img src="" alt="" />
        </div>
        <div className="wall-content">
          <div className="doctor-info">
            <img src={defaultProfileImg} alt="" />
            <div className="description">
              <div className="description-item">
                <div className="description-item-title">Discription :</div>
                <div className="description-item-value">
                  Dr. ahmed is a highly experienced consultant in internal
                  medicine, specializing in the diagnosis and treatment of a
                  wide range of medical conditions. He holds a [Degree] from
                  [University Name], with advanced training in [Specialized
                  Field or Fellowship, if applicable
                </div>
              </div>
              <div className="description-item">
                <div className="description-item-title">Phone Number :</div>
                <div className="description-item-value">+9687678567576</div>
              </div>
              <div className="description-item">
                <div className="description-item-title">Clinic Address :</div>
                <div className="description-item-value">mansoura</div>
              </div>
            </div>
          </div>
          <div className="doctor-social">
            <section className="d-flex align-items-center justify-content-between ">
              <h3>Recents</h3>
              <button
                className="btn btn-outline-secondary py-2 px-3 fw-light"
                onClick={() => setShowModalPost(true)}
              >
                Create New Post
              </button>
            </section>
            <div
              className={`modal ${
                (showModalPost || postAction.action === "edit") && "show"
              }`}
            >
              <div className="post-card">
                <Editor
                  value={textPost}
                  onTextChange={(e) => setTextPost(e.htmlValue as string)}
                  style={{ height: "450px" }}
                  dir="auto"
                />
                <div className="d-flex gap-2 align-items-center justify-content-end">
                  <button
                    className="btn btn-outline-primary btn-post"
                    onClick={resetPostAction}
                  >
                    cancel
                  </button>
                  <button
                    className="btn btn-primary btn-post"
                    onClick={
                      postAction.action === "edit"
                        ? handleEditPost
                        : handleAddPost
                    }
                  >
                    {postAction.action === "edit" ? "edit" : "Post"}
                  </button>
                </div>
              </div>
            </div>

            <div className="old-posts">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  setPostAction={setPostAction}
                  setTextPost={setTextPost}
                />
              ))}
            </div>
          </div>
        </div>
        <CommentsPopup
          resetPostAction={resetPostAction}
          show={postAction.action === "comments"}
        />
      </div>
      <ModalWarningDelete
        show={postAction?.action === "delete"}
        handleClose={resetPostAction}
        handleOk={handleDeletePost}
      />
    </>
  );
};

export default Wall;
