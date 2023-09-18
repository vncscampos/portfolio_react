import imgEditor from "../../assets/text-editor.png";

const Home = () => {
  return (
    <>
      <button
        onClick={() => {}}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".1rem"
        }}
      >
        <img
          width="80"
          height="80"
          className="icon"
          src={imgEditor}
          alt="text-editor"
        />
        <p>welcome.txt</p>
      </button>
    </>
  );
};
export default Home;
