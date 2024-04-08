import Bedroom from "../../assets/icons/Bedroom";
import Home from "../../assets/icons/Home";
import Person from "../../assets/icons/Person";
import Star from "../../assets/icons/Star";
import Villa1 from "../../assets/villa1.png";
import Villa2 from "../../assets/villa2.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./style.css";
import Logo from "../../assets/icons/Logo";
const ListingPage = () => {
  const downloadPdf = () => {
    const capture = document.querySelector(".listing-page-wrapper");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF();
      doc.beginFormObject(0, 0, 1920, 1080);
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("demo.pdf");
    });
  };
  return (
    <>
      <div className="listing-page-wrapper">
        {/* <div className="listing-page-gradient"></div> */}
        <div
          style={{
            maxWidth: "100vw",
            margin: "0 auto",
            width: "100%",
            height: "100%",
          }}
          className="listing-page-container"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              zIndex:"1",
              padding:"0 40px"
            }}
            className="listing-page-content"
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                paddingTop: "30px",
              }}
              className="listing-page-top"
            >
              <div className="listing-page-top-left">
                <h1>Sundowner</h1>
                <p>Kajrat</p>
              </div>
              <div className="listing-page-top-right">
               <Logo/>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent:"space-between",
                gap: "5px",
                paddingBottom: "42px",
              }}
              className="listing-page-bottom"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
                className="listing-page-bottom-right"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="listing-page-bottom-right-text1"
                >
                  <Star />
                  <p>4.5 (146)</p>
                  <p>| Starting ₹43,056</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                  className="listing-page-bottom-right-text2"
                >
                  <p
                    style={{
                      border: "1px solid white",
                      borderRadius: "6px",
                      padding: "10px",
                    }}
                  >
                    <Home /> Entire Villa
                  </p>
                  <p
                    style={{
                      border: "1px solid white",
                      borderRadius: "6px",
                      padding: "10px",
                    }}
                  >
                    <Person /> 6-12 Guests
                  </p>
                  <p
                    style={{
                      border: "1px solid white",
                      borderRadius: "6px",
                      padding: "10px",
                    }}
                  >
                    <Bedroom /> 8 Bedrooms
                  </p>
                </div>
                <div className="listing-page-bottom-right-text3">
                  <p>
                    Crowned as Party-Perfect Homestay Of The Year, this
                    8-bedroom villa in Karjat features a grand pool, outdoor
                    bar, gazebo, and lush surroundings. Host memorable
                    gatherings or corporate offsites amidst unbeatable views of
                    Morbe Dam, complete with a rain dance setup!
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
                className="listing-page-bottom-left"
              >
                <img src={Villa1} alt="" />
                <img src={Villa2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              downloadPdf();
            }}
            style={{
              margin: "10px",
              color: "black",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
