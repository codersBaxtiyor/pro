import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
const Lessons = ({
  searchTitle,
  setSearchTitle,
  setsearchParams,
  searchParams,
  handleSubmit,
  startsForm,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  startsForm = latest ? 3 : 1;

  useEffect(() => {
    setData([]);
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://63fe8692571200b7b7cc0611.mockapi.io/video/"
      );
      setData(response.data);
      setLoading(false);
    };
    loadPost();
  }, []);
  if (!data) return null;
  return (
    <div>
      <>
        <form autoComplete="off" onSubmit={handleSubmit}></form>
        <div className="home-page">
          <div className=" container">
            <div className="block">
              <div className="about-platform">
                <div className="title">
                  <h2>Students - Dasturlash Kurslari</h2>
                </div>
                <div className="about-description">
                  <div className="description">
                    Dasturlashga oid to'liq va amaliy kurslarga boy platformaga
                    xush kelibsiz. Bizda barcha pullik kurslarni bepulga
                    o'rganishingiz mumkin.
                  </div>
                </div>
                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderBottom: "1px solid rgb(80,80,80)",
                    padding: "5px",
                  }}
                >
                  bu sahifada siz video darsliklarni ko'rishingiz mumkin
                </h3>
                <div className="video-card-block">
                  {loading ? (
                    <h4>loding ....</h4>
                  ) : (
                    data
                      .filter((value) => {
                        if (searchTitle === "") {
                          return true;
                        } else if (
                          value.title.toLowerCase().includes(postQuery)
                        ) {
                          return value;
                        }
                      })
                      .map((item, index) => (
                        <div
                          className="videos"
                          key={item.id}
                          to={`/video/${item.id}`}
                        >
                          <div className="video">
                            <video src={item.video}></video>
                          </div>
                          <div className="video-title">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="description">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lessons;
