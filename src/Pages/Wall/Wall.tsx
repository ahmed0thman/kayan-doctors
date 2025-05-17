import React, { useState } from "react";
import defaultProfileImg from "../../assets/images/gallery/doctor.png";

import { Editor } from "primereact/editor";

type post = {
  id: string;
  date: Date;
  postHTMLContent: string;
};

const Wall = () => {
  const [showModalPost, setShowModalPost] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
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

  function handleAddPost() {
    const newPost = {
      id: Math.random().toString(36).substring(2, 15),
      date: new Date(),
      postHTMLContent: text,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setText("");
    setShowModalPost(false);
  }
  return (
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
                medicine, specializing in the diagnosis and treatment of a wide
                range of medical conditions. He holds a [Degree] from
                [University Name], with advanced training in [Specialized Field
                or Fellowship, if applicable
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
        <section className="doctor-social">
          <div className="d-flex align-items-center justify-content-between ">
            <h3>Recents</h3>
            <button
              className="btn btn-outline-secondary py-2 px-3 fw-light"
              onClick={() => setShowModalPost(true)}
            >
              Create New Post
            </button>
          </div>
          <div className={`modal ${showModalPost && "show"}`}>
            <div className="post-card">
              <Editor
                value={text}
                onTextChange={(e) => setText(e.htmlValue as string)}
                style={{ height: "450px" }}
              />
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <button
                  className="btn btn-outline-primary btn-post"
                  onClick={() => setShowModalPost(false)}
                >
                  cancel
                </button>
                <button
                  className="btn btn-primary btn-post"
                  onClick={handleAddPost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          <div className="old-posts">
            {posts.map((post) => (
              <div key={post.id} className="old-post">
                <div className="old-post-header">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  {post.date.toLocaleDateString()}{" "}
                  {post.date
                    .toLocaleTimeString()
                    .split(":")
                    .slice(0, 2)
                    .join(":")}{" "}
                  {post.date.toLocaleTimeString().split(" ")[1]}
                </div>
                <div
                  className="old-post-content"
                  dir="auto"
                  dangerouslySetInnerHTML={{ __html: post.postHTMLContent }}
                ></div>
                <div className="post-reactions">
                  <div className="d-flex align-items-center gap-1">
                    <span className="fw-light">20</span>
                    <i
                      className="fa fa-heart text-danger"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <span className="fw-light">20</span>
                    <i
                      className="fa fa-comment text-info"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wall;
