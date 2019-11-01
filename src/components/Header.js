import React from "react";
function Header() {
  return (
    <div>
      <header
        style={{
          backgroundColor: "Purple",
          justifyContent: "center",
          top: 0,
          width: "100%",
          textAlign: "center"
        }}
      >
        <img
          style={{
            height: "20%",
            width: "20%"
          }}
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
        />
          <p
            style={{
              display: "inline",
              color: "white",
              fontSize: "7vw",
              fontWeight: 600
            }}
          >
            Meme Generator
          </p>
      </header>
    </div>
  );
}

export default Header;
